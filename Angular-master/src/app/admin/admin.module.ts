import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';

import { Datap1Component } from './datap1/datap1.component';

import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new/new.component';
import { AdddataComponent } from './adddata/adddata.component';
import { QlsanphamComponent } from './qlsanpham/qlsanpham.component';
import { AddataspComponent } from './addatasp/addatasp.component';
import { SuasanphamComponent } from './suasanpham/suasanpham.component';
import { AddngdungComponent } from './addngdung/addngdung.component';
import { QlngdungComponent } from './qlngdung/qlngdung.component';
import { QlkhachhangComponent } from './qlkhachhang/qlkhachhang.component';
import { QlhoadonbanComponent } from './qlhoadonban/qlhoadonban.component';
import { QlhoadonnhapComponent } from './qlhoadonnhap/qlhoadonnhap.component';
import { QlblogComponent } from './qlblog/qlblog.component';
import { QlnhaxuatbanComponent } from './qlnhaxuatban/qlnhaxuatban.component';
import { CthdbComponent } from './cthdb/cthdb.component';
import { AddkhachhangComponent } from './addkhachhang/addkhachhang.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AddnxbComponent } from './addnxb/addnxb.component';
import { AddhoadonnhapComponent } from './addhoadonnhap/addhoadonnhap.component';




@NgModule({
  declarations: [
    AdminComponent,
   
    Datap1Component,
    
    NewComponent,
    AdddataComponent,
    QlsanphamComponent,
    AddataspComponent,
    SuasanphamComponent,
    AddngdungComponent,
    QlngdungComponent,
    QlkhachhangComponent,
    QlhoadonbanComponent,
    QlhoadonnhapComponent,
    QlblogComponent,
    QlnhaxuatbanComponent,
    CthdbComponent,
    AddkhachhangComponent,
    AddblogComponent,
    AddnxbComponent,
    AddhoadonnhapComponent,
   
   
  ],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
