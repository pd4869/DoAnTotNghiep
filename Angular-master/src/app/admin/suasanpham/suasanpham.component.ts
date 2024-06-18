import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-suasanpham',
  templateUrl: './suasanpham.component.html',
  styleUrls: ['./suasanpham.component.css',
    "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
 ]
})
export class SuasanphamComponent implements OnInit {
  constructor(private http: HttpClient,private api : HomeService, private router: Router, private route: ActivatedRoute) {}
  subjects: any;
  selectedFile: any;

  selectedItem: any | null = null;
  nameImg!: string;
  MoTa :any;
  public submittedContent: string | null = null;
  subjects1: any[] = [];
  selectedMaNXB: any;
  itemData: any = {};

  Anh: string = '';

  public Editor = ClassicEditor;
  public config = {
    toolbar: {
      shouldNotGroupWhenFull: true,
      items: [
        'heading', '|',
        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
        'undo', 'redo'
      ]
    },
    height: 300 // Chiều cao của vùng nhập liệu
  };
  selectedMaloai: any;
  category: any = {
    id:0,
    Maloai: 0,
    TenSach:'',
    MoTa:'', 
    Anh:'', 
    MaNXB:0, 
    TacGia:'',
    NgayTao:'', 
    SoLuong:0, 
    Gia:0, 
    GiaCu:0, 
    sotrang:0, 
    kichthuoc:''
  };

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    
    this.api.getItemByIdsp(id).subscribe((result: any) => {
      this.category = result[0];
      console.log(this.category);
    });

    this.api.getList().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    });
    this.api.getListnhaxuatban().subscribe(res => {
      this.subjects1 = res;
      console.log(this.subjects1);
    });
    
  });
  
}
onMaloaiChange(event: any): void {
  this.selectedMaloai = event.target.value;
}
onMaNXBChange(event: any): void {
  this.selectedMaNXB = event.target.value;
}
/* uploadFile(file: File): void {
  const formData: FormData = new FormData();
  formData.append('Anh', file, file.name);

  this.http.post<any>('http://localhost:3000/upload', formData)
    .subscribe(
      (response) => {
        this.nameImg = response.filename;
        console.log('File uploaded successfully', response.filename);
        
      },
      (error) => {
        console.error('Error uploading file', error);
        
      }
    );
} */
// removeItem(id: number): void {
//   this.api.removeItem(id).subscribe(res => {
//     console.log('Item removed successfully', res);
//     this.refreshList();
    
//   }) 
// }
editItemsp(id: number, 
  Maloai: number, 
  TenSach: string, 
  MoTa: string, 
  Anh: string, 
  MaNXB: number, 
  TacGia: string,    
  NgayTao:Date, 
SoLuong: number, 
Gia: number, 
GiaCu: number, 
sotrang: number, 
kichthuoc: string): void {
  this.router.navigate(['admin/editdatasp', id]);
  this.api.editItemsp(id, Maloai, TenSach, MoTa, Anh, MaNXB, TacGia,NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc).subscribe(
    result => {
      console.log('Item edited successfully', result);
     
      this.refreshList();
      this.router.navigate(['admin/sanpham']);
    },
   
  );
}

/* onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (file) {
    this.nameImg = file.name;
    console.log('Selected file name:', this.nameImg);
  }
} */
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
        this.nameImg = file.name;
        console.log('Selected file name:', this.nameImg);
    }
}

saveFileName() {
  const formData = { Anh: this.nameImg };
  this.http.post('http://localhost:3000/loaisach/saveFileName', formData).subscribe(
    response => {
      console.log('File name saved successfully:', response);
    },
    error => {
      console.error('Error saving file name:', error);
    }
  );
}





private refreshList(): void {
  this.api.getList().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
