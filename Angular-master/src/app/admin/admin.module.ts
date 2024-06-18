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
import { NgxPaginationModule } from 'ngx-pagination';
import { ThongkeComponent } from './thongke/thongke.component';
import { CapnhattrangthaiComponent } from './capnhattrangthai/capnhattrangthai.component';
import { SuanvComponent } from './suanv/suanv.component';
import { SuanxbComponent } from './suanxb/suanxb.component';
import { SuankhComponent } from './suankh/suankh.component';
import { SuangdungComponent } from './suangdung/suangdung.component';
import { SuahdnComponent } from './suahdn/suahdn.component';
import { SuablogComponent } from './suablog/suablog.component';
import { CKEditorComponent, CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ThongkedoanhthunamComponent } from './thongkedoanhthunam/thongkedoanhthunam.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CthdnComponent } from './cthdn/cthdn.component';



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
    ThongkeComponent,
    CapnhattrangthaiComponent,
    SuanvComponent,
    SuanxbComponent,
    SuankhComponent,
    SuangdungComponent,
    SuahdnComponent,
    SuablogComponent,
    ThongkedoanhthunamComponent,
    FileUploadComponent,
    CthdnComponent,
   
  ],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CKEditorModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
