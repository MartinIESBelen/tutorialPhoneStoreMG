import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../cart.service';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
cartService = inject(CartService);

formBuilder = inject(FormBuilder);

items = this.cartService.getItems();

checkoutForm = this.formBuilder.group({
  name:'',
  email:'',
});

onSubmit(): void {
  this.items = this.cartService.clearCart();
  console.warn('Your order has been submited', this.checkoutForm.value);

  this.checkoutForm.reset();
}
}
