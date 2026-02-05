import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartService} from '../cart.service';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);
  private formBuilder = inject(FormBuilder);
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required]
  });

  cleanCart(){
    this.items = this.cartService.clearCart();
    return this.items;
    window.alert('Cart has beeb cleared!');
  }

  onSubmit(){

    if(this.checkoutForm.invalid){
      this.checkoutForm.markAllAsTouched()
      return;
    }

    if(this.items.length === 0){
      window.alert('The cart is empty!')
      return;
    }

    if(this.items.some(i => i.cantidad ===0)){
      window.alert('The stock is empty!')
      return;
    }

    this.items= this.cartService.clearCart()
    console.warn('Your order has been submitted!', this.checkoutForm.value)
    window.alert(`Thanks for buying ${this.checkoutForm.value.name} !`)

    this.checkoutForm.reset()
  }

}
