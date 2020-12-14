import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  // home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CategoriesComponent },
  // Product
  { path: 'product', component: ProductComponent },
  // Categories
  { path: 'Category', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
