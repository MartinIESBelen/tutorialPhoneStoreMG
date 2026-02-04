import {Injectable} from '@angular/core';
import {Product, products} from './products';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    // Angular usa "Observables" (flujos de datos).
    // Le decimos: "Ve a esa URL y tráeme una lista de objetos con type y price (sus campos)"
    return this.http.get<{type: string, price: number}[]>('/shipping.json');
  }

}
