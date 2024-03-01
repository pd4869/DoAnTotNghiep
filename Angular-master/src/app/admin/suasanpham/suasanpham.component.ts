import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suasanpham',
  templateUrl: './suasanpham.component.html',
  styleUrls: ['./suasanpham.component.css']
})
export class SuasanphamComponent implements OnInit {
  constructor(private api : HomeService, private router: Router, private route: ActivatedRoute) {}
  subjects: any;
  selectedItem: any | null = null;
  
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
  });
  
}
onMaloaiChange(event: any): void {
  this.selectedMaloai = event.target.value;
}


// removeItem(id: number): void {
//   this.api.removeItem(id).subscribe(res => {
//     console.log('Item removed successfully', res);
//     this.refreshList();
    
//   }) 
// }
editItemsp(id: number, Maloai: any, TenSach: any, MoTa: any, Anh: any, MaNXB: any, TacGia: any,    NgayTao:any, 
SoLuong: any, Gia: any, GiaCu: any, sotrang: any, kichthuoc: any): void {
  this.router.navigate(['/editdatasp', id]);
  this.api.editItemsp(id, Maloai, TenSach, MoTa, Anh, MaNXB, TacGia,NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc).subscribe(
    result => {
      console.log('Item edited successfully', result);
     
      this.refreshList();
      this.router.navigate(['admin/sanpham']);
    },
   
  );
}






private refreshList(): void {
  this.api.getList().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
}
}
