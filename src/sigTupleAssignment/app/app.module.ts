import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductList } from './product-list/product-list.service';
import { ProductDetailComponent } from './product-detail/productDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( [
      { path: '', component: AppComponent},
      { path: 'productDetail', component: ProductDetailComponent }
    ])
    // AppRoutingModule.forRoot(routes)
  ],
  providers: [ProductList],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
