import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService} from '../service/cart.service';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  public cartService = inject(CartService);
  private formBuilder = inject(FormBuilder);

  items = this.cartService.cartItems;

  checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required]
  });

  increase(product: Product) {
    const added = this.cartService.addToCart(product);
    if (!added) {
      window.alert('¡No quedan unidades en stock!');
    }
  }

  decrease(product: Product) {
    this.cartService.decreaseQuantity(product);
  }

  cleanCart() {
    this.cartService.clearCart();
    window.alert('Cart has been cleared!');
  }

  onSubmit() {
    if(this.checkoutForm.invalid){
      this.checkoutForm.markAllAsTouched();
      return;
    }

    if(this.items().length === 0){
      window.alert('The cart is empty!');
      return;
    }

    const outOfStock = this.items().some(
      item => this.cartService.getStock(item.product.id) < 0
    );
    if (outOfStock) {
      window.alert('One or more items in your cart are out of stock!');
      return;
    }

    this.cartService.clearCart();
    console.warn('Your order has been submitted!', this.checkoutForm.value);
    window.alert(`Thanks for buying ${this.checkoutForm.value.name}!`);

    this.checkoutForm.reset();
  }
}
