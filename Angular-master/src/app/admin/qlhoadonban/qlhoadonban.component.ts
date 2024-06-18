import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlhoadonban',
  templateUrl: './qlhoadonban.component.html',
  styleUrls: ['./qlhoadonban.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlhoadonbanComponent implements OnInit {
  constructor(private api : HomeService, private router: Router) {}
  p : number = 1;
  subjects: any;
  selectedItem: any | null = null;
ngOnInit(): void {
      
  this.api.getListhoadonban().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
}



removehoadonban(id: number): void {
  this.api.removehoadonban(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}

/* viewcthdb(id:number):void{
  this.router.navigate(['/admin/cthdb', id]);
}
 */
edithoadonban(id: number, 
  MaKhachHang: any, 
  Hoten: any, 
  sdt: any, 
  Email: any, 
  Diachi: any, 
  Ngaydat: any, 
  Tong:any,
  TrangThai: any, ): void {
  this.router.navigate(['/admin/edithoadonban', id]);
  this.api.edithoadonban(id, MaKhachHang, Hoten, sdt, Email, Diachi, Ngaydat,Tong, TrangThai).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}
suatrangthai(id: number, 
  
  TrangThai: any, ): void {
  this.router.navigate(['/admin/suatrangthai', id]);
  this.api.suatrangthai(id, TrangThai).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();

    },
    
  );
}


getOnehoadonban(id: number): void {
  this.api.getByIDhoadonban(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addhoadonban(itemData: any): void {
  const newItem = {
    MaKhachHang: itemData.MaKhachHang || 0,
    Hoten: itemData.Hoten || '',
    sdt: itemData.sdt || '',
    Email: itemData.Email || '',
    Diachi: itemData.Diachi || '',
    Ngaydat: itemData.Ngaydat || '',
    Tong: itemData.Tong || 0,
    TrangThai: itemData.TrangThai || '',
    
    
  };

  this.api.addhoadonban(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/addhoadonban']);
      // Cập nhật dEmail sách nếu cần thiết
      this.refreshList();
    }
  );
}
redirectToDetailPage(item: any): void {
  // Navigate to the detail page with the product ID
  this.router.navigate(['/admin/cthdb/', item.id]);
}
redirectToInHoaDon(item: any): void {
  // Navigate to the detail page with the product ID
  this.router.navigate(['/admin/hoadonban']);
}
private refreshList(): void {
  this.api.getListhoadonban().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
