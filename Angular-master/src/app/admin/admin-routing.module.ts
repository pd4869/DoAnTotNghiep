import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datap1Component } from './datap1/datap1.component';
import { NewComponent } from './new/new.component';
import { AdddataComponent } from './adddata/adddata.component';
import { QlsanphamComponent } from './qlsanpham/qlsanpham.component';
import { AddataspComponent } from './addatasp/addatasp.component';
import { SuasanphamComponent } from './suasanpham/suasanpham.component';
import { QlngdungComponent } from './qlngdung/qlngdung.component';
import { QlblogComponent } from './qlblog/qlblog.component';
import { QlkhachhangComponent } from './qlkhachhang/qlkhachhang.component';
import { QlhoadonbanComponent } from './qlhoadonban/qlhoadonban.component';
import { QlhoadonnhapComponent } from './qlhoadonnhap/qlhoadonnhap.component';
import { QlnhaxuatbanComponent } from './qlnhaxuatban/qlnhaxuatban.component';
import { CthdbComponent } from './cthdb/cthdb.component';
import { AddkhachhangComponent } from './addkhachhang/addkhachhang.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AddnxbComponent } from './addnxb/addnxb.component';
import { AddngdungComponent } from './addngdung/addngdung.component';
import { CapnhattrangthaiComponent } from './capnhattrangthai/capnhattrangthai.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { SuablogComponent } from './suablog/suablog.component';
import {SuahdnComponent} from './suahdn/suahdn.component';
import { SuangdungComponent } from './suangdung/suangdung.component';
import { SuankhComponent } from './suankh/suankh.component';
import { SuanxbComponent } from './suanxb/suanxb.component';
import { AddhoadonnhapComponent } from './addhoadonnhap/addhoadonnhap.component';
import { CthdnComponent } from './cthdn/cthdn.component';
const routes: Routes = [

  
  {
    path:'sanpham',
    component:QlsanphamComponent
  },

  {
    path:'loaisach',
    component:Datap1Component
  },
  {
    path:'adddata',
    component:AdddataComponent
  },
  {
    path:'adddatasp',
    component:AddataspComponent
  },
 
  {
    path:'addhoadonnhap',
    component:AddhoadonnhapComponent
  },
  {
    path:'editdata/:id',
    component:NewComponent
  },
  {
    path:'editdatasp/:id',
    component:SuasanphamComponent
  },
  {
    path:'nguoidung',
    component:QlngdungComponent
  },
  {
    path:'blog',
    component:QlblogComponent
  }, 
  {
    path:'hoadonban',
    component:QlhoadonbanComponent
  },
  {
    path:'hoadonnhap',
    component:QlhoadonnhapComponent
  },
  {
    path:'nhaxuatban',
    component:QlnhaxuatbanComponent
  },
  {
    path:'khachhang',
    component:QlkhachhangComponent
  
  },
  {
    path: 'suatrangthai/:id',
    component:CapnhattrangthaiComponent
  },
  {
    path:'cthdb/:id',
    component:CthdbComponent
  },
  {
    path:'cthdn/:id',
    component:CthdnComponent
  },
  {
    path:'addblog',
    component:AddblogComponent
  },
  {
    path:'addkhachhang',
    component:AddkhachhangComponent
  },
  {
    path:'addngdung',
    component:AddngdungComponent
  },
  {
    path:'addnxb',
    component:AddnxbComponent
  },
  {
    path:'thongke',
    component:ThongkeComponent
  },
  {
    path:'suablog/:id',
    component:SuablogComponent
  },
  {
    path:'suahdn/:id',
    component:SuahdnComponent
  },
  {
    
      path:'Suakh/:id',
      component:SuankhComponent
    
  },
  {
    path:'suanxb/:id',
    component:SuanxbComponent
  },
  {
    path:'suanguoidung/:id',
    component:SuangdungComponent
  },
];

@NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
