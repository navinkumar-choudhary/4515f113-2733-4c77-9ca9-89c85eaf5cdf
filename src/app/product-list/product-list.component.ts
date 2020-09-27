import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import {Product, UpdateMode} from "../../types";
import {Product} from "../../types";
import { UpdateMode } from '../../types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();
  quantity = 0;

  ngOnInit() {
    
  }

  descreaseQty(){
    UpdateMode.apply (this.quantity);
  }

  increaseQty(){

  }
  addToCart(){

  }

}


