import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addatasp',
  templateUrl: './addatasp.component.html',
  styleUrls: ['./addatasp.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
  ],
  providers: [DatePipe]

})
export class AddataspComponent implements OnInit{
  constructor(private http: HttpClient,private api : HomeService, private router: Router,private fb: FormBuilder,private datePipe: DatePipe) {
    this.myForm = this.fb.group({
    content: ['']
  });}
  // subjects: any;
  selectedFile: any;
  selectedItem: any | null = null;
  subjects: any[] = [];
  subjects1: any[] = [];

  selectedMaloai: any;
  selectedMaNXB: any;
  MoTa :any;
  public Editor = ClassicEditor;
  public submittedContent: string | null = null;
  public myForm: FormGroup;
  nameImg!: string;
  itemData: any = {};
  Anh: string = '';
  

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
  onSubmit() {
    this.submittedContent = this.myForm.get('content')?.value;
    console.log(this.submittedContent);
  }
  
  addNewItem(itemData: any): void {
    console.log(this.nameImg);
    itemData.Anh = this.nameImg;
    const formattedDate = this.datePipe.transform(itemData.NgayTao, 'yyyy-MM-dd');
    itemData.NgayTao = formattedDate;
    this.api.addItemsp(itemData).subscribe(
      result => {
        console.log('Item added successfully', result);
        // You can handle the result as needed
        
        this.router.navigate(['/admin/sanpham']);
        this.refreshList();
      }
    );
  }

  onMaloaiChange(event: any): void {
    this.selectedMaloai = event.target.value;
  }
  onMaNXBChange(event: any): void {
    this.selectedMaNXB = event.target.value;
  }

  /* onFileSelected(event: any): void {
    // Xử lý sự kiện khi người dùng chọn một file
    this.selectedFile = event.target.files[0];
  }
   */
  /* uploadFile(): void {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
  
    this.api.upload(this.selectedFile).subscribe(
      (response: any) => {
        console.log('File uploaded successfully:', response);
        // Xử lý phản hồi từ máy chủ
      }
    );
  } */

    // uploadFile(file: File): void {
    //   const formData: FormData = new FormData();
    //   formData.append('Anh', file, file.name);
    
    //   this.http.post<any>('http://localhost:3000/upload', formData)
    //     .subscribe(
    //       (response) => {
    //         this.nameImg = response.filename;
    //         console.log('File uploaded successfully', response.filename);
            
    //       },
    //       (error) => {
    //         console.error('Error uploading file', error);
            
    //       }
    //     );
    // }
  
    onFileSelected(event: any): void {
      const file: File = event.target.files[0];
      if (file) {
        this.nameImg = file.name;
        console.log('Selected file name:', this.nameImg);
      }
    }
  
    saveFileName() {
      const formData = { Anh: this.Anh };
      this.http.post('http://localhost:3000/loaisach/saveFileName', formData).subscribe(
        response => {
          console.log('File name saved successfully:', response);
        },
        error => {
          console.error('Error saving file name:', error);
        }
      );
    }
  
  
    // onFileSelected(event: any): void {
    //   const file: File = event.target.files[0];
    //   this.uploadFile(file);
    // } 
    ngOnInit(): void {
      this.api.getList().subscribe(res => {
        this.subjects = res;
        console.log(this.subjects);
      });
      this.api.getListnhaxuatban().subscribe(res => {
        this.subjects1 = res;
        console.log(this.subjects1);
      });
      
    }
  
  private refreshList(): void {
    this.api.getListsp().subscribe(list => {
      this.subjects = list;
      console.log(this.subjects);
    });
  }
}
