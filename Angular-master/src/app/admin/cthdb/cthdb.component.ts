import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cthdb',
  templateUrl: './cthdb.component.html',
  styleUrls: ['./cthdb.component.css',
    "../../../assets/vendor/fontawesome-free/css/all.min.css",
    "../../../assets/css/sb-admin-2.min.css",
    "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",]
})
export class CthdbComponent implements OnInit{
  product: any;
  productId: any;
  p: number = 1;
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private route: ActivatedRoute, private homeService: HomeService) {}
  ngOnInit(): void {
        
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
console.log(this.productId)
      // Gọi service để lấy chi tiết sản phẩm
      this.homeService.getItemByIdctdh(this.productId).subscribe(
        (data) => {
          this.product = data;
          console.log(this.product)
          // Có thể thực hiện các hành động khác tại đây nếu cần
        },
        (error) => {
          console.error('Lỗi khi lấy thông tin sản phẩm:', error);
        }
      );
    });
  }
  }

  

