import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Key, 
  Shield, 
  Activity, 
  Copy, 
  RefreshCw, 
  Plus, 
  ExternalLink,
  CheckCircle2,
  Lock,
  Globe,
  Terminal,
  Zap
} from 'lucide-react';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  status: 'Active' | 'Revoked';
  lastUsed: string;
}

const initialKeys: ApiKey[] = [
  { id: '1', name: 'Mobile App Prod', key: 'mf_prod_72kjsk291lsk02', created: '12 Jan 2026', status: 'Active', lastUsed: '2 mins ago' },
  { id: '2', name: 'Internal Dashboard', key: 'mf_int_js92ks02lsk928', created: '15 Feb 2026', status: 'Active', lastUsed: '1 hour ago' },
  { id: '3', name: 'Legacy Integration', key: 'mf_test_sk92ks02lsk928', created: '01 Nov 2025', status: 'Revoked', lastUsed: '4 months ago' },
];

export default function ApiManagementView() {
  const [keys] = useState<ApiKey[]>(initialKeys);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10 px-2 lg:px-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
            API & Integrations
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[9px] mt-2 flex items-center gap-2">
            Developer Console <span className="w-1 h-1 rounded-full bg-border-subtle" /> Authentication & Access
          </p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20">
          <Plus size={16} /> Generate New Key
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* API Statistics */}
        <div className="xl:col-span-2 space-y-6">
          <div className="modern-card p-6 border-border-subtle bg-surface-panel/30 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                   <Activity size={18} className="text-brand" />
                   <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">API Usage Overview</h3>
                </div>
                <select className="bg-surface-base border border-border-subtle rounded-lg px-3 py-1.5 text-[10px] font-bold text-text-muted uppercase outline-none">
                   <option>Last 24 Hours</option>
                   <option>Last 7 Days</option>
                </select>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Total Requests', value: '1.2M', growth: '+12%', icon: Globe, color: 'text-brand' },
                  { label: 'Avg Latency', value: '42ms', growth: '-5ms', icon: Zap, color: 'text-warning' },
                  { label: 'Error Rate', value: '0.04%', growth: 'Stable', icon: Shield, color: 'text-success' }
                ].map((stat, i) => (
                  <div key={i} className="bg-surface-base/50 border border-border-subtle p-4 rounded-2xl">
                     <div className="flex items-center justify-between mb-2">
                        <stat.icon size={14} className={stat.color} />
                        <span className="text-[9px] font-black text-success uppercase">{stat.growth}</span>
                     </div>
                     <p className="text-xl font-display font-bold text-text-primary">{stat.value}</p>
                     <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* API Keys Table */}
          <div className="modern-card border-border-subtle bg-surface-panel/30 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Key size={18} className="text-brand" />
                   <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Active API Keys</h3>
                </div>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-surface-panel/50 border-b border-border-subtle">
                         <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Name</th>
                         <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Secret Key</th>
                         <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Created</th>
                         <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Status</th>
                         <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest text-center">Action</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border-subtle/10">
                      {keys.map((k) => (
                         <tr key={k.id} className="group hover:bg-surface-panel/40 transition-colors">
                            <td className="px-6 py-4">
                               <p className="text-[11px] font-bold text-text-primary">{k.name}</p>
                               <p className="text-[9px] font-bold text-text-muted opacity-60">Used {k.lastUsed}</p>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2">
                                  <code className="text-[10px] font-mono bg-surface-base px-2 py-1 rounded border border-border-subtle text-text-secondary">
                                     {k.key.substring(0, 8)}••••••••••••
                                  </code>
                                  <button 
                                    onClick={() => copyToClipboard(k.key, k.id)}
                                    className="p-1.5 hover:bg-brand/10 hover:text-brand rounded transition-colors text-text-muted"
                                  >
                                     {copiedId === k.id ? <CheckCircle2 size={12} className="text-success" /> : <Copy size={12} />}
                                  </button>
                               </div>
                            </td>
                            <td className="px-6 py-4 text-[10px] font-bold text-text-muted">{k.created}</td>
                            <td className="px-6 py-4">
                               <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest
                                  ${k.status === 'Active' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                                  {k.status}
                               </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                               <button className="text-text-muted hover:text-danger transition-colors">
                                  <RefreshCw size={14} />
                               </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>

        {/* Sidebar: Documentation & Webhooks */}
        <div className="space-y-6">
           {/* Quick Start */}
           <div className="modern-card p-6 border-brand/20 bg-brand/5 shadow-sm border">
              <div className="flex items-center gap-2 mb-4">
                 <Terminal size={18} className="text-brand" />
                 <h3 className="text-xs font-black text-brand uppercase tracking-widest">Quick Start</h3>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
                 Use the base URL below to start making authenticated requests to our API endpoints.
              </p>
              <div className="bg-surface-base p-3 rounded-xl border border-brand/10 font-mono text-[10px] text-brand break-all">
                 https://api.medifast.io/v1
              </div>
              <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                 API Reference <ExternalLink size={12} />
              </button>
           </div>

           {/* Webhooks */}
           <div className="modern-card p-6 border-border-subtle bg-surface-panel/30 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2">
                    <Shield size={18} className="text-text-primary" />
                    <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Webhooks</h3>
                 </div>
                 <button className="text-[10px] font-black text-brand uppercase tracking-widest">Manage</button>
              </div>
              <div className="space-y-4">
                 {[
                   { event: 'order.created', status: 'Enabled' },
                   { event: 'inventory.low', status: 'Disabled' }
                 ].map((hook, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-surface-base/50 border border-border-subtle rounded-xl">
                      <span className="text-[10px] font-mono font-bold text-text-secondary">{hook.event}</span>
                      <span className={`text-[8px] font-black uppercase ${hook.status === 'Enabled' ? 'text-success' : 'text-text-muted'}`}>
                        {hook.status}
                      </span>
                   </div>
                 ))}
              </div>
           </div>

           {/* Security Warning */}
           <div className="p-4 bg-warning/10 border border-warning/20 rounded-2xl flex gap-3">
              <Lock size={16} className="text-warning shrink-0" />
              <div>
                 <p className="text-[10px] font-black text-warning uppercase tracking-widest mb-1">Security Notice</p>
                 <p className="text-[9px] font-bold text-text-secondary/80 leading-relaxed uppercase">
                    Never share your secret keys. Revolving your keys every 90 days is strictly recommended for maximum security.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
