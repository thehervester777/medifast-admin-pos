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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">Client Management</h1>
          <p className="text-zinc-500 font-medium tracking-tight text-sm">Managed account relationships, tiers, and credit terms.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-border-subtle text-zinc-400 font-bold text-[9px] uppercase tracking-widest bg-zinc-900 hover:bg-zinc-800 transition-all">
              Onboarding Docs
           </button>
           <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white text-black font-bold text-[9px] uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg">
              + Onboard Client
           </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Active Clients', val: '1,248', change: '+4.2% YTD', color: 'text-indigo-400' },
          { label: 'Pending Approvals', val: '34', change: 'Needs Review', color: 'text-amber-400' },
          { label: 'Expiring Licenses', val: '12', change: 'Next 30 Days', color: 'text-rose-400' },
          { label: 'Avg Order Value', val: '$14.2K', change: '+8.1% vs LY', color: 'text-emerald-400' },
        ].map((s, i) => (
          <div key={i} className="glass-panel p-5 rounded-xl transition-all hover:border-brand/30">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{s.label}</p>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white tracking-tight">{s.val}</span>
              <span className={`text-[9px] font-bold mt-0.5 tracking-widest uppercase ${s.color}`}>{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Client List */}
        <div className="flex-1 glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl">
           <div className="p-6 border-b border-border-subtle flex flex-wrap items-center justify-between gap-4">
              <div className="relative flex-1 min-w-[250px]">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                 <input type="text" placeholder="Search clients, tax ID, or contact..." className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-transparent focus:border-border-subtle rounded-xl text-xs text-white focus:ring-4 focus:ring-brand/5 outline-none transition-all" />
              </div>
              <div className="flex gap-2">
                 <select className="bg-zinc-900 border-none rounded-xl text-[10px] font-bold uppercase tracking-widest px-4 py-2 text-zinc-500 outline-none">
                    <option>All Tiers</option>
                 </select>
                 <button className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-all">
                    <Filter size={18} />
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-zinc-900/50 border-b border-border-subtle">
                   <tr>
                      <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Client / Segment</th>
                      <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Lifecycle</th>
                      <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Credit Limit</th>
                      <th className="p-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Action</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle/30">
                   {clients.map(client => (
                     <tr key={client.id} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                        <td className="p-6">
                           <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl ${client.color} flex items-center justify-center text-white/90 shadow-lg shrink-0 font-display font-bold`}>
                                 {client.name.substring(0, 2)}
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-white tracking-tight">{client.name}</p>
                                 <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{client.type} • {client.tier}</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-6 text-center">
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase
                              ${client.status === 'Active' ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20' : 'text-amber-500 bg-amber-500/10 border border-amber-500/20'}
                           `}>
                              {client.status}
                           </span>
                        </td>
                        <td className="p-6">
                           <p className="text-sm font-mono font-bold text-white tracking-tight">{client.credit}</p>
                           <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-0.5">Contract Term: Net 30</p>
                        </td>
                        <td className="p-6 text-right">
                           <button className="p-2 text-zinc-600 hover:text-white transition-colors">
                              <MoreVertical size={18} />
                           </button>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
        </div>

        {/* Selected Account Sidebar */}
        <div className="w-full lg:w-96 glass-panel rounded-[2.5rem] p-8 space-y-8 flex flex-col shadow-2xl">
           <div className="text-center">
              <div className="w-20 h-20 bg-brand/20 rounded-[2.5rem] flex items-center justify-center text-brand mx-auto mb-6 border border-brand/20 shadow-xl shadow-brand/10">
                 <Building2 size={36} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white tracking-tight">St. Mary's Hospital</h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-2">{clients[0].id}</p>
           </div>

           <div className="space-y-4">
              <div className="p-5 bg-zinc-900 border border-border-subtle rounded-2xl group hover:border-brand/40 transition-all duration-500">
                 <div className="flex items-center justify-between mb-4">
                    <p className="text-[9px] font-bold uppercase text-zinc-600 tracking-widest">Compliance Status</p>
                    <ShieldCheck size={16} className="text-emerald-500" />
                 </div>
                 <div className="flex items-center gap-3">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Fully Verified</p>
                    <span className="text-[9px] text-zinc-500 font-bold">Expires: Dec 2026</span>
                 </div>
              </div>

              <div className="p-5 bg-zinc-900 border border-border-subtle rounded-2xl">
                 <p className="text-[9px] font-bold uppercase text-zinc-600 tracking-widest mb-4">Quick Contact</p>
                 <div className="space-y-3">
                    <div className="flex items-center gap-3">
                       <Mail size={14} className="text-zinc-500" />
                       <span className="text-xs text-zinc-300 font-medium">procurement@stmarys.edu</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Phone size={14} className="text-zinc-500" />
                       <span className="text-xs text-zinc-300 font-medium">+1 (555) 293-1002</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-zinc-900 border border-border-subtle rounded-2xl hover:bg-brand/10 hover:border-brand/40 transition-all group">
                 <CreditCard size={20} className="text-zinc-600 group-hover:text-brand mb-2" />
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Billing</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-zinc-900 border border-border-subtle rounded-2xl hover:bg-brand/10 hover:border-brand/40 transition-all group">
                 <FileText size={20} className="text-zinc-600 group-hover:text-brand mb-2" />
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Contracts</span>
              </button>
           </div>
           
           <button className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all shadow-xl">
              Open Account Ledger
           </button>
        </div>
      </div>
    </div>
  );
}
