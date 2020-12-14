import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  OnDestroy,
  Input
 } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy{

  product: product[] = [
    { code: "1", name: 'Sentence 1', price: "$500", _id: 1 ,  checked:false },
    { code: "2", name: 'Sentence 2', price: "$200", _id: 2 ,  checked :false},
  ];
  @Input('defulatData') defaultData:product | undefined;

  edit_index = 0 ;
  model = new product( '' , '' , '' , this.edit_index , false );
  @ViewChild('edit') edit: TemplateRef<NgbModal> | undefined;

  closeResult: string = ' ';
  subscription: Subscription | undefined;
  editProduct  :product | undefined;
  constructor(
    private modalService: NgbModal,
    private productService : ProductService ,
  ) { }

  open() {
    this.modalService
      .open(this.edit, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
   }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.subscription = this.productService.open.subscribe((id) => {
          this.open();
          console.log(id);

        });
  }

  updateItem( item: any) {
    this.edit_index  = this.product.indexOf(item);
    this.model = item ;
  }

  editItem (form:NgForm){
   let product_edit = this.product[this.edit_index];
   product_edit.code = this.product[this.edit_index].code;
   product_edit.name = this.product[this.edit_index].name;
   product_edit.price = this.product[this.edit_index].price;


  //  if (form.controls['code'].value == '')
  //  {
  //   product_edit.code = this.product[this.edit_index].code;
  //  }
  //  else {
  //   product_edit.code = form.controls['code'].value;
  //  }
  //  if (form.controls['name'].value == '')
  //  {
  //   product_edit.name = this.product[this.edit_index].name;
  //  }
  //  else {
  //   product_edit.name = form.controls['name'].value;
  //  }   if (form.controls['price'].value == '')
  //  {
  //   product_edit.price = this.product[this.edit_index].price;
  //  }
  //  else {
  //   product_edit.price = form.controls['price'].value;
  //  }
 }
   
 ngOnDestroy(): void {
  // this.subscription.unsubscribe();
}
}
