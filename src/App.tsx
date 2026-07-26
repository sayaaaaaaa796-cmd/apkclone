import { useState, useMemo } from 'react';
import { Search, ShoppingCart, MessageSquare, Home, MonitorPlay, User as UserIcon } from 'lucide-react';
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import ProfileView from './views/ProfileView';
import { Product, CartItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'mall' | 'cart' | 'profile'>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1, selected: true }];
    });
    // Visual feedback could be added here
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const toggleSelect = (id: string) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const toggleSelectAll = () => {
    const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
    setCartItems(prev => prev.map(item => ({ ...item, selected: !allSelected })));
  };

  return (
    <div className="max-w-md mx-auto bg-[#0a0a0a] text-[#e5e5e5] h-screen relative shadow-2xl flex flex-col font-sans">
      {/* Header (Top Bar) */}
      <header className="bg-[#0d0d0d] border-b border-white/10 p-2.5 flex items-center gap-3 z-50 shrink-0">
        <div className="flex-grow flex items-center bg-[#1a1a1a] border border-white/5 rounded-full px-4 py-1.5 h-9">
          <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Cari di Shopee"
            className="bg-transparent border-none outline-none text-sm w-full text-[#e5e5e5] placeholder-gray-500"
          />
        </div>
        <button
          className="relative p-1 shrink-0 active:scale-90 transition-transform"
          onClick={() => setActiveTab('cart')}
        >
          <ShoppingCart className="w-6 h-6 text-[#e5e5e5]" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-1.5 bg-[#ee4d2d] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow-sm leading-none">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </button>
        <button className="relative p-1 shrink-0 active:scale-90 transition-transform mr-1">
          <MessageSquare className="w-6 h-6 text-[#e5e5e5]" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto overflow-x-hidden relative hide-scrollbar bg-[#0a0a0a]">
        {activeTab === 'home' && <HomeView onAddToCart={handleAddToCart} />}
        {activeTab === 'mall' && (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 bg-[#0a0a0a]">
            <MonitorPlay className="w-16 h-16 text-gray-700 mb-4" />
            <p className="font-medium text-lg text-[#e5e5e5]">ShopeeLuxe Mall</p>
            <p className="text-sm">Segera Hadir!</p>
          </div>
        )}
        {activeTab === 'cart' && (
          <CartView
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            toggleSelect={toggleSelect}
            toggleSelectAll={toggleSelectAll}
          />
        )}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-[#0d0d0d] border-t border-white/5 flex justify-around items-center h-[56px] shrink-0 z-50">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center w-full h-full gap-0.5 hover:bg-white/5 transition-colors ${activeTab === 'home' ? 'text-[#ee4d2d]' : 'text-gray-500'}`}
        >
          <Home className="w-[22px] h-[22px]" strokeWidth={activeTab === 'home' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Beranda</span>
        </button>
        <button
          onClick={() => setActiveTab('mall')}
          className={`flex flex-col items-center justify-center w-full h-full gap-0.5 hover:bg-white/5 transition-colors ${activeTab === 'mall' ? 'text-[#ee4d2d]' : 'text-gray-500'}`}
        >
          <MonitorPlay className="w-[22px] h-[22px]" strokeWidth={activeTab === 'mall' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Mall</span>
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`relative flex flex-col items-center justify-center w-full h-full gap-0.5 hover:bg-white/5 transition-colors ${activeTab === 'cart' ? 'text-[#ee4d2d]' : 'text-gray-500'}`}
        >
          <div className="relative">
            <ShoppingCart className="w-[22px] h-[22px]" strokeWidth={activeTab === 'cart' ? 2.5 : 2} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#ee4d2d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#0d0d0d] leading-none shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium">Keranjang</span>
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center justify-center w-full h-full gap-0.5 hover:bg-white/5 transition-colors ${activeTab === 'profile' ? 'text-[#ee4d2d]' : 'text-gray-500'}`}
        >
          <UserIcon className="w-[22px] h-[22px]" strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Saya</span>
        </button>
      </nav>
    </div>
  );
}
