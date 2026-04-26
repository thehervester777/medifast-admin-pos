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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Updated Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-4 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            MediFast <span className="text-brand">Command</span>
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational Root</span>
          </h1>
          <div className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] mt-2 italic flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            Core Analytics • System Pulse: Nominal
          </div>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl bg-zinc-950 border border-white/5 text-zinc-500 font-bold text-[10px] uppercase tracking-widest hover:text-white hover:border-white/10 transition-all flex items-center gap-2">
              <Calendar size={14} />
              <span>Time Horizon</span>
           </button>
           <button className="px-8 py-3 rounded-2xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              <Activity size={14} />
              <span>Global Audit</span>
           </button>
        </div>
      </div>

      {/* Status Grid (9 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statusCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="modern-card group relative overflow-hidden h-28 flex flex-col justify-between border border-white/[0.03] hover:border-brand/30 hover:shadow-brand/5"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 blur-2xl rounded-full -mr-8 -mt-8 group-hover:bg-brand/10 transition-colors" />
            <div className="flex justify-between items-start relative z-10">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                {card.label}
              </span>
              <card.icon size={14} className="text-zinc-600 group-hover:text-brand transition-colors" />
            </div>
            <div className="flex items-end justify-between relative z-10">
              <span className="text-2xl font-display font-bold text-white leading-none">
                {card.value}
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-3 bg-brand/20 rounded-full overflow-hidden">
                   <div className="h-full bg-brand animate-pulse" style={{ height: '60%' }} />
                </div>
                <div className="w-1 h-5 bg-brand/20 rounded-full overflow-hidden">
                   <div className="h-full bg-brand animate-pulse" style={{ height: '80%' }} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Statistics Chart & Advanced Visuals */}
        <div className="lg:col-span-9 space-y-8">
          <div className="modern-card p-0 flex flex-col h-[550px] relative overflow-hidden group">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="p-8 border-b border-white/[0.03] flex items-center justify-between relative z-10">
              <div>
                <h2 className="text-xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                  Market Performance
                  <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Alpha Stream</span>
                </h2>
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-2 flex items-center gap-2">
                  <Activity size={10} className="text-success animate-pulse" />
                  Real-time synchronization across 4 regions
                </p>
              </div>
              <div className="flex items-center gap-2">
                {['D', 'W', 'M', 'Y'].map(period => (
                  <button key={period} className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold uppercase transition-all ${period === 'W' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-zinc-600 hover:bg-white/5'}`}>
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 p-8 relative z-10">
              <div className="w-full h-full relative group">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.1} />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.02)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#3f3f46', fontSize: 10, fontWeight: '700' }} 
                      dy={15} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#3f3f46', fontSize: 10, fontWeight: '700' }} 
                    />
                    <Tooltip 
                      cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '4 4' }} 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-zinc-950/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
                              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{payload[0].payload.name}</p>
                              <div className="space-y-1">
                                <p className="text-xl font-display font-bold text-white flex items-center gap-2">
                                  {payload[0].value} <span className="text-[10px] font-sans text-zinc-600">Orders</span>
                                </p>
                                <p className="text-xs font-medium text-brand">
                                  Revenue: ${payload[0].payload.revenue.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="orders" 
                      stroke="#6366f1" 
                      strokeWidth={3} 
                      fill="url(#areaGradient)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Bar Metrics */}
            <div className="px-8 py-4 bg-white/[0.01] border-t border-white/[0.03] flex items-center justify-between">
               <div className="flex items-center gap-8">
                  {[
                    { label: 'Avg Sale', value: '$420.50', trend: '+2.4%' },
                    { label: 'Latency', value: '42ms', trend: 'Optimal' },
                    { label: 'Uptime', value: '99.98%', trend: 'Stable' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest block">{stat.label}</span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-bold text-zinc-300">{stat.value}</span>
                        <span className="text-[8px] font-bold text-success">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
               </div>
               <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 hover:text-white transition-colors">
                 EXPORT PDF <ArrowRightCircle size={14} />
               </button>
            </div>
          </div>

          {/* New Advanced Info Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card p-6 flex items-center gap-6 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02] -mr-4 -mt-4">
                  <Package size={140} />
               </div>
               <div className="w-16 h-16 rounded-2xl bg-brand/5 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Package size={32} />
               </div>
               <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">Active Shipments</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">You have 12 high-priority medical shipments in transit globally.</p>
                  <div className="flex items-center gap-4 mt-4">
                     <span className="text-xs font-bold text-brand uppercase tracking-widest cursor-pointer hover:underline">Track All</span>
                     <span className="text-xs font-bold text-zinc-700 uppercase tracking-widest cursor-pointer hover:underline">Manifests</span>
                  </div>
               </div>
            </div>

            <div className="modern-card p-6 flex items-center gap-6 overflow-hidden relative border-success/20">
               <div className="absolute top-0 right-0 p-8 opacity-[0.02] -mr-4 -mt-4">
                  <Heart size={140} className="text-success" />
               </div>
               <div className="w-16 h-16 rounded-2xl bg-success/5 border border-success/20 flex items-center justify-center text-success shrink-0">
                  <Heart size={32} />
               </div>
               <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">Health Analytics</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Inventory levels are 84% healthy based on current demand velocity.</p>
                  <div className="flex items-center gap-4 mt-4">
                     <span className="text-xs font-bold text-success uppercase tracking-widest cursor-pointer hover:underline">View Report</span>
                     <span className="text-xs font-bold text-zinc-700 uppercase tracking-widest cursor-pointer hover:underline">Audit</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quick Actions & Intelligence */}
        <div className="lg:col-span-3 space-y-8">
          <div className="modern-card p-8 bg-brand/5 border-brand/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/20 blur-[60px] rounded-full -mr-12 -mt-12 group-hover:bg-brand/30 transition-all" />
            
            <div className="relative z-10">
              <h2 className="text-xl font-display font-bold text-white tracking-tight mb-2">Smart Actions</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-8">AI-Powered Optimization</p>
              
              <div className="space-y-2">
                {[
                  { label: 'Reorder Low Stock', icon: RotateCcw, color: 'text-brand', bg: 'bg-brand/10' },
                  { label: 'Dispatch Pending', icon: Truck, color: 'text-success', bg: 'bg-success/10' },
                  { label: 'Audit Inventory', icon: Archive, color: 'text-warning', bg: 'bg-warning/10' },
                  { label: 'System Update', icon: Clock, color: 'text-zinc-400', bg: 'bg-zinc-800/10' },
                ].map((action, i) => (
                  <button 
                    key={i}
                    className="w-full flex items-center justify-between p-3 rounded-2xl bg-zinc-950/40 border border-white/[0.03] hover:border-brand/40 hover:bg-zinc-900/60 transition-all group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${action.bg} ${action.color} group-hover/btn:scale-110 transition-transform`}>
                        <action.icon size={14} />
                      </div>
                      <span className="text-xs font-bold text-zinc-300 group-hover/btn:text-white transition-colors uppercase tracking-tight">{action.label}</span>
                    </div>
                    <ChevronRight size={14} className="text-zinc-700 group-hover/btn:text-brand transition-colors" />
                  </button>
                ))}
              </div>
              
              <button className="w-full mt-6 py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                Launch Wizard
              </button>
            </div>
          </div>

          <div className="modern-card p-1">
             <div className="bg-zinc-950 rounded-[inherit] p-7 h-full flex flex-col justify-between border border-white/[0.03]">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-xs font-bold text-white uppercase tracking-widest">Global Status</h3>
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-zinc-950 bg-zinc-900 flex items-center justify-center text-[8px] font-bold text-zinc-500">
                           {i}
                        </div>
                      ))}
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Efficiency</span>
                      <span className="text-xs font-bold text-success">94.2%</span>
                   </div>
                   <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-brand shimmer" style={{ width: '94.2%' }} />
                   </div>
                </div>

                <div className="mt-12 text-center">
                   <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.3em] mb-4">Operations Hub</p>
                   <div className="flex justify-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-warning shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
