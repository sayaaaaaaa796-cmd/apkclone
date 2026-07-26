import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sepatu Sneakers Pria Kasual Original',
    price: 150000,
    originalPrice: 300000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
    sold: 1250,
    rating: 4.8,
    location: 'Jakarta Selatan',
    isMall: true,
    isFlashSale: true
  },
  {
    id: '2',
    name: 'Smartwatch Series 8 Ultra - Garansi Resmi',
    price: 450000,
    originalPrice: 800000,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400',
    sold: 3400,
    rating: 4.9,
    location: 'Jakarta Pusat',
    isMall: true
  },
  {
    id: '3',
    name: 'Tas Selempang Wanita Kulit Sintetis Import',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
    sold: 560,
    rating: 4.7,
    location: 'Bandung'
  },
  {
    id: '4',
    name: 'Kemeja Flanel Pria Lengan Panjang Premium',
    price: 120000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=400',
    sold: 890,
    rating: 4.6,
    location: 'Tangerang',
    isFlashSale: true
  },
  {
    id: '5',
    name: 'Headphone Wireless Bluetooth 5.0 Bass',
    price: 250000,
    originalPrice: 400000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    sold: 2100,
    rating: 4.8,
    location: 'Surabaya',
    isMall: true
  },
  {
    id: '6',
    name: 'Botol Minum Tumbler Stainless Steel 500ml',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400',
    sold: 4500,
    rating: 4.9,
    location: 'Jakarta Barat'
  }
];
