import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common'; //necesario para el pipe de moneda
import {Product, products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  product: Product | undefined;

  private route = inject(ActivatedRoute);
  private cart = inject(CartService);

  ngOnInit() {
    //cogemos la id desde la url
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product) {
    if(product.cantidad === 0){
      window.alert('Agotado!')
      return;
    }

    this.cart.addToCart(product)
    product.cantidad = product.cantidad -1;
    window.alert(`Product added to cart: ${product.id}`);
  }
}
