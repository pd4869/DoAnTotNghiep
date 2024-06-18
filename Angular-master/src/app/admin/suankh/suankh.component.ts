import { Component,OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suankh',
  templateUrl: './suankh.component.html',
  styleUrls: ['./suankh.component.css',
    "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",
  
  ]
})
export class SuankhComponent implements OnInit{
  
  constructor(private api : HomeService, private router: Router, private route: ActivatedRoute) {}
  subjects: any;
  selectedItem: any | null = null;

  category: any = {
    id: 0,
    TenKhachHang: '',
    DiaChi : '',
    SoDienThoai:'',
    Email :''

  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.api.getByIDKhachhang(id).subscribe((result: any) => {
        this.category = result[0];
        console.log(this.category);
      });
    });
    
  }
  editItem(id: number, TenKhachHang: string, DiaChi: string,SoDienThoai: string,Email: string): void {
    this.router.navigate(['/admin/Suakh', id]);
    this.api.editKhachhang(id, TenKhachHang,DiaChi,SoDienThoai,Email).subscribe(
      result => {
        console.log('Item edited successfully', result);
        // You can handle the result as needed
        this.refreshList();
        this.router.navigate(['/admin/khachhang']);
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

