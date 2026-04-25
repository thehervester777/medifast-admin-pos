/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Command, 
  Package, 
  Truck, 
  Users, 
  LayoutDashboard, 
  Settings, 
  History,
  ArrowRight,
  TrendingUp,
  X,
  Handshake,
  Award
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export default function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : onClose(); // This is handled by parent, but good to have
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, category: 'Navigation' },
    { id: 'inventory', label: 'Inventory Management', icon: Package, category: 'Navigation' },
    { id: 'orders', label: 'Order Tracking', icon: History, category: 'Navigation' },
    { id: 'logistics', label: 'Fleet & Logistics', icon: Truck, category: 'Navigation' },
    { id: 'clients', label: 'Client Relationships', icon: Users, category: 'Navigation' },
    { id: 'b2b', label: 'B2B Module & Quotations', icon: Handshake, category: 'Navigation' },
    { id: 'referral', label: 'Referral & Marketing Staff', icon: Award, category: 'Navigation' },
    { id: 'settings', label: 'System Configuration', icon: Settings, category: 'Navigation' },
    { id: 'trending', label: 'Market Insights', icon: TrendingUp, category: 'Search' },
  ].filter(item => item.label.toLowerCase().includes(search.toLowerCase()));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-zinc-900 border border-border-subtle rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-border-subtle flex items-center gap-4">
            <Search className="text-zinc-500" size={24} />
            <input 
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text" 
              placeholder="Search anything... (e.g. 'inventory', 'ST-99', 'settings')"
              className="flex-1 bg-transparent border-none text-xl text-white placeholder:text-zinc-600 outline-none font-display"
            />
            <div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-800 text-[10px] font-bold text-zinc-500 border border-border-subtle">
              <span className="text-xs">ESC</span>
            </div>
          </div>

          <div className="max-h-[50vh] overflow-y-auto custom-scrollbar p-3">
             {items.length > 0 ? (
               <div className="space-y-4">
                 {['Navigation', 'Search'].map((cat) => {
                   const catItems = items.filter(i => i.category === cat);
                   if (catItems.length === 0) return null;
                   return (
                     <div key={cat}>
                        <p className="px-3 py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">{cat}</p>
                        <div className="space-y-1">
                          {catItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                onNavigate(item.id);
                                onClose();
                              }}
                              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800 group transition-all"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-border-subtle flex items-center justify-center text-zinc-500 group-hover:text-brand transition-colors">
                                  <item.icon size={20} />
                                </div>
                                <span className="text-sm font-bold text-zinc-300 group-hover:text-white">{item.label}</span>
                              </div>
                              <ArrowRight size={16} className="text-zinc-700 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                            </button>
                          ))}
                        </div>
                     </div>
                   );
                 })}
               </div>
             ) : (
               <div className="py-20 text-center">
                 <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-600">
                    <Command size={32} />
                 </div>
                 <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">No matching results found</p>
               </div>
             )}
          </div>

          <div className="p-4 bg-zinc-900/50 border-t border-border-subtle flex items-center justify-between">
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="px-1.5 py-0.5 rounded bg-zinc-800 border border-border-subtle text-[8px] font-bold text-zinc-500">↑↓</div>
                   <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Navigate</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="px-1.5 py-0.5 rounded bg-zinc-800 border border-border-subtle text-[8px] font-bold text-zinc-500">ENTER</div>
                   <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Select</span>
                </div>
             </div>
             <div className="flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-widest opacity-80">
                <Command size={10} />
                <span>Medifast Global Search</span>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
