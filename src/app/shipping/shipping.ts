import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs'; // Importamos Observable
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.html',
  styleUrls: ['./shipping.css']
})
export class Shipping implements OnInit {

  // Preparamos una variable que será un "flujo" de datos (Observable)
  shippingCosts!: Observable<{type: string, price: number}[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Le pedimos al servicio que conecte el tubo de datos
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
