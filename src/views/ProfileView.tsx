import { User, Settings, ShoppingBag, Clock, Heart, HelpCircle, MapPin, Star, MessageCircle, Wallet } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="min-h-full bg-[#0a0a0a] pb-20">
      <div className="bg-[#0d0d0d] border-b border-white/10 p-4 pt-6 text-[#e5e5e5] flex items-center gap-4 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ee4d2d]/5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
        
        <div className="w-14 h-14 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#ee4d2d]/30 relative z-10 shadow-lg">
          <User className="w-7 h-7 text-[#ee4d2d]" />
        </div>
        <div className="relative z-10 flex-grow">
          <h2 className="font-serif italic font-bold text-lg leading-tight text-white">Pengguna 890</h2>
          <div className="flex gap-2 text-[10px] mt-1.5 font-bold tracking-widest uppercase">
            <span className="bg-[#1a1a1a] px-2 py-0.5 rounded border border-white/10 text-[#ee4d2d]">Classic Member</span>
            <span className="bg-[#1a1a1a] px-2 py-0.5 rounded border border-white/10 text-gray-400">Pengikut 0</span>
          </div>
        </div>
        <button className="relative z-10 p-2 text-gray-500 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-[#111] px-4 py-4 mb-2 border-b border-white/5 shadow-lg">
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#ee4d2d]" />
            <span className="font-semibold text-white">Pesanan Saya</span>
          </div>
          <div className="text-gray-500 hover:text-[#ee4d2d] transition-colors flex items-center gap-1 text-xs cursor-pointer">
            Lihat Riwayat Pesanan <span className="text-lg leading-none">›</span>
          </div>
        </div>
        <div className="grid grid-cols-4 text-center text-xs text-gray-400 pt-3 border-t border-white/5">
          <div className="flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <div className="relative">
              <Wallet className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[10px]">Belum Bayar</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <div className="relative">
              <Clock className="w-6 h-6" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-[#ee4d2d] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#111]">1</span>
            </div>
            <span className="text-[10px]">Dikemas</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <div className="relative">
              <MapPin className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[10px]">Dikirim</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <div className="relative">
              <Star className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-[10px]">Penilaian</span>
          </div>
        </div>
      </div>

      <div className="bg-[#111] mb-2 border-y border-white/5">
        <button className="w-full px-4 py-4 border-b border-white/5 flex items-center text-sm hover:bg-white/5 transition-colors group">
          <Heart className="w-5 h-5 text-[#ee4d2d] mr-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-[#e5e5e5] flex-grow text-left font-medium">Favorit Saya</span>
          <span className="text-gray-600 text-lg leading-none group-hover:text-white transition-colors">›</span>
        </button>
        <button className="w-full px-4 py-4 border-b border-white/5 flex items-center text-sm hover:bg-white/5 transition-colors group">
          <Clock className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-[#e5e5e5] flex-grow text-left font-medium">Terakhir Dilihat</span>
          <span className="text-gray-600 text-lg leading-none group-hover:text-white transition-colors">›</span>
        </button>
        <button className="w-full px-4 py-4 flex items-center text-sm hover:bg-white/5 transition-colors group">
          <MessageCircle className="w-5 h-5 text-green-400 mr-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-[#e5e5e5] flex-grow text-left font-medium">Chat dengan ShopeeLuxe</span>
          <span className="text-gray-600 text-lg leading-none group-hover:text-white transition-colors">›</span>
        </button>
      </div>
      
      <div className="bg-[#111] border-y border-white/5 mb-6">
        <button className="w-full px-4 py-4 flex items-center text-sm hover:bg-white/5 transition-colors group">
          <HelpCircle className="w-5 h-5 text-emerald-400 mr-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-[#e5e5e5] flex-grow text-left font-medium">Pusat Bantuan</span>
          <span className="text-gray-600 text-lg leading-none group-hover:text-white transition-colors">›</span>
        </button>
      </div>

      <div className="px-4">
        <button className="w-full bg-[#1a1a1a] border border-[#ee4d2d]/30 text-[#ee4d2d] py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#ee4d2d]/10 transition-colors shadow-sm">
          Logout
        </button>
      </div>
    </div>
  );
}
