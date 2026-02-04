import {Component, inject} from '@angular/core';
import { CartService} from '../cart.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping {
  private cartService = inject(CartService);

  shippingCost!: Observable<{ type: string, price: number}[]>;


  ngOnInit() {
    this.shippingCost = this.cartService.getShippingPrices();
  }
}
