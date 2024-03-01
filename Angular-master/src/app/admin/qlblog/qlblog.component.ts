import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlblog',
  templateUrl: './qlblog.component.html',
  styleUrls: ['./qlblog.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlblogComponent {
  constructor(private api : HomeService, private router: Router) {}
  
  subjects: any;
  selectedItem: any | null = null;

  ngOnInit(): void {
        
    this.api.getListBlog().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    })
  }
removeBlog(id: number): void {
  this.api.removeBlog(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}



editBlog(id: number, 
  TenBlog: any, 
  Anh: any, 
  Ngaynhap: any, 
 
  MaNguoiDung: any, 
  Mota: any, 
  ): void {
  this.router.navigate(['/admin/editblog', id]);
  this.api.editBlog(id, TenBlog, Anh, Ngaynhap,MaNguoiDung, Mota).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}


getOneBlog(id: number): void {
  this.api.getItemByIdBlog(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addBlog(itemData: any): void {
  const newItem = {
    TenBlog: itemData.TenBlog || 0,
    Anh: itemData.Anh || '',
    Ngaynhap: itemData.Ngaynhap || '',
    MaNguoiDung: itemData.MaNguoiDung || 0,
    Mota: itemData.Mota || '',
    
  };

  this.api.addBlog(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/addBlog']);
      // Cập nhật danh sách nếu cần thiết
      this.refreshList();
    }
  );
}


private refreshList(): void {
  this.api.getListBlog().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
