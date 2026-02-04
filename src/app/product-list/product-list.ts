import { Component } from '@angular/core';
import {Product, products} from '../products';
import { ProductAlerts } from '../product-alerts/product-alerts';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductAlerts, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [...products];

  share(){
    window.alert('The product has been shared!')
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale.')
  }
}
