/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Plus, 
  Users, 
  Clock, 
  Zap, 
  FileCheck, 
  CheckCircle2, 
  Calendar,
  Trophy,
  Eye,
  ArrowRight,
  Package
} from 'lucide-react';

export default function B2BModuleView() {
  const requests = [
    { id: 1, medicine: 'Ace', type: 'square', quantity: '10 Box', deadline: '12 Dec, 2026', bids: 0, status: 'Active' },
    { id: 2, medicine: 'Dfg', type: 'dsfg', quantity: '1,000 Box', deadline: 'Expired', bids: 0, status: 'Active' },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-4 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3 uppercase">
            B2B <span className="text-brand">Store Orders</span>
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Active Store</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Manage B2B orders and store procurement</p>
        </div>
        <div className="flex gap-4">
           <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8 py-3">
              <Plus size={14} />
              <span>New Order Request</span>
           </button>
        </div>
      </div>


      {/* Main Banner */}
      <div className="modern-card p-1 border-none bg-brand shadow-[0_30px_60px_rgba(99,102,241,0.25)]">
        <div className="bg-surface-panel/10 group backdrop-blur-3xl p-10 rounded-[inherit] relative overflow-hidden">
           <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.03] rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                      <Handshake size={28} />
                   </div>
                   <div>
                      <h2 className="text-3xl font-display font-bold text-white tracking-tight leading-none uppercase">Quotation Management</h2>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mt-3 leading-none">Monitor order quotes and suppliers</p>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-1">Active User</p>
                  <p className="text-white text-sm font-bold tracking-tight">Rishu Admin <span className="text-white/50 ml-2">ID: #00X12</span></p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Primary Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-text-primary font-bold">
        {[
          { label: 'Active Suppliers', val: '5', icon: Users, color: 'bg-brand/10', text: 'text-brand', border: 'border-brand/20', shadow: 'shadow-brand/5' },
          { label: 'Awaiting Approval', val: '1', icon: Clock, color: 'bg-rose-500/10', text: 'text-rose-500', border: 'border-rose-500/20', shadow: 'shadow-rose-500/5' },
          { label: 'Current Quotes', val: '1', icon: Zap, color: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20', shadow: 'shadow-emerald-500/5' },
          { label: 'Order Summaries', val: '2', icon: FileCheck, color: 'bg-indigo-500/10', text: 'text-indigo-500', border: 'border-indigo-500/20', shadow: 'shadow-indigo-500/5' },
        ].map((s, i) => (

          <div key={i} className={`modern-card p-6 bg-surface-panel/30 border border-border-subtle group hover:border-brand/40 transition-all shadow-sm relative overflow-hidden`}>
             <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                   <div className={`w-12 h-12 rounded-2xl ${s.color} ${s.text} flex items-center justify-center border ${s.border} shadow-2xl`}>
                    <s.icon size={22} />
                  </div>
                  <button className="text-[9px] font-bold uppercase tracking-widest text-text-muted/40 hover:text-text-primary transition-colors">Access Map</button>
                </div>
                <div>
                   <div className="text-3xl font-display font-bold text-text-primary tracking-tight">{s.val}</div>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-muted mt-2">{s.label}</p>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Completed Orders', val: '0', icon: CheckCircle2, color: 'text-brand', bg: 'bg-brand/5', border: 'border-brand/10' },
           { label: 'Weekly Requests', val: '2', icon: Calendar, color: 'text-success', bg: 'bg-success/5', border: 'border-success/10' },
           { label: 'Accepted Bids', val: '0', icon: Trophy, color: 'text-warning', bg: 'bg-warning/5', border: 'border-warning/10' },
         ].map((s, i) => (

           <div key={i} className="modern-card p-5 border-border-subtle flex items-center gap-6 group hover:border-brand/40 transition-all bg-surface-panel/30 shadow-sm">
              <div className={`w-14 h-14 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${s.color} shadow-2xl group-hover:scale-110 transition-transform`}>
                 <s.icon size={24} />
              </div>
              <div>
                 <p className="text-[9px] text-text-muted font-bold uppercase tracking-[0.3em] leading-none mb-3">{s.label}</p>
                 <span className="text-2xl font-display font-bold text-text-primary leading-none">{s.val}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Medicine Requests Table */}
        <div className="lg:col-span-2 flex flex-col gap-6">
           <div className="modern-card p-0 overflow-hidden flex flex-col border-border-subtle shadow-2xl bg-surface-panel/30">
              <div className="p-8 border-b border-border-subtle flex items-center justify-between bg-surface-panel/40">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand border border-brand/20 shadow-sm">
                      <Package size={18} />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] leading-none">Medicine Requests</h2>
                      <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest mt-2">Active procurement orders in pipeline</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest hover:text-text-primary transition-colors">View All</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full">
                    <thead>
                       <tr className="bg-surface-panel/50 text-left border-b border-border-subtle">
                          <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Medicine Name</th>
                          <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Quantity</th>
                          <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Deadline</th>
                          <th className="px-8 py-5 text-center text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Bids</th>
                          <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Status</th>
                          <th className="px-8 py-5 text-right text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle/40">
                       {requests.map((req) => (
                          <tr key={req.id} className="group hover:bg-text-primary/[0.02] transition-colors cursor-pointer">
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl bg-surface-base border border-border-subtle flex items-center justify-center text-text-muted/40 group-hover:text-brand group-hover:border-brand transition-all shadow-sm">
                                      <Package size={16} />
                                   </div>
                                   <div>
                                      <p className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{req.medicine}</p>
                                      <p className="text-[10px] text-text-muted/40 font-bold uppercase tracking-widest mt-1.5">{req.type}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-sm font-bold text-text-secondary">{req.quantity.split(' ')[0]}</span>
                                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest">{req.quantity.split(' ')[1]}</span>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${req.deadline === 'Expired' ? 'text-rose-500' : 'text-text-muted'}`}>
                                   {req.deadline}
                                </span>
                             </td>
                             <td className="px-8 py-6">
                                <div className="flex justify-center">
                                  <span className="w-8 h-8 rounded-xl bg-surface-base border border-border-subtle flex items-center justify-center text-[10px] font-bold text-brand shadow-sm">
                                    {req.bids}
                                  </span>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                   <span className="text-[10px] font-bold text-success uppercase tracking-widest leading-none">{req.status}</span>
                                </div>
                             </td>
                             <td className="px-8 py-6 text-right">
                                <button className="w-10 h-10 flex items-center justify-center bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-text-primary transition-all shadow-sm group/btn">
                                   <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        {/* Sidebar Info Panels */}
        <div className="flex flex-col gap-8">
           {/* Pending Approvals */}
           <div className="modern-card p-0 overflow-hidden border-border-subtle shadow-2xl flex flex-col h-fit bg-surface-panel/30">
              <div className="p-8 border-b border-border-subtle flex items-center justify-between bg-surface-panel/40">
                 <div className="flex items-center gap-4 text-text-primary">
                    <Users size={18} className="text-brand" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] leading-none">Approval Queue</h3>
                 </div>
                 <span className="bg-brand text-white text-[9px] font-bold px-3 py-1 rounded-lg border border-white/10 shadow-lg shadow-brand/20 animate-pulse">01 Pending</span>
              </div>
              <div className="p-8 space-y-6">
                 <div className="flex items-center justify-between p-5 rounded-2xl bg-surface-base border border-border-subtle group hover:border-brand transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-surface-panel/50 border border-border-subtle flex items-center justify-center text-text-muted/40 group-hover:text-brand transition-all">
                          <Users size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors uppercase tracking-tight">Test User Node</p>
                          <div className="text-[10px] text-text-muted/60 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-border-subtle" />
                             Status Override Needed
                          </div>
                       </div>
                    </div>
                    <button className="text-text-muted/40 hover:text-text-primary transition-colors group/btn p-2 border border-transparent hover:border-border-subtle hover:bg-surface-raised rounded-xl">
                       <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Quick Actions Grid */}
           <div className="modern-card p-10 border-border-subtle shadow-2xl bg-brand/5">
              <div className="flex items-center gap-4 mb-8">
                 <Zap size={20} className="text-brand" />
                 <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.3em] leading-none">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'New Request', icon: Plus, color: 'text-brand' },
                   { label: 'Manage Stores', icon: Users, color: 'text-indigo-400' },
                   { label: 'Order Rules', icon: FileCheck, color: 'text-emerald-400' },
                   { label: 'History', icon: Package, color: 'text-sky-400' },
                 ].map((action, i) => (

                   <button key={i} className={`p-6 bg-surface-base/40 backdrop-blur-3xl rounded-3xl border border-border-subtle hover:border-brand transition-all flex flex-col items-center gap-4 group shadow-sm`}>
                      <div className={`w-12 h-12 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${action.color} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                        <action.icon size={22} />
                      </div>
                      <span className="text-[9px] font-bold text-text-muted/60 group-hover:text-text-primary uppercase tracking-widest transition-colors">{action.label}</span>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
