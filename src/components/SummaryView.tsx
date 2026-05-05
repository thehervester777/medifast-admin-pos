/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  BarChart3, 
  Gem,
  ShoppingCart,
  Bookmark,
  DollarSign
} from 'lucide-react';

export default function SummaryView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-display font-medium text-text-primary/60 tracking-tight">
          Medi<span className="text-brand font-bold uppercase tracking-widest ml-2">fast Summary</span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-text-muted font-medium">
          <span>Home</span>
          <ChevronRight size={12} />
          <span>Medifast</span>
          <ChevronRight size={12} />
          <span>Inventory</span>
          <ChevronRight size={12} />
          <span className="text-text-secondary">Summary</span>
        </div>
      </div>

      {/* Date Filters */}
      <div className="modern-card p-6 flex flex-wrap items-end gap-6 bg-surface-panel/30 border-border-subtle shadow-sm">
        <div className="space-y-2 flex-1 min-w-[250px]">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">Start Date</label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
            <input type="text" placeholder="Select Date" className="w-full bg-surface-base border border-border-subtle rounded-xl px-4 py-3 pl-11 text-xs text-text-primary outline-none focus:border-brand/40 transition-all font-medium placeholder:text-text-muted shadow-sm" />
          </div>
        </div>
        <div className="space-y-2 flex-1 min-w-[250px]">
          <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">End Date</label>
          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
            <input type="text" placeholder="Select Date" className="w-full bg-surface-base border border-border-subtle rounded-xl px-4 py-3 pl-11 text-xs text-text-primary outline-none focus:border-brand/40 transition-all font-medium placeholder:text-text-muted shadow-sm" />
          </div>
        </div>
        <button className="btn-success px-10 py-3 uppercase tracking-[0.2em] !text-[10px] shadow-lg shadow-success/20">
          Apply Filters
        </button>
      </div>

      {/* Stock Reports Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 bg-brand rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            <h3 className="text-lg font-display font-bold text-text-primary tracking-tight leading-none">Stock Metrics</h3>
          </div>
          <button className="text-[10px] font-bold text-text-muted hover:text-brand transition-colors uppercase tracking-widest">Analytics Deep Dive</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Product', value: '3,124', color: 'text-amber-500', bg: 'from-amber-500/10 to-amber-500/5', icon: CheckCircle2 },
            { label: 'Inventory (Pcs)', value: '25,429', color: 'text-emerald-500', bg: 'from-emerald-500/10 to-emerald-500/5', icon: MessageSquare },
            { label: 'Asset Value', value: '6.39M', color: 'text-blue-500', bg: 'from-blue-500/10 to-blue-500/5', icon: BarChart3 },
            { label: 'Market Proj', value: '6.76M', color: 'text-teal-500', bg: 'from-teal-500/10 to-teal-500/5', icon: Gem },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`modern-card bg-gradient-to-br ${item.bg} relative overflow-hidden group border border-border-subtle shadow-sm`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className={`w-8 h-8 rounded-lg bg-surface-base flex items-center justify-center ${item.color} mb-4 border border-border-subtle shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={16} />
                  </div>
                  <p className="text-3xl font-display font-bold text-text-primary mb-1 leading-none">{item.value}</p>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{item.label}</p>
                </div>
              </div>
              <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 ${item.color}`}>
                <item.icon size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monthly Transaction Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            <h3 className="text-lg font-display font-bold text-text-primary tracking-tight leading-none">Fiscal Flow</h3>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Inflow</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Outflow</span>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Aggregate Sales', value: '8.16M', color: 'text-blue-500', bg: 'from-blue-500/10 to-blue-500/5', icon: ShoppingCart, trend: '+12.4%' },
            { label: 'Operational OpEx', value: '0.00', color: 'text-rose-500', bg: 'from-rose-500/10 to-rose-500/5', icon: Bookmark, trend: 'Stable' },
            { label: 'Net Profitability', value: '406.95K', color: 'text-emerald-500', bg: 'from-emerald-500/10 to-emerald-500/5', icon: DollarSign, trend: '+8.2%' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              whileHover={{ scale: 1.02 }}
              className={`modern-card bg-gradient-to-tr ${item.bg} flex items-start gap-4 border border-border-subtle group shadow-sm`}
            >
              <div className={`p-3 rounded-2xl bg-surface-base border border-border-subtle ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{item.label}</p>
                  <span className={`text-[9px] font-bold ${item.trend.startsWith('+') ? 'text-success' : 'text-text-muted'}`}>{item.trend}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-display font-bold text-text-primary truncate group-hover:text-glow transition-all">
                    {item.value}
                  </p>
                  <span className="text-[11px] font-bold text-text-muted">SR</span>
                </div>
                <div className="w-full h-[1px] bg-border-subtle/50 my-4" />
                <div className="flex items-center justify-between">
                   <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Ledger Balance</p>
                   <ChevronRight size={12} className="text-text-muted" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
