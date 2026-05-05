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
    <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 transform-gpu">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Admin Management
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Operational</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">Manage team roles and system access.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-6 py-3 rounded-2xl border border-border-subtle text-text-muted font-bold text-[10px] uppercase tracking-widest bg-surface-base hover:bg-text-primary/5 hover:text-text-primary transition-all flex items-center gap-2 shadow-sm">
            <Download size={14} />
            Download Logs
          </button>
          <button className="btn-primary flex items-center gap-2 !text-[10px] uppercase tracking-widest px-8">
            <Plus size={14} />
            Add New Admin
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Team', value: '12', change: '+2 Growth', status: 'increase', icon: ShieldCheck, color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Security Status', value: '98%', change: 'Optimal', status: 'stable', icon: Shield, color: 'text-success', bg: 'from-success/10 to-success/5' },
          { label: 'Access Roles', value: '45', change: 'Standard', status: 'stable', icon: Key, color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
          { label: 'Recent Reviews', value: '0', change: 'Verified', status: 'stable', icon: History, color: 'text-text-muted', bg: 'from-text-primary/10 to-text-primary/5' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`modern-card p-6 group hover:border-brand/40 transition-all flex items-center gap-6 relative overflow-hidden bg-gradient-to-br ${stat.bg} border-border-subtle shadow-sm`}
          >
             <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-current ${stat.color}`} />
             
            <div className={`w-14 h-14 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform shadow-2xl shrink-0`}>
              <stat.icon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-display font-bold text-text-primary tracking-tight leading-none">{stat.value}</span>
                {stat.status === 'increase' && <ArrowUpRight size={14} className="text-success" />}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest leading-none">{stat.label}</p>
                <div className="w-1 h-1 rounded-full bg-border-subtle" />
                <span className={`text-[9px] font-bold uppercase tracking-widest leading-none ${stat.status === 'increase' ? 'text-success' : 'text-text-muted'}`}>{stat.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Admin List Table */}
        <div className="xl:col-span-2 space-y-8">
          <div className="modern-card p-0 overflow-hidden border-border-subtle shadow-sm">
            <div className="p-8 border-b border-border-subtle flex flex-wrap items-center justify-between gap-6 bg-surface-panel/30">
              <div className="relative flex-1 min-w-[300px] group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
                <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search by name, email or role..." 
                   className="w-full bg-surface-base border border-border-subtle rounded-2xl pl-12 pr-5 py-4 text-xs text-text-primary outline-none focus:border-brand/40 transition-all font-medium placeholder:text-text-muted" 
                 />
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3.5 bg-surface-base border border-border-subtle rounded-2xl text-text-muted hover:text-text-primary hover:bg-surface-raised transition-all flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest shadow-sm">
                  <Filter size={14} />
                  Filters
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-subtle bg-surface-panel/40">
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Team Member</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-center">Permission level</th>
                    <th className="px-8 py-5 text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle/50">
                  {admins.map((admin) => (
                    <tr key={admin.id} className="group hover:bg-text-primary/[0.02] transition-colors cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <div className="relative group/avatar">
                            <img src={admin.avatar} alt={admin.name} className="w-14 h-14 rounded-2xl bg-surface-base border border-border-subtle grayscale group-hover/avatar:grayscale-0 transition-all duration-700 p-0.5" />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[4px] border-surface-panel shadow-2xl ${admin.status === 'Active' ? 'bg-success shadow-success/40' : 'bg-text-muted shadow-text-muted/40'}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{admin.name}</p>
                              <span className="px-2 py-0.5 bg-surface-raised border border-border-subtle text-text-muted rounded text-[8px] font-bold uppercase tracking-widest group-hover:text-brand/80 transition-colors">{admin.role}</span>
                            </div>
                            <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1.5">{admin.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col items-center gap-2">
                           <div className="flex gap-2">
                            {admin.permissions.includes('all') ? (
                              <span className="px-3 py-1 bg-brand/10 text-brand border border-brand/20 rounded-lg text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                <ShieldCheck size={10} className="animate-pulse" /> Full System Access
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-surface-raised border border-border-subtle text-text-muted rounded-lg text-[9px] font-bold uppercase tracking-widest">
                                {admin.permissions.length} Special Scopes
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={10} className="text-text-muted/50" />
                            <span className="text-[9px] font-bold text-text-muted uppercase tracking-[0.2em]">{admin.lastLogin}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-3 text-right">
                          <button className="w-10 h-10 flex items-center justify-center bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-text-primary hover:border-brand/40 transition-all shadow-sm group/btn">
                             <Edit3 size={15} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-danger hover:border-danger/40 transition-all shadow-sm group/btn">
                             <Trash2 size={15} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-surface-base border border-border-subtle rounded-xl text-text-muted hover:text-text-primary transition-all shadow-sm group/btn">
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
          <div className="modern-card p-10 border-border-subtle shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary tracking-tight">Role Settings</h3>
                <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest mt-2">Map specific abilities to team members</p>
              </div>
              <button className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] hover:text-text-primary transition-colors">Select All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {['Inventory', 'Orders', 'Users'].map((cat) => (
                <div key={cat} className="space-y-6">
                  <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em] border-b border-border-subtle pb-4 flex items-center justify-between">
                    {cat} Access
                    <span className="text-text-muted/60 font-bold italic tracking-normal">Settings</span>
                  </h4>
                  <div className="space-y-6">
                    {availablePermissions.filter(p => p.category === cat).map(p => (
                      <div key={p.id} className="group cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 w-4 h-4 rounded-md border border-border-subtle bg-surface-base flex items-center justify-center group-hover:border-brand/40 transition-all shadow-inner">
                            <CheckCircle2 size={10} className="text-brand opacity-0 group-hover:opacity-40 transition-opacity" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors uppercase tracking-tight">{p.label}</p>
                            <p className="text-[10px] text-text-muted mt-1.5 leading-relaxed font-bold tracking-tight">{p.description}</p>
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
          <div className="modern-card p-0 overflow-hidden border-border-subtle flex flex-col h-full bg-surface-panel/30 shadow-sm">
            <div className="p-8 flex items-center justify-between border-b border-border-subtle bg-surface-panel/30">
              <h3 className="text-lg font-display font-bold text-text-primary tracking-tight">Admin Activity</h3>
              <Activity size={16} className="text-text-muted/30" />
            </div>
            <div className="p-8 space-y-10 flex-1">
              {recentLogs.map((log, i) => (
                <div key={i} className="flex gap-5 group items-start">
                  <div className={`w-12 h-12 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center shrink-0 ${log.color} group-hover:scale-110 transition-transform shadow-sm`}>
                    <log.icon size={20} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold text-text-secondary truncate uppercase tracking-tight">{log.action}</p>
                    <p className="text-[10px] text-text-muted mt-1.5 font-bold tracking-tight uppercase leading-relaxed">By <span className="text-text-muted">{log.user}</span> on {log.target}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Clock size={10} className="text-text-muted/40" />
                      <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">{log.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-8 pt-6 border-t border-border-subtle text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] hover:text-brand transition-colors flex items-center justify-between group bg-surface-panel/40">
              View Full Logs
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Support / Docs - Styled to match banner cards */}
          <div className="modern-card p-1 border-none bg-brand shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
            <div className="bg-brand/10 group backdrop-blur-xl rounded-[inherit] p-8 h-full relative overflow-hidden">
               <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
               <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-sm">
                    <ShieldCheck size={32} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">Admin Roles</h3>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-2 leading-relaxed">Manage team permissions and system access levels easily.</p>
                 </div>
                 <button className="w-full py-4 bg-white text-brand font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                    View Guidelines
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
