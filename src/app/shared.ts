import { Injectable ,TemplateRef  } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    open = new Subject<{ _id : number }>();


  openModal(projectId: number) {
    this.open.next({ _id: projectId });
  }
}
