import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-suangdung',
  templateUrl: './suangdung.component.html',
  styleUrls: ['./suangdung.component.css',
    "../../../assets/vendor/fontawesome-free/css/all.min.css",
    "../../../assets/css/sb-admin-2.min.css",
    "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
   
  ]
})
export class SuangdungComponent implements OnInit{
  constructor(private http: HttpClient,private api : HomeService, private router: Router, private route: ActivatedRoute) {}
  subjects: any;
  selectedItem: any | null = null;
  category: any = {
    id:0,
   
    HoTen:'',
    NgaySinh:'', 
    GioiTinh:'', 
    Anh:'',
    DiaChi:'', 
    Email:'', 
    DienThoai:'', 
    TrangThai:'', 
    
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.api.getItemByIDNgdung(id).subscribe((result: any) => {
        this.category = result[0];
        console.log(this.category);
      });
  
      this.api.getList().subscribe(res => {
        this.subjects = res;
        console.log(this.subjects);
      });
    });
}
editNgdung(id: number, 
  HoTen: string, 
  NgaySinh: Date,
  GioiTinh: string,
  Anh:string,
  DiaChi: string, 
  Email: string,    
  DienThoai:string, 
  TrangThai: string, 
    
    
): void {
  this.router.navigate(['admin/suanguoidung', id]);
  this.api.editNgdung(id, HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email,DienThoai, TrangThai).subscribe(
    result => {
      console.log('Item edited successfully', result);
     
      this.refreshList();
      this.router.navigate(['admin/nguoidung']);
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
