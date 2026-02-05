export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  cantidad: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    cantidad: 6,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    cantidad: 3,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    cantidad: 0,
  }
];
