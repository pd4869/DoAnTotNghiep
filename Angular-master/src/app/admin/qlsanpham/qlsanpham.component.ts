import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-qlsanpham',
  templateUrl: './qlsanpham.component.html',
  styleUrls: ['./qlsanpham.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlsanphamComponent {
  decimalPipe: any;
  constructor(private api : HomeService, private router: Router) {}
  p: number =1;
  subjects: any;
  selectedItem: any | null = null;
  selectedMaloai: any;
ngOnInit(): void {
      
  this.api.getListsp().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
}

formatCurrency(price: number | null): string {
  if (price === null) {
    return 'N/A'; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
  }

  const multipliedPrice = price ;

  const formattedPrice = this.decimalPipe.transform(multipliedPrice, '1.0-0');

  return formattedPrice ? formattedPrice.replace(/,/g, '.') : '';
}

removeItemsp(id: number): void {
  this.api.removeItemsp(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}



editItemsp(id: number, 
  Maloai: any, 
  TenSach: any, 
  MoTa: any, 
  Anh: any, 
  MaNXB: any, 
  TacGia: any, 
  NgayTao:any,
  SoLuong: any, 
  Gia: any, 
  GiaCu: any, 
  sotrang: any, 
  kichthuoc: any): void {
  this.router.navigate(['/admin/editdatasp', id]);
  this.api.editItemsp(id, Maloai, TenSach, MoTa, Anh, MaNXB, TacGia,NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}


getOneItemsp(id: number): void {
  this.api.getItemByIdsp(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addNewItem(itemData: any): void {
  const newItem = {
    Maloai: this.selectedMaloai || 0,
    TenSach: itemData.TenSach || '',
    MoTa: itemData.MoTa || '',
    Anh: itemData.Anh || '',
    MaNXB: itemData.MaNXB || 0,
    TacGia: itemData.TacGia || '',
    SoLuong: itemData.SoLuong || 0,
    Gia: itemData.Gia || 0,
    GiaCu: itemData.GiaCu || 0,
    sotrang: itemData.sotrang || 0,
    kichthuoc: itemData.kichthuoc || '',
    
  };

  this.api.addItemsp(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/adddata']);
      // Cập nhật danh sách nếu cần thiết
      this.refreshList();
    }
  );
}


private refreshList(): void {
  this.api.getListsp().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
