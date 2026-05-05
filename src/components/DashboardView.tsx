/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { 
  TrendingUp, 
  Package, 
  Truck,
  ChevronRight,
  Activity,
  ShoppingCart,
  ShoppingBag,
  ListTodo,
  Heart,
  RotateCcw,
  Clock,
  Ban,
  Archive,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ArrowRightCircle
} from 'lucide-react';

const data = [
  { name: 'Mon', orders: 40, revenue: 2400 },
  { name: 'Tue', orders: 30, revenue: 1398 },
  { name: 'Wed', orders: 20, revenue: 9800 },
  { name: 'Thu', orders: 27, revenue: 3908 },
  { name: 'Fri', orders: 18, revenue: 4800 },
  { name: 'Sat', orders: 23, revenue: 3800 },
  { name: 'Sun', orders: 34, revenue: 4300 },
];

const statusCards = [
  { label: 'Pending', value: '104', icon: Clock, color: 'brand' },
  { label: 'Accepted', value: '0', icon: CheckCircle2, color: 'success' },
  { label: 'In Process', value: '18', icon: ShoppingCart, color: 'brand' },
  { label: 'Picked Up', value: '0', icon: Package, color: 'brand' },
  { label: 'Rescheduled', value: '0', icon: RotateCcw, color: 'warning' },
  { label: 'Delivered', value: '1,969', icon: Truck, color: 'success' },
  { label: 'Cancelled', value: '157', icon: Ban, color: 'danger' },
  { label: 'Returned', value: '2', icon: Archive, color: 'danger' },
  { label: 'Due', value: '1', icon: AlertCircle, color: 'warning' },
];

const criticalProducts = [
  { id: 'PRD-102', name: 'Amoxicillin 500mg', status: 'Low Stock', value: '12 units', color: 'text-danger', bg: 'bg-danger/10' },
  { id: 'PRD-405', name: 'Surgical Masks (N95)', status: 'Expiring', value: '4 days', color: 'text-warning', bg: 'bg-warning/10' },
  { id: 'PRD-882', name: 'Insulin Glargine', status: 'Temp Alert', value: '7.2°C', color: 'text-danger', bg: 'bg-danger/10' },
];

const topCategories = [
  { name: 'Pharmaceuticals', sales: '840k', growth: '+12%', progress: 85 },
  { name: 'Surgical Equipment', sales: '520k', growth: '+5%', progress: 65 },
  { name: 'Diagnostics', sales: '310k', growth: '+18%', progress: 45 },
  { name: 'PPE & Safety', sales: '120k', growth: '-2%', progress: 30 },
];

export default function DashboardView() {
  return (
    <div className="space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 transform-gpu">
      {/* Header & Breadcrumbs - Elevating greeting and navigation context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] mb-4">
            <span className="text-brand">Main Menu</span>
            <ChevronRight size={10} className="text-border-subtle" />
            <span>Overview</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Welcome, <span className="text-brand">Rishu Admin</span>
            <span className="px-2 py-0.5 rounded-md bg-brand/10 border border-brand/20 text-[9px] font-bold text-brand uppercase tracking-widest">Active Now</span>
          </h1>
          <div className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
            Everything is running smoothly
          </div>

        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 rounded-2xl bg-surface-raised border border-border-subtle text-text-secondary font-bold text-[10px] uppercase tracking-widest hover:text-text-primary hover:border-brand/30 transition-all flex items-center gap-2 shadow-2xl">
            <Activity size={14} />
            System Status
          </button>
          <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
            <ArrowRightCircle size={14} />
            Check Orders
          </button>
        </div>
      </div>

      {/* Modernized Filter Bar */}
      <div className="modern-card p-1 border-border-subtle shadow-2xl">
        <div className="bg-surface-raised rounded-[inherit] p-8 grid grid-cols-1 md:grid-cols-4 items-end gap-6 text-text-primary">
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] px-1">Time Period</label>
            <div className="relative group">
              <select className="w-full bg-surface-base border border-border-subtle rounded-2xl px-5 py-4 text-xs font-bold uppercase tracking-widest text-text-secondary outline-none focus:border-brand/40 transition-all cursor-pointer appearance-none">
                <option>All Time</option>
                <option>Today</option>
                <option>Yesterday</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                <ChevronRight size={14} className="rotate-90" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] px-1">From Date</label>
            <div className="relative group">
              <Calendar size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" />
              <input type="text" placeholder="Select Date" className="w-full bg-surface-base border border-border-subtle rounded-2xl pl-12 pr-5 py-4 text-xs font-bold text-text-primary outline-none focus:border-brand/40 transition-all placeholder:text-text-muted" />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] px-1">To Date</label>
            <div className="relative group">
              <Calendar size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" />
              <input type="text" placeholder="Select Date" className="w-full bg-surface-base border border-border-subtle rounded-2xl pl-12 pr-5 py-4 text-xs font-bold text-text-primary outline-none focus:border-brand/40 transition-all placeholder:text-text-muted" />
            </div>
          </div>

          <button className="bg-brand text-white px-10 py-4.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(99,102,241,0.2)]">
            Update View
          </button>
        </div>
      </div>


      {/* Status Hub - Advanced Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          { label: 'Pending', val: '104', color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Accepted', val: '0', color: 'text-success', bg: 'from-success/10 to-success/5' },
          { label: 'In Process', val: '18', color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
          { label: 'Delivered', val: '1969', color: 'text-emerald-500', bg: 'from-emerald-500/10 to-emerald-500/5' },
          { label: 'Picked Up', val: '0', color: 'text-sky-500', bg: 'from-sky-500/10 to-sky-500/5' },
          { label: 'Rescheduled', val: '0', color: 'text-amber-500', bg: 'from-amber-500/10 to-amber-500/5' },
          { label: 'Cancelled', val: '157', color: 'text-rose-500', bg: 'from-danger/10 to-danger/5' },
          { label: 'Due', val: '1', color: 'text-text-primary', bg: 'from-surface-raised to-surface-base' },
        ].map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className={`modern-card p-0 overflow-hidden group hover:border-brand/40 transition-all border-border-subtle shadow-sm relative bg-gradient-to-br ${card.bg}`}
          >
            <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-current ${card.color}`} />
            
            <div className="p-8 relative z-10 flex flex-col h-full space-y-8">
              <div className="flex justify-between items-start">
                <div className={`w-14 h-14 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${card.color} shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <ShoppingCart size={24} />
                </div>
                <div className="text-right">
                  <span className="text-4xl font-display font-bold text-text-primary tracking-tight leading-none">{card.val}</span>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mt-3">Units</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.2em]">{card.label}</p>
                <div className="h-1 w-full bg-text-primary/5 rounded-full overflow-hidden border border-border-subtle">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: parseInt(card.val) > 0 ? "65%" : "0%" }}
                    className={`h-full bg-current ${card.color} opacity-40`}
                  />
                </div>
              </div>

              <button className="flex items-center justify-between group/link text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] hover:text-text-primary transition-colors pt-4 border-t border-border-subtle">
                See More Info
                <ArrowRightCircle size={14} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Analytics Visualization */}
        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="modern-card p-1 border-border-subtle shadow-2xl">
              <div className="bg-surface-raised p-0 rounded-[inherit] overflow-hidden flex flex-col h-[550px]">
                <div className="p-8 border-b border-border-subtle flex items-center justify-between">
                   <div>
                     <h2 className="text-xl font-display font-bold text-text-primary tracking-tight uppercase">Sales Activity</h2>
                     <p className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em] mt-2">Daily overview of orders and revenue</p>
                   </div>
                   <div className="flex gap-2">

                     {['M', 'W', 'D'].map(t => (
                       <button key={t} className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all ${t === 'W' ? 'bg-brand/10 border-brand/20 text-brand' : 'border-border-subtle text-text-muted hover:text-text-primary'}`}>
                         {t}
                       </button>
                     ))}
                   </div>
                </div>
                <div className="flex-1 p-8">
                   <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={data}>
                       <defs>
                         <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                         </linearGradient>
                       </defs>
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 10, fontWeight: '700' }} dy={10} className="text-text-muted" />
                       <YAxis axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 10, fontWeight: '700' }} className="text-text-muted" />
                       <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border-subtle)', borderRadius: '16px', fontSize: '10px', fontWeight: 'bold', color: 'var(--text-primary)' }}
                        itemStyle={{ color: '#6366f1' }}
                       />
                       <Area 
                        type="monotone" 
                        dataKey="orders" 
                        stroke="#6366f1" 
                        fillOpacity={1} 
                        fill="url(#chartGradient)" 
                        strokeWidth={4}
                        animationDuration={2500}
                        animateNewValues={true}
                       />
                     </AreaChart>
                   </ResponsiveContainer>
                </div>
              </div>
           </div>
        </div>

        {/* Reports Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           <div className="modern-card p-1 border-border-subtle shadow-2xl flex-1">
              <div className="bg-surface-raised p-10 rounded-[inherit] h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                   <h2 className="text-xl font-display font-bold text-text-primary tracking-tight uppercase">Today's Summary</h2>
                   <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand">
                      <ListTodo size={18} />
                   </div>
                </div>

                <div className="space-y-6 flex-1">
                   {[
                     { label: "Today's Revenue", val: '85,275.64 Tk', icon: ShoppingBag, color: 'text-success', bg: 'from-success/10 to-success/5' },
                     { label: 'Total Items In Stock', val: '25,429 Units', icon: ShoppingCart, color: 'text-indigo-400', bg: 'from-indigo-900/10 to-indigo-900/5' },
                     { label: "Total Expenses", val: '0.00 Tk', icon: Activity, color: 'text-rose-500', bg: 'from-danger/10 to-danger/5' },
                     { label: "Total Profit", val: '4,136.64 Tk', icon: Heart, color: 'text-amber-500', bg: 'from-amber-900/10 to-amber-900/5' },
                   ].map((report, i) => (

                     <div key={i} className={`p-1 rounded-3xl bg-gradient-to-br ${report.bg} border border-border-subtle group cursor-pointer hover:border-brand/20 transition-all shadow-sm`}>
                        <div className="bg-surface-raised p-6 rounded-[22px] flex items-center gap-6 shadow-2xl">
                           <div className={`w-14 h-14 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${report.color} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                              <report.icon size={22} />
                           </div>
                           <div className="flex-1 min-w-0">
                              <p className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] mb-2">{report.label}</p>
                              <p className="text-lg font-display font-bold text-text-primary truncate leading-none">{report.val}</p>
                           </div>
                           <ChevronRight size={14} className="text-text-muted group-hover:text-text-primary transition-colors" />
                        </div>
                     </div>
                   ))}
                </div>

                <button className="btn-primary w-full mt-10 py-5 !text-[10px] uppercase tracking-[0.3em]">
                   View Full Report
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
