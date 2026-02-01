import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails} from './product-details/product-details';
import {Cart} from './cart/cart'
import {Shipping} from './shipping/shipping';

export const routes: Routes = [
  // Ruta por defecto (Home): Carga la lista de productos
  { path: '', component: ProductList, title:'Home page' },
  { path: 'products/:productId', component: ProductDetails, title:'Product Details' },
  { path: 'cart', component: Cart, title:'My Cart' },
  { path: 'shipping', component: Shipping, title:'My Shipping Page' },
];
