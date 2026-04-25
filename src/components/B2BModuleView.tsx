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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">Module / Quotations</p>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">WELCOME !! RISHU SADMIN</h1>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg shadow-white/5">
              <Plus size={16} />
              <span>New Request</span>
           </button>
        </div>
      </div>

      {/* Main Banner */}
      <div className="bg-gradient-to-r from-brand/80 to-indigo-900/80 p-8 rounded-[1.5rem] relative overflow-hidden border border-brand/20 shadow-2xl">
         <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
         <div className="relative z-10">
            <div className="flex items-center gap-4 mb-2">
               <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Handshake size={20} />
               </div>
               <h2 className="text-xl font-display font-bold text-white tracking-tight">B2B Quotation Dashboard</h2>
            </div>
            <p className="text-white/60 text-xs font-medium">Manage medicine requests, providers, and quotations in real-time.</p>
         </div>
      </div>

      {/* Primary Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Providers', val: '5', icon: Users, color: 'bg-indigo-500', trend: 'View All' },
          { label: 'Pending Approvals', val: '1', icon: Clock, color: 'bg-rose-500', trend: 'Review' },
          { label: 'Active Requests', val: '1', icon: Zap, color: 'bg-emerald-500', trend: 'View All' },
          { label: 'Total Quotations', val: '2', icon: FileCheck, color: 'bg-sky-500', trend: 'View All' },
        ].map((s, i) => (
          <div key={i} className={`${s.color} p-6 rounded-3xl text-white relative overflow-hidden group shadow-xl transition-all hover:scale-[1.02]`}>
             <div className="absolute -right-4 -bottom-4 opacity-10 transition-transform group-hover:scale-125 duration-700">
                <s.icon size={100} />
             </div>
             <div className="relative z-10 flex flex-col h-full">
                <span className="text-2xl font-display font-bold mb-1">{s.val}</span>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-6">{s.label}</p>
                <button className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest bg-white/10 w-fit px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all">
                   {s.trend} <ArrowRight size={10} />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Completed Requests', val: '0', icon: CheckCircle2, color: 'text-brand' },
           { label: 'This Month Requests', val: '2', icon: Calendar, color: 'text-emerald-500' },
           { label: 'Accepted Quotations', val: '0', icon: Trophy, color: 'text-amber-500' },
         ].map((s, i) => (
           <div key={i} className="glass-panel p-5 rounded-2xl flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${s.color}`}>
                 <s.icon size={20} />
              </div>
              <div>
                 <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1.5">{s.label}</p>
                 <span className="text-xl font-display font-bold text-white">{s.val}</span>
              </div>
           </div>
         ))}
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Medicine Requests Table */}
        <div className="lg:col-span-2 flex flex-col gap-4">
           <div className="glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="p-6 border-b border-border-subtle flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <Package size={18} className="text-brand" />
                    <h2 className="text-sm font-bold text-white uppercase tracking-widest">Recent Medicine Requests</h2>
                 </div>
                 <button className="text-[10px] font-bold text-brand uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full">
                    <thead>
                       <tr className="bg-zinc-900/50">
                          <th className="px-6 py-4 text-left text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Medicine</th>
                          <th className="px-6 py-4 text-left text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Quantity</th>
                          <th className="px-6 py-4 text-left text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Deadline</th>
                          <th className="px-6 py-4 text-left text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Bids</th>
                          <th className="px-6 py-4 text-left text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                          <th className="px-6 py-4 text-right text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                       {requests.map((req) => (
                          <tr key={req.id} className="group hover:bg-zinc-800/30 transition-all">
                             <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                                      <Package size={14} />
                                   </div>
                                   <div>
                                      <p className="text-xs font-bold text-white">{req.medicine}</p>
                                      <p className="text-[9px] text-zinc-600 font-medium uppercase">{req.type}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="px-6 py-4 text-xs font-bold text-zinc-400">
                                <span>{req.quantity.split(' ')[0]}</span>
                                <span className="ml-1 text-[9px] opacity-40 uppercase tracking-tighter">{req.quantity.split(' ')[1]}</span>
                             </td>
                             <td className="px-6 py-4">
                                <span className={`text-[10px] font-bold ${req.deadline === 'Expired' ? 'text-rose-500' : 'text-zinc-500'}`}>
                                   {req.deadline === 'Expired' && '• '} {req.deadline}
                                </span>
                             </td>
                             <td className="px-6 py-4">
                                <span className="w-6 h-6 rounded-full bg-brand/5 border border-brand/20 flex items-center justify-center text-[10px] font-bold text-brand leading-none">
                                   {req.bids}
                                </span>
                             </td>
                             <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                   <span className="text-[10px] font-bold text-emerald-500/80 uppercase tracking-widest">{req.status}</span>
                                </div>
                             </td>
                             <td className="px-6 py-4 text-right">
                                <button className="p-2 text-zinc-600 hover:text-white transition-all bg-zinc-900 border border-border-subtle rounded-lg">
                                   <Eye size={14} />
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
           <div className="glass-panel p-6 rounded-3xl flex flex-col shadow-xl">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-3">
                    <Users size={18} className="text-brand" />
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Pending Approvals</h3>
                 </div>
                 <span className="bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">1</span>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-border-subtle group hover:border-brand/40 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                          <Users size={14} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-white group-hover:text-brand transition-colors">Test User</p>
                          <p className="text-[9px] text-zinc-600 font-bold uppercase">No Company</p>
                       </div>
                    </div>
                    <button className="text-zinc-600 hover:text-white">
                       <Eye size={14} />
                    </button>
                 </div>
              </div>
           </div>

           {/* Quick Actions Grid */}
           <div className="glass-panel p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                 <Zap size={18} className="text-amber-500" />
                 <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 {[
                   { label: 'New Request', icon: Plus, bg: 'bg-brand/5', color: 'text-brand' },
                   { label: 'Providers', icon: Users, bg: 'bg-indigo-500/5', color: 'text-indigo-500' },
                   { label: 'Quotations', icon: FileCheck, bg: 'bg-emerald-500/5', color: 'text-emerald-500' },
                   { label: 'All Requests', icon: Package, bg: 'bg-sky-500/5', color: 'text-sky-500' },
                 ].map((action, i) => (
                   <button key={i} className={`${action.bg} p-4 rounded-2xl border border-border-subtle hover:border-brand/30 transition-all flex flex-col items-center gap-3 group`}>
                      <action.icon size={20} className={`${action.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{action.label}</span>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
