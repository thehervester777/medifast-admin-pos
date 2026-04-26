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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-2">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            Inventory Console
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Active</span>
          </h1>
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] mt-2">Enterprise Resource Management</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl border border-white/[0.05] text-zinc-500 font-bold text-[10px] uppercase tracking-widest bg-zinc-950/50 hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2">
              <Scan size={14} />
              Scan Payload
           </button>
           <button className="px-8 py-3 rounded-2xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              <Plus size={14} />
              Provision Asset
           </button>
        </div>
      </div>

      {/* Top Banner Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="modern-card p-0 bg-rose-600 border-none relative overflow-hidden group">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-all duration-700" />
           <div className="p-8 relative z-10 flex flex-col h-full">
              <h3 className="text-[10px] font-bold mb-6 tracking-[0.2em] uppercase text-white/50">Stock Integrity</h3>
              <div className="flex items-center gap-8 flex-1">
                 <div className="space-y-3">
                    {[
                      { label: 'Optimal', value: '8,432', color: 'bg-white' },
                      { label: 'Critical', value: '412', color: 'bg-rose-300' },
                      { label: 'Depleted', value: '84', color: 'bg-rose-900' }
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

        <div className="modern-card p-0 bg-brand border-none relative overflow-hidden group">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-all duration-700" />
           <div className="p-8 relative z-10 h-full flex flex-col">
              <h3 className="text-[10px] font-bold mb-6 tracking-[0.2em] uppercase text-white/50">Supply Logistics</h3>
              <div className="flex gap-4 items-end flex-1">
                 {[
                    { label: 'Inbound', val: 1240, h: 'h-24', color: 'bg-white/10' },
                    { label: 'Transit', val: 3850, h: 'h-32', color: 'bg-white/30' },
                    { label: 'Voided', val: 42, h: 'h-12', color: 'bg-white/5' },
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

        <div className="modern-card border border-white/[0.05] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-zinc-500 group-hover:scale-110 transition-transform duration-1000">
               <Package size={140} />
            </div>
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold mb-8 tracking-[0.2em] uppercase text-zinc-600">Critical Priority</h3>
              <div className="modern-card p-4 flex items-center gap-4 bg-zinc-950/50 hover:border-brand/40 transition-colors duration-500 border border-white/[0.03]">
                 <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center shrink-0 text-zinc-700 border border-white/5">
                    <Package size={24} />
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                       <span className="text-[8px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest leading-none">Scarcity Alert</span>
                    </div>
                    <h4 className="font-bold text-sm text-white truncate">Insulin Syringes Pro</h4>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">12 units remain</p>
                 </div>
                 <button className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                 </button>
              </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="modern-card p-0 overflow-hidden flex flex-col border border-white/[0.03]">
        {/* Table Filters */}
        <div className="p-8 space-y-8 bg-white/[0.01]">
           <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex bg-zinc-950/80 p-1 rounded-2xl border border-white/5 backdrop-blur-md">
                 {['Catalog', 'Expiry', 'Orders', 'Delta'].map((tab) => (
                    <button key={tab} className={`px-6 py-2.5 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${tab === 'Catalog' ? 'bg-zinc-900 text-white shadow-lg border border-white/5' : 'text-zinc-600 hover:text-zinc-400'}`}>
                       {tab}
                    </button>
                 ))}
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex bg-zinc-950/80 p-1 rounded-2xl border border-white/5">
                    <button onClick={() => setViewMode('grid')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-zinc-900 text-brand shadow-lg border border-white/5' : 'text-zinc-700 hover:text-zinc-500'}`}><Grid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-zinc-900 text-brand shadow-lg border border-white/5' : 'text-zinc-700 hover:text-zinc-500'}`}><ListIcon size={18} /></button>
                 </div>
                 <button className="px-5 py-3 bg-zinc-950/80 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white hover:bg-zinc-900 transition-all flex items-center gap-2">
                    <Download size={14} />
                    Export XL
                 </button>
              </div>
           </div>

           <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 relative min-w-[300px] group">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700 group-hover:text-brand transition-colors" size={16} />
                 <input type="text" placeholder="SKU, NDC/GTIN, or Product ID..." className="w-full pl-14 pr-4 py-4 bg-zinc-950/50 border border-white/5 focus:border-brand/40 rounded-3xl text-sm text-white placeholder:text-zinc-700 outline-none transition-all font-medium" />
              </div>
              <div className="flex items-center gap-3">
                {['Category', 'Stock Tier', 'Hub'].map(label => (
                  <select key={label} className="px-5 py-4 bg-zinc-950/50 border border-white/5 rounded-3xl text-[10px] uppercase font-bold text-zinc-600 outline-none focus:border-brand/40 transition-all cursor-pointer hover:bg-zinc-900">
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
                <tr className="border-b border-white/[0.03]">
                  <th className="p-6 py-4"><input type="checkbox" className="rounded-md border-zinc-800 bg-zinc-950 text-brand focus:ring-brand" /></th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Asset Identity</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Regulatory Code</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Classification</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Valuation</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] text-center">Availability</th>
                  <th className="p-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] text-right">Integrity</th>
                </tr>
              </thead>
              <tbody>
                {mockInventory.map((item) => (
                  <motion.tr 
                    key={item.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group border-b border-white/[0.01] hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="p-6 py-5"><input type="checkbox" className="rounded-md border-zinc-800 bg-zinc-950 text-brand focus:ring-brand" /></td>
                    <td className="p-6 py-5">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-zinc-950 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 text-zinc-700 group-hover:border-brand/40 group-hover:text-brand transition-all">
                           <Package size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{item.name}</p>
                          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-1">Ref: {item.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 py-5">
                       <span className="text-xs font-mono font-bold text-zinc-700 group-hover:text-zinc-500 transition-colors uppercase">{item.ndc}</span>
                    </td>
                    <td className="p-6 py-5">
                       <span className="px-3 py-1 bg-zinc-950 border border-white/5 text-zinc-600 rounded-xl text-[9px] font-bold uppercase tracking-widest group-hover:text-zinc-400 transition-colors">{item.category}</span>
                    </td>
                    <td className="p-6 py-5">
                       <p className="text-sm font-bold text-zinc-300">{item.cost}</p>
                       <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mt-1">Tier Delta</p>
                    </td>
                    <td className="p-6 py-5 text-center">
                       <p className="text-lg font-display font-bold text-white leading-none">{item.onHand.toLocaleString()}</p>
                       <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest mt-1">Hub Alpha</p>
                    </td>
                    <td className="p-6 py-5 text-right">
                       <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase border transition-all
                          ${item.status === 'In Stock' ? 'text-success bg-success/5 border-success/20' : ''}
                          ${item.status === 'Low Stock' ? 'text-warning bg-warning/5 border-warning/20' : ''}
                          ${item.status === 'Out of Stock' ? 'text-zinc-600 bg-zinc-950 border-white/5' : ''}
                          ${item.status === 'Expiring Soon' ? 'text-brand bg-brand/5 border-brand/20' : ''}
                       `}>
                          <div className={`w-1.5 h-1.5 rounded-full 
                            ${item.status === 'In Stock' ? 'bg-success animate-pulse' : ''}
                            ${item.status === 'Low Stock' ? 'bg-warning' : ''}
                            ${item.status === 'Out of Stock' ? 'bg-zinc-800' : ''}
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
                <div key={item.id} className="modern-card p-6 border-white/[0.03] hover:border-brand/40 transition-all group relative overflow-hidden flex flex-col h-full">
                   <div className="absolute -right-4 -top-4 w-32 h-32 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-all duration-1000" />
                   
                   <div className="w-full aspect-[4/3] bg-zinc-950 border border-white/5 rounded-3xl mb-6 flex items-center justify-center text-zinc-900 group-hover:scale-[1.02] group-hover:text-brand/20 transition-all duration-700 relative z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.01] to-transparent opacity-50" />
                      <Package size={80} className="stroke-[1px] relative z-10" />
                   </div>
                   
                   <div className="relative z-10 flex-1 flex flex-col justify-between">
                      <div className="mb-8">
                        <div className="flex items-start justify-between gap-4 mb-3">
                           <h4 className="font-bold text-white tracking-tight leading-tight group-hover:text-brand transition-colors text-lg">{item.name}</h4>
                           <button className="p-2 bg-zinc-950 border border-white/5 rounded-xl text-zinc-700 hover:text-white transition-all shadow-xl">
                              <MoreVertical size={16} />
                           </button>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-[9px] px-2 py-0.5 bg-zinc-950 border border-white/5 text-zinc-600 rounded-md font-bold uppercase tracking-widest">{item.category}</span>
                           <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest">{item.sku}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between pt-6 border-t border-white/[0.03]">
                         <div>
                            <p className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest mb-1.5">Availability Pool</p>
                            <span className="text-3xl font-display font-bold text-white leading-none tracking-tight">{item.onHand.toLocaleString()}</span>
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
        <div className="p-10 border-t border-white/[0.03] bg-white/[0.01] flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] px-4 py-2 bg-zinc-950 border border-white/5 rounded-2xl">
              Telemetry: Showing <span className="text-white font-bold">1-4</span> of <span className="text-white font-bold">1,240</span> assets
           </div>
           <div className="flex items-center gap-4">
              <button className="p-3 border border-white/5 rounded-2xl text-zinc-700 hover:bg-zinc-900 transition-all group" disabled>
                 <ChevronLeft size={18} />
              </button>
              <div className="flex bg-zinc-950/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
                 {[1, 2, 3, '...', 124].map((p, i) => (
                    <button key={i} className={`w-10 h-10 flex items-center justify-center rounded-xl text-[10px] font-bold transition-all ${p === 1 ? 'bg-zinc-900 text-brand shadow-2xl border border-white/5' : 'text-zinc-700 hover:text-white'}`}>
                       {p}
                    </button>
                 ))}
              </div>
              <button className="p-3 border border-white/5 rounded-2xl text-zinc-700 hover:bg-zinc-900 transition-all hover:text-white">
                 <ChevronRight size={18} />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
