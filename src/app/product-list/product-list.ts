import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import {Product, products} from '../products';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products = [...products];

  share(){
    window.alert('The product has been shared.');
  }
}
