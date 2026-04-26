/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  Box, 
  Tags,
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
import SummaryView from './components/SummaryView.tsx';
import AdminManagementView from './components/AdminManagementView.tsx';

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
      if (width <= 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
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

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const navItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders' as Page, label: 'Order Reports', icon: ClipboardList, hasChildren: true },
    { id: 'inventory' as Page, label: 'Inventory', icon: Package, hasChildren: true, children: [
      { id: 'summary' as Page, label: 'Summary' },
      { id: 'inventory' as Page, label: 'Detailed View' }
    ]},
    { id: 'clients' as Page, label: 'Users', icon: Users, hasChildren: true, children: [
      { id: 'admins' as Page, label: 'Admin' },
      { id: 'clients' as Page, label: 'Users' }
    ]},
    { id: 'products' as Page, label: 'Our Products', icon: Box, hasChildren: true },
    { id: 'discounts' as Page, label: 'Discounts', icon: Tags, hasChildren: true },
    { id: 'logistics' as Page, label: 'Logistics', icon: Truck, hasChildren: true },
    { id: 'analytics' as Page, label: 'Analytics', icon: BarChart3, hasChildren: true },
    { id: 'b2b' as Page, label: 'B2B Module', icon: Handshake, hasChildren: true },
    { id: 'referral' as Page, label: 'Referral Module', icon: Award, hasChildren: true, children: [
      { id: 'referral' as Page, label: 'Dashboard' },
      { id: 'referral_generate' as Page, label: 'Generate Code' },
      { id: 'referral_manage' as Page, label: 'Manage Codes' },
      { id: 'referral_customers' as Page, label: 'Customer List' }
    ]},
  ];

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-surface-base font-sans selection:bg-brand/30">
      {/* Mobile Sidebar Overlay */}
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

      {/* Floating Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? (windowWidth <= 1024 ? 280 : 260) : (windowWidth <= 1024 ? 0 : 88),
          x: isSidebarOpen || windowWidth > 1024 ? 0 : -300
        }}
        className="fixed lg:sticky top-0 h-screen z-50 p-4 shrink-0 pointer-events-none"
      >
        <div className="h-full glass-panel rounded-[2.5rem] flex flex-col pointer-events-auto border-white/[0.03] shadow-2xl relative overflow-hidden">
          {/* Logo Section */}
          <div className="px-6 py-8 h-20 flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20 shrink-0">
              <Package size={22} />
            </div>
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-display font-bold text-xl text-white tracking-tight whitespace-nowrap"
                >
                  Medi<span className="text-brand relative">fast<span className="absolute -top-1 -right-4 text-[7px] bg-brand/20 text-brand px-1 rounded-sm border border-brand/30 leading-none py-0.5 font-sans">PRO</span></span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <nav className="flex-1 px-4 space-y-2 py-4 overflow-y-auto custom-scrollbar">
            {navItems.map((item) => (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => {
                    setCurrentPage(item.id);
                    if (windowWidth <= 1024) setIsSidebarOpen(false);
                    if (item.hasChildren) {
                      setExpandedItems(prev => ({ ...prev, [item.id]: !prev[item.id] }));
                    }
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all relative group overflow-hidden
                    ${currentPage === item.id 
                      ? 'text-white' 
                      : 'text-zinc-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {currentPage === item.id && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute inset-0 bg-brand/10 border border-brand/20 rounded-2xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    />
                  )}
                  <item.icon size={20} className={`relative z-10 transition-colors ${currentPage === item.id ? 'text-brand' : 'group-hover:text-white'}`} strokeWidth={currentPage === item.id ? 2.5 : 2} />
                  <AnimatePresence mode="popLayout">
                    {isSidebarOpen && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex-1 flex items-center justify-between relative z-10 overflow-hidden"
                      >
                        <span className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${currentPage === item.id ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-300'}`}>
                          {item.label}
                        </span>
                        {item.hasChildren && (
                          <ChevronRight 
                            size={14} 
                            className={`transition-transform duration-300 ${expandedItems[item.id] ? 'rotate-90' : ''} ${currentPage === item.id ? 'text-brand' : 'text-zinc-800 group-hover:text-zinc-600'}`}
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <AnimatePresence>
                  {isSidebarOpen && item.hasChildren && expandedItems[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-4 py-2 space-y-1">
                        {(item.children || [{ label: 'All Records', id: item.id }, { label: 'Detailed View', id: item.id }]).map((sub: any) => (
                          <button
                            key={sub.label}
                            onClick={() => {
                              setCurrentPage(sub.id);
                              if (windowWidth <= 1024) setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left py-2 px-3 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center gap-3 ${currentPage === sub.id ? 'text-white' : 'text-zinc-600 hover:text-white'}`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full border ${currentPage === sub.id ? 'bg-brand border-brand' : 'border-zinc-700'}`} />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <div className="py-4">
              <div className="h-[1px] bg-white/[0.03] mx-4 mb-4" />
              <button
                onClick={() => setCurrentPage('settings')}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all relative group
                  ${currentPage === 'settings' 
                    ? 'text-white' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                  }`}
              >
                {currentPage === 'settings' && (
                  <motion.div layoutId="active-nav" className="absolute inset-0 bg-white/5 border border-white/5 rounded-2xl" />
                )}
                <Settings size={20} className={`relative z-10 ${currentPage === 'settings' ? 'text-brand' : 'group-hover:text-white'}`} />
                {isSidebarOpen && <span className="text-sm font-semibold relative z-10 tracking-tight">Settings</span>}
              </button>
            </div>
          </nav>

          {/* User Account & Branding */}
          <div className="p-4 mt-auto border-t border-white/[0.03] space-y-4">
            <button className="w-full flex items-center gap-4 p-2.5 rounded-3xl group hover:bg-white/5 transition-colors text-left overflow-hidden">
              <div className="relative shrink-0">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin&backgroundColor=121214" alt="User" className="w-10 h-10 rounded-2xl shrink-0" />
                 <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-surface-raised rounded-full" />
              </div>
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex-1 min-w-0"
                  >
                    <p className="text-xs font-bold text-white truncate text-ellipsis">Rishu Admin</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                       <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-tight truncate text-ellipsis">Superuser</span>
                       <div className="w-1 h-1 rounded-full bg-brand" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {isSidebarOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4"
              >
                <div className="flex items-center gap-3 text-[9px] font-bold text-zinc-700 uppercase tracking-[0.3em]">
                  <div className="h-[1px] flex-1 bg-white/[0.03]" />
                  <span className="whitespace-nowrap hover:text-white transition-colors cursor-default">Anon Studios</span>
                  <div className="h-[1px] flex-1 bg-white/[0.03]" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative min-w-0 transition-all duration-500">
        {/* Modern Header */}
        <header className="h-24 px-8 flex items-center justify-between sticky top-0 z-40 bg-surface-base/80 backdrop-blur-xl border-b border-white/[0.03]">
          <div className="flex items-center gap-6 max-w-2xl flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 rounded-2xl hover:bg-white/5 text-zinc-500 transition-colors"
            >
              {isSidebarOpen && windowWidth <= 1024 ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div 
              onClick={() => setIsSearchOpen(true)}
              className="relative flex-1 max-w-md group cursor-pointer"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-brand transition-colors" size={16} />
              <div className="w-full pl-12 pr-4 py-3 bg-white/[0.02] border border-white/[0.05] group-hover:border-white/10 rounded-[1.25rem] text-sm text-zinc-500 flex items-center justify-between transition-all">
                <span>Enterprise Search...</span>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-950 text-[10px] font-bold text-zinc-500 border border-white/5">
                  <span className="text-[12px] leading-none">⌘</span>K
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-1.5 p-1.5 bg-zinc-950/50 border border-white/[0.03] rounded-[1.25rem]">
              {['Today', '7D', 'Custom'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setSelectedRange(t)}
                  className={`px-5 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest
                    ${selectedRange === t 
                      ? 'bg-white text-black shadow-lg shadow-white/10' 
                      : 'text-zinc-500 hover:text-white'
                    }`}
                >
                  {t === 'Custom' ? <Calendar size={14} className="inline mr-2 -mt-0.5" /> : null}
                  {t}
                </button>
              ))}
            </div>
            
            <div className="h-8 w-[1px] bg-white/[0.05]" />
            
            <div className="flex items-center gap-3">
              <button className="relative p-3 bg-white/[0.02] hover:bg-white/[0.05] rounded-[1.25rem] border border-white/[0.05] transition-all group">
                <Bell size={20} className="text-zinc-400 group-hover:text-white" />
                <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-brand rounded-full ring-4 ring-surface-base" />
              </button>
              
              <button className="btn-primary group">
                <Plus size={18} className="inline mr-2 -mt-0.5" />
                Capture POD
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Content Port */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-7xl mx-auto pb-12"
            >
              {currentPage === 'dashboard' && <DashboardView />}
              {currentPage === 'inventory' && <InventoryView />}
              {currentPage === 'orders' && <OrderTrackingView />}
              {currentPage === 'summary' && <SummaryView />}
              {currentPage === 'analytics' && <AnalyticsView />}
              {currentPage === 'logistics' && <LogisticsView />}
              {currentPage === 'clients' && <ClientManagementView />}
              {currentPage === 'admins' && <AdminManagementView />}
              {currentPage === 'b2b' && <B2BModuleView />}
              {currentPage === 'referral' && <ReferralView />}
              {currentPage === 'settings' && <SettingsView />}
              {['products', 'discounts'].includes(currentPage) && (
                <div className="modern-card p-12 text-center">
                  <Package size={48} className="mx-auto text-zinc-800 mb-6" />
                  <h2 className="text-2xl font-display font-bold text-white mb-2">Module Under Construction</h2>
                  <p className="text-zinc-500 font-medium">The {currentPage} management interface is currently being optimized.</p>
                </div>
              )}
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


