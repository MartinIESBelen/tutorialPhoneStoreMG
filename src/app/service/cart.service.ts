import { Injectable, signal, computed, inject } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  private _cartItems = signal<CartItem[]>([]);
  private _stock = signal<Record<number, number>>({});

  public readonly cartItems = this._cartItems.asReadonly();

  public totalItems = computed(() =>
    this._cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );

  public totalPrice = computed(() =>
    this._cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
  );

  initStock(product: Product) {
    this._stock.update(s => {
      if (s[product.id] === undefined) {
        return { ...s, [product.id]: product.cantidad };
      }
      return s;
    });
  }

  getStock(productId: number): number {
    return this._stock()[productId] ?? 0;
  }

  addToCart(product: Product) {
    const stock = this.getStock(product.id);
    if (stock <= 0) return false;

    this._stock.update(s => ({ ...s, [product.id]: s[product.id] - 1 }));

    this._cartItems.update(items => {
      const exists = items.some(item => item.product.id === product.id);
      if (exists) {
        return items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, quantity: 1 }];
    });

    return true;
  }

  decreaseQuantity(product: Product) {
    this._stock.update(s => ({ ...s, [product.id]: (s[product.id] ?? 0) + 1 }));

    this._cartItems.update(items =>
      items
        .map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  clearCart() {
    this._cartItems().forEach(item => {
      this._stock.update(s => ({
        ...s,
        [item.product.id]: (s[item.product.id] ?? 0) + item.quantity
      }));
    });
    this._cartItems.set([]);
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>('/shipping.json');
  }
}
