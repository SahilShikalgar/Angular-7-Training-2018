import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FilterComponent } from './component/shopping-cart/filter/filter.component';
import { ProductlistComponent } from './component/shopping-cart/productlist/productlist.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './component/shopping-cart/productlist/product-item/product-item.component';
import { DataBindingDemoComponent } from './component/data-binding-demo/data-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductlistComponent,
    CartComponent,
    ProductItemComponent,
    DataBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
