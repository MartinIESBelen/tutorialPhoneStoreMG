import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product, products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product: Product | undefined;

  private route = inject(ActivatedRoute);
  cartService = inject(CartService);

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(p => p.id === productIdFromRoute);

    if (this.product) {
      this.cartService.initStock(this.product);
    }
  }

  addToCart(product: Product) {
    const stock = this.cartService.getStock(product.id);
    if (stock <= 0) {
      window.alert('¡Agotado!');
      return;
    }
    const added = this.cartService.addToCart(product);
    if (added) {
      window.alert(`Product added to cart: ${product.id}`);
    }
  }
}
