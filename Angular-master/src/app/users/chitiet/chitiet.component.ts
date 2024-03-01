import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router  } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { HomeService } from '../service/home.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  // styleUrls: ['./chitiet.component.css']
  styleUrls: [
  //  "../../../assets/user/css/core-style.css",
    /* "../../../assets/user/css/style.css",
    "../../../assets/user/css/responsive.css" */ 
    "../../../assets/nguoidung/css/bootstrap.min.css" ,
    "../../../assets/nguoidung/css/font-awesome.min.css" ,
    "../../../assets/nguoidung/css/themify-icons.css" ,
    "../../../assets/nguoidung/css/elegant-icons.css" ,
    "../../../assets/nguoidung/css/owl.carousel.min.css" ,
    "../../../assets/nguoidung/css/nice-select.css" ,
    "../../../assets/nguoidung/css/jquery-ui.min.css" ,
    "../../../assets/nguoidung/css/slicknav.min.css" ,
    "../../../assets/nguoidung/css/style.css" ,
 
  ]
})
export class ChitietComponent implements OnInit  {
  product: any;
  productId: any;
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private cartService: CartService,private decimalPipe: DecimalPipe,private route: ActivatedRoute, private homeService: HomeService) {
    //Lấy thông tin sản phẩm từ trạng thái router
    // const navigation = this.router.getCurrentNavigation();
    
    // this.product = navigation?.extras.state?.['product'];
  }
  addToCart(item: any): void {
    console.log('Adding to cart:', item);
    this.cartService.addToCart(item);
   
  }
  ngOnInit(): void {
    // Lấy id từ URL
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
console.log(this.productId)
      // Gọi service để lấy chi tiết sản phẩm
      this.homeService.getItemByIdsp(this.productId).subscribe(
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

  formatCurrency(price: number | null): string {
    if (price === null) {
      return 'N/A'; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
    }
  
    // Nhân price với 1000
    const multipliedPrice = price;
  
    // Định dạng giá trị nhân với 1000
    const formattedPrice = this.decimalPipe.transform(multipliedPrice, '1.0-0');
  
    return formattedPrice ? formattedPrice.replace(/,/g, '.') : '';
  }
  
  
}
