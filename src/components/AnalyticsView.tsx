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
    <div className="space-y-8 pb-12 transform-gpu">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">Performance Reports</h1>
          <p className="text-text-muted font-medium tracking-tight">Track your sales, shipping, and inventory performance.</p>
        </div>
        <div className="flex gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle text-text-muted font-bold text-[10px] uppercase tracking-widest bg-surface-raised hover:bg-text-primary/5 transition-all">
              <RefreshCw size={16} className="text-text-muted" />
              <span>Refresh</span>
           </button>
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-surface-base font-bold text-[10px] uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all">
              <FileText size={16} />
              <span>New Report</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Yearly Total Sales', val: '$4.2M', change: '+12.5%', icon: TrendingUp },
          { label: 'Average Profit', val: '24.8%', change: '+1.2%', icon: BarChart },
          { label: 'On-Time Delivery', val: '98.2%', change: '-0.4%', icon: Truck },
          { label: 'Out of Stock Rate', val: '1.4%', change: '-0.2%', icon: AlertCircle },
        ].map((s, i) => (
           <div key={i} className="modern-card p-6 border-border-subtle flex items-center justify-between hover:border-brand/40 transition-all group bg-surface-panel/30 shadow-sm">
              <div>
                 <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">{s.label}</p>
                 <p className="text-2xl font-display font-bold text-text-primary tracking-tight">{s.val}</p>
              </div>
              <div className="text-right">
                 <div className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${s.change.startsWith('+') ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>{s.change}</div>
              </div>
           </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="modern-card p-8 shadow-sm border-border-subtle bg-surface-panel/30 transition-all hover:border-brand/20">
            <h2 className="text-xl font-display font-bold text-text-primary mb-8 tracking-tight uppercase">Monthly Sales</h2>
            <div className="h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 'bold' }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 'bold' }} />
                     <Tooltip cursor={{ fill: 'var(--text-primary)', opacity: 0.05 }} contentStyle={{ backgroundColor: 'var(--surface-raised)', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }} itemStyle={{ color: 'var(--text-primary)' }} />
                     <Bar dataKey="sales" radius={[4, 4, 0, 0]} barSize={24}>
                        {salesData.map((entry, index) => (
                           <Cell key={index} fill={entry.sales > entry.target ? 'var(--brand)' : 'var(--brand-muted, #818cf8)'} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="modern-card p-8 shadow-sm border-border-subtle bg-surface-panel/30 transition-all hover:border-brand/20">
            <h2 className="text-xl font-display font-bold text-text-primary mb-8 tracking-tight uppercase">Sales by Category</h2>
            <div className="h-[350px] flex flex-col sm:flex-row items-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={8} minAngle={15} stroke="none">
                        {categoryData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ backgroundColor: 'var(--surface-raised)', borderRadius: '0.75rem', border: '1px solid var(--border-subtle)' }} />
                  </PieChart>
               </ResponsiveContainer>
               <div className="w-full sm:w-1/3 flex flex-wrap sm:flex-col items-center sm:items-start justify-center gap-4 sm:space-y-4">
                  {categoryData.map((c, i) => (
                     <div key={i} className="flex items-center gap-3 group cursor-default">
                        <div className="w-2.5 h-2.5 rounded-sm transition-transform group-hover:scale-125" style={{ backgroundColor: c.color }} />
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest group-hover:text-text-primary transition-colors">{c.name}</span>
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
