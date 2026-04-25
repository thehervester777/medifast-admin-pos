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
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  ClipboardList, 
  BarChart3, 
  Package, 
  Truck,
  Bell,
  MoreVertical,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Activity,
  Box,
  Plus,
  Users,
  AlertCircle,
  CheckCircle2,
  Info
} from 'lucide-react';
import StatCard from './StatCard.tsx';

const data = [
  { name: 'Mon', orders: 40, revenue: 2400 },
  { name: 'Tue', orders: 30, revenue: 1398 },
  { name: 'Wed', orders: 20, revenue: 9800 },
  { name: 'Thu', orders: 27, revenue: 3908 },
  { name: 'Fri', orders: 18, revenue: 4800 },
  { name: 'Sat', orders: 23, revenue: 3800 },
  { name: 'Sun', orders: 34, revenue: 4300 },
];

export default function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Overview Dashboard</h1>
          <p className="text-zinc-500 font-medium tracking-tight text-sm">Real-time logistics & operation metrics for <span className="text-brand font-bold">all facilities</span>.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-border-subtle text-zinc-400 font-bold text-xs uppercase tracking-widest bg-zinc-900 hover:bg-zinc-800 transition-all text-center">Export</button>
           <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-zinc-200 active:scale-[0.98] transition-all text-center">+ New Order</button>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatCard label="Total GMV" value="$2.4M" change="+12.5%" isPositive={true} icon={TrendingUp} delay={0.1} />
        <StatCard label="Total Orders" value="1,284" change="+5.2%" isPositive={true} icon={ClipboardList} delay={0.2} />
        <StatCard label="Fill Rate" value="98.2%" change="Target: 98.0%" isPositive={true} icon={BarChart3} delay={0.3} />
        <StatCard label="Backorders" value="42" change="+12 critical" isPositive={false} icon={Package} delay={0.4} />
        <StatCard label="On-Time Del." value="94.5%" change="-1.2% vs LW" isPositive={false} icon={Truck} delay={0.5} />
        <StatCard label="Inv. Value" value="$12.8M" subtitle="Across 3 hubs" change="+0.8%" isPositive={true} icon={Package} delay={0.6} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2 glass-panel p-6 rounded-[1.5rem] shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
             <div>
                <h2 className="text-lg font-display font-bold text-white tracking-tight">Predictive Fulfillment Analysis</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">AI-Projected volume vs Actuals</p>
             </div>
             <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-brand/10 rounded-lg text-[10px] font-bold text-brand uppercase tracking-widest border border-brand/20">
                   <Zap size={12} />
                   <span>ML Optimized</span>
                </div>
             </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10, fontWeight: 'bold' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10, fontWeight: 'bold' }} />
                  <Tooltip 
                    cursor={{ fill: '#18181b', opacity: 0.5 }} 
                    contentStyle={{ backgroundColor: '#121214', borderRadius: '0.75rem', border: '1px solid #27272a', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                    itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="orders" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={32}>
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#818cf8' : '#4f46e5'} />
                     ))}
                  </Bar>
                  <Bar dataKey="revenue" fill="#312e81" radius={[4, 4, 0, 0]} barSize={12} />
               </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Live Activity */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-panel p-8 rounded-[2rem] flex flex-col"
        >
          <h2 className="text-xl font-display font-bold text-white mb-6 tracking-tight">Timeline Activity</h2>
          <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { type: 'delivered', title: 'Order Delivered', desc: 'ORD-9921 delivered to St. Jude\'s Hospital.', time: '2 mins ago', color: 'bg-emerald-500' },
              { type: 'created', title: 'New PO Created', desc: 'PO-442 created for 10,000 N95 Masks.', time: '15 mins ago', color: 'bg-indigo-500' },
              { type: 'stock', title: 'Stock Adjustment', desc: 'Sarah J. adjusted inventory for Item #882.', time: '1 hour ago', color: 'bg-amber-500' },
              { type: 'client', title: 'New Client Onboarded', desc: 'City Pharmacy Group added to platform.', time: '3 hours ago', color: 'bg-brand' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="relative flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full ${activity.color} ring-4 ring-surface-raised shadow-sm z-10 group-hover:scale-125 transition-transform duration-300`} />
                  {i < 3 && <div className="w-[1px] h-full bg-zinc-800 absolute top-3" />}
                </div>
                <div className="pb-4">
                  <h4 className="text-sm font-bold text-zinc-100">{activity.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed tracking-tight">{activity.desc}</p>
                  <span className="text-[10px] font-bold text-zinc-600 mt-2 block uppercase tracking-widest">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
        {/* Intelligence feed */}
        <div className="glass-panel p-6 rounded-[1.5rem] shadow-xl flex flex-col">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display font-bold text-white tracking-tight">Intelligence</h2>
              <Bell size={18} className="text-zinc-600" />
           </div>
           <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar">
              {[
                { type: 'alert', title: 'Cold Chain Anomaly', desc: 'Unit SHP-092 report 5.1°C peak near Dallas.', time: '2m ago', icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-500/5', border: 'border-rose-500/10' },
                { type: 'success', title: 'Bulk Order Cleared', desc: 'St. Mary\'s monthly shipment authenticated.', time: '14m ago', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/5', border: 'border-emerald-500/10' },
                { type: 'info', title: 'Inventory Re-balanced', desc: 'Surgical kits migrated to Hub Alpha.', time: '1h ago', icon: Info, color: 'text-brand', bg: 'bg-brand/5', border: 'border-brand/10' },
              ].map((item, i) => (
                <div key={i} className={`flex gap-4 p-4 rounded-2xl border ${item.border} ${item.bg} hover:bg-zinc-900/50 hover:border-zinc-800 transition-all duration-300 group cursor-pointer`}>
                   <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} shrink-0 border ${item.border} group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                         <p className="text-xs font-bold text-white group-hover:text-brand transition-colors truncate">{item.title}</p>
                         <span className="text-[8px] text-zinc-600 font-bold uppercase shrink-0">{item.time}</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-medium leading-relaxed line-clamp-2">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="mt-8 w-full py-3 bg-zinc-900 border border-border-subtle rounded-xl text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white hover:bg-zinc-800 transition-all">
              View Audit Logs
           </button>
        </div>

        {/* Quick Actions */}
        <div className="glass-panel p-8 rounded-[2rem]">
           <h2 className="text-xl font-display font-bold text-white mb-6 tracking-tight">Operations</h2>
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Create PO', icon: Plus },
                { label: 'New Ship.', icon: Truck },
                { label: 'Add Client', icon: Users },
                { label: 'Adjustment', icon: Package },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm hover:border-brand/50 hover:bg-zinc-800 transition-all group">
                   <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:bg-brand group-hover:text-white transition-all">
                      <action.icon size={20} />
                   </div>
                   <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-white">{action.label}</span>
                </button>
              ))}
           </div>
        </div>

        {/* Top Selling Category */}
        <div className="bg-indigo-600 p-8 rounded-[2rem] text-white overflow-hidden relative group shadow-2xl shadow-indigo-600/20">
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
           <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h2 className="text-xl font-display font-bold mb-1 tracking-tight">Market Insight</h2>
                    <p className="text-indigo-200 text-[10px] font-bold uppercase tracking-widest">Performance Week Over Week</p>
                 </div>
                 <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md">
                    <TrendingUp size={20} />
                 </div>
              </div>
              
              <div className="mb-10">
                 <div className="flex items-baseline gap-2 mb-2">
                    <h4 className="text-3xl font-display font-bold">Surgical Supplies</h4>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono text-white/90">$84.2K</span>
                    <span className="text-[10px] font-bold text-emerald-300 uppercase">+14.2%</span>
                 </div>
              </div>
              
              <button className="w-full mt-auto bg-white text-black py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-xl">
                Generate Report
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
