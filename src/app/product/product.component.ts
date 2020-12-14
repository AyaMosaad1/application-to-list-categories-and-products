import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { product } from '../models/product.model';
import {ProductService } from '../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  index = 9;

  products : product[]=[
    {code :"1" , name: 'Sentence 1' ,  price :"500"  ,  checked:false},
    {code :"2" , name: 'Sentence 2' ,  price :"200"  , checked:false},
  ] ;

  @ViewChild('content') content: TemplateRef<NgbModal> | undefined;
  closeResult: string = ' ';

  model = new product( '' , '' , '' , false );
  submitted = false;

  constructor(
    private modalService: NgbModal,
    private ProductService:ProductService
  ) { }

  ngOnInit(): void {
  }

  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
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

  onSubmit_product(form:NgForm) { 
    this.submitted = true;
    this.products.push( new product(form.control.value.code , form.control.value.name , form.control.value.price));
    this.index = this.index +1; 
    form.resetForm(); 
  }

  selected(item:product):void {
    let index = this.products.indexOf(item);
    this.products[index].checked = !this.products[index].checked;
  }

  
  delete():void{
    for (let del_product of this.products) {
      if (del_product.checked == true){
        this.products.splice(this.products.indexOf(del_product) , 1);
      }   
    } 
  }
  
  onClick(id:product): void {

      this.ProductService.openModal(this.products.indexOf(id));
    }
}
