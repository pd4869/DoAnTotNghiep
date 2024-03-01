import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { Shop1Component } from './shop1/shop1.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    UserComponent,
    IndexComponent,
    ChitietComponent,
    CartComponent,
    CheckoutComponent,
    TintucComponent,
    ShopComponent,
    Shop1Component,
    BlogdetailComponent,
    LoginComponent 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CurrencyPipe,
    DecimalPipe
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }





// import { IndexComponent } from './index/index.component';