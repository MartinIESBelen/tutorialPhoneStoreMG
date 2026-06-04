export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  supplierId: number;
  cantidad: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    supplierId: 1,
    cantidad: 6,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    supplierId: 1,
    cantidad: 3,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    supplierId: 2,
    cantidad: 0,
  }
];
