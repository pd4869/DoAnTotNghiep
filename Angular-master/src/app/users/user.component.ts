import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
  styleUrls: [
    // "../../assets/img/core-img/favicon.ico",
    // "../../assets/user/css/core-style.css",
    // "../../assets/user/css/style.css",
    // "../../assets/user/css/responsive.css"

   "../../assets/nguoidung/css/bootstrap.min.css" ,
   "../../assets/nguoidung/css/font-awesome.min.css" ,
   "../../assets/nguoidung/css/themify-icons.css" ,
   "../../assets/nguoidung/css/elegant-icons.css" ,
   "../../assets/nguoidung/css/owl.carousel.min.css" ,
   "../../assets/nguoidung/css/nice-select.css" ,
   "../../assets/nguoidung/css/jquery-ui.min.css" ,
   "../../assets/nguoidung/css/slicknav.min.css" ,
   "../../assets/nguoidung/css/style.css" ,
  ]
})
export class UserComponent implements AfterViewInit  {
  title = 'Doan5';
  ngAfterViewInit(): void {
    var src = [  
    "assets/nguoidung/js/jquery-3.3.1.min.js",
    "assets/nguoidung/js/bootstrap.min.js",
    "assets/nguoidung/js/jquery-ui.min.js",
    "assets/nguoidung/js/jquery.countdown.min.js",
    "assets/nguoidung/js/jquery.nice-select.min.js",
    "assets/nguoidung/js/jquery.zoom.min.js",
    "assets/nguoidung/js/jquery.dd.min.js",
    "assets/nguoidung/js/jquery.slicknav.js",
    "assets/nguoidung/js/owl.carousel.min.js",
    "assets/nguoidung/js/main.js",
    "assets/nguoidung/js/imagesloaded.pkgd.min.js"

    
  ];



   src.forEach(element => {
    var the = document.createElement('script');
    the.src = element;
    document.body.appendChild(the);
   });
}
}
