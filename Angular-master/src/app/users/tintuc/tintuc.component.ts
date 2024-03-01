import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css',
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
export class TintucComponent  {
  constructor(private api : HomeService, private router: Router,private cartService: CartService,private currencyPipe: CurrencyPipe,private decimalPipe: DecimalPipe,  private route: ActivatedRoute,) {}
  blogs: any;
  detail:any;
ngOnInit(): void {
      
  this.api.getListBlog().subscribe(res => {
    this.blogs = res;
    console.log(this.blogs);
  });

  
}
redirectToDetailBlog(item: any): void {
    // Navigate to the detail page with the product ID
    this.router.navigate(['/blogdetail', item.id]);
  }
}
