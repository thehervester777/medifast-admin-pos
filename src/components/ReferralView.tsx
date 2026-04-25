import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  UserPlus, 
  Gift, 
  Share2, 
  Award, 
  TrendingUp, 
  Search, 
  Copy, 
  MoreHorizontal,
  Mail,
  Smartphone,
  ExternalLink,
  ArrowRight,
  Info
} from 'lucide-react';

export default function ReferralView() {
  const staff = [
    { name: 'Sarah Jenkins', role: 'Marketing Lead', code: 'SRH-MED-2024', referrals: 142, conversion: '12.4%', status: 'Top Performer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { name: 'Michael Chen', role: 'Sales Specialist', code: 'MCHEN-GROW-88', referrals: 89, conversion: '8.2%', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { name: 'Elena Rodriguez', role: 'Partner Manager', code: 'ELN-OPS-101', referrals: 45, conversion: '5.1%', status: 'Active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
  ];

  const recentRegistrations = [
    { user: 'City Hospital South', date: '2h ago', staffName: 'Sarah Jenkins', type: 'Enterprise' },
    { user: 'Global Health Inc', date: '5h ago', staffName: 'Michael Chen', type: 'Pro' },
    { user: 'Neighborhood Clinic', date: '1d ago', staffName: 'Sarah Jenkins', type: 'Basic' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Simple Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Marketing & Referrals</h1>
          <p className="text-zinc-500 font-medium tracking-tight mt-1 text-base">Track how staff members are bringing in new users using their unique codes.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl active:scale-95 group">
              <UserPlus size={16} />
              <span>Add New Staff</span>
           </button>
        </div>
      </div>

      {/* Clear KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Registrations', val: '1,240', change: '+14%', color: 'text-brand', icon: Users, tip: 'Total users joined via referral' },
          { label: 'Marketing Staff', val: '24', change: 'Live', color: 'text-emerald-500', icon: Award, tip: 'Staff currently using referral codes' },
          { label: 'Referral Revenue', val: '$84,200', change: '+$12k', color: 'text-indigo-400', icon: TrendingUp, tip: 'Revenue generated from referred users' },
          { label: 'Conversion Rate', val: '8.4%', change: '-2%', color: 'text-rose-400', icon: Share2, tip: 'Percentage of invites that become users' },
        ].map((s, i) => (
          <div 
            key={i} 
            className="glass-panel p-5 rounded-2xl relative group hover:border-brand/40 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
               <div className={`p-2.5 rounded-xl bg-zinc-900 border border-border-subtle ${s.color}`}>
                  <s.icon size={20} />
               </div>
               <div className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider ${s.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : s.change === 'Live' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                  {s.change}
               </div>
            </div>
            <div>
               <div className="flex items-center gap-1.5 mb-1">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{s.label}</p>
                  <div className="group/tip relative">
                    <Info size={12} className="text-zinc-700 cursor-help" />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[9px] text-zinc-400 font-medium invisible group-hover/tip:visible z-50 shadow-2xl">
                       {s.tip}
                    </div>
                  </div>
               </div>
               <h3 className="text-2xl font-display font-bold text-white tracking-tight">{s.val}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Simplified Staff Table */}
        <div className="lg:col-span-3 glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl border-zinc-800/50">
           <div className="p-6 border-b border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                 <Award size={18} className="text-brand" />
                 <h2 className="text-sm font-bold text-white uppercase tracking-widest">Active Marketing Staff</h2>
              </div>
              <div className="relative flex-1 max-w-sm">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
                 <input 
                    type="text" 
                    placeholder="Search staff name or code..." 
                    className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-zinc-800 focus:border-brand/40 rounded-xl text-xs text-white outline-none transition-all" 
                 />
              </div>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="bg-zinc-950/50">
                       <th className="px-6 py-4 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Staff Member</th>
                       <th className="px-6 py-4 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Referral Code</th>
                       <th className="px-6 py-4 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Successful Referrals</th>
                       <th className="px-6 py-4 text-left text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Success Rate</th>
                       <th className="px-6 py-4 text-right text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-zinc-800/30 text-xs text-white outline-none transition-all">
                    {staff.map((member, i) => (
                       <tr key={i} className="group hover:bg-zinc-900/40 transition-all duration-200">
                          <td className="px-6 py-5">
                             <div className="flex items-center gap-3">
                                <img src={member.avatar} className="w-9 h-9 rounded-xl bg-zinc-800 border border-border-subtle" alt="" />
                                <div>
                                   <p className="font-bold text-white mb-0.5">{member.name}</p>
                                   <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{member.role}</p>
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-5">
                             <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800/50 w-fit rounded-lg group/code cursor-pointer hover:border-brand/40 transition-all">
                                <span className="font-mono font-bold text-brand uppercase">{member.code}</span>
                                <Copy size={12} className="text-zinc-700 group-hover/code:text-brand transition-colors" />
                             </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-base font-display font-bold text-zinc-200">{member.referrals}</span>
                          </td>
                          <td className="px-6 py-5">
                             <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-center text-[10px] font-bold mb-1">
                                   <span className="text-white">{member.conversion}</span>
                                </div>
                                <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                   <div className="h-full bg-emerald-500" style={{ width: member.conversion }} />
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-5 text-right">
                             <button className="p-2 text-zinc-500 hover:text-white transition-all bg-zinc-950 border border-zinc-800/50 rounded-xl">
                                <MoreHorizontal size={14} />
                             </button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Simplified Recent Feed */}
        <div className="lg:col-span-1 space-y-6">
           <div className="glass-panel p-6 rounded-3xl flex flex-col shadow-xl border-zinc-800/50 h-full">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Gift size={16} />
                 </div>
                 <h3 className="text-xs font-bold text-white uppercase tracking-widest">Recent Sign-ups</h3>
              </div>
              
              <div className="space-y-4 flex-1">
                 {recentRegistrations.map((reg, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/50 group hover:border-brand/30 transition-all duration-300">
                       <div className="flex justify-between items-start">
                          <div>
                             <p className="text-sm font-bold text-white mb-0.5">{reg.user}</p>
                             <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-wider">{reg.date}</p>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[8px] font-bold text-zinc-500 uppercase">{reg.type}</span>
                       </div>
                       <div className="mt-2 pt-2 border-t border-zinc-800/50">
                          <p className="text-[10px] text-zinc-500 font-medium">Referred by: <span className="text-brand font-bold">{reg.staffName}</span></p>
                       </div>
                    </div>
                 ))}
              </div>
              
              <button className="mt-6 w-full py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-2xl text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-all text-center">
                 View All History
              </button>
           </div>
        </div>
      </div>

      {/* Helpful Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="glass-panel p-6 rounded-3xl bg-brand/5 border border-brand/20 flex flex-col justify-between">
            <div>
               <h4 className="text-lg font-display font-bold text-white mb-2">Campaign Quick Link</h4>
               <p className="text-sm text-zinc-500 leading-relaxed mb-4">Share this link directly with potential marketing partners to get them started.</p>
            </div>
            <div className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl">
               <p className="text-[10px] font-mono text-zinc-500 truncate flex-1">medifast.io/grow/invite/...</p>
               <button className="p-2 bg-zinc-900 text-brand rounded-lg hover:bg-brand hover:text-white transition-all">
                  <Copy size={14} />
               </button>
            </div>
         </div>

         <div className="glass-panel p-6 rounded-3xl border-zinc-800/50 flex flex-col justify-between group">
            <div>
               <h4 className="text-lg font-display font-bold text-white mb-2">Issue New Referral Code</h4>
               <p className="text-sm text-zinc-500 leading-relaxed mb-4">Generate a trackable registration code for an existing employee or partner.</p>
            </div>
            <button className="w-full py-3 bg-brand text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:brightness-110 shadow-lg shadow-brand/20 transition-all">
               Generate Trackable Code
            </button>
         </div>
      </div>
    </div>
  );
}
