import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Shield, 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Eye, 
  Edit3, 
  Trash2, 
  Plus,
  Search,
  MoreVertical,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Filter,
  Download,
  Key,
  Layout,
  History,
  Activity
} from 'lucide-react';

interface AdminMember {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  status: 'Active' | 'Inactive';
  avatar: string;
  lastLogin: string;
}

const initialAdmins: AdminMember[] = [
  { 
    id: 'ADM-001', 
    name: 'Rishu Admin', 
    email: 'admin@medifast.com', 
    role: 'Super Admin', 
    permissions: ['all'], 
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    lastLogin: '2 mins ago'
  },
  { 
    id: 'ADM-002', 
    name: 'Sarah Connor', 
    email: 'sarah@medifast.com', 
    role: 'Inventory Manager', 
    permissions: ['inventory_read', 'inventory_write', 'reports_read'], 
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    lastLogin: '4 hours ago'
  },
  { 
    id: 'ADM-003', 
    name: 'James Wilson', 
    email: 'james@medifast.com', 
    role: 'Logistics Lead', 
    permissions: ['logistics_all', 'orders_read'], 
    status: 'Inactive',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
    lastLogin: '2 days ago'
  },
];

const availablePermissions = [
  { id: 'inventory_read', label: 'Inventory Read', category: 'Inventory', description: 'Can view inventory levels and alerts' },
  { id: 'inventory_write', label: 'Inventory Write', category: 'Inventory', description: 'Can modify stock counts and settings' },
  { id: 'orders_read', label: 'Orders View', category: 'Orders', description: 'Can see all order details and history' },
  { id: 'orders_write', label: 'Orders Manage', category: 'Orders', description: 'Can approve, cancel, or edit orders' },
  { id: 'users_manage', label: 'User Management', category: 'Users', description: 'Can add or remove system users' },
  { id: 'reports_read', label: 'View Reports', category: 'Analytics', description: 'Access to financial and performance reports' },
  { id: 'logistics_all', label: 'Full Logistics', category: 'Logistics', description: 'Complete control over logistics nodes' },
];

const recentLogs = [
  { user: 'Rishu Sadmin', action: 'Modified Permissions', target: 'Sarah Connor', time: '10m ago', icon: Key, color: 'text-brand' },
  { user: 'Sarah Connor', action: 'Stock Update', target: 'Inv-9921 (Amoxicillin)', time: '45m ago', icon: Layout, color: 'text-success' },
  { user: 'System', action: 'Failed Login Alert', target: 'Unknown IP (192.168.1.1)', time: '2h ago', icon: ShieldAlert, color: 'text-danger' },
];

export default function AdminManagementView() {
  const [admins] = useState<AdminMember[]>(initialAdmins);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
            Privilege Control
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
          </h1>
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] mt-2">Granular Access & Security Orchestration</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-6 py-3 rounded-2xl border border-white/[0.05] text-zinc-500 font-bold text-[10px] uppercase tracking-widest bg-zinc-950/50 hover:bg-zinc-900 hover:text-white transition-all flex items-center gap-2">
            <Download size={14} />
            Export Audit
          </button>
          <button className="px-8 py-3 rounded-2xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
            <Plus size={14} />
            Provision Admin
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Admins', value: '12', change: '+2 Velocity', status: 'increase', icon: ShieldCheck, color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Security Score', value: '98%', change: 'Optimal', status: 'stable', icon: Shield, color: 'text-success', bg: 'from-success/10 to-success/5' },
          { label: 'Policy Sets', value: '45', change: 'Standard', status: 'stable', icon: Key, color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
          { label: 'Pending Audits', value: '0', change: 'Verified', status: 'stable', icon: History, color: 'text-zinc-500', bg: 'from-zinc-900/10 to-zinc-900/5' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`modern-card p-6 group hover:border-brand/40 transition-all flex items-center gap-6 relative overflow-hidden bg-gradient-to-br ${stat.bg} border-white/[0.03]`}
          >
             <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current ${stat.color}`} />
             
            <div className={`w-14 h-14 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform shadow-2xl shrink-0`}>
              <stat.icon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-display font-bold text-white tracking-tight leading-none">{stat.value}</span>
                {stat.status === 'increase' && <ArrowUpRight size={14} className="text-success" />}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">{stat.label}</p>
                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                <span className={`text-[9px] font-bold uppercase tracking-widest leading-none ${stat.status === 'increase' ? 'text-success' : 'text-zinc-700'}`}>{stat.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Admin List Table */}
        <div className="xl:col-span-2 space-y-8">
          <div className="modern-card p-0 overflow-hidden border-white/[0.03]">
            <div className="p-8 border-b border-white/[0.03] flex flex-wrap items-center justify-between gap-6 bg-white/[0.01]">
              <div className="relative flex-1 min-w-[300px] group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-brand transition-colors" size={14} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter nodes by identity, auth or role..." 
                  className="w-full bg-zinc-950 border border-white/5 rounded-2xl pl-12 pr-5 py-4 text-xs text-white outline-none focus:border-brand/40 transition-all font-medium placeholder:text-zinc-800" 
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3.5 bg-zinc-950 border border-white/5 rounded-2xl text-zinc-700 hover:text-white hover:bg-zinc-900 transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest shadow-xl">
                  <Filter size={14} />
                  Tiering
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.03] bg-zinc-950/20">
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">Administrative Identity</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] text-center">Auth Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.01]">
                  {admins.map((admin) => (
                    <tr key={admin.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <div className="relative group/avatar">
                            <img src={admin.avatar} alt={admin.name} className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/5 grayscale group-hover/avatar:grayscale-0 transition-all duration-700 p-0.5" />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[4px] border-zinc-950 shadow-2xl ${admin.status === 'Active' ? 'bg-success shadow-success/40' : 'bg-zinc-800 shadow-zinc-800/40'}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{admin.name}</p>
                              <span className="px-2 py-0.5 bg-zinc-950 border border-white/5 text-zinc-700 rounded text-[8px] font-bold uppercase tracking-widest group-hover:text-brand/80 transition-colors">{admin.role}</span>
                            </div>
                            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-1.5">{admin.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col items-center gap-2">
                           <div className="flex gap-2">
                            {admin.permissions.includes('all') ? (
                              <span className="px-3 py-1 bg-brand/10 text-brand border border-brand/20 rounded-lg text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                <ShieldCheck size={10} className="animate-pulse" /> Full Root Access
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-zinc-950 border border-white/5 text-zinc-600 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                                {admin.permissions.length} Specialized Scopes
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={10} className="text-zinc-800" />
                            <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.2em]">{admin.lastLogin}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-3 text-right">
                          <button className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-white/5 rounded-xl text-zinc-800 hover:text-white hover:border-brand/40 transition-all shadow-xl group/btn">
                             <Edit3 size={15} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-white/5 rounded-xl text-zinc-800 hover:text-danger hover:border-danger/40 transition-all shadow-xl group/btn">
                             <Trash2 size={15} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-white/5 rounded-xl text-zinc-800 hover:text-white transition-all shadow-xl group/btn">
                             <MoreVertical size={15} className="group-hover/btn:rotate-90 transition-transform" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Granular Permissions Mapping */}
          <div className="modern-card p-10 border-white/[0.03]">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">Scope Orchestration</h3>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-2">Map specialized abilities to root identifiers</p>
              </div>
              <button className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] hover:text-white transition-colors">Select All Nodes</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {['Inventory', 'Orders', 'Users'].map((cat) => (
                <div key={cat} className="space-y-6">
                  <h4 className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em] border-b border-white/[0.03] pb-4 flex items-center justify-between">
                    {cat} Access
                    <span className="text-zinc-800 font-bold italic tracking-normal">Control Unit</span>
                  </h4>
                  <div className="space-y-6">
                    {availablePermissions.filter(p => p.category === cat).map(p => (
                      <div key={p.id} className="group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-4 h-4 rounded-md border border-white/5 bg-zinc-950 flex items-center justify-center group-hover:border-brand/40 transition-all shadow-inner">
                            <CheckCircle2 size={10} className="text-brand opacity-0 group-hover:opacity-40 transition-opacity" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase tracking-tight">{p.label}</p>
                            <p className="text-[10px] text-zinc-700 mt-1.5 leading-relaxed font-bold tracking-tight">{p.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Activity & Details */}
        <div className="space-y-8">
          {/* Recent Audit Logs */}
          <div className="modern-card p-0 overflow-hidden border-white/[0.03] flex flex-col h-full bg-white/[0.01]">
            <div className="p-8 flex items-center justify-between border-b border-white/[0.03] bg-white/[0.01]">
              <h3 className="text-lg font-display font-bold text-white tracking-tight">Access Stream</h3>
              <Activity size={16} className="text-zinc-800" />
            </div>
            <div className="p-8 space-y-10 flex-1">
              {recentLogs.map((log, i) => (
                <div key={i} className="flex gap-5 group items-start">
                  <div className={`w-12 h-12 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center shrink-0 ${log.color} group-hover:scale-110 transition-transform shadow-2xl`}>
                    <log.icon size={20} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold text-zinc-200 truncate uppercase tracking-tight">{log.action}</p>
                    <p className="text-[10px] text-zinc-600 mt-1.5 font-bold tracking-tight uppercase leading-relaxed">By <span className="text-zinc-400">{log.user}</span> on {log.target}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Clock size={10} className="text-zinc-800" />
                      <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest">{log.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-8 pt-6 border-t border-white/[0.03] text-[9px] font-bold text-zinc-700 uppercase tracking-[0.2em] hover:text-brand transition-colors flex items-center justify-between group bg-zinc-950/20">
              View Audit Topology
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Support / Docs - Styled to match banner cards */}
          <div className="modern-card p-1 border-none bg-brand shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
            <div className="bg-zinc-950/20 group backdrop-blur-xl rounded-[inherit] p-8 h-full relative overflow-hidden">
               <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
               <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
                    <ShieldCheck size={32} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">Privilege Protocol</h3>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-2 leading-relaxed">Orchestrate granular node security and root access hierarchies.</p>
                 </div>
                 <button className="w-full py-4 bg-white text-brand font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                    Open Codex
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
