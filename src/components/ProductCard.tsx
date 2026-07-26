import { Star } from 'lucide-react';
import { Product } from '../types';
import { formatRupiah } from '../utils';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="bg-[#111] rounded-xl border border-white/5 flex flex-col h-full hover:border-[#ee4d2d]/50 transition-colors relative overflow-hidden group">
      {product.isMall && (
        <div className="absolute top-0 left-0 bg-[#d0011b] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-xl z-10">
          MALL
        </div>
      )}
      {product.isFlashSale && (
        <div className="absolute top-0 right-0 bg-[#ee4d2d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-bl-xl z-10">
          FLASH
        </div>
      )}
      <div className="aspect-square w-full overflow-hidden relative">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-xs md:text-sm text-[#e5e5e5] font-medium line-clamp-2 leading-tight mb-2 flex-grow">
          {product.name}
        </h3>
        <div className="mt-1">
          <div className="text-[#ee4d2d] font-bold text-sm md:text-base">
            {formatRupiah(product.price)}
          </div>
          {product.originalPrice && (
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] bg-[#ee4d2d]/20 text-[#ee4d2d] px-1 font-bold rounded">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
              <span className="text-[10px] text-gray-500 line-through">
                {formatRupiah(product.originalPrice)}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-3 text-[10px] text-gray-500">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-[#ee4d2d] fill-[#ee4d2d]" />
            <span className="font-medium text-[#e5e5e5]">{product.rating}</span>
          </div>
          <span>{product.sold > 1000 ? `${(product.sold/1000).toFixed(1)}RB` : product.sold} Terjual</span>
        </div>
        <div className="text-[10px] text-gray-600 mt-1.5 truncate">
          {product.location}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="mt-3 w-full border border-white/10 text-[#e5e5e5] hover:border-[#ee4d2d] hover:text-[#ee4d2d] hover:bg-[#ee4d2d]/10 text-xs py-1.5 rounded-lg transition-colors font-medium"
        >
          + Keranjang
        </button>
      </div>
    </div>
  );
}
