import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qlhoadonnhap',
  templateUrl: './qlhoadonnhap.component.html',
  styleUrls: ['./qlhoadonnhap.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css"]
})
export class QlhoadonnhapComponent {
  constructor(private api : HomeService, private router: Router) {}
  p : number = 1;

  subjects: any;
  selectedItem: any | null = null;
ngOnInit(): void {
      
  this.api.getListhoadonnhap().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
}



removehoadonnhap(id: number): void {
  this.api.removehoadonnhap(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}



edithoadonnhap(id: number, 
  NgayNhap: any, 
  MaNguoiDung: any, 
  MaNXB: any, 
  tong: any, 

 ): void {
  this.router.navigate(['/admin/edithoadonnhap', id]);
  this.api.edithoadonnhap(id, NgayNhap, MaNguoiDung, MaNXB,tong ).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}


getOnehoadonnhap(id: number): void {
  this.api.getByIDhoadonnhap(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addhoadonnhap(itemData: any): void {
  const newItem = {
    NgayNhap: itemData.NgayNhap || '',
    MaNguoiDung: itemData.MaNguoiDung || '',
    MaNXB: itemData.MaNXB || '',
    
    
    
  };

  this.api.addhoadonnhap(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/addhoadonnhap']);
      // Cập nhật dEmail sách nếu cần thiết
      this.refreshList();
    }
  );
}
redirectToDetailPage(item: any): void {
  // Navigate to the detail page with the product ID
  this.router.navigate(['/admin/cthdn/', item.id]);
}

private refreshList(): void {
  this.api.getListhoadonnhap().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
