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
    <div className="space-y-6 pb-10 transform-gpu">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-4 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Manage Customers
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Manage customer accounts, credit limits, and purchase history.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 rounded-2xl border border-border-subtle text-text-muted font-bold text-[10px] uppercase tracking-widest bg-surface-base hover:bg-text-primary/5 hover:text-text-primary transition-all flex items-center gap-2">
              <FileText size={14} />
              Customer Documents
           </button>
           <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
              <Users size={14} />
              Add New Customer
           </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Customers', val: '1,248', change: '+4.2% Growth', color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Pending Reviews', val: '34', change: 'New Accounts', color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
          { label: 'Expiring Soon', val: '12', change: 'Next 30 Days', color: 'text-rose-500', bg: 'from-danger/10 to-danger/5' },
          { label: 'Avg Customer Revenue', val: '$14.2K', change: '+8.1% vs LY', color: 'text-success', bg: 'from-success/10 to-success/5' },
        ].map((s, i) => (
          <div key={i} className={`modern-card group hover:border-brand/40 transition-all relative overflow-hidden bg-gradient-to-br ${s.bg} border-border-subtle shadow-sm`}>
            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current ${s.color}`} />
            
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4 leading-none">{s.label}</p>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-display font-bold text-text-primary tracking-tight leading-none group-hover:text-glow transition-all">{s.val}</span>
              <span className={`text-[9px] font-bold tracking-widest uppercase leading-none ${s.color}`}>
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Client List */}
        <div className="flex-1 modern-card p-0 overflow-hidden flex flex-col border-border-subtle">
           <div className="p-8 border-b border-border-subtle flex flex-wrap items-center justify-between gap-6 bg-surface-panel/50">
              <div className="relative flex-1 min-w-[300px] group">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
                 <input type="text" placeholder="Search by Customer name, Tax ID, or Phone..." className="w-full pl-12 pr-5 py-4 bg-surface-base border border-border-subtle rounded-2xl text-xs text-text-primary outline-none focus:border-brand/40 transition-all font-medium placeholder:text-text-muted" />
              </div>
              <div className="flex gap-3">
                 <select className="bg-surface-base border border-border-subtle rounded-2xl text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 text-text-secondary outline-none focus:border-brand/40 transition-all cursor-pointer">
                    <option>Select Tier</option>
                 </select>
                 <button className="p-3.5 bg-surface-base border border-border-subtle rounded-2xl text-text-secondary hover:text-text-primary transition-all shadow-xl">
                    <Filter size={18} />
                 </button>
              </div>
           </div>

            <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-surface-panel border-b border-border-subtle">
                   <tr>
                      <th className="p-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Customer Name & Type</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-center">Status</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Credit Limit</th>
                      <th className="p-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                   {clients.map(client => (
                     <tr key={client.id} className="hover:bg-text-primary/[0.02] transition-colors group cursor-pointer">
                        <td className="p-8">
                           <div className="flex items-center gap-5">
                              <div className={`w-12 h-12 rounded-2xl ${client.color} flex items-center justify-center text-white/40 group-hover:text-white transition-all shadow-2xl shrink-0 font-display font-bold text-lg bg-surface-base border border-border-subtle relative overflow-hidden group/box`}>
                                 <div className="absolute inset-0 bg-current opacity-5 group-hover/box:opacity-20 transition-opacity" />
                                 <span className="relative z-10">{client.name.substring(0, 2)}</span>
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{client.name}</p>
                                 <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1.5">{client.type} • {client.tier}</p>
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
                           <p className="text-base font-display font-bold text-text-primary group-hover:text-text-primary tracking-tight">{client.credit}</p>
                           <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mt-1.5">Payment Terms: <span className="text-text-muted/60">Net 30</span></p>
                        </td>
                        <td className="p-8 text-right">
                           <button className="w-10 h-10 flex items-center justify-center bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-text-primary transition-all shadow-xl group/btn">
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
           <div className="modern-card p-1 border-border-subtle">
              <div className="bg-surface-panel p-10 rounded-[inherit] space-y-10 border border-border-subtle">
                 <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-brand/10 border border-brand/20 rounded-[2.5rem] flex items-center justify-center text-brand mb-8 shadow-xl group cursor-pointer relative overflow-hidden">
                       <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/20 transition-all duration-700" />
                       <Building2 size={40} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                       <h2 className="text-3xl font-display font-bold text-text-primary tracking-tight leading-tight px-4">{clients[0].name}</h2>
                       <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-surface-base border border-border-subtle rounded-full">
                         <span className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">{clients[0].id}</span>
                         <div className="w-1 h-1 rounded-full bg-border-subtle" />
                         <span className="text-[10px] text-success font-bold uppercase tracking-widest">Verified Account</span>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="modern-card p-6 bg-surface-base border border-border-subtle group hover:border-brand/40 transition-all duration-500 shadow-inner">
                       <div className="flex items-center justify-between mb-4">
                          <p className="text-[9px] font-bold uppercase text-text-muted tracking-[0.2em]">Verification Status</p>
                          <ShieldCheck size={16} className="text-success shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                       </div>
                       <div className="flex items-center gap-3">
                          <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.1em]">Verified Account</p>
                          <div className="w-1 h-1 rounded-full bg-border-subtle" />
                          <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">Dec 2026 Audit</span>
                       </div>
                    </div>

                    <div className="modern-card p-6 bg-surface-base border border-border-subtle shadow-inner">
                       <p className="text-[9px] font-bold uppercase text-text-muted tracking-[0.2em] mb-6">Contact Information</p>
                       <div className="space-y-4">
                          <div className="flex items-center gap-4 group cursor-pointer">
                             <div className="w-9 h-9 bg-surface-base border border-border-subtle rounded-xl flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:border-brand transition-all">
                                <Mail size={14} />
                             </div>
                             <span className="text-xs text-text-secondary font-medium tracking-tight">procurement@stmarys.edu</span>
                          </div>
                          <div className="flex items-center gap-4 group cursor-pointer">
                             <div className="w-9 h-9 bg-surface-base border border-border-subtle rounded-xl flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:border-success transition-all">
                                <Phone size={14} />
                             </div>
                             <span className="text-xs text-text-secondary font-medium tracking-tight">+1 (555) 293-1002</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-6 bg-surface-base border border-border-subtle rounded-3xl hover:bg-brand/10 hover:border-brand/40 transition-all group shadow-xl">
                       <CreditCard size={20} className="text-text-muted group-hover:text-brand mb-3 transition-colors duration-500" />
                       <span className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] group-hover:text-text-secondary transition-colors">Billing</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-6 bg-surface-base border border-border-subtle rounded-3xl hover:bg-brand/10 hover:border-brand/40 transition-all group shadow-xl">
                       <FileText size={20} className="text-text-muted group-hover:text-brand mb-3 transition-colors duration-500" />
                       <span className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] group-hover:text-text-secondary transition-colors">Orders</span>
                    </button>
                 </div>
                 
                 <button className="btn-primary w-full py-5 !text-[10px] uppercase tracking-[0.2em]">
                    View Full History
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
