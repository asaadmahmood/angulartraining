import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'product-form', component: ProductFormComponent},
  {path: 'manage-products', component: ManageProductsComponent},
  {path: 'manage-orders', component: ManageOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
