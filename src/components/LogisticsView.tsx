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
  Info,
  Plus
} from 'lucide-react';

const activeShipments = [
  { id: 'SHP-99201', client: 'St. Mary\'s Hospital', carrier: 'FedEx Priority', status: 'In Transit', eta: '2:15 PM', progress: 65, type: 'Vaccines' },
  { id: 'SHP-99184', client: 'City Pharmacy Group', carrier: 'UPS Next Day', status: 'Delayed', eta: 'Delayed', progress: 40, isAlert: true, type: 'Insulin' },
  { id: 'SHP-99245', client: 'Mercy Clinic', carrier: 'Internal Fleet', status: 'Out for Delivery', eta: '11:30 AM', progress: 90, type: 'Lab Samples' },
  { id: 'SHP-99230', client: 'General Hospital', carrier: 'FedEx Priority', status: 'Picked Up', eta: 'Tomorrow', progress: 10, type: 'Equipment' },
];

export default function LogisticsView() {
  return (
    <div className="space-y-12 pb-12 transform-gpu">
      {/* Friendly Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-4 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Shipping Hub
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Track deliveries and manage your fleet in real-time</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl border border-border-subtle text-text-muted font-bold text-[10px] uppercase tracking-widest bg-surface-base hover:bg-text-primary/5 hover:text-text-primary transition-all flex items-center gap-2 shadow-sm">
             <MapIcon size={14} />
             View Map
           </button>
           <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
             <Plus size={14} />
             Start Delivery
           </button>
        </div>
      </div>

      {/* Modern Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Waiting to Pack', val: '124', sub: '+12% Speed', color: 'text-brand', icon: Package, tip: 'Medicine orders that are waiting to be put in boxes.', bg: 'from-brand/10 to-brand/5' },
          { label: 'Out for Delivery', val: '89', sub: '92.4% Efficient', color: 'text-success', icon: Truck, tip: 'Orders that have already left the warehouse and are being delivered.', bg: 'from-success/10 to-success/5' },
          { label: 'Delivered Today', val: '142', sub: 'On Schedule', color: 'text-brand', icon: CheckCircle2, tip: 'Number of orders that reached their destination today.', bg: 'from-brand/10 to-brand/5' },
          { label: 'Late Deliveries', val: '4', sub: 'Needs Action', color: 'text-danger', icon: AlertTriangle, tip: 'Orders that are late or have a problem we need to fix.', bg: 'from-danger/10 to-danger/5' },
        ].map((s, i) => (
          <div key={i} className={`modern-card group border-border-subtle relative overflow-hidden bg-gradient-to-br ${s.bg} shadow-sm transition-all hover:bg-surface-raised`}>
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current ${s.color}`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <s.icon size={20} />
                </div>
                <div className="group/tip relative mt-1">
                  <Info size={14} className="text-text-muted hover:text-text-primary cursor-help transition-colors" />
                  <div className="absolute bottom-full mb-4 right-0 w-64 p-5 bg-surface-panel/95 backdrop-blur-xl border border-border-subtle rounded-2xl text-[10px] text-text-muted font-bold uppercase tracking-widest leading-relaxed invisible group-hover/tip:visible z-50 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                     {s.tip}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{s.label}</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-display font-bold text-text-primary tracking-tight transition-all leading-none">{s.val}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${s.color}`}>
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
        <div className="lg:col-span-2 modern-card p-0 overflow-hidden flex flex-col h-[520px] border-border-subtle shadow-sm">
          <div className="p-8 border-b border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-surface-panel/30">
            <div className="space-y-1">
               <h2 className="text-lg font-display font-bold text-text-primary tracking-tight">Recent Shipments</h2>
               <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Real-time updates</p>
            </div>
            <div className="relative group min-w-[280px]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search shipments..." 
                className="bg-surface-base border border-border-subtle focus:border-brand/40 rounded-2xl text-xs px-5 py-3.5 pl-12 outline-none text-text-primary w-full transition-all font-medium placeholder:text-text-muted" 
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-left">
               <thead className="sticky top-0 bg-surface-panel/80 backdrop-blur-md z-10 border-b border-border-subtle">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Order ID</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Customer & Carrier</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Status & Progress</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-right">E.T.A</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border-subtle/50">
                  {activeShipments.map((shp) => (
                    <tr key={shp.id} className="hover:bg-text-primary/[0.02] transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                         <p className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{shp.id}</p>
                         <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1.5">{shp.type}</p>
                      </td>
                      <td className="px-8 py-6">
                         <p className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors uppercase tracking-tight">{shp.client}</p>
                         <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1.5">{shp.carrier}</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-3 min-w-[140px]">
                          <div className="flex items-center justify-between">
                            <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${shp.isAlert ? 'text-danger' : 'text-text-muted'}`}>
                              {shp.status}
                            </span>
                            <span className="text-[9px] font-mono text-text-muted font-bold">{shp.progress}%</span>
                          </div>
                          <div className="w-full h-1 bg-surface-raised rounded-full overflow-hidden border border-border-subtle/20">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${shp.progress}%` }}
                              className={`h-full rounded-full ${shp.isAlert ? 'bg-danger shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-brand shadow-[0_0_10px_rgba(99,102,241,0.3)]'}`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                         <p className="text-sm font-display font-bold text-text-primary leading-none">{shp.eta}</p>
                         <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mt-2 leading-none">Deadline</p>
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>

        {/* Map panel */}
        <div className="modern-card p-1 border-border-subtle">
           <div className="bg-surface-panel rounded-[inherit] p-8 h-full flex flex-col justify-between border border-border-subtle shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <div className="space-y-1">
                    <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest text-left">Hub Map</h2>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-left">Dhaka Division</p>
                 </div>
                 <div className="w-10 h-10 rounded-2xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20 shadow-sm">
                   <Navigation size={18} />
                 </div>
              </div>
              
              <div className="flex-1 rounded-3xl bg-surface-base border border-border-subtle relative overflow-hidden group shadow-inner">
                 <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
                 
                 <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 100 100">
                    <path d="M 10 90 Q 50 10 90 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-text-primary/5" />
                    <motion.circle 
                      animate={{ offsetDistance: ["0%", "100%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      r="3" fill="#6366f1"
                      style={{ offsetPath: "path('M 10 90 Q 50 10 90 90')" }}
                      className="shadow-[0_0_15px_#6366f1]"
                    />
                    <circle cx="10" cy="90" r="4" fill="#10b981" />
                    <circle cx="90" cy="90" r="4" fill="#4338ca" />
                    <circle cx="50" cy="10" r="2" fill="currentColor" className="text-text-primary/10" />
                 </svg>

                 <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface-panel/90 backdrop-blur-xl border border-border-subtle rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f8fafc" alt="Driver" className="w-10 h-10 rounded-2xl bg-surface-base border border-border-subtle grayscale group-hover:grayscale-0 transition-all duration-700" />
                         <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-success border-4 border-surface-raised rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                       </div>
                       <div className="flex-1 min-w-0">
                           <p className="text-[10px] font-bold text-text-primary truncate uppercase tracking-widest">Sarah Jenkins</p>
                           <p className="text-[9px] text-text-muted uppercase font-bold tracking-[0.2em] mt-1 flex items-center gap-2">
                             <Truck size={10} />
                             MED-330
                           </p>
                       </div>
                       <button className="w-8 h-8 rounded-xl bg-surface-base border border-border-subtle hover:bg-surface-raised flex items-center justify-center text-text-muted hover:text-text-primary transition-colors shadow-sm">
                         <ChevronRight size={14} />
                       </button>
                    </div>
                 </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border-subtle grid grid-cols-2 gap-8">
                 <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Fleet Load</p>
                    <p className="text-xl font-display font-bold text-text-primary leading-none">82.4%</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Operational</p>
                    <p className="text-xl font-display font-bold text-text-primary leading-none">12 / 15</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
