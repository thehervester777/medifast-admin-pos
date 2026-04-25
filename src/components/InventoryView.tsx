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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Inventory</h1>
          <p className="text-zinc-500 font-medium tracking-tight text-sm">Manage medical stock, expiry, and reordering.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-border-subtle text-zinc-400 font-bold text-xs uppercase tracking-widest bg-zinc-900 hover:bg-zinc-800 transition-all font-medium">
              <Scan size={16} className="text-zinc-500" />
              <span>Scan QR</span>
           </button>
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.98] transition-all font-medium">
              <Plus size={16} />
              <span>Add Item</span>
           </button>
        </div>
      </div>

      {/* Top Banner Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-rose-600 p-6 rounded-3xl text-white relative overflow-hidden group shadow-xl shadow-rose-600/10">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
           <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xs font-bold mb-4 tracking-[0.2em] uppercase opacity-80 font-mono">Stock Integrity</h3>
              <div className="flex items-center gap-8 flex-1">
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-white" />
                       <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">In stock</span>
                       <span className="text-base font-display font-bold ml-auto">8,432</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                       <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Low stock</span>
                       <span className="text-base font-display font-bold ml-auto">412</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-rose-900" />
                       <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Out stock</span>
                       <span className="text-base font-display font-bold ml-auto">84</span>
                    </div>
                 </div>
                 <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                       <circle cx="40" cy="40" r="34" fill="transparent" stroke="white" strokeWidth="5" strokeOpacity="0.1" />
                       <circle 
                          cx="40" cy="40" r="34" fill="transparent" stroke="white" strokeWidth="5" 
                          strokeDasharray={2 * Math.PI * 34} 
                          strokeDashoffset={(2 * Math.PI * 34) * (1 - 0.92)} 
                          strokeLinecap="round"
                       />
                    </svg>
                    <div className="absolute font-display font-bold text-lg uppercase">92%</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-indigo-600 p-6 rounded-3xl text-white relative overflow-hidden group shadow-xl shadow-indigo-600/10">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
           <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xs font-bold mb-4 tracking-[0.2em] uppercase opacity-80 font-mono">Supply Logistics</h3>
              <div className="flex gap-4 items-end flex-1">
                 {[
                    { label: 'Inbound', val: 1240, h: 'h-24', color: 'bg-white/20' },
                    { label: 'Outbound', val: 3850, h: 'h-32', color: 'bg-white/40' },
                    { label: 'Adjusted', val: 42, h: 'h-12', color: 'bg-white/10' },
                 ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group/bar">
                       <span className="text-[10px] font-bold uppercase opacity-60 tracking-wider font-display font-mono">{bar.label}</span>
                       <div className={`w-full ${bar.h} ${bar.color} rounded-xl group-hover/bar:bg-white/60 transition-colors duration-300`} />
                       <span className="text-xs font-bold font-mono">{bar.val.toLocaleString()}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="bg-zinc-900 border border-border-subtle p-8 rounded-[2.5rem] text-white relative overflow-hidden group shadow-xl">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-lg font-bold mb-6 tracking-tight uppercase text-xs tracking-widest opacity-80">Critical Attention</h3>
              <div className="bg-zinc-800/50 border border-border-subtle p-4 rounded-2xl flex items-center gap-4 group-hover:bg-zinc-800 transition-colors duration-500">
                 <div className="w-14 h-14 bg-zinc-900 border border-border-subtle rounded-xl flex items-center justify-center shrink-0 text-zinc-500">
                    <Package size={28} />
                 </div>
                 <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2 mb-1">
                       <span className="text-[8px] bg-rose-500 text-white font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest">Priority</span>
                    </div>
                    <h4 className="font-bold text-sm truncate">Insulin Syringes</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">12 boxes remaining</p>
                 </div>
                 <button className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                    <ArrowUpRight size={18} />
                 </button>
              </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="glass-panel rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
        {/* Table Filters */}
        <div className="p-8 border-b border-border-subtle space-y-6">
           <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex bg-zinc-900 p-1 rounded-xl">
                 {['Catalog', 'Expiry', 'Orders', 'Adjustments'].map((tab) => (
                    <button key={tab} className={`px-6 py-2 text-[10px] font-bold rounded-lg transition-all uppercase tracking-widest ${tab === 'Catalog' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}>
                       {tab}
                    </button>
                 ))}
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex bg-zinc-900 p-1 rounded-xl">
                    <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-zinc-800 shadow-sm text-brand' : 'text-zinc-600'}`}><Grid size={18} /></button>
                    <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-zinc-800 shadow-sm text-brand' : 'text-zinc-600'}`}><ListIcon size={18} /></button>
                 </div>
                 <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-border-subtle rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
                    <Download size={16} />
                    <span>Export</span>
                 </button>
              </div>
           </div>

           <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 relative min-w-[300px]">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                 <input type="text" placeholder="Search SKU, NDC/GTIN, or product name..." className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-transparent focus:border-border-subtle rounded-2xl text-sm text-white placeholder:text-zinc-600 focus:ring-4 focus:ring-brand/5 outline-none transition-all" />
              </div>
              <select className="px-4 py-3 bg-zinc-900 border border-transparent rounded-2xl text-[10px] uppercase tracking-widest font-bold text-zinc-500 outline-none focus:border-border-subtle transition-all cursor-pointer">
                 <option>Category</option>
              </select>
              <select className="px-4 py-3 bg-zinc-900 border border-transparent rounded-2xl text-[10px] uppercase tracking-widest font-bold text-zinc-500 outline-none focus:border-border-subtle transition-all cursor-pointer">
                 <option>Manufacturer</option>
              </select>
              <select className="px-4 py-3 bg-zinc-900 border border-transparent rounded-2xl text-[10px] uppercase tracking-widest font-bold text-zinc-500 outline-none focus:border-border-subtle transition-all cursor-pointer">
                 <option>Stock Level</option>
              </select>
           </div>
        </div>

        {/* Table Content */}
        {viewMode === 'list' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="p-6 pb-4"><input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-brand focus:ring-brand" /></th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Product & SKU</th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">NDC / GTIN</th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Category</th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Cost / Tier</th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">On Hand</th>
                  <th className="p-6 pb-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockInventory.map((item) => (
                  <motion.tr 
                    key={item.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group border-b border-zinc-900/50 hover:bg-zinc-800/20 transition-colors cursor-pointer"
                  >
                    <td className="p-6 py-5"><input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-brand focus:ring-brand" /></td>
                    <td className="p-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-zinc-900 border border-border-subtle rounded-xl flex items-center justify-center shrink-0 text-zinc-600 group-hover:border-brand/40 group-hover:text-brand transition-all">
                           <Package size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white tracking-tight">{item.name}</p>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">SKU: {item.sku} • {item.manufacturer}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 py-5 text-xs font-mono font-medium text-zinc-500">{item.ndc}</td>
                    <td className="p-6 py-5">
                       <span className="px-2 py-1 bg-zinc-900 border border-border-subtle text-zinc-400 rounded-lg text-[9px] font-bold uppercase tracking-widest">{item.category}</span>
                    </td>
                    <td className="p-6 py-5">
                       <p className="text-sm font-bold text-white">{item.cost}</p>
                       <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-wider">Tier 1</p>
                    </td>
                    <td className="p-6 py-5 text-center">
                       <p className="text-sm font-display font-bold text-white">{item.onHand.toLocaleString()}</p>
                       <p className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase">Central Hub</p>
                    </td>
                    <td className="p-6 py-5 text-right">
                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase
                          ${item.status === 'In Stock' ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20' : ''}
                          ${item.status === 'Low Stock' ? 'text-rose-500 bg-rose-500/10 border border-rose-500/20' : ''}
                          ${item.status === 'Out of Stock' ? 'text-zinc-600 bg-zinc-900 border border-border-subtle' : ''}
                          ${item.status === 'Expiring Soon' ? 'text-amber-500 bg-amber-500/10 border border-amber-500/20' : ''}
                       `}>
                          <div className={`w-1 h-1 rounded-full 
                            ${item.status === 'In Stock' ? 'bg-emerald-500' : ''}
                            ${item.status === 'Low Stock' ? 'bg-rose-500' : ''}
                            ${item.status === 'Out of Stock' ? 'bg-zinc-700' : ''}
                            ${item.status === 'Expiring Soon' ? 'bg-amber-500' : ''}
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
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {mockInventory.map(item => (
                <div key={item.id} className="glass-panel p-6 rounded-2xl border-border-subtle hover:border-brand/40 transition-all group shadow-xl relative overflow-hidden">
                   {/* Background Decorative element */}
                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-all duration-700" />
                   
                   <div className="w-full aspect-square bg-zinc-900 border border-zinc-800/50 rounded-xl mb-6 flex items-center justify-center text-zinc-800 group-hover:scale-105 group-hover:text-brand/50 transition-all duration-500 relative z-10">
                      <Package size={64} className="stroke-[1.5px]" />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                         <div className="flex-1 overflow-hidden">
                            <h4 className="font-bold text-white tracking-tight leading-tight group-hover:text-brand transition-colors truncate">{item.name}</h4>
                            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.15em] mt-1">{item.sku}</p>
                         </div>
                         <button className="p-1.5 text-zinc-700 hover:text-white transition-colors shrink-0">
                            <MoreVertical size={16} />
                         </button>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                         <div>
                            <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">Availability</p>
                            <span className="text-2xl font-display font-bold text-white">{item.onHand.toLocaleString()}</span>
                         </div>
                         <div className="text-right">
                            <span className={`text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest border
                                ${item.status === 'In Stock' ? 'text-emerald-500 bg-emerald-500/5 border-emerald-500/20' : 'text-rose-500 bg-rose-500/5 border-rose-500/20'}`}>
                              {item.status}
                            </span>
                            <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-tighter mt-2">Reorder: 12 days</p>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        )}

        {/* Footer / Pagination */}
        <div className="p-8 border-t border-border-subtle flex items-center justify-between">
           <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Showing <span className="text-white font-bold">1 to 4</span> of <span className="text-white font-bold">1,240</span> results
           </div>
           <div className="flex items-center gap-2">
              <button className="p-2 border border-border-subtle rounded-lg text-zinc-600 hover:bg-zinc-800 disabled:opacity-30 transition-all" disabled><ChevronLeft size={16} /></button>
              <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-border-subtle">
                 {[1, 2, 3, '...', 124].map((p, i) => (
                    <button key={i} className={`w-8 h-8 flex items-center justify-center rounded-md text-[10px] font-bold transition-all ${p === 1 ? 'bg-zinc-800 text-brand shadow-sm' : 'text-zinc-600 hover:text-white'}`}>
                       {p}
                    </button>
                 ))}
              </div>
              <button className="p-2 border border-border-subtle rounded-lg text-zinc-600 hover:bg-zinc-800 transition-all hover:text-white"><ChevronRight size={16} /></button>
           </div>
        </div>
      </div>
    </div>
  );
}
