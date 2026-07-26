import { ShoppingBag, Shirt, Smartphone, Watch, Camera, Gamepad2, Gift, Coffee } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const CATEGORIES = [
  { id: '1', name: 'Elektronik', icon: Smartphone, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '2', name: 'Pakaian', icon: Shirt, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '3', name: 'Aksesoris', icon: Watch, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '4', name: 'Kecantikan', icon: Gift, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '5', name: 'Kamera', icon: Camera, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '6', name: 'Hobi', icon: Gamepad2, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '7', name: 'Makanan', icon: Coffee, color: 'bg-white/5 text-[#e5e5e5]' },
  { id: '8', name: 'Lainnya', icon: ShoppingBag, color: 'bg-white/5 text-[#e5e5e5]' },
];

interface Props {
  onAddToCart: (product: Product) => void;
}

export default function HomeView({ onAddToCart }: Props) {
  return (
    <div className="pb-6 bg-[#0a0a0a] min-h-full">
      {/* Banner */}
      <div className="bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] pt-0 p-3 pb-6">
        <div className="bg-[#1a1a1a] rounded-lg aspect-[21/9] flex items-center justify-center text-white border border-white/5 shadow-md overflow-hidden relative mt-1">
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000" alt="Promo" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-4">
            <span className="text-[#ee4d2d] text-[10px] font-bold uppercase tracking-widest mb-1">Koleksi Eksklusif</span>
            <h2 className="text-xl md:text-2xl font-serif italic text-white drop-shadow-md">PROMO<br/>SPESIAL 9.9</h2>
            <p className="text-xs mt-2 font-medium bg-white/10 w-max px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">Diskon s/d 90%</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#111] py-4 px-2 mb-2 border border-white/5 grid grid-cols-4 gap-y-4 -mt-4 mx-3 rounded-lg relative z-10 shadow-lg">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 active:scale-95 transition-all">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color} border border-white/10`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-gray-400 text-center font-medium leading-tight px-1">{cat.name}</span>
            </div>
          );
        })}
      </div>

      {/* Flash Sale Banner */}
      <div className="bg-[#111] py-3 pl-3 mb-2 border-y border-white/5 mt-2">
        <div className="flex items-center gap-2 mb-3 pr-3">
          <h3 className="text-[#ee4d2d] font-serif italic font-bold text-base flex items-center tracking-tight">
            FLASH SALE
          </h3>
          <div className="flex items-center gap-1 text-[10px] font-bold">
            <span className="bg-[#1a1a1a] text-[#ee4d2d] border border-white/10 px-1 py-0.5 rounded-sm">02</span>
            <span className="text-[#e5e5e5]">:</span>
            <span className="bg-[#1a1a1a] text-[#ee4d2d] border border-white/10 px-1 py-0.5 rounded-sm">45</span>
            <span className="text-[#e5e5e5]">:</span>
            <span className="bg-[#1a1a1a] text-[#ee4d2d] border border-white/10 px-1 py-0.5 rounded-sm">30</span>
          </div>
          <span className="ml-auto text-[10px] text-gray-500 hover:text-[#ee4d2d] font-medium transition-colors">Lihat Semua &rsaquo;</span>
        </div>
        <div className="flex overflow-x-auto gap-3 pb-2 snap-x hide-scrollbar pr-3">
          {MOCK_PRODUCTS.filter(p => p.isFlashSale).map(product => (
            <div key={product.id} className="min-w-[120px] w-[120px] flex-shrink-0 snap-start cursor-pointer">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-2 left-2 bg-[#ee4d2d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                  -50%
                </div>
                <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-t-xl group-hover:scale-105 transition-transform" />
                <div className="p-2 pt-2">
                  <div className="text-[#ee4d2d] font-bold text-sm text-center leading-none">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(product.price)}
                  </div>
                  <div className="w-full bg-white/10 h-2.5 rounded-full mt-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-[#ee4d2d] w-[85%] rounded-full"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[7px] text-white font-bold z-10 tracking-widest uppercase">Segera Habis</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Discover */}
      <div>
        <div className="bg-[#0d0d0d] py-3 mb-1 sticky top-0 z-20 border-b border-[#ee4d2d]/30 flex justify-center shadow-lg">
          <span className="text-[#ee4d2d] font-serif italic tracking-widest text-sm font-bold uppercase">Rekomendasi Untukmu</span>
        </div>
        <div className="p-2 pt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
          {/* Duplicate products for visual fill to demonstrate scrolling */}
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id + '_dup'} product={{...product, id: product.id + '_dup'}} onAddToCart={onAddToCart} />
          ))}
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id + '_dup2'} product={{...product, id: product.id + '_dup2'}} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
