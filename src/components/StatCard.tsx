/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  subtitle?: string;
  delay?: number;
}

export default function StatCard({ label, value, change, isPositive, icon: Icon, subtitle, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-panel p-5 rounded-xl group hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-border-subtle flex items-center justify-center text-zinc-500 group-hover:bg-brand group-hover:text-white group-hover:border-transparent transition-all duration-500">
          <Icon size={20} />
        </div>
        <div className={`flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
          {isPositive ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{label}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-display font-bold text-white tracking-tight">{value}</span>
          {subtitle && <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{subtitle}</span>}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border-subtle">
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isPositive ? '70%' : '30%' }}
            transition={{ delay: delay + 0.5, duration: 1 }}
            className={`h-full rounded-full ${isPositive ? 'bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]' : 'bg-rose-500'}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
