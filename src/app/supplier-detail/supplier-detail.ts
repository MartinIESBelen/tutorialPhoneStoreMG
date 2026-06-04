import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { products, Product } from '../products';

interface Supplier {
  id: number;
  name: string;
  contact: string;
}

@Component({
  selector: 'app-supplier-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './supplier-detail.html',
})
export class SupplierDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  supplier = signal<Supplier | null>(null);
  supplierProducts = signal<Product[]>([]);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('supplierId'));

    this.http.get<Supplier[]>('/suppliers.json').subscribe(data => {
      const found = data.find(s => s.id === id) ?? null;
      this.supplier.set(found);
    });

    this.supplierProducts.set(products.filter(p => p.supplierId === id));
  }
}
