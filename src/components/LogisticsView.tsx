/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Truck, 
  Map as MapIcon, 
  Navigation, 
  Package, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Search,
  Filter,
  ArrowUpRight,
  ChevronRight,
  Info
} from 'lucide-react';

const activeShipments = [
  { id: 'SHP-99201', client: 'St. Mary\'s Hospital', carrier: 'FedEx Priority', status: 'In Transit', eta: '2:15 PM', progress: 65, type: 'Vaccines' },
  { id: 'SHP-99184', client: 'City Pharmacy Group', carrier: 'UPS Next Day', status: 'Delayed', eta: 'Delayed', progress: 40, isAlert: true, type: 'Insulin' },
  { id: 'SHP-99245', client: 'Mercy Clinic', carrier: 'Internal Fleet', status: 'Out for Delivery', eta: '11:30 AM', progress: 90, type: 'Lab Samples' },
  { id: 'SHP-99230', client: 'General Hospital', carrier: 'FedEx Priority', status: 'Picked Up', eta: 'Tomorrow', progress: 10, type: 'Equipment' },
];

export default function LogisticsView() {
  return (
    <div className="space-y-8 pb-12">
      {/* Friendly Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Delivery Tracking</h1>
          <p className="text-zinc-500 font-medium tracking-tight mt-1">See where your medicine orders are and track delivery progress.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl active:scale-95 group">
              <span>+ Send New Order</span>
           </button>
        </div>
      </div>

      {/* Modern Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Ready to Pack', val: '124', sub: 'Action Needed', color: 'indigo', icon: Package, tip: 'Medicine orders that are waiting to be put in boxes.' },
          { label: 'On the Way', val: '89', sub: 'Moving Now', color: 'emerald', icon: Truck, tip: 'Orders that have already left the warehouse and are being delivered.' },
          { label: 'Delivered', val: '142', sub: 'Today', color: 'blue', icon: CheckCircle2, tip: 'Number of orders that reached their destination today.' },
          { label: 'Has Issues', val: '4', sub: 'Need Help', color: 'rose', icon: AlertTriangle, tip: 'Orders that are late or have a problem we need to fix.' },
        ].map((s, i) => (
          <div key={i} className="group relative glass-panel p-6 rounded-[2rem] border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-300">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-${s.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] blur-xl`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-${s.color}-400 group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon size={20} />
                </div>
                <div className="group/tip relative mt-1">
                  <Info size={14} className="text-zinc-600 hover:text-zinc-400 cursor-help transition-colors" />
                  <div className="absolute bottom-full mb-3 right-0 w-48 p-3 bg-zinc-950/95 backdrop-blur-md border border-zinc-800 rounded-2xl text-[10px] text-zinc-400 font-medium invisible group-hover/tip:visible z-50 shadow-2xl animate-in fade-in zoom-in-95 exit-out duration-200">
                     {s.tip}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em]">{s.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-white tracking-tight">{s.val}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider text-${s.color}-400/80`}>
                    {s.sub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Simplified Shipping Table */}
        <div className="lg:col-span-2 glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl border-zinc-800/50">
          <div className="p-6 border-b border-border-subtle">
            <div className="flex items-center gap-3 mb-4">
               <Truck size={18} className="text-brand" />
               <h2 className="text-sm font-bold text-white uppercase tracking-widest">Active Deliveries</h2>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
              <input type="text" placeholder="Search by Order ID or Shop Name..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl text-xs px-3 py-2.5 pl-9 outline-none focus:border-brand/40 text-white transition-all" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-zinc-950/50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Order ID</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Sent To</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest text-right">Progress</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-zinc-800/30">
                  {activeShipments.map((shp) => (
                    <tr key={shp.id} className="hover:bg-zinc-900/40 transition-all duration-200 group cursor-pointer">
                      <td className="px-6 py-5">
                         <p className="text-sm font-bold text-white">{shp.id}</p>
                         <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">{shp.type}</p>
                      </td>
                      <td className="px-6 py-5">
                         <p className="text-xs font-bold text-zinc-300">{shp.client}</p>
                         <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-tight mt-0.5">Via {shp.carrier}</p>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${shp.isAlert ? 'bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 'bg-brand'}`} />
                           <span className={`text-xs font-bold ${shp.isAlert ? 'text-rose-400' : 'text-zinc-200'}`}>{shp.status}</span>
                        </div>
                        <p className="text-[9px] font-bold text-zinc-600 mt-1 uppercase tracking-tight">Arrives: {shp.eta}</p>
                      </td>
                      <td className="px-6 py-5">
                         <div className="flex flex-col items-end gap-1.5">
                            <span className="text-[10px] font-mono font-bold text-zinc-500">{shp.progress}% Done</span>
                            <div className="w-20 h-1 bg-zinc-900 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${shp.progress}%` }}
                                 className={`h-full rounded-full ${shp.isAlert ? 'bg-rose-500' : 'bg-brand'}`}
                               />
                            </div>
                         </div>
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>

        {/* Map panel */}
        <div className="space-y-6">
           <div className="glass-panel rounded-3xl p-6 flex flex-col shadow-2xl border-zinc-800/50">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-sm font-bold text-white uppercase tracking-widest">Live Driver Map</h2>
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                 
                 <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 100">
                    <path d="M 10 90 Q 50 10 90 90" fill="none" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
                    <motion.circle 
                      animate={{ offsetDistance: ["0%", "100%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      r="2.5" fill="#4f46e5"
                      style={{ offsetPath: "path('M 10 90 Q 50 10 90 90')" }}
                      className="shadow-[0_0_10px_#4f46e5]"
                    />
                    <circle cx="10" cy="90" r="3" fill="#10b981" />
                    <circle cx="90" cy="90" r="3" fill="#3b82f6" />
                 </svg>

                 <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand border border-brand/20">
                          <Navigation size={16} />
                       </div>
                       <div>
                           <p className="text-[10px] font-bold text-white truncate max-w-[120px]">Driver: Sarah Jones</p>
                           <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-tight mt-0.5">MED-330 (Electric Van)</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
