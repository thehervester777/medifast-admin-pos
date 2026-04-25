/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, Search, Clock, Box, ExternalLink, MoreVertical, ChevronRight
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
      <div className="flex-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight">Order Tracking</h1>
            <p className="text-zinc-500 font-medium tracking-tight">Real-time lifecycle monitoring</p>
          </div>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-lg transition-all hover:bg-zinc-200">
            <Plus size={18} /><span>New order</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {['New', 'Approved', 'Packed', 'Shipped', 'Alerts'].map((s, i) => (
             <div key={i} className="glass-panel p-5 rounded-2xl border-l-4 border-l-brand/50">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{s}</p>
                <p className="text-2xl font-display font-bold text-white">{Math.floor(Math.random() * 100)}</p>
             </div>
           ))}
        </div>

        <div className="glass-panel rounded-[2rem] overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-zinc-900 border-b border-border-subtle">
                 <tr>
                    <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Order Details</th>
                    <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                    <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">SLA Timer</th>
                    <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Warehouse</th>
                 </tr>
              </thead>
              <tbody>
                 {mockOrders.map(order => (
                   <tr key={order.id} onClick={() => setSelectedOrder(order)} className={`cursor-pointer border-b border-zinc-900/50 transition-colors ${selectedOrder.id === order.id ? 'bg-zinc-800/50' : 'hover:bg-zinc-800/20'}`}>
                      <td className="p-6">
                        <p className="text-sm font-bold text-white tracking-tight">{order.id} • {order.client}</p>
                      </td>
                      <td className="p-6">
                        <span className="px-2 py-1 bg-brand/10 text-brand rounded-lg text-[9px] font-bold uppercase tracking-widest border border-brand/20">{order.status}</span>
                      </td>
                      <td className="p-6 text-sm font-mono text-zinc-400">{order.sla}</td>
                      <td className="p-6 text-xs text-zinc-500 uppercase tracking-widest font-bold">{order.warehouse}</td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>

      <div className="w-full lg:w-96 glass-panel rounded-[2.5rem] p-8 space-y-8 h-fit shadow-2xl">
         <h2 className="text-xl font-display font-bold text-white tracking-tight">Order Insight</h2>
         <div className="space-y-4">
            <div className="p-5 bg-zinc-900 border border-border-subtle rounded-2xl">
               <p className="text-[9px] font-bold uppercase text-zinc-500 tracking-widest mb-3">Client Information</p>
               <p className="font-bold text-white text-md tracking-tight">{selectedOrder.client}</p>
               <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Regional Medical Center</p>
            </div>
            <div className="p-5 bg-zinc-900 border border-border-subtle rounded-2xl">
               <p className="text-[9px] font-bold uppercase text-zinc-500 tracking-widest mb-3">Operational Timeline</p>
               <div className="space-y-5">
                  <div className="flex gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5" />
                     <div className="flex flex-col">
                        <p className="text-xs font-bold text-white">Order Authenticated</p>
                        <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-tighter">09:41 AM • Admin Stanley</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-1.5" />
                     <div className="flex flex-col">
                        <p className="text-xs font-bold text-zinc-600">Pending Fulfillment</p>
                        <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-tighter">Queue Position: #4</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <button className="w-full bg-brand text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs">Approve Authorization</button>
      </div>
    </div>
  );
}
