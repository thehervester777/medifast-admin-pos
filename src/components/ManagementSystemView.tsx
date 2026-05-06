import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownLeft, 
  FileText, 
  Download, 
  Calendar,
  Filter,
  CreditCard,
  Target,
  Wallet,
  Activity,
  ChevronRight,
  Plus,
  X,
  CheckCircle2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Cell, 
  Pie, 
  PieChart as RePieChart,
  BarChart,
  Bar
} from 'recharts';
import { AnimatePresence } from 'motion/react';

// Types
interface Transaction {
  id: string;
  category: string;
  amount: number;
  type: 'revenue' | 'expense';
  status: 'Completed' | 'Pending';
  date: string;
  description?: string;
}

const pnlData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 34000, profit: 18000 },
  { month: 'Mar', revenue: 48000, expenses: 31000, profit: 17000 },
  { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
  { month: 'May', revenue: 58000, expenses: 35000, profit: 23000 },
  { month: 'Jun', revenue: 72000, expenses: 42000, profit: 30000 },
];

const expenseCategories = [
  { name: 'Logistics', value: 45, color: '#6366f1' },
  { name: 'Inventory', value: 25, color: '#10b981' },
  { name: 'Personnel', value: 20, color: '#f59e0b' },
  { name: 'System Ops', value: 10, color: '#ef4444' },
];

const recentTransactions = [
  { id: 'TX-9021', category: 'Inventory', amount: 12500, type: 'expense', status: 'Completed', date: 'Oct 24, 2026' },
  { id: 'TX-9022', category: 'Shipping', amount: 3200, type: 'expense', status: 'Pending', date: 'Oct 25, 2026' },
  { id: 'TX-9023', category: 'Client Payout', amount: 45000, type: 'revenue', status: 'Completed', date: 'Oct 25, 2026' },
  { id: 'TX-9024', category: 'Warehousing', amount: 8400, type: 'expense', status: 'Completed', date: 'Oct 26, 2026' },
];

export default function ManagementSystemView() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [showAddModal, setShowAddModal] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TX-9021', category: 'Inventory', amount: 12500, type: 'expense', status: 'Completed', date: 'Oct 24, 2026' },
    { id: 'TX-9022', category: 'Shipping', amount: 3200, type: 'expense', status: 'Pending', date: 'Oct 25, 2026' },
    { id: 'TX-9023', category: 'Client Payout', amount: 45000, type: 'revenue', status: 'Completed', date: 'Oct 25, 2026' },
    { id: 'TX-9024', category: 'Warehousing', amount: 8400, type: 'expense', status: 'Completed', date: 'Oct 26, 2026' },
  ]);

  // Form State
  const [newTx, setNewTx] = useState({
    type: 'expense' as 'revenue' | 'expense',
    category: 'Logistics',
    amount: '',
    description: ''
  });

  // Derived Calculations
  const totalRevenue = transactions
    .filter(t => t.type === 'revenue')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : '0';

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const tx: Transaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: newTx.type,
      category: newTx.category,
      amount: parseFloat(newTx.amount),
      status: 'Completed',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      description: newTx.description
    };
    setTransactions([tx, ...transactions]);
    setShowAddModal(false);
    setNewTx({ type: 'expense', category: 'Logistics', amount: '', description: '' });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10 relative">
      {/* Transaction Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-surface-base border border-border-subtle rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="p-8 pb-4 flex items-center justify-between">
                <h3 className="text-2xl font-display font-bold text-text-primary tracking-tight">Record Entry</h3>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-3 rounded-2xl hover:bg-surface-raised transition-colors text-text-muted"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddTransaction} className="p-8 pt-4 space-y-6">
                <div className="flex p-1 bg-surface-panel/50 border border-border-subtle rounded-2xl">
                  {['expense', 'revenue'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setNewTx({ ...newTx, type: t as any })}
                      className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all
                        ${newTx.type === t 
                          ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                          : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">Category</label>
                  <select 
                    value={newTx.category}
                    onChange={(e) => setNewTx({ ...newTx, category: e.target.value })}
                    className="w-full bg-surface-panel/30 border border-border-subtle rounded-2xl px-4 py-4 text-xs text-text-primary outline-none focus:border-brand/40 transition-all appearance-none"
                  >
                    <option>Logistics</option>
                    <option>Inventory</option>
                    <option>Shipping</option>
                    <option>Warehousing</option>
                    <option>Personnel</option>
                    <option>System Ops</option>
                    <option>Client Payout</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">Amount ($)</label>
                  <input 
                    type="number"
                    required
                    value={newTx.amount}
                    onChange={(e) => setNewTx({ ...newTx, amount: e.target.value })}
                    placeholder="0.00"
                    className="w-full bg-surface-panel/30 border border-border-subtle rounded-2xl px-4 py-4 text-sm font-mono text-text-primary outline-none focus:border-brand/40 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-1">Description (Optional)</label>
                  <textarea 
                    value={newTx.description}
                    onChange={(e) => setNewTx({ ...newTx, description: e.target.value })}
                    placeholder="Reference notes..."
                    rows={3}
                    className="w-full bg-surface-panel/30 border border-border-subtle rounded-2xl px-4 py-4 text-xs text-text-primary outline-none focus:border-brand/40 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-brand text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-brand/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  Post Transaction
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight flex items-center gap-3">
            Management System
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest border border-brand/20">Financials</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2">P&L Forensics, Expense Routing & Revenue Control</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={() => setShowAddModal(true)}
            className="btn-success px-8 py-3.5 !text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-success/20"
          >
            <Plus size={14} />
            Add Entry
          </button>
          <div className="flex items-center gap-2 p-1.5 bg-surface-panel/50 border border-border-subtle rounded-2xl shadow-sm">
            {['This Month', 'Quarter', 'Year'].map((p) => (
              <button 
                key={p}
                onClick={() => setSelectedPeriod(p)}
                className={`px-6 py-2.5 text-[9px] font-bold rounded-xl transition-all uppercase tracking-widest
                  ${selectedPeriod === p 
                    ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                    : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="btn-primary px-8 py-3.5 !text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand/20">
            <Download size={14} />
            Export Audit
          </button>
        </div>
      </div>

      {/* Primary Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, trend: '+12.5%', isPos: true, icon: DollarSign, color: 'text-brand', bg: 'from-brand/10 to-brand/5' },
          { label: 'Operating Expenses', value: `$${totalExpenses.toLocaleString()}`, trend: '+4.2%', isPos: false, icon: CreditCard, color: 'text-danger', bg: 'from-danger/10 to-danger/5' },
          { label: 'Net Profit (P&L)', value: `$${netProfit.toLocaleString()}`, trend: '+18.4%', isPos: true, icon: Wallet, color: 'text-success', bg: 'from-success/10 to-success/5' },
          { label: 'Profit Margin', value: `${profitMargin}%`, trend: '+2.1%', isPos: true, icon: Activity, color: 'text-warning', bg: 'from-warning/10 to-warning/5' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`modern-card p-6 bg-gradient-to-br ${stat.bg} border-border-subtle group hover:border-brand/40 transition-all shadow-sm relative overflow-hidden`}
          >
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className={`p-3 rounded-2xl bg-surface-base border border-border-subtle ${stat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-border-subtle/50 bg-surface-base/50 ${stat.isPos ? 'text-success' : 'text-danger'}`}>
                {stat.isPos ? <ArrowUpRight size={12} /> : <ArrowDownLeft size={12} />}
                {stat.trend}
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-2">{stat.label}</p>
              <h3 className="text-3xl font-display font-bold text-text-primary tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* P&L Analysis Chart */}
        <div className="xl:col-span-2 space-y-8">
          <div className="modern-card p-10 border-border-subtle bg-surface-panel/30 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary tracking-tight">P&L Performance</h3>
                <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest mt-2">Revenue vs Operating Cost over time</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-danger" />
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">Expenses</span>
                </div>
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={pnlData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--brand)" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="var(--brand)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 'bold' }} 
                    dy={10} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 'bold' }} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--surface-raised)', 
                      borderRadius: '1rem', 
                      border: '1px solid var(--border-subtle)', 
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' 
                    }} 
                    itemStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="var(--brand)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expense Distribution */}
            <div className="modern-card p-10 border-border-subtle bg-surface-panel/30 shadow-sm transition-all hover:border-brand/20">
              <h2 className="text-xl font-display font-bold text-text-primary mb-10 tracking-tight uppercase">Expense Allocation</h2>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {expenseCategories.map((cat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{cat.name}</span>
                    <span className="text-[10px] font-bold text-text-primary ml-auto">{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Health Target */}
            <div className="modern-card p-1 p-10 border-border-subtle bg-surface-panel/30 shadow-sm relative flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary tracking-tight">Quarterly Milestone</h3>
                <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest mt-2">Revenue Target Consistency</p>
              </div>
              
              <div className="py-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="text-xs font-bold text-text-primary uppercase tracking-tight">Revenue Target</p>
                    <p className="text-3xl font-display font-bold text-brand leading-none">82%</p>
                  </div>
                  <div className="w-full h-3 bg-surface-base rounded-full overflow-hidden border border-border-subtle">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">Current: $820k</span>
                    <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">Goal: $1.0m</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-brand/5 border border-brand/10 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                    <Target size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand uppercase tracking-widest">Strategic Insight</p>
                    <p className="text-[10px] text-text-muted font-bold uppercase mt-1 leading-relaxed">You are $180k away from reaching full fiscal targets.</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-surface-base border border-border-subtle rounded-2xl text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] hover:text-text-primary hover:border-brand/40 transition-all shadow-sm">
                Adjust Forecast
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Transactions & Controls */}
        <div className="space-y-8">
          {/* Recent Financial Log */}
          <div className="modern-card p-0 overflow-hidden border-border-subtle bg-surface-panel/30 shadow-sm flex flex-col h-full">
            <div className="p-8 flex items-center justify-between border-b border-border-subtle bg-surface-panel/30">
              <h3 className="text-lg font-display font-bold text-text-primary tracking-tight">Transaction Log</h3>
              <FileText size={16} className="text-text-muted/30" />
            </div>
            <div className="p-8 space-y-8 flex-1 overflow-x-hidden">
              <AnimatePresence initial={false}>
                {transactions.map((tx) => (
                  <motion.div 
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-5 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-surface-base border border-border-subtle flex items-center justify-center shrink-0 ${tx.type === 'revenue' ? 'text-success' : 'text-text-muted'} group-hover:scale-110 transition-transform shadow-sm`}>
                      {tx.type === 'revenue' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                    </div>
                    <div className="min-w-0 pr-4">
                      <p className="text-xs font-bold text-text-secondary truncate uppercase tracking-tight">{tx.category}</p>
                      <p className="text-[10px] text-text-muted mt-2 font-bold tracking-tight uppercase leading-relaxed flex items-center gap-2">
                        {tx.id} <span className="w-1 h-1 rounded-full bg-border-subtle" /> {tx.date}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className={`text-sm font-bold font-mono tracking-tight ${tx.type === 'revenue' ? 'text-success' : 'text-text-primary'}`}>
                        {tx.type === 'revenue' ? '+' : '-'}${tx.amount.toLocaleString()}
                      </p>
                      <span className={`text-[8px] font-bold uppercase tracking-widest mt-1 block ${tx.status === 'Pending' ? 'text-warning' : 'text-text-muted/50'}`}>
                        {tx.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <button className="p-8 pt-6 border-t border-border-subtle text-[9px] font-bold text-text-muted uppercase tracking-[0.2em] hover:text-brand transition-colors flex items-center justify-between group bg-surface-panel/40">
              Generate Statement
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Config Banner */}
          <div className="modern-card p-1 border-none bg-brand shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
            <div className="bg-brand/10 group backdrop-blur-xl rounded-[inherit] p-8 h-full relative overflow-hidden">
               <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
               <div className="relative z-10 space-y-6">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-sm">
                    <DollarSign size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight uppercase leading-tight">Tax & Compliance Hub</h3>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-2 leading-relaxed">Manage regional tax nodes and automated payroll distribution.</p>
                 </div>
                 <button className="w-full py-4 bg-white text-brand font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                    Open Tax Portal
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
