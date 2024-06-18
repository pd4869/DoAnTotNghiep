import { Component , OnInit} from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addkhachhang',
  templateUrl: './addkhachhang.component.html',
  styleUrls: ['./addkhachhang.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",]
})
export class AddkhachhangComponent implements OnInit{
  constructor(private api : HomeService, private router: Router) {}
  // subjects: any;
  selectedFile: any;
  selectedItem: any | null = null;
  subjects: any[] = [];

  addNewItem(itemData: any): void {
    
    this.api.addItemkhachhang(itemData).subscribe(
      result => {
        console.log('Item added successfully', result);
        // You can handle the result as needed
        this.refreshList();
        this.router.navigate(['/admin/khachhang']);
      }
    );
  }
  ngOnInit(): void {
    this.api.getList().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    });
  }
 
  

  onFileSelected(event: any): void {
    // Xử lý sự kiện khi người dùng chọn một file
    this.selectedFile = event.target.files[0];
  }
  
  uploadFile(): void {
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
  }


  
  private refreshList(): void {
    this.api.getListKhachhang().subscribe(list => {
      this.subjects = list;
      console.log(this.subjects);
    });
  }
}


