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
  //Recogemos los productos desde el padre
  @Input()product: Product | undefined;

  //Esto crea la comunicación hacia el padre
  @Output() notify = new EventEmitter();
}
