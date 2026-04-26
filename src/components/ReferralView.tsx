import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  TrendingUp,
  ArrowRightCircle
} from 'lucide-react';

export default function ReferralView() {
  const topCodes = [
    { code: 'SABID20', description: 'keranigan-1', uses: 2, status: 'Active' },
    { code: 'MEDI2026', description: '-', uses: 1, status: 'Active' },
    { code: 'BIBAK25', description: 'keranigan-2', uses: 0, status: 'Active' },
  ];

  const recentReferrals = [
    { customer: 'bristy pharmacy', phone: '01734142511', code: 'MEDI2026', date: '25 Apr 2026' },
    { customer: 'sikder pharmacy', phone: '01719984699', code: 'SABID20', date: '23 Apr 2026' },
    { customer: 'ashian model pharmacy', phone: '01314014239', code: 'SABID20', date: '06 Nov 2025' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-display font-medium text-white/60 tracking-tight">
          WELCOME !! <span className="text-brand font-bold uppercase tracking-widest">RISHU SADMIN</span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
          <span>Home</span>
          <ChevronRight size={12} />
          <span>editor</span>
          <ChevronRight size={12} />
          <span>referral</span>
          <ChevronRight size={12} />
          <span className="text-zinc-300">dashboard</span>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Codes', value: '342', bg: 'from-brand/10 to-brand/5', icon: Share2, trend: '+12%', color: 'text-brand' },
          { label: 'Active Codes', value: '28', bg: 'from-success/10 to-success/5', icon: CheckCircle2, trend: '+4%', color: 'text-success' },
          { label: 'Total Referrals', value: '1,280', bg: 'from-warning/10 to-warning/5', icon: Users, trend: '+18%', color: 'text-warning' },
          { label: 'Conversion Rate', value: '14.2%', bg: 'from-danger/10 to-danger/5', icon: TrendingUp, trend: '+2.1%', color: 'text-danger' },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -4 }}
            className={`modern-card bg-gradient-to-br ${item.bg} relative overflow-hidden group`}
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-surface-raised border border-white/5 ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-raised border border-white/5 ${item.color}`}>
                    {item.trend}
                  </span>
                </div>
                <p className="text-3xl font-display font-bold text-white mb-1">{item.value}</p>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">{item.label}</p>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 ${item.color}`}>
              <item.icon size={120} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Top Performing Codes Table */}
        <div className="modern-card p-0 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-white/[0.03] flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
               <h3 className="text-sm font-bold text-white uppercase tracking-widest">Top Performing Codes</h3>
             </div>
             <button className="text-[10px] font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest px-3 py-1 rounded-full border border-white/5 bg-white/5">
               View All
             </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.02] bg-white/[0.01]">
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Campaign Code</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Target Node</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Reach</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {topCodes.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <code className="text-zinc-300 font-mono text-[11px] bg-zinc-800/50 px-2 py-1 rounded border border-white/5 ring-1 ring-brand/20">
                        {row.code}
                      </code>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-medium">{row.description}</span>
                        <span className="text-[10px] text-zinc-600">ID: NODE-0422</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs font-bold text-white">{row.uses}</span>
                        <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                           <div className="h-full bg-brand rounded-full" style={{ width: `${(row.uses/5)*100}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-success px-2 py-0.5 rounded-full border border-success/20 bg-success/5 uppercase tracking-widest">
                        <span className="w-1 h-1 rounded-full bg-success animate-pulse" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Referrals Table */}
        <div className="modern-card p-0 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-white/[0.03] flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-warning shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
               <h3 className="text-sm font-bold text-white uppercase tracking-widest">Real-time Stream</h3>
             </div>
             <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Live</span>
             </div>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/[0.02] bg-white/[0.01]">
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Entity</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Contact</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Channel</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {recentReferrals.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-raised border border-white/5 flex items-center justify-center text-[10px] font-bold text-brand ring-1 ring-white/5">
                          {row.customer.substring(0, 1).toUpperCase()}
                        </div>
                        <span className="text-xs text-white font-medium capitalize">{row.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-zinc-500 font-mono tracking-tighter italic">{row.phone}</td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold text-brand px-2 py-0.5 rounded border border-brand/20 bg-brand/5 tracking-widest uppercase">
                        {row.code}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-[10px] text-zinc-600 font-medium">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
