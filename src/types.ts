export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  sold: number;
  rating: number;
  location: string;
  isMall?: boolean;
  isFlashSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}
