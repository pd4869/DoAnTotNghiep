import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Model/service/home.service';
import { Router } from '@angular/router';
import { CartService } from '../Model/service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  providers: [CartService],
  
  styleUrls: [

    //  "../../../assets/img/core-img/favicon.ico",
    // "../../../assets/user/css/core-style.css",
    // "../../../assets/user/css/style.css",
    // "../../../assets/user/css/responsive.css", 
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

export class IndexComponent implements OnInit {
  constructor(private api : HomeService, private router: Router,private cartService: CartService,private currencyPipe: CurrencyPipe,private decimalPipe: DecimalPipe) {}
  subjects: any;
  selectedItem: any | null = null;

ngOnInit(): void {
      
  this.api.getList().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
   
  })
}
addToCart(item: any): void {
  console.log('Adding to cart:', item);
  this.cartService.addToCart(item);
 
}


formatCurrency(price: number | null): string {
  if (price === null) {
    return 'N/A'; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
  }


  const multipliedPrice = price ;

  // Định dạng giá trị nhân với 1000
  const formattedPrice = this.decimalPipe.transform(multipliedPrice, '1.0-0');

  return formattedPrice ? formattedPrice.replace(/,/g, '.') : '';
}
// redirectToDetailPage(item: any): void {
  
//   this.router.navigate(['/users/chitiet'], { state: { product: item } });
  
// }
redirectToDetailPage(item: any): void {
  // Navigate to the detail page with the product ID
  this.router.navigate(['/users/chitiet', item.id]);
}




}
