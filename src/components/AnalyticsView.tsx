/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell, PieChart, Pie
} from 'recharts';
import { ArrowUpRight, TrendingUp, AlertCircle, RefreshCw, FileText } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 420, target: 400 },
  { month: 'Feb', sales: 380, target: 400 },
  { month: 'Mar', sales: 510, target: 450 },
  { month: 'Apr', sales: 490, target: 450 },
  { month: 'May', sales: 620, target: 500 },
  { month: 'Jun', sales: 580, target: 550 },
];

const categoryData = [
  { name: 'Pharma', value: 400, color: '#7C3AED' },
  { name: 'PPE', value: 300, color: '#C4B5FD' },
  { name: 'Surgical', value: 300, color: '#5B21B6' },
  { name: 'Diagnostics', value: 200, color: '#DDD6FE' },
];

export default function AnalyticsView() {
  const categoryData = [
    { name: 'Pharma', value: 400, color: '#4f46e5' },
    { name: 'PPE', value: 300, color: '#6366f1' },
    { name: 'Surgical', value: 300, color: '#818cf8' },
    { name: 'Diagnostics', value: 200, color: '#a5b4fc' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Analytics & Insights</h1>
          <p className="text-zinc-500 font-medium tracking-tight">Comprehensive view of platform performance.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle text-zinc-400 font-bold text-[10px] uppercase tracking-widest bg-zinc-900 hover:bg-zinc-800 transition-all">
              <RefreshCw size={16} className="text-zinc-500" />
              <span>Refresh</span>
           </button>
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 active:scale-[0.98] transition-all">
              <FileText size={16} />
              <span>New Report</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'YTD Sales', val: '$4.2M', change: '+12.5%', icon: TrendingUp },
          { label: 'Avg Margin', val: '24.8%', change: '+1.2%', icon: BarChart },
          { label: 'On-Time Deliv.', val: '98.2%', change: '-0.4%', icon: Truck },
          { label: 'Stockout Rate', val: '1.4%', change: '-0.2%', icon: AlertCircle },
        ].map((s, i) => (
           <div key={i} className="glass-panel p-6 rounded-2xl flex items-center justify-between hover:border-brand/40 transition-all group">
              <div>
                 <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{s.label}</p>
                 <p className="text-2xl font-display font-bold text-white tracking-tight">{s.val}</p>
              </div>
              <div className="text-right">
                 <div className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${s.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>{s.change}</div>
              </div>
           </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="glass-panel p-8 rounded-[2.5rem] shadow-xl">
            <h2 className="text-xl font-display font-bold text-white mb-8 tracking-tight">Monthly Revenue Performance</h2>
            <div className="h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10, fontWeight: 'bold' }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10, fontWeight: 'bold' }} />
                     <Tooltip cursor={{ fill: '#18181b', opacity: 0.5 }} contentStyle={{ backgroundColor: '#121214', borderRadius: '0.75rem', border: '1px solid #27272a', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }} itemStyle={{ color: '#white' }} />
                     <Bar dataKey="sales" radius={[4, 4, 0, 0]} barSize={24}>
                        {salesData.map((entry, index) => (
                           <Cell key={index} fill={entry.sales > entry.target ? '#4f46e5' : '#312e81'} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="glass-panel p-8 rounded-[2.5rem] shadow-xl">
            <h2 className="text-xl font-display font-bold text-white mb-8 tracking-tight">Sales by Category</h2>
            <div className="h-[350px] flex flex-col sm:flex-row items-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={8} minAngle={15} stroke="none">
                        {categoryData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ backgroundColor: '#121214', borderRadius: '0.75rem', border: '1px solid #27272a' }} />
                  </PieChart>
               </ResponsiveContainer>
               <div className="w-full sm:w-1/3 flex flex-wrap sm:flex-col items-center sm:items-start justify-center gap-4 sm:space-y-4">
                  {categoryData.map((c, i) => (
                     <div key={i} className="flex items-center gap-3 group cursor-default">
                        <div className="w-2.5 h-2.5 rounded-sm transition-transform group-hover:scale-125" style={{ backgroundColor: c.color }} />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">{c.name}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

import { Truck } from 'lucide-react';
