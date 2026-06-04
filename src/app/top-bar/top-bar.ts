import {Component, inject} from '@angular/core';
import { RouterLink} from '@angular/router';
import { CartService} from '../service/cart.service';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  public cartService = inject(CartService);

}
