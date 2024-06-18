import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Model/service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Model/service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css',
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
export class ShopComponent implements OnInit  {
  constructor(private api : HomeService, private router: Router,private cartService: CartService,private currencyPipe: CurrencyPipe,private decimalPipe: DecimalPipe,  private route: ActivatedRoute,) {}
  p: number =1;
  subjects: any;
  products: any;
  selectedItem: any | null = null;
  categoryId!: any;
ngOnInit(): void {
      
  this.api.getListloai().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  });

  this.api.getList().subscribe(res => {
    this.products = res;
    console.log(this.products);
  })
  
}

formatCurrency(price: number | null): string {
  if (price === null) {
    return 'N/A'; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
  }

  // Nhân price với 1000
  const multipliedPrice = price ;

  // Định dạng giá trị nhân với 1000
  const formattedPrice = this.decimalPipe.transform(multipliedPrice, '1.0-0');

  return formattedPrice ? formattedPrice.replace(/,/g, '.') : '';
}

onCategoryClick(event: Event, categoryId: any) {
  // Ngăn chặn sự kiện mặc định của thẻ 'a' để không làm mất hiệu ứng collapse
  event.preventDefault();

  // Bây giờ bạn có thể sử dụng giá trị categoryId
  console.log('Category ID:', categoryId);

  // Gọi API hoặc thực hiện các công việc khác dựa trên categoryId
  this.api.getlistByIdsp(categoryId).subscribe(
    (data) => {
      this.products = data;
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}

}
