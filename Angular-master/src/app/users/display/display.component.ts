import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css',
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
export class DisplayComponent {
  products: any[] = [];
  p: number =1;

  constructor(private router: Router,private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.products = navigation.extras.state['products'];
    }

  }
  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    console.log(params); // Kiểm tra dữ liệu từ queryParams
  });
}}
