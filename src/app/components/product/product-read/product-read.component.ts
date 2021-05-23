import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Util } from '../util';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  totalProduct: any;
  displayedColumns = ['id', 'name', 'price','active', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.totalProduct = products;
      window.localStorage.setItem('totalProduct',  this.totalProduct?.length);
  
    })
  }

}
