/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, Search, Clock, Box, ExternalLink, MoreVertical, ChevronRight, ClipboardList
} from 'lucide-react';

const mockOrders = [
  { id: '#ORD-98234', client: 'St. Mary\'s Hospital', status: 'Approved', sla: '02h 15m', warehouse: 'Central Hub', items: 2, total: '$1,420.00', icon: 'SM' },
  { id: '#ORD-98233', client: 'City Pharmacy Group', status: 'Picking', sla: '14h 30m', warehouse: 'East Coast Hub', items: 12, total: '$8,240.00', icon: 'CP' },
  { id: '#ORD-98230', client: 'Mercy Clinic', status: 'On Hold', sla: '-04h 12m', warehouse: 'Central Hub', items: 5, total: '$2,100.00', icon: 'MC', isAlert: true },
];

export default function OrderTrackingView() {
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      <div className="flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 px-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
              Order Tracking
              <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
            </h1>
            <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Track orders and delivery status in real-time</p>
          </div>
          <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
            <Plus size={14} /><span>Create New Order</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
           {['New Orders', 'Approved', 'Shipping', 'Delivered', 'Alerts'].map((s, i) => (
             <div key={i} className="modern-card p-6 rounded-3xl border-border-subtle group hover:border-brand/40 transition-all flex flex-col gap-4 bg-surface-panel/30 shadow-sm transition-all hover:bg-surface-panel/50">
                <p className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] leading-none mb-1">{s}</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-display font-bold text-text-primary leading-none group-hover:text-glow transition-all">{Math.floor(Math.random() * 100)}</p>
                  <div className={`w-8 h-8 rounded-lg bg-surface-base border border-border-subtle flex items-center justify-center ${s === 'Alerts' ? 'text-danger shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'text-text-muted'} shadow-sm`}>
                    <Box size={14} />
                  </div>
                </div>
             </div>
           ))}
        </div>

        <div className="modern-card p-0 overflow-hidden border-border-subtle shadow-2xl flex flex-col bg-surface-panel/30">
           <div className="p-8 border-b border-border-subtle flex items-center justify-between bg-surface-panel/40">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand border border-brand/20 shadow-sm">
                   <ClipboardList size={18} />
                 </div>
                 <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] leading-none">Global Order List</h2>
              </div>

              <div className="relative group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
                 <input type="text" placeholder="Search Order ID..." className="bg-surface-base border border-border-subtle rounded-xl pl-10 pr-4 py-2.5 text-[10px] text-text-primary outline-none focus:border-brand/40 font-bold uppercase tracking-widest placeholder:text-text-muted w-48 shadow-sm" />
              </div>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left font-bold">
                 <thead className="bg-surface-panel/50 text-text-muted">
                    <tr>
                       <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">Order Details</th>
                       <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center">Status</th>
                       <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">SLA Timer</th>
                       <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em]">Location</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-border-subtle/50">
                    {mockOrders.map(order => (
                      <tr 
                        key={order.id} 
                        onClick={() => setSelectedOrder(order)} 
                        className={`cursor-pointer transition-all duration-500 group ${selectedOrder.id === order.id ? 'bg-brand/5' : 'hover:bg-text-primary/[0.02]'}`}
                      >
                         <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand transition-all shadow-sm font-display text-xs">
                                 {order.icon}
                              </div>
                              <div>
                                 <p className={`text-sm font-bold ${selectedOrder.id === order.id ? 'text-text-primary' : 'text-text-secondary'} transition-colors`}>{order.id}</p>
                                 <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1.5">{order.client}</p>
                              </div>
                           </div>
                         </td>
                         <td className="px-8 py-6 text-center">
                           <span className={`px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-all
                              ${selectedOrder.id === order.id ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' : 'bg-surface-raised text-text-muted border-border-subtle/50'}
                           `}>{order.status}</span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                               <Clock size={12} className={order.isAlert ? 'text-danger' : 'text-text-muted/40'} />
                               <span className={`text-sm font-mono tracking-tight font-bold ${order.isAlert ? 'text-danger animate-pulse' : 'text-text-muted'}`}>{order.sla}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <p className="text-[10px] text-text-muted uppercase tracking-widest leading-none font-bold italic">{order.warehouse}</p>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>

      <div className="w-full lg:min-w-[400px] lg:w-[400px] flex flex-col gap-8">
         <div className="modern-card p-1 border-border-subtle shadow-2xl">
            <div className="bg-surface-panel/30 backdrop-blur-xl p-10 rounded-[inherit] space-y-10 border border-border-subtle/50 h-full flex flex-col shadow-sm">
              <div className="flex items-center justify-between mb-2">
                 <h2 className="text-2xl font-display font-bold text-text-primary tracking-tight uppercase leading-none">Order Insight</h2>
                 <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand shadow-sm">
                    <Box size={20} />
                 </div>
              </div>

              <div className="space-y-6 flex-1">
                 <div className="modern-card p-8 bg-surface-base border border-border-subtle group hover:border-brand/40 transition-all duration-500 shadow-inner">
                    <p className="text-[9px] font-bold uppercase text-text-muted/40 tracking-[0.3em] mb-6 leading-none">Customer Info</p>
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-display text-xl font-bold shadow-2xl">
                          {selectedOrder.icon}
                       </div>
                       <div>
                          <p className="text-xl font-display font-bold text-text-primary tracking-tight leading-tight">{selectedOrder.client}</p>
                          <p className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em] mt-3">Node Authority: Regional</p>
                       </div>
                    </div>
                 </div>

                 <div className="modern-card p-8 bg-surface-base border border-border-subtle shadow-inner">
                    <p className="text-[9px] font-bold uppercase text-text-muted/40 tracking-[0.3em] mb-8 leading-none">Order History</p>
                    <div className="space-y-10 relative">
                       <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-border-subtle/30" />
                       
                       <div className="flex gap-6 relative group/step">
                          <div className="w-2 h-2 rounded-full bg-brand mt-2 ring-4 ring-brand/20 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />
                          <div className="flex flex-col gap-2">
                             <p className="text-xs font-bold text-text-primary group-hover:text-glow transition-colors">Authenticated Mapping</p>
                             <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest leading-relaxed">09:41 AM • Admin Node Stanley <br/> <span className="text-brand/40 italic">Signature Verified</span></p>
                          </div>
                       </div>
                       
                       <div className="flex gap-6 relative group/step">
                          <div className="w-2 h-2 rounded-full bg-border-subtle mt-2 z-10" />
                          <div className="flex flex-col gap-2 opacity-40">
                             <p className="text-xs font-bold text-text-muted">Node Fulfillment Queue</p>
                             <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest leading-relaxed">Queue Position: Segment #4 <br/> <span className="italic">Awaiting Logical Sort</span></p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <button className="btn-primary w-full py-5 !text-[10px] uppercase tracking-[0.2em] shadow-2xl">
                Execute Authorization Protocol
              </button>
            </div>
         </div>
      </div>
    </div>
  );
}
