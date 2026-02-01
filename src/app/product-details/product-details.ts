import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Para leer la URL
import { Product, products } from '../products';  //Importamos los datos
import { CartService} from '../cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit {
  // Aquí guardaremos el móvil encontrado
  product: Product | undefined;

  cartService = inject(CartService);

  // Inyectamos la ruta para poder usarla
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtenemos el id de la url
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Buscamos el producto en la lista que coincida con ese id
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
