import { Component, OnInit } from '@angular/core';
import { ThongkeService } from '../service/thongke.service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/home.service';


@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css',
  "../../../assets/vendor/fontawesome-free/css/all.min.css",
  "../../../assets/css/sb-admin-2.min.css",
  "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css",

  ]
})
export class ThongkeComponent implements OnInit{
  constructor(private api : HomeService, private router: Router) {}
  p : number = 1;
  subjects: any;
  subjects1: any;

  selectedItem: any | null = null;
ngOnInit(): void {
      
  this.api.getthongke().subscribe(res => {
    this.subjects = res;
    console.log(this.subjects);
  })
  this.api.getthongkenam().subscribe(res => {
    this.subjects1 = res;
    console.log(this.subjects);
  })
}




private refreshList(): void {
  this.api.getthongke().subscribe(list => {
    this.subjects = list;
    console.log(this.subjects);
  });
  this.api.getthongkenam().subscribe(list => {
    this.subjects1 = list;
    console.log(this.subjects);
  });
}
}
