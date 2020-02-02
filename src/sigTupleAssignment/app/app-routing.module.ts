import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/productDetail.component';
export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'productDetail', component: ProductDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
