import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qlnhaxuatban',
  templateUrl: './qlnhaxuatban.component.html',
  styleUrls: ['./qlnhaxuatban.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
]
})
export class QlnhaxuatbanComponent {
  constructor(private api : HomeService, private router: Router) {}
    
  subjects: any;
  selectedItem: any | null = null;
ngOnInit(): void {
      
  this.api.getListnhaxuatban().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
}



removenhaxuatban(id: number): void {
  this.api.removenhaxuatban(id).subscribe(res => {
    console.log('Item removed successfully', res);
    this.refreshList();
  
  }) 
}



editnhaxuatban(id: number, 
  TenNXB: any, 
  DiaChi: any, 
  SDT: any, 
  email: any, 
   ): void {
  this.router.navigate(['/admin/editnhaxuatban', id]);
  this.api.editnhaxuatban(id, TenNXB, DiaChi, SDT, email).subscribe(
    result => {
      console.log('Item edited successfully', result);
      // You can handle the result as needed
      this.refreshList();
    },
    
  );
}


getOnenhaxuatban(id: number): void {
  this.api.getByIDnhaxuatban(id).subscribe(
    result => {
      console.log('Item details retrieved successfully', result);
      this.selectedItem = result;
    },
    error => {
      console.error('Error retrieving item details', error);
    }
  );
}
addnhaxuatban(itemData: any): void {
  const newItem = {
    TenNXB: itemData.TenNXB || '',
    DiaChi: itemData.DiaChi || '',
    SDT: itemData.SDT || '',
    email: itemData.email || '',
    
    
    
  };

  this.api.addnhaxuatban(newItem).subscribe(
    result => {
      console.log('Item added successfully', result);
      // Sau khi thêm thành công, chuyển hướng đến trang adddata
      this.router.navigate(['/admin/addnhaxuatban']);
      // Cập nhật demail sách nếu cần thiết
      this.refreshList();
    }
  );
}


private refreshList(): void {
  this.api.getListnhaxuatban().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
