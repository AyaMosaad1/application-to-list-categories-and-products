import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from "./test/test.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './categories/category/category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoriesComponent, 
    TestComponent, NavbarComponent, CategoryComponent, EditCategoryComponent, EditProductComponent, AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
