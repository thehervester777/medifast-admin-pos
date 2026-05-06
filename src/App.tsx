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
  Calendar,
  Wallet,
  Activity,
  Sun,
  Moon,
  MessageSquare,
  Megaphone,
  Code
} from 'lucide-react';
import { Page } from './types.ts';
import { useTheme } from './context/ThemeContext.tsx';

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
import ManagementSystemView from './components/ManagementSystemView.tsx';
import ProductsView from './components/ProductsView.tsx';
import BrandsView from './components/BrandsView.tsx';
import OrderReportsView from './components/OrderReportsView.tsx';
import SupportChatView from './components/SupportChatView.tsx';
import AppNoticeView from './components/AppNoticeView.tsx';
import ApiManagementView from './components/ApiManagementView.tsx';

import MedifastLogo from './components/MedifastLogo.tsx';

import CommandPalette from './components/CommandPalette.tsx';

import LoginPage from './components/LoginPage.tsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();
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
    { id: 'order_pending' as Page, label: 'Order Reports', icon: ClipboardList, hasChildren: true, children: [
      { id: 'order_pending' as Page, label: 'Pending (123)' },
      { id: 'order_accepted' as Page, label: 'Accepted (0)' },
      { id: 'order_process' as Page, label: 'In Process (0)' },
      { id: 'order_picked' as Page, label: 'Picked Up (0)' },
      { id: 'order_rescheduled' as Page, label: 'Rescheduled (0)' },
      { id: 'order_delivered' as Page, label: 'Delivered (15)' },
      { id: 'order_cancelled' as Page, label: 'Cancelled (247)' },
      { id: 'order_returned' as Page, label: 'Returned (2735)' },
      { id: 'order_due' as Page, label: 'Due (25)' },
      { id: 'order_cancel_request' as Page, label: 'Cancel Request' }
    ]},
    { id: 'inventory' as Page, label: 'Inventory', icon: Package, hasChildren: true, children: [
      { id: 'summary' as Page, label: 'Summary' },
      { id: 'inventory' as Page, label: 'Products' }
    ]},
    { id: 'clients' as Page, label: 'Customers', icon: Users, hasChildren: true, children: [
      { id: 'admins' as Page, label: 'Team' },
      { id: 'clients' as Page, label: 'Customer List' }
    ]},
    { id: 'products' as Page, label: 'Our Products', icon: Box, hasChildren: true, children: [
      { id: 'products' as Page, label: 'Product' },
      { id: 'inventory' as Page, label: 'Category' },
      { id: 'inventory' as Page, label: 'Subcategory' },
      { id: 'inventory' as Page, label: 'Child Category' },
      { id: 'brands' as Page, label: 'Brand' }
    ]},
    { id: 'discounts' as Page, label: 'Discounts', icon: Tags, hasChildren: true },
    { id: 'logistics' as Page, label: 'Shipping', icon: Truck, hasChildren: true },
    { id: 'analytics' as Page, label: 'Reports', icon: BarChart3, hasChildren: true },
    { id: 'management' as Page, label: 'Management', icon: Wallet, hasChildren: true, children: [
      { id: 'management' as Page, label: 'Financials' },
      { id: 'analytics' as Page, label: 'Performance' },
      { id: 'admins' as Page, label: 'Team Admin' }
    ]},
    { id: 'b2b' as Page, label: 'Stores', icon: Handshake, hasChildren: true },
    { id: 'referral' as Page, label: 'Referrals', icon: Award, hasChildren: true, children: [
      { id: 'referral' as Page, label: 'Overview' },
      { id: 'referral_generate' as Page, label: 'Create Code' },
      { id: 'referral_manage' as Page, label: 'Manage Codes' },
      { id: 'referral_customers' as Page, label: 'Customers' }
    ]},
    { id: 'support' as Page, label: 'Support Chat', icon: MessageSquare },
    { id: 'notice' as Page, label: 'App Notice', icon: Megaphone },
    { id: 'api' as Page, label: 'API Option', icon: Code },
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
          width: isSidebarOpen ? (windowWidth <= 1024 ? 300 : 280) : (windowWidth <= 1024 ? 0 : 88),
          x: isSidebarOpen || windowWidth > 1024 ? 0 : -320
        }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 25,
          mass: 0.8
        }}
        className="fixed lg:sticky top-0 h-screen z-50 p-4 shrink-0 pointer-events-none"
      >
        <div className="h-full w-full glass-panel rounded-[2.5rem] flex flex-col pointer-events-auto border-border-subtle shadow-2xl relative overflow-hidden group/sidebar transition-shadow duration-500 hover:shadow-brand/10">
          {/* Animated Floating Border Glow */}
          <div className="absolute -inset-[2px] opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,var(--brand)_15%,var(--brand)_25%,transparent_50%,var(--brand)_65%,var(--brand)_75%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-40 blur-xl" />
          </div>
          
          <div className="relative h-full w-full flex flex-col z-10 bg-surface-base/80 backdrop-blur-xl">
            {/* Logo Section */}
            <div className={`py-12 h-24 flex items-center gap-4 overflow-hidden shrink-0 transition-all duration-500
              ${isSidebarOpen ? 'px-8 justify-start' : 'px-0 justify-center'}`}>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <MedifastLogo />
            </div>
            <AnimatePresence mode="popLayout">
              {isSidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0, x: -10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -10, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4 }}
                  className="font-display font-bold text-xl text-text-primary tracking-tight whitespace-nowrap"
                >
                  Medi<span className="text-brand relative">fast<span className="absolute -top-1 -right-4 text-[7px] bg-brand/20 text-brand px-1 rounded-sm border border-brand/30 leading-none py-0.5 font-sans">PRO</span></span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <nav className="flex-1 space-y-2 py-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
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
                    ${isSidebarOpen ? 'justify-start px-6' : 'justify-center px-0'}
                    ${currentPage === item.id 
                      ? 'text-text-primary' 
                      : 'text-text-muted hover:text-text-primary hover:bg-text-primary/5'
                    }`}
                >
                  {currentPage === item.id && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute inset-0 bg-brand/10 border border-brand/20 rounded-2xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                    />
                  )}
                  <item.icon size={20} className={`relative z-10 transition-colors shrink-0 ${currentPage === item.id ? 'text-brand' : 'group-hover:text-text-primary'}`} strokeWidth={currentPage === item.id ? 3 : 2} />
                  <AnimatePresence mode="popLayout">
                    {isSidebarOpen && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10, width: 0 }}
                        animate={{ opacity: 1, x: 0, width: "auto" }}
                        exit={{ opacity: 0, x: -10, width: 0 }}
                        className="flex-1 flex items-center justify-between relative z-10 overflow-hidden"
                      >
                        <span className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${currentPage === item.id ? 'text-text-primary' : 'text-text-muted group-hover:text-text-secondary'}`}>
                          {item.label}
                        </span>
                        {item.hasChildren && (
                          <ChevronRight 
                            size={14} 
                            className={`transition-transform duration-300 shrink-0 ${expandedItems[item.id] ? 'rotate-90' : ''} ${currentPage === item.id ? 'text-brand' : 'text-border-subtle group-hover:text-text-muted'}`}
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
                            className={`w-full text-left py-2 px-3 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center gap-3 ${currentPage === sub.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full border ${currentPage === sub.id ? 'bg-brand border-brand' : 'border-border-subtle'}`} />
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <div className="py-2">
              <div className="h-[1px] bg-border-subtle/30 mx-6 mb-2" />
              <button
                onClick={() => {
                  setCurrentPage('settings');
                  if (windowWidth <= 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all relative group overflow-hidden
                  ${isSidebarOpen ? 'justify-start px-6' : 'justify-center px-0'}
                  ${currentPage === 'settings' 
                    ? 'text-text-primary' 
                    : 'text-text-muted hover:text-text-primary hover:bg-text-primary/5'
                  }`}
              >
                {currentPage === 'settings' && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-brand/10 border border-brand/20 rounded-2xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                  />
                )}
                <Settings size={20} className={`relative z-10 transition-colors shrink-0 ${currentPage === 'settings' ? 'text-brand' : 'group-hover:text-text-primary'}`} strokeWidth={currentPage === 'settings' ? 3 : 2} />
                <AnimatePresence mode="popLayout">
                  {isSidebarOpen && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: "auto" }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      className="flex-1 flex items-center relative z-10 overflow-hidden"
                    >
                      <span className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${currentPage === 'settings' ? 'text-text-primary' : 'text-text-muted group-hover:text-text-secondary'}`}>
                        Settings
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>

          {/* User Account & Branding */}
          <div className="p-4 mt-auto border-t border-border-subtle space-y-4">
            <button className={`w-full flex items-center gap-4 p-2.5 rounded-3xl group hover:bg-text-primary/5 transition-all text-left overflow-hidden
              ${isSidebarOpen ? 'justify-start px-4' : 'justify-center px-0'}`}>
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
                    <p className="text-xs font-bold text-text-primary truncate text-ellipsis">Rishu Admin</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                       <span className="text-[9px] text-text-muted font-bold uppercase tracking-tight truncate text-ellipsis">Superuser</span>
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
                <div className="flex items-center gap-3 text-[9px] font-bold text-text-muted uppercase tracking-[0.3em]">
                  <div className="h-[1px] flex-1 bg-border-subtle" />
                  <span className="whitespace-nowrap hover:text-text-primary transition-colors cursor-default">Anon Studios</span>
                  <div className="h-[1px] flex-1 bg-border-subtle" />
                </div>
              </motion.div>
            )}
          </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative min-w-0" style={{ transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {/* Modern Header */}
        <header className="h-24 px-8 flex items-center justify-between sticky top-0 z-40 bg-surface-base/80 backdrop-blur-xl border-b border-border-subtle">
          <div className="flex items-center gap-6 max-w-2xl flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 rounded-2xl hover:bg-text-primary/5 text-text-muted transition-colors"
            >
              {isSidebarOpen && windowWidth <= 1024 ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div 
              onClick={() => setIsSearchOpen(true)}
              className="relative flex-1 max-w-md group cursor-pointer"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-brand transition-colors" size={16} />
              <div className="w-full pl-12 pr-4 py-3 bg-text-primary/5 border border-border-subtle group-hover:border-brand/40 rounded-[1.25rem] text-sm text-text-muted flex items-center justify-between transition-all shadow-sm">
                <span>Search anything...</span>
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-base text-[10px] font-bold text-text-muted border border-border-subtle shadow-sm">
                  <span className="text-[12px] leading-none">⌘</span>K
                </div>
              </div>
            </div>
          </div>


          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-1.5 p-1.5 bg-surface-panel/50 border border-border-subtle rounded-[1.25rem]">
              {['Today', '7D', 'Custom'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setSelectedRange(t)}
                  className={`px-5 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest
                    ${selectedRange === t 
                      ? 'bg-text-primary text-surface-base shadow-lg shadow-text-primary/10' 
                      : 'text-text-muted hover:text-text-primary'
                    }`}
                >
                  {t === 'Custom' ? <Calendar size={14} className="inline mr-2 -mt-0.5" /> : null}
                  {t}
                </button>
              ))}
            </div>
            
            <div className="h-8 w-[1px] bg-border-subtle" />
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-3 bg-text-primary/5 hover:bg-text-primary/10 rounded-[1.25rem] border border-border-subtle transition-all group"
                title={theme === 'light' ? 'Switch to Night Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-text-secondary group-hover:text-text-primary" />
                ) : (
                  <Sun size={20} className="text-text-secondary group-hover:text-text-primary" />
                )}
              </button>

              <button className="relative p-3 bg-text-primary/5 hover:bg-text-primary/10 rounded-[1.25rem] border border-border-subtle transition-all group">
                <Bell size={20} className="text-text-secondary group-hover:text-text-primary" />
                <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-brand rounded-full ring-4 ring-surface-base" />
              </button>
              
              <button className="btn-primary group">
                <Plus size={18} className="inline mr-2 -mt-0.5" />
                Quick Action
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Content Port */}
        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar px-8 py-8 will-change-scroll">
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
              {currentPage === 'order_pending' && <OrderReportsView activeStatus="Pending" />}
              {currentPage === 'order_accepted' && <OrderReportsView activeStatus="Accepted" />}
              {currentPage === 'order_process' && <OrderReportsView activeStatus="In Process" />}
              {currentPage === 'order_picked' && <OrderReportsView activeStatus="Picked Up" />}
              {currentPage === 'order_rescheduled' && <OrderReportsView activeStatus="Rescheduled" />}
              {currentPage === 'order_delivered' && <OrderReportsView activeStatus="Delivered" />}
              {currentPage === 'order_cancelled' && <OrderReportsView activeStatus="Cancelled" />}
              {currentPage === 'order_returned' && <OrderReportsView activeStatus="Returned" />}
              {currentPage === 'order_due' && <OrderReportsView activeStatus="Due" />}
              {currentPage === 'order_cancel_request' && <OrderReportsView activeStatus="Cancel Request" />}
              {currentPage === 'inventory' && <InventoryView />}
              {currentPage === 'orders' && <OrderTrackingView />}
              {currentPage === 'summary' && <SummaryView />}
              {currentPage === 'analytics' && <AnalyticsView />}
              {currentPage === 'logistics' && <LogisticsView />}
              {currentPage === 'clients' && <ClientManagementView />}
              {currentPage === 'admins' && <AdminManagementView />}
              {currentPage === 'b2b' && <B2BModuleView />}
              {currentPage === 'products' && <ProductsView />}
              {currentPage === 'brands' && <BrandsView />}
              {currentPage === 'support' && <SupportChatView />}
              {currentPage === 'notice' && <AppNoticeView />}
              {currentPage === 'api' && <ApiManagementView />}
              {currentPage === 'referral' && <ReferralView />}
              {currentPage === 'management' && <ManagementSystemView />}
              {currentPage === 'settings' && <SettingsView />}
              {['discounts'].includes(currentPage) && (
                <div className="modern-card p-12 text-center border-border-subtle shadow-sm bg-surface-panel/30">
                  <Package size={48} className="mx-auto text-text-muted/60 mb-6" />
                  <h2 className="text-2xl font-display font-bold text-text-primary mb-2">Module Under Construction</h2>
                  <p className="text-text-muted font-medium">The {currentPage} management interface is currently being optimized.</p>
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


