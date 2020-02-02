import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/productDetail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
