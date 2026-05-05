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
      <div className="text-center lg:text-left px-2">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">System Configuration</h1>
        <p className="text-text-muted font-medium tracking-tight mt-1 text-sm sm:text-base">Manage global enterprise settings and security protocols.</p>
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
                  ${item.active ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'text-text-muted hover:bg-text-primary/5 hover:text-text-primary'}
                `}
              >
                 <item.icon size={18} className={item.active ? 'text-white' : 'group-hover:scale-110 transition-transform'} />
                 <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-3 space-y-6">
           <div className="modern-card rounded-3xl p-6 lg:p-8 shadow-sm border-border-subtle bg-surface-panel/30 transition-all hover:bg-surface-panel/50">
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-border-subtle">
                 <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center text-success border border-success/20 shadow-sm">
                    <Shield size={20} />
                 </div>
                 <div>
                    <h2 className="text-xl font-display font-bold text-text-primary tracking-tight">Enterprise Security</h2>
                    <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest mt-1">Last audit: Oct 24, 2026</p>
                 </div>
              </div>

              <div className="space-y-8">
                 <section>
                    <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-4 px-1">Authentication Protocols</h3>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 lg:p-5 bg-surface-base border border-border-subtle rounded-xl group hover:border-brand/40 transition-all duration-500 shadow-sm">
                          <div className="flex gap-3">
                             <div className="w-10 h-10 bg-surface-raised rounded-lg flex items-center justify-center text-text-muted group-hover:bg-brand/20 group-hover:text-brand transition-all border border-border-subtle/50">
                                <Smartphone size={20} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-text-primary tracking-tight">Multi-Factor Authentication (MFA)</h4>
                                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1 opacity-70">Enforce biometric verification</p>
                             </div>
                          </div>
                          <button className="w-10 h-5 bg-brand rounded-full relative transition-all shadow-lg shadow-brand/20">
                             <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md" />
                          </button>
                       </div>

                       <div className="flex items-center justify-between p-4 lg:p-5 bg-surface-base border border-border-subtle rounded-xl group hover:border-brand/40 transition-all duration-500 shadow-sm">
                          <div className="flex gap-3">
                             <div className="w-10 h-10 bg-surface-raised rounded-lg flex items-center justify-center text-text-muted group-hover:bg-brand/20 group-hover:text-brand transition-all border border-border-subtle/50">
                                <Lock size={20} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-text-primary tracking-tight">Session Hyper-Encryption</h4>
                                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1 opacity-70">4096-bit rotation</p>
                             </div>
                          </div>
                          <button className="w-10 h-5 bg-brand rounded-full relative transition-all shadow-lg shadow-brand/20">
                             <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md" />
                          </button>
                       </div>
                    </div>
                 </section>

                 <section>
                    <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-4 px-1">Cloud Data Persistence</h3>
                    <div className="p-6 bg-surface-base border border-border-subtle rounded-2xl relative overflow-hidden group shadow-sm transition-all hover:bg-surface-raised">
                       <div className="absolute top-0 right-0 p-3">
                          <div className="w-1.5 h-1.5 bg-success rounded-full animate-ping" />
                       </div>
                       <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                          <div className="flex-1">
                             <h4 className="text-md font-bold text-text-primary tracking-tight mb-1">Automated Data Backup (24h)</h4>
                             <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest leading-relaxed opacity-70">Snapshots preserved for 90 days</p>
                          </div>
                          <button className="btn-primary py-2.5 px-6 !text-[9px] uppercase tracking-widest shadow-lg shadow-brand/20">
                             Trigger Manual Sync
                          </button>
                       </div>
                    </div>
                 </section>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="modern-card p-6 rounded-3xl border-rose-500/20 bg-rose-500/5 group hover:bg-rose-500/10 transition-all cursor-pointer">
                 <h4 className="text-sm font-bold text-rose-500 mb-1 tracking-tight">Advanced: Destroy Persistence</h4>
                 <p className="text-[10px] text-rose-500/60 leading-relaxed font-medium">Irrevocably erase all temporary operational caches and logs.</p>
              </div>
              <div className="modern-card p-6 rounded-3xl bg-indigo-500/5 border-indigo-500/20 group hover:border-indigo-500/50 transition-all">
                 <h4 className="text-sm font-bold text-indigo-500 mb-1 tracking-tight">System Identity</h4>
                 <p className="text-[10px] text-indigo-500/60 leading-relaxed font-medium tracking-tight">Enterprise: MEDIFAST-HQ-2026-X8<br/>Status: Platinum Service License</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
