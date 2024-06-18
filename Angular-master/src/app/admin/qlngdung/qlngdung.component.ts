import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qlngdung',
  templateUrl: './qlngdung.component.html',
  styleUrls: ['./qlngdung.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlngdungComponent  {
  constructor(private api : HomeService, private router: Router) {}
    
    subjects: any;
    selectedItem: any | null = null;
  ngOnInit(): void {
        
    this.api.getListngdung().subscribe(res => {
      this.subjects = res;
      console.log(this.subjects);
    })
  }
  
  
  
  removeNgdung(id: number): void {
    this.api.removeNgdung(id).subscribe(res => {
      console.log('Item removed successfully', res);
      this.refreshList();
    
    }) 
  }
  
  
  
  editNgdung(id: number, 
    HoTen: any, 
    NgaySinh: any, 
    GioiTinh: any, 
    Anh: any, 
    DiaChi: any, 
    Email: any, 
    DienThoai: any, 
    TrangThai: any, ): void {
    this.router.navigate(['/admin/suanguoidung', id]);
    this.api.editNgdung(id, HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email, DienThoai, TrangThai).subscribe(
      result => {
        console.log('Item edited successfully', result);
        // You can handle the result as needed
        this.refreshList();
      },
      
    );
  }
  
  
  getOneNgdung(id: number): void {
    this.api.getItemByIDNgdung(id).subscribe(
      result => {
        console.log('Item details retrieved successfully', result);
        this.selectedItem = result;
      },
      error => {
        console.error('Error retrieving item details', error);
      }
    );
  }
  addNgdung(itemData: any): void {
    const newItem = {
      HoTen: itemData.HoTen || 0,
      NgaySinh: itemData.NgaySinh || '',
      GioiTinh: itemData.GioiTinh || '',
      Anh: itemData.Anh || '',
      DiaChi: itemData.DiaChi || '',
      Email: itemData.Email || '',
      DienThoai: itemData.DienThoai || '',
      TrangThai: itemData.TrangThai || '',
      
      
    };
  
    this.api.addNgdung(newItem).subscribe(
      result => {
        console.log('Item added successfully', result);
        // Sau khi thêm thành công, chuyển hướng đến trang adddata
        this.router.navigate(['/admin/addngdung']);
        // Cập nhật danh sách nếu cần thiết
        this.refreshList();
      }
    );
  }
  
  
  private refreshList(): void {
    this.api.getListNgdung().subscribe(list => {
      this.subjects = list;
      console.log(this.subjects);
    });
  }
}
