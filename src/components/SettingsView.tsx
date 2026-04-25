/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Shield, 
  Key, 
  Database, 
  Bell, 
  Globe, 
  Settings as SettingsIcon, 
  Lock, 
  UserPlus, 
  Activity,
  ChevronRight,
  ToggleLeft as Toggle,
  Mail,
  Smartphone
} from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">System Configuration</h1>
        <p className="text-zinc-500 font-medium tracking-tight mt-1 text-sm sm:text-base">Manage global enterprise settings and security protocols.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-1.5">
           {[
             { label: 'Account Security', icon: Shield, active: true },
             { label: 'Team Permissions', icon: UserPlus },
             { label: 'API & Integrations', icon: Database },
             { label: 'Audit Logging', icon: Activity },
             { label: 'Global Notifications', icon: Bell },
             { label: 'Network Settings', icon: Globe },
           ].map((item, i) => (
             <button 
               key={i} 
               className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-300 group
                 ${item.active ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'text-zinc-500 hover:bg-zinc-900 hover:text-white'}
               `}
             >
                <item.icon size={18} className={item.active ? 'text-white' : 'group-hover:scale-110 transition-transform'} />
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
             </button>
           ))}
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-3 space-y-6">
           <div className="glass-panel rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-border-subtle">
                 <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <Shield size={20} />
                 </div>
                 <div>
                    <h2 className="text-xl font-display font-bold text-white tracking-tight">Enterprise Security</h2>
                    <p className="text-zinc-500 text-xs font-medium">Last system audit performed Oct 24, 2026</p>
                 </div>
              </div>

              <div className="space-y-8">
                 <section>
                    <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">Authentication Protocols</h3>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 lg:p-5 bg-zinc-900 border border-border-subtle rounded-xl group hover:border-brand/40 transition-all duration-500">
                          <div className="flex gap-3">
                             <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 group-hover:bg-brand/20 group-hover:text-brand transition-all">
                                <Smartphone size={20} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white tracking-tight">Multi-Factor Authentication (MFA)</h4>
                                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Enforce biometric or SMS verification for all root users.</p>
                             </div>
                          </div>
                          <button className="w-10 h-5 bg-brand rounded-full relative transition-all">
                             <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md shadow-brand/40" />
                          </button>
                       </div>

                       <div className="flex items-center justify-between p-4 lg:p-5 bg-zinc-900 border border-border-subtle rounded-xl group hover:border-brand/40 transition-all duration-500">
                          <div className="flex gap-3">
                             <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 group-hover:bg-brand/20 group-hover:text-brand transition-all">
                                <Lock size={20} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white tracking-tight">Session Hyper-Encryption</h4>
                                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Automatic 4096-bit rotation for every active session token.</p>
                             </div>
                          </div>
                          <button className="w-10 h-5 bg-brand rounded-full relative transition-all">
                             <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md shadow-brand/40" />
                          </button>
                       </div>
                    </div>
                 </section>

                 <section>
                    <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">Cloud Data Persistence</h3>
                    <div className="p-6 bg-zinc-900 border border-brand/20 rounded-2xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                       </div>
                       <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                          <div className="flex-1">
                             <h4 className="text-md font-bold text-white tracking-tight mb-1">Automated Data Backup (24h)</h4>
                             <p className="text-xs text-zinc-500 font-medium leading-relaxed">System-wide snapshots are preserved for 90 days. Redundant geo-locked storage.</p>
                          </div>
                          <button className="px-4 py-2 bg-white text-black font-bold uppercase tracking-widest text-[9px] rounded-lg hover:bg-zinc-200 transition-all shadow-xl">
                             Trigger Manual Sync
                          </button>
                       </div>
                    </div>
                 </section>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-3xl border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-all cursor-pointer">
                 <h4 className="text-sm font-bold text-rose-400 mb-1 tracking-tight">Advanced: Destroy Persistence</h4>
                 <p className="text-[10px] text-rose-500/60 leading-relaxed font-medium">Irrevocably erase all temporary operational caches and logs.</p>
              </div>
              <div className="glass-panel p-6 rounded-3xl bg-indigo-500/5 border-indigo-500/20 group hover:border-indigo-500/50 transition-all">
                 <h4 className="text-sm font-bold text-indigo-400 mb-1 tracking-tight">System Identity</h4>
                 <p className="text-[10px] text-indigo-500/60 leading-relaxed font-medium tracking-tight">Enterprise: MEDIFAST-HQ-2026-X8<br/>Status: Platinum Service License</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
