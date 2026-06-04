import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [],
  templateUrl: './product-alerts.html',
  styleUrl: './product-alerts.css',
})
export class ProductAlerts {
  @Input()product: Product | undefined;

  @Output() notify = new EventEmitter();
}
