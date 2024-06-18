import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlkhachhang',
  templateUrl: './qlkhachhang.component.html',
  styleUrls: ['./qlkhachhang.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlkhachhangComponent {
  constructor(private api : HomeService, private router: Router) {}
    
  subjects: any;
  selectedItem: any | null = null;
ngOnInit(): void {
      
  this.api.getListKhachhang().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
}



removeKhachhang(id: number): void {
  this.api.removeKhachhang(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}



editKhachhang(id: number, 
  TenKhachHang: any, 
  DiaChi: any, 
  SoDienThoai: any, 
  Email: any, 
   ): void {
  this.router.navigate(['/admin/Suakh', id]);
  this.api.editKhachhang(id, TenKhachHang, DiaChi, SoDienThoai, Email).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}


getOneKhachhang(id: number): void {
  this.api.getByIDKhachhang(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addKhachhang(itemData: any): void {
  const newItem = {
    TenKhachHang: itemData.TenKhachHang || '',
    DiaChi: itemData.DiaChi || '',
    SoDienThoai: itemData.SoDienThoai || '',
    Email: itemData.Email || '',
    
    
    
  };

  this.api.addKhachhang(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/addKhachhang']);
      // Cập nhật dEmail sách nếu cần thiết
      this.refreshList();
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
