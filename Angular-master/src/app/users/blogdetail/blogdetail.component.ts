import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Model/service/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css',
  "../../../assets/nguoidung/css/bootstrap.min.css" ,
  "../../../assets/nguoidung/css/font-awesome.min.css" ,
  "../../../assets/nguoidung/css/themify-icons.css" ,
  "../../../assets/nguoidung/css/elegant-icons.css" ,
  "../../../assets/nguoidung/css/owl.carousel.min.css" ,
  "../../../assets/nguoidung/css/nice-select.css" ,
  "../../../assets/nguoidung/css/jquery-ui.min.css" ,
  "../../../assets/nguoidung/css/slicknav.min.css" ,
  "../../../assets/nguoidung/css/style.css" ,]
})
export class BlogdetailComponent implements OnInit {
  blog: any;
  blogID:any;
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private route: ActivatedRoute, private homeService: HomeService) {
  
  }
  ngOnInit(): void {
    // Lấy id từ URL
    this.activatedRoute.params.subscribe(params => {
      this.blogID = params['id'];
console.log(this.blogID)
      // Gọi service để lấy chi tiết sản phẩm
      this.homeService.getItemByIdBlog(this.blogID).subscribe(
        (data) => {
          this.blog = data;
          console.log(this.blog)
          // Có thể thực hiện các hành động khác tại đây nếu cần
        },
        (error) => {
          console.error('Lỗi khi lấy thông tin blog:', error);
        }
      );
    });
  }

}
