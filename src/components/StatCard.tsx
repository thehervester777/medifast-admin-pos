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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.19, 1, 0.22, 1] 
      }}
      className="modern-card group relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${isPositive ? 'bg-success' : 'bg-danger'}`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="w-12 h-12 rounded-[1.25rem] bg-surface-base border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-white group-hover:bg-brand group-hover:border-transparent transition-all duration-500 group-hover:scale-110 shadow-sm">
            <Icon size={20} />
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest ${isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'} border border-border-subtle/50 shadow-sm`}>
            {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingDown size={12} strokeWidth={3} />}
            {change}
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{label}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display font-bold text-text-primary tracking-tight transition-all duration-500">{value}</span>
            {subtitle && <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{subtitle}</span>}
          </div>
        </div>

        {/* Progress bar refinement */}
        <div className="mt-8 space-y-2">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-muted">
            <span>Utilization</span>
            <span>{isPositive ? '82%' : '24%'}</span>
          </div>
          <div className="h-1.5 w-full bg-surface-raised rounded-full overflow-hidden border border-border-subtle/20">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: isPositive ? '82%' : '24%' }}
              transition={{ delay: delay + 0.6, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className={`h-full rounded-full relative ${isPositive ? 'bg-success shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-danger shadow-[0_0_15px_rgba(239,68,68,0.3)]'}`}
            >
              <div className="absolute inset-0 shimmer opacity-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
