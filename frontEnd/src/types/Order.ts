export interface Order {
  _id: string;
  table: string;
  status: string;
  products: Array<{
    _id: string;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
    quantity: number;
  }>;
}
