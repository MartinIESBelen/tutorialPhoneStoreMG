import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {products} from '../products';

interface Supplier {
  id: number;
  name: string;
  contact: string;
}

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './suppliers.html',
})
export class Suppliers implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  productId = signal<number | null>(null);
  suppliers = signal<Supplier[]>([]);

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('productId');
    const id = param ? Number(param) : null;
    this.productId.set(id);

    this.http.get<Supplier[]>('/suppliers.json').subscribe(data => {
      if (id) {
        const product = products.find(p => p.id === id);
        this.suppliers.set(data.filter(s => s.id === product?.supplierId));
      } else {
        this.suppliers.set(data);
      }
    });
  }
}
