import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails} from './product-details/product-details';
import {Cart} from './cart/cart'
import {Shipping} from './shipping/shipping';
import {Suppliers} from './supplier/supplier';
import {SupplierDetail} from './supplier-detail/supplier-detail';

export const routes: Routes = [
  { path: '', component: ProductList, title:'Home page' },
  { path: 'products/:productId', component: ProductDetails, title:'Product Details' },
  { path: 'cart', component: Cart, title:'My Cart' },
  { path: 'shipping', component: Shipping, title:'My Shipping Page' },
  { path: 'products/:productId/suppliers', component: Suppliers, title:'Suppliers' },
  { path: 'suppliers', component: Suppliers, title: 'All Suppliers' },
  { path: 'suppliers/:supplierId', component: SupplierDetail, title: 'Supplier Detail' },
];
