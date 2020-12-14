import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { category } from '../models/category.model';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  index = 5 ;
  category: category[] =[
  { name: 'Sentence 1' , _id: 1},
  { name: 'Sentence 2',  _id: 2},
  { name: 'Sentence 3' , _id: 3},
  { name : 'Sentence 4'  , _id : 4}
] ;


  constructor() { }
  ngOnInit(): void {
  }
  model = new category( '', this.index );
  submitted = false;

  onSubmit(form:NgForm) { 
    this.submitted = true;
    this.category.push( new category( form.control.value.name , this.index ));
    this.index = this.index +1;
  
  }

  newCategory(form:NgForm) {
    form.reset();
    this.model = new category('');
  }
}
