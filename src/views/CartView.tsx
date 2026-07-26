import { Plus, Minus, Store } from 'lucide-react';
import { CartItem } from '../types';
import { formatRupiah } from '../utils';

interface Props {
  cartItems: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  toggleSelect: (id: string) => void;
  toggleSelectAll: () => void;
}

export default function CartView({ cartItems, updateQuantity, toggleSelect, toggleSelectAll }: Props) {
  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
  const selectedItems = cartItems.filter(item => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-full bg-[#0a0a0a] flex flex-col items-center pt-24 pb-20">
        <div className="w-24 h-24 bg-[#111] border border-white/5 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <Store className="w-10 h-10 text-gray-600" />
        </div>
        <p className="text-gray-400 text-sm font-medium">Keranjang belanja Anda kosong</p>
        <button className="mt-4 border border-white/10 text-[#e5e5e5] px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
          Belanja Sekarang
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#0a0a0a] pb-36">
      <div className="bg-[#111] p-3 mb-2 flex items-center gap-3 border-b border-white/5">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleSelectAll}
            className="w-5 h-5 text-[#ee4d2d] rounded bg-[#1a1a1a] border-white/10 focus:ring-[#ee4d2d] accent-[#ee4d2d]"
          />
        </div>
        <span className="text-sm font-medium text-[#e5e5e5]">Pilih Semua</span>
      </div>

      <div className="flex flex-col gap-2">
        {cartItems.map(item => (
          <div key={item.id} className="bg-[#111] p-3 border-y border-white/5">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
               <Store className="w-4 h-4 text-gray-400" />
               <span className="text-xs font-semibold text-[#e5e5e5]">{item.location} Shop</span>
            </div>
            <div className="flex gap-3">
              <div className="flex items-start h-full pt-2">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleSelect(item.id)}
                  className="w-5 h-5 text-[#ee4d2d] rounded bg-[#1a1a1a] border-white/10 focus:ring-[#ee4d2d] accent-[#ee4d2d]"
                />
              </div>
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border border-white/5" />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-sm text-[#e5e5e5] line-clamp-2 leading-tight">{item.name}</h4>
                  <div className="inline-block bg-[#1a1a1a] border border-white/5 px-2 py-0.5 rounded text-[10px] text-gray-400 mt-1">
                    Variasi: Default
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#ee4d2d] font-bold text-sm">{formatRupiah(item.price)}</span>
                  <div className="flex items-center border border-white/10 rounded overflow-hidden h-7 bg-[#1a1a1a]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-full flex items-center justify-center hover:bg-white/5 text-gray-400 active:bg-white/10"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 h-full flex items-center justify-center text-xs border-x border-white/10 text-[#e5e5e5] font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-full flex items-center justify-center hover:bg-white/5 text-gray-400 active:bg-white/10"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Bar */}
      <div className="fixed bottom-[56px] left-0 right-0 max-w-md mx-auto bg-[#0d0d0d] border-t border-white/10 p-2 flex items-center justify-between z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 pl-2">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleSelectAll}
            className="w-5 h-5 text-[#ee4d2d] rounded bg-[#1a1a1a] border-white/10 focus:ring-[#ee4d2d] accent-[#ee4d2d]"
          />
          <span className="text-xs text-[#e5e5e5]">Semua</span>
        </div>
        <div className="flex items-center gap-4 pr-1">
          <div className="text-right">
            <div className="text-[10px] text-gray-400">Total Harga</div>
            <div className="text-[#ee4d2d] font-bold text-sm">{formatRupiah(totalPrice)}</div>
          </div>
          <button
            disabled={totalCount === 0}
            className="bg-[#ee4d2d] disabled:bg-[#1a1a1a] disabled:text-gray-500 disabled:border disabled:border-white/5 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-colors min-w-[120px]"
          >
            Checkout ({totalCount})
          </button>
        </div>
      </div>
    </div>
  );
}
