/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  MoreVertical,
  AlertCircle,
  CheckCircle2,
  Package,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Grid,
  List as ListIcon,
  Scan,
  Plus
} from 'lucide-react';

const mockInventory = [
  { id: '1', name: 'N95 Surgical Masks (Box of 50)', sku: 'MSK-N95-001', category: 'PPE', ndc: '0813-4921-01', cost: '$45.00', onHand: 1240, status: 'In Stock', manufacturer: 'MedEquip Inc.' },
  { id: '2', name: 'Insulin Syringes 1cc', sku: 'SYN-1CC-100', category: 'Surgical Supplies', ndc: '4928-1102-55', cost: '$12.50', onHand: 12, status: 'Low Stock', manufacturer: 'PharmaCorp' },
  { id: '3', name: 'Saline IV Solution 500ml', sku: 'IV-SAL-500', category: 'Pharmaceuticals', ndc: '1192-8834-02', cost: '$8.75', onHand: 450, status: 'Expiring Soon', manufacturer: 'Global Health' },
  { id: '4', name: 'Digital Thermometer Pro', sku: 'DTM-PRO-01', category: 'Diagnostics', ndc: '7732-1099-44', cost: '$24.00', onHand: 0, status: 'Out of Stock', manufacturer: 'MedEquip Inc.' },
];

export default function InventoryView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="space-y-6 transform-gpu">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-2">
        <div>
          <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Inventory Management
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Active</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Manage products and track stock levels</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl border border-border-subtle text-text-muted font-bold text-[10px] uppercase tracking-widest bg-surface-base hover:bg-text-primary/5 hover:text-text-primary transition-all flex items-center gap-2">
              <Scan size={14} />
              Scan Barcode
           </button>
           <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
              <Plus size={14} />
              Add Product
           </button>
        </div>
      </div>

      {/* Top Banner Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="modern-card p-0 bg-rose-600 border-none relative overflow-hidden group shadow-lg shadow-rose-600/20">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-all duration-700" />
           <div className="p-8 relative z-10 flex flex-col h-full">
              <h3 className="text-[10px] font-bold mb-6 tracking-[0.2em] uppercase text-white/50">Stock Overview</h3>
              <div className="flex items-center gap-8 flex-1">
                 <div className="space-y-3">
                    {[
                      { label: 'In Stock', value: '8,432', color: 'bg-white' },
                      { label: 'Low Stock', value: '412', color: 'bg-rose-300' },
                      { label: 'Out of Stock', value: '84', color: 'bg-rose-900' }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">{s.label}</span>
                        <span className="text-lg font-display font-bold text-white ml-auto leading-none">{s.value}</span>
                      </div>
                    ))}
                 </div>
                 <div className="relative w-24 h-24 flex items-center justify-center ml-auto">
                    <svg className="w-full h-full -rotate-90">
                       <circle cx="48" cy="48" r="42" fill="transparent" stroke="white" strokeWidth="6" strokeOpacity="0.1" />
                       <circle 
                          cx="48" cy="48" r="42" fill="transparent" stroke="white" strokeWidth="6" 
                          strokeDasharray={2 * Math.PI * 42} 
                          strokeDashoffset={(2 * Math.PI * 42) * (1 - 0.92)} 
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                       />
                    </svg>
                    <div className="absolute font-display font-bold text-xl text-white">92%</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="modern-card p-0 bg-brand border-none relative overflow-hidden group shadow-lg shadow-brand/20">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-all duration-700" />
           <div className="p-8 relative z-10 h-full flex flex-col">
              <h3 className="text-[10px] font-bold mb-6 tracking-[0.2em] uppercase text-white/50">Supply Status</h3>
              <div className="flex gap-4 items-end flex-1">
                 {[
                    { label: 'Restock', val: 1240, h: 'h-24', color: 'bg-white/10' },
                    { label: 'In Transit', val: 3850, h: 'h-32', color: 'bg-white/30' },
                    { label: 'Returned', val: 42, h: 'h-12', color: 'bg-white/5' },
                 ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                       <span className="text-[8px] font-bold uppercase text-white/40 tracking-[0.2em]">{bar.label}</span>
                       <div className={`w-full ${bar.h} ${bar.color} rounded-2xl hover:bg-white/50 transition-colors duration-500`} />
                       <span className="text-[10px] font-bold text-white font-display uppercase tracking-widest">{bar.val.toLocaleString()}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="modern-card border border-border-subtle p-8 flex flex-col justify-between relative overflow-hidden group bg-surface-panel/30 shadow-sm transition-all hover:bg-surface-panel/50">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-text-muted group-hover:scale-110 transition-transform duration-1000">
               <Package size={140} />
            </div>
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-text-muted">Urgent Attention</h3>
              <div className="modern-card p-4 flex items-center gap-4 bg-surface-base hover:border-brand/40 transition-colors duration-500 border border-border-subtle shadow-sm">
                 <div className="w-14 h-14 bg-surface-raised border border-border-subtle rounded-2xl flex items-center justify-center shrink-0 text-text-muted">
                    <Package size={24} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                       <span className="text-[8px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest leading-none">Low Stock Warning</span>
                    </div>
                    <h4 className="font-bold text-sm text-text-primary truncate">Insulin Syringes Pro</h4>
                    <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Only 12 units left</p>
                 </div>
                 <button className="w-10 h-10 rounded-xl bg-text-primary text-surface-base flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                 </button>
              </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="modern-card p-0 overflow-hidden flex flex-col border border-border-subtle shadow-sm">
        {/* Table Filters */}
        <div className="p-8 space-y-8 bg-surface-panel/30">
           <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex bg-surface-base p-1 rounded-2xl border border-border-subtle backdrop-blur-md">
                 {['Products', 'Expiring', 'Orders', 'Changes'].map((tab) => (
                    <button key={tab} className={`px-6 py-2.5 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${tab === 'Products' ? 'bg-surface-raised text-text-primary shadow-lg border border-border-subtle' : 'text-text-muted hover:text-text-primary'}`}>
                       {tab}
                    </button>
                 ))}
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex bg-surface-base p-1 rounded-2xl border border-border-subtle">
                    <button onClick={() => setViewMode('grid')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-surface-raised text-brand shadow-lg border border-border-subtle' : 'text-text-muted hover:text-text-primary'}`}><Grid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-surface-raised text-brand shadow-lg border border-border-subtle' : 'text-text-muted hover:text-text-primary'}`}><ListIcon size={18} /></button>
                 </div>
                 <button className="px-5 py-3 bg-surface-base border border-border-subtle rounded-2xl text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary hover:bg-surface-raised transition-all flex items-center gap-2 shadow-sm">
                    <Download size={14} />
                    Export CSV
                 </button>
              </div>
           </div>

           <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 relative min-w-[300px] group">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-brand transition-colors" size={16} />
                 <input type="text" placeholder="Search by SKU, Product name or ID..." className="w-full pl-14 pr-4 py-4 bg-surface-base border border-border-subtle focus:border-brand/40 rounded-3xl text-sm text-text-primary placeholder:text-text-muted outline-none transition-all font-medium" />
              </div>
              <div className="flex items-center gap-3">
                {['All Categories', 'Stock Status', 'Location'].map(label => (
                  <select key={label} className="px-5 py-4 bg-surface-base border border-border-subtle rounded-3xl text-[10px] uppercase font-bold text-text-muted outline-none focus:border-brand/40 transition-all cursor-pointer hover:bg-surface-raised">
                    <option>{label}</option>
                  </select>
                ))}
              </div>
           </div>
        </div>

        {/* Table Content */}
        {viewMode === 'list' ? (
          <div className="overflow-x-auto px-2">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-panel/50">
                  <th className="p-6 py-4"><input type="checkbox" className="rounded-md border-border-subtle bg-surface-base text-brand focus:ring-brand" /></th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Product Name</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Product Code</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Category</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Pricing</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-center">Remaining</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockInventory.map((item) => (
                  <motion.tr 
                    key={item.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group border-b border-border-subtle hover:bg-text-primary/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="p-6 py-5"><input type="checkbox" className="rounded-md border-border-subtle bg-surface-base text-brand focus:ring-brand" /></td>
                    <td className="p-6 py-5">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-surface-base border border-border-subtle rounded-2xl flex items-center justify-center shrink-0 text-text-muted group-hover:border-brand/40 group-hover:text-brand transition-all">
                           <Package size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{item.name}</p>
                          <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1">Ref: {item.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 py-5">
                       <span className="text-xs font-mono font-bold text-text-muted group-hover:text-text-primary transition-colors uppercase">{item.ndc}</span>
                    </td>
                    <td className="p-6 py-5">
                       <span className="px-3 py-1 bg-surface-base border border-border-subtle text-text-muted rounded-xl text-[9px] font-bold uppercase tracking-widest group-hover:text-text-primary transition-colors">{item.category}</span>
                    </td>
                    <td className="p-6 py-5">
                       <p className="text-sm font-bold text-text-secondary">{item.cost}</p>
                       <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mt-1">Unit Cost</p>
                    </td>
                    <td className="p-6 py-5 text-center">
                       <p className="text-lg font-display font-bold text-text-primary leading-none">{item.onHand.toLocaleString()}</p>
                       <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mt-1">Available</p>
                    </td>
                    <td className="p-6 py-5 text-right">
                       <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase border transition-all
                          ${item.status === 'In Stock' ? 'text-success bg-success/5 border-success/20' : ''}
                          ${item.status === 'Low Stock' ? 'text-warning bg-warning/5 border-warning/20' : ''}
                          ${item.status === 'Out of Stock' ? 'text-text-muted bg-surface-base border-border-subtle' : ''}
                          ${item.status === 'Expiring Soon' ? 'text-brand bg-brand/5 border-brand/20' : ''}
                       `}>
                          <div className={`w-1.5 h-1.5 rounded-full 
                            ${item.status === 'In Stock' ? 'bg-success animate-pulse' : ''}
                            ${item.status === 'Low Stock' ? 'bg-warning' : ''}
                            ${item.status === 'Out of Stock' ? 'bg-border-subtle' : ''}
                            ${item.status === 'Expiring Soon' ? 'bg-brand shadow-[0_0_8px_rgba(99,102,241,0.5)]' : ''}
                          `} />
                          {item.status}
                       </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {mockInventory.map(item => (
                <div key={item.id} className="modern-card p-6 border-border-subtle hover:border-brand/40 transition-all group relative overflow-hidden flex flex-col h-full bg-surface-raised shadow-sm">
                   <div className="absolute -right-4 -top-4 w-32 h-32 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-all duration-1000" />
                   
                   <div className="w-full aspect-[4/3] bg-surface-base border border-border-subtle rounded-3xl mb-6 flex items-center justify-center text-text-muted group-hover:scale-[1.02] group-hover:text-brand transition-all duration-700 relative z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-text-primary/5 to-transparent opacity-50" />
                      <Package size={80} className="stroke-[1px] relative z-10" />
                   </div>
                   
                   <div className="relative z-10 flex-1 flex flex-col justify-between">
                      <div className="mb-8">
                        <div className="flex items-start justify-between gap-4 mb-3">
                           <h4 className="font-bold text-text-primary tracking-tight leading-tight group-hover:text-brand transition-colors text-lg">{item.name}</h4>
                           <button className="p-2 bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-text-primary transition-all shadow-md">
                              <MoreVertical size={16} />
                           </button>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-[9px] px-2 py-0.5 bg-surface-base border border-border-subtle text-text-muted rounded-md font-bold uppercase tracking-widest">{item.category}</span>
                           <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">{item.sku}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between pt-6 border-t border-border-subtle">
                         <div>
                            <p className="text-[8px] font-bold text-text-muted uppercase tracking-widest mb-1.5">Stock Total</p>
                            <span className="text-3xl font-display font-bold text-text-primary leading-none tracking-tight">{item.onHand.toLocaleString()}</span>
                         </div>
                         <div className="text-right">
                            <span className={`text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest border transition-all
                                ${item.status === 'In Stock' ? 'text-success bg-success/5 border-success/20' : 'text-warning bg-warning/5 border-warning/20'}`}>
                               {item.status}
                            </span>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        )}

        {/* Footer / Pagination */}
        <div className="p-10 border-t border-border-subtle bg-surface-panel/30 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] px-4 py-2 bg-surface-base border border-border-subtle rounded-2xl">
              Showing <span className="text-text-primary font-bold">1-4</span> of <span className="text-text-primary font-bold">1,240</span> products
           </div>
           <div className="flex items-center gap-4">
              <button className="p-3 border border-border-subtle rounded-2xl text-text-muted hover:bg-text-primary/5 transition-all group" disabled>
                 <ChevronLeft size={18} />
              </button>
              <div className="flex bg-surface-base p-1.5 rounded-2xl border border-border-subtle backdrop-blur-sm shadow-xl">
                 {[1, 2, 3, '...', 124].map((p, i) => (
                    <button key={i} className={`w-10 h-10 flex items-center justify-center rounded-xl text-[10px] font-bold transition-all ${p === 1 ? 'bg-text-primary text-surface-base shadow-2xl border border-border-subtle' : 'text-text-muted hover:text-text-primary'}`}>
                       {p}
                    </button>
                 ))}
              </div>
              <button className="p-3 border border-border-subtle rounded-2xl text-text-muted hover:bg-text-primary/5 transition-all hover:text-text-primary">
                 <ChevronRight size={18} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
