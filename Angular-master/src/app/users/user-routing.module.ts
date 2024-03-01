import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ContactComponent } from './contact/contact.component';
import { Shop1Component } from './shop1/shop1.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'index',
    component:IndexComponent
  },
  {
    path:'chitiet/:id',
    component:ChitietComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'tintuc',
    component:TintucComponent
  },

  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'blogdetail/:id',
    component:BlogdetailComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { 

  
}
