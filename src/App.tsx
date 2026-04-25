/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ClipboardList, 
  Users, 
  Truck, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Plus, 
  ChevronRight,
  LogOut,
  HelpCircle,
  Menu,
  X,
  Handshake,
  Award,
  Calendar
} from 'lucide-react';
import { Page } from './types.ts';

// Import views
import DashboardView from './components/DashboardView.tsx';
import InventoryView from './components/InventoryView.tsx';
import OrderTrackingView from './components/OrderTrackingView.tsx';
import AnalyticsView from './components/AnalyticsView.tsx';
import LogisticsView from './components/LogisticsView.tsx';
import ClientManagementView from './components/ClientManagementView.tsx';
import SettingsView from './components/SettingsView.tsx';
import B2BModuleView from './components/B2BModuleView.tsx';
import ReferralView from './components/ReferralView.tsx';

import CommandPalette from './components/CommandPalette.tsx';

import LoginPage from './components/LoginPage.tsx';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedRange, setSelectedRange] = useState('Today');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'dashboard' as Page, label: 'Overview Dashboard', icon: LayoutDashboard },
    { id: 'inventory' as Page, label: 'Inventory Management', icon: Package },
    { id: 'orders' as Page, label: 'Order Tracking', icon: ClipboardList },
    { id: 'clients' as Page, label: 'Client Management', icon: Users },
    { id: 'b2b' as Page, label: 'B2B Module', icon: Handshake },
    { id: 'referral' as Page, label: 'Referral & Staff', icon: Award },
    { id: 'logistics' as Page, label: 'Logistics & Shipments', icon: Truck },
    { id: 'analytics' as Page, label: 'Analytics & Insights', icon: BarChart3 },
  ];

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen bg-surface-base overflow-hidden font-sans text-zinc-100">
      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && windowWidth <= 1024 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? (windowWidth <= 1024 ? 300 : 280) : (windowWidth <= 1024 ? 0 : 80),
          x: isSidebarOpen || windowWidth > 1024 ? 0 : -300
        }}
        className={`sidebar-gradient border-r border-border-subtle flex flex-col z-50 fixed lg:relative h-full shrink-0 ${!isSidebarOpen && windowWidth <= 1024 ? 'hidden' : 'flex'}`}
      >
        <div className="p-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand/20 shrink-0">
              <Package size={24} />
            </div>
            {isSidebarOpen && (
              <span className="font-display font-bold text-xl text-white tracking-tight">Medifast</span>
            )}
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 py-4 overflow-y-auto custom-scrollbar">
          <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest px-4 mb-2 overflow-hidden">
            {isSidebarOpen ? 'Main Menu' : '•••'}
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                currentPage === item.id 
                ? 'bg-brand text-white shadow-xl shadow-brand/20' 
                : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-white'
              }`}
            >
              <item.icon size={18} className={`${currentPage === item.id ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
              {isSidebarOpen && (
                <span className="font-bold whitespace-nowrap text-xs tracking-tight">{item.label}</span>
              )}
              {currentPage === item.id && !isSidebarOpen && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white rounded-l-full" />
              )}
            </button>
          ))}

          <div className="pt-6">
            <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest px-4 mb-2 overflow-hidden">
              {isSidebarOpen ? 'System' : '•••'}
            </div>
            <button
              onClick={() => setCurrentPage('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                currentPage === 'settings' 
                ? 'bg-brand text-white shadow-xl shadow-brand/20' 
                : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-white'
              }`}
            >
              <Settings size={18} className={currentPage === 'settings' ? 'text-white' : 'group-hover:rotate-45 transition-transform'} />
              {isSidebarOpen && <span className="font-bold text-xs tracking-tight">Settings & Roles</span>}
            </button>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-3 mt-auto border-t border-border-subtle">
          <div className={`group flex items-center gap-3 p-2 rounded-xl transition-all duration-300 ${isSidebarOpen ? 'bg-zinc-900 border border-border-subtle hover:bg-zinc-800' : 'hover:bg-zinc-900'} cursor-pointer`}>
            <div className="relative">
               <img 
                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Stanley&backgroundColor=121214" 
                 alt="User" 
                 className="w-8 h-8 rounded-lg bg-zinc-800 shrink-0" 
               />
               <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-surface-panel rounded-full" />
            </div>
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-white truncate leading-none mb-0.5">Stanley Admin</p>
                <p className="text-[9px] font-bold text-zinc-500 truncate uppercase tracking-widest">Super Admin</p>
              </div>
            )}
            {isSidebarOpen && <ChevronRight size={16} className="text-zinc-600 group-hover:text-brand group-hover:translate-x-0.5 transition-all" />}
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-full">
        {/* Top Header */}
        <header className="h-20 bg-surface-base border-b border-border-subtle flex items-center justify-between px-4 lg:px-8 z-40 shrink-0">
          <div className="flex items-center gap-4 lg:gap-6 flex-1 max-w-2xl">
              <button 
                 onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                 className="p-2.5 hover:bg-zinc-900 rounded-xl text-zinc-500 active:scale-95 transition-all"
               >
                {isSidebarOpen && windowWidth <= 1024 ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div 
                 onClick={() => setIsSearchOpen(true)}
                 className="relative flex-1 group cursor-pointer max-w-[400px]"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-brand transition-colors" size={18} />
                <div className="w-full pl-11 pr-4 py-2.5 bg-zinc-900 border border-transparent group-hover:border-brand/30 rounded-xl text-sm font-medium text-zinc-600 flex items-center justify-between transition-all">
                  <span className="truncate">Search...</span>
                  <div className="hidden sm:flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-zinc-800 text-[10px] font-bold text-zinc-500">
                    <span className="text-[12px] leading-none">⌘</span>K
                  </div>
                </div>
              </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden md:flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              {['Today', '7D', '30D'].map((t) => (
                <button 
                  key={t} 
                  onClick={() => setSelectedRange(t)}
                  className={`px-4 py-2 text-[10px] font-bold rounded-lg transition-all uppercase tracking-wider ${selectedRange === t ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {t}
                </button>
              ))}
              <div className="w-[1px] h-4 bg-zinc-800 mx-1" />
              <button 
                onClick={() => setSelectedRange('Custom')}
                className={`px-4 py-2 flex items-center gap-2 text-[10px] font-bold rounded-lg transition-all uppercase tracking-wider ${selectedRange === 'Custom' ? 'bg-zinc-800 text-brand shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <Calendar size={12} />
                {selectedRange === 'Custom' ? 'May 20 - May 25' : 'Custom'}
              </button>
            </div>
            
            <div className="hidden sm:block h-8 w-[1px] bg-border-subtle" />
            
            <div className="flex items-center gap-2">
               <button className="relative p-2.5 text-zinc-500 hover:bg-zinc-900 rounded-xl transition-all active:scale-90">
                 <Bell size={20} />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-surface-base" />
               </button>
            </div>
            
            <button className="flex items-center justify-center bg-white text-black p-3 lg:px-6 lg:py-3 rounded-xl text-sm font-bold hover:bg-zinc-200 active:scale-[0.97] transition-all">
              <Plus size={18} />
              <span className="hidden lg:inline ml-2">Capture POD</span>
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 bg-surface-base custom-scrollbar">
           <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[1600px] mx-auto"
              >
                {currentPage === 'dashboard' && <DashboardView />}
                {currentPage === 'inventory' && <InventoryView />}
                {currentPage === 'orders' && <OrderTrackingView />}
                {currentPage === 'analytics' && <AnalyticsView />}
                {currentPage === 'logistics' && <LogisticsView />}
                {currentPage === 'clients' && <ClientManagementView />}
                {currentPage === 'b2b' && <B2BModuleView />}
                {currentPage === 'referral' && <ReferralView />}
                {currentPage === 'settings' && <SettingsView />}
              </motion.div>
           </AnimatePresence>
        </div>

        <CommandPalette 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
          onNavigate={(page) => setCurrentPage(page as Page)}
        />
      </main>
    </div>
  );
}


