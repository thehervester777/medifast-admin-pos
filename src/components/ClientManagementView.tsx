/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  CreditCard,
  Building2,
  Phone,
  Mail,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

const clients = [
  { id: 'CLI-10042', name: 'St. Mary\'s Hospital', type: 'Hospital Network', tier: 'Tier 1 (Platinum)', status: 'Active', credit: '$500,000', location: 'Dallas, TX', compliance: 'Verified', color: 'bg-indigo-500' },
  { id: 'CLI-10089', name: 'City Pharmacy Group', type: 'Pharmacy Chain', tier: 'Tier 2 (Gold)', status: 'Active', credit: '$150,000', location: 'New York, NY', compliance: 'Verified', color: 'bg-emerald-500' },
  { id: 'CLI-10102', name: 'Mercy Clinic', type: 'Independent Clinic', tier: 'Tier 3 (Standard)', status: 'On Hold', credit: '$25,000', location: 'Chicago, IL', compliance: 'Pending', color: 'bg-amber-500', isAlert: true },
];

export default function ClientManagementView() {
  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-4 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            Account Management
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
          </h1>
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] mt-2">Manage medical relationships, credit tiers, and lifecycle telemetry.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl border border-white/[0.05] text-zinc-500 font-bold text-[10px] uppercase tracking-widest bg-zinc-950/50 hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2">
              <FileText size={14} />
              Onboarding Docs
           </button>
           <button className="px-8 py-3 rounded-2xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              <Users size={14} />
              Onboard Client
           </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Clients', val: '1,248', change: '+4.2% Velocity', color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Pending Reviews', val: '34', change: 'Tier Mapping', color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
          { label: 'Expiring Nodes', val: '12', change: 'Next 30 Days', color: 'text-rose-500', bg: 'from-danger/10 to-danger/5' },
          { label: 'Yield Coefficient', val: '$14.2K', change: '+8.1% vs LY', color: 'text-success', bg: 'from-success/10 to-success/5' },
        ].map((s, i) => (
          <div key={i} className={`modern-card group hover:border-brand/40 transition-all relative overflow-hidden bg-gradient-to-br ${s.bg} border-white/[0.03]`}>
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current ${s.color}`} />
            
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4 leading-none">{s.label}</p>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-display font-bold text-white tracking-tight leading-none">{s.val}</span>
              <span className={`text-[9px] font-bold tracking-widest uppercase leading-none ${s.color}`}>
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Client List */}
        <div className="flex-1 modern-card p-0 overflow-hidden flex flex-col border-white/[0.03]">
           <div className="p-8 border-b border-white/[0.03] flex flex-wrap items-center justify-between gap-6 bg-white/[0.01]">
              <div className="relative flex-1 min-w-[300px] group">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-brand transition-colors" size={14} />
                 <input type="text" placeholder="Search Identity, Tax ID, or Node Contact..." className="w-full pl-12 pr-5 py-4 bg-zinc-950 border border-white/5 rounded-2xl text-xs text-white outline-none focus:border-brand/40 transition-all font-medium placeholder:text-zinc-800" />
              </div>
              <div className="flex gap-3">
                 <select className="bg-zinc-950 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 text-zinc-700 outline-none focus:border-brand/40 transition-all cursor-pointer">
                    <option>Select Tier</option>
                 </select>
                 <button className="p-3.5 bg-zinc-950 border border-white/5 rounded-2xl text-zinc-700 hover:text-white transition-all shadow-xl">
                    <Filter size={18} />
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-zinc-950/20 border-b border-white/[0.03]">
                   <tr>
                      <th className="p-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">Client Cluster / Segment</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] text-center">Lifecycle</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">Credit Integrity</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.01]">
                   {clients.map(client => (
                     <tr key={client.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                        <td className="p-8">
                           <div className="flex items-center gap-5">
                              <div className={`w-12 h-12 rounded-2xl ${client.color} flex items-center justify-center text-white/40 group-hover:text-white transition-all shadow-2xl shrink-0 font-display font-bold text-lg bg-zinc-950 border border-white/5 relative overflow-hidden group/box`}>
                                 <div className="absolute inset-0 bg-current opacity-5 group-hover/box:opacity-20 transition-opacity" />
                                 <span className="relative z-10">{client.name.substring(0, 2)}</span>
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{client.name}</p>
                                 <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest mt-1.5">{client.type} • {client.tier}</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-8 text-center">
                           <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase border transition-all
                              ${client.status === 'Active' ? 'text-success bg-success/5 border-success/20' : 'text-warning bg-warning/5 border-warning/20'}
                           `}>
                              <div className={`w-1 h-1 rounded-full ${client.status === 'Active' ? 'bg-success animate-pulse' : 'bg-warning'}`} />
                              {client.status}
                           </span>
                        </td>
                        <td className="p-8">
                           <p className="text-base font-display font-bold text-zinc-100 group-hover:text-white tracking-tight">{client.credit}</p>
                           <p className="text-[9px] text-zinc-800 font-bold uppercase tracking-widest mt-1.5">Maturity: <span className="text-zinc-600">Net 30 Protocol</span></p>
                        </td>
                        <td className="p-8 text-right">
                           <button className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-white/5 rounded-xl text-zinc-800 hover:text-white transition-all shadow-xl group/btn">
                              <MoreVertical size={16} className="group-hover/btn:rotate-90 transition-transform" />
                           </button>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
        </div>

        {/* Selected Account Sidebar */}
        <div className="w-full lg:min-w-[400px] lg:w-[400px] flex flex-col gap-8">
           <div className="modern-card p-1 border-white/[0.03]">
              <div className="bg-zinc-950/20 backdrop-blur-xl p-10 rounded-[inherit] space-y-10 border border-white/[0.03]">
                 <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-brand/10 border border-brand/20 rounded-[2.5rem] flex items-center justify-center text-brand mb-8 shadow-[0_20px_50px_rgba(99,102,241,0.2)] group cursor-pointer relative overflow-hidden">
                       <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/20 transition-all duration-700" />
                       <Building2 size={40} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-white tracking-tight leading-tight px-4">{clients[0].name}</h2>
                      <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-zinc-950 border border-white/5 rounded-full">
                        <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.2em]">{clients[0].id}</span>
                        <div className="w-1 h-1 rounded-full bg-zinc-800" />
                        <span className="text-[10px] text-success font-bold uppercase tracking-widest">Verified Hub</span>
                      </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="modern-card p-6 bg-zinc-950 border border-white/5 group hover:border-brand/40 transition-all duration-500 shadow-inner">
                       <div className="flex items-center justify-between mb-4">
                          <p className="text-[9px] font-bold uppercase text-zinc-800 tracking-[0.2em]">Compliance Protocol</p>
                          <ShieldCheck size={16} className="text-success shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                       </div>
                       <div className="flex items-center gap-3">
                          <p className="text-xs font-bold text-zinc-100 uppercase tracking-[0.1em]">Fully Operational</p>
                          <div className="w-1 h-1 rounded-full bg-zinc-800" />
                          <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest">Dec 2026 Audit</span>
                       </div>
                    </div>

                    <div className="modern-card p-6 bg-zinc-950 border border-white/5 shadow-inner">
                       <p className="text-[9px] font-bold uppercase text-zinc-800 tracking-[0.2em] mb-6">Node Communication</p>
                       <div className="space-y-4">
                          <div className="flex items-center gap-4 group cursor-pointer">
                             <div className="w-9 h-9 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-zinc-700 group-hover:text-white group-hover:border-brand transition-all">
                                <Mail size={14} />
                             </div>
                             <span className="text-xs text-zinc-400 font-medium tracking-tight">procurement@stmarys.edu</span>
                          </div>
                          <div className="flex items-center gap-4 group cursor-pointer">
                             <div className="w-9 h-9 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-zinc-700 group-hover:text-white group-hover:border-success transition-all">
                                <Phone size={14} />
                             </div>
                             <span className="text-xs text-zinc-400 font-medium tracking-tight">+1 (555) 293-1002</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-white/5 rounded-3xl hover:bg-brand/10 hover:border-brand/40 transition-all group shadow-xl">
                       <CreditCard size={20} className="text-zinc-800 group-hover:text-brand mb-3 transition-colors duration-500" />
                       <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.2em] group-hover:text-zinc-200 transition-colors">Billing</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-white/5 rounded-3xl hover:bg-brand/10 hover:border-brand/40 transition-all group shadow-xl">
                       <FileText size={20} className="text-zinc-800 group-hover:text-brand mb-3 transition-colors duration-500" />
                       <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.2em] group-hover:text-zinc-200 transition-colors">Nodes</span>
                    </button>
                 </div>
                 
                 <button className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                    Access Ledger Stream
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
