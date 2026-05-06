import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Search, 
  ChevronDown, 
  Eye, 
  User, 
  Clock, 
  Calendar as CalendarIcon,
  Filter,
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Ticket {
  id: string;
  customer: string;
  phone: string;
  subject: string;
  status: 'Completed' | 'Pending' | 'On Progress' | 'New';
  unread: number;
  lastMessage: string;
  sender: 'Customer' | 'You';
  date: string;
  timeAgo: string;
}

const initialTickets: Ticket[] = [
  {
    id: '2',
    customer: 'test',
    phone: '01792945445',
    subject: 'ghn',
    status: 'Completed',
    unread: 0,
    lastMessage: 'Thank you',
    sender: 'Customer',
    date: '05 May 2026',
    timeAgo: '13 hours ago'
  },
  {
    id: '1',
    customer: 'test',
    phone: '01792945445',
    subject: 'Test Ticket',
    status: 'Pending',
    unread: 0,
    lastMessage: 'hi',
    sender: 'You',
    date: '05 May 2026',
    timeAgo: '13 hours ago'
  }
];

export default function SupportChatView() {
  const [activeTab, setActiveTab] = useState('All');
  const [tickets] = useState<Ticket[]>(initialTickets);

  const tabs = [
    { label: 'All', count: 2, color: 'bg-brand text-white border-brand' },
    { label: 'New', count: 0, color: 'bg-surface-raised text-text-muted border-border-subtle' },
    { label: 'Pending', count: 1, color: 'bg-surface-raised text-text-muted border-border-subtle' },
    { label: 'On Progress', count: 0, color: 'bg-surface-raised text-text-muted border-border-subtle' },
    { label: 'Completed', count: 1, color: 'bg-surface-raised text-text-muted border-border-subtle' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
          <MessageSquare size={20} />
        </div>
        <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
          Support Chat Tickets
        </h1>
      </div>

      {/* Tabs / Filters */}
      <div className="modern-card p-6 border-border-subtle bg-surface-panel/30 shadow-sm space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border transition-all
                ${activeTab === tab.label 
                  ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' 
                  : 'bg-surface-base text-text-muted border-border-subtle hover:border-brand/40'}`}
            >
              {tab.label}
              <span className={`px-1.5 py-0.5 rounded text-[8px] ${activeTab === tab.label ? 'bg-white/20' : 'bg-text-muted/10'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Show</span>
                <select className="bg-surface-base border border-border-subtle rounded-lg px-3 py-1.5 text-xs text-text-primary outline-none focus:border-brand/40 transition-all appearance-none pr-8 relative">
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">entries</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Search:</span>
            <div className="relative group">
              <input 
                type="text" 
                className="bg-surface-base border border-border-subtle rounded-lg px-4 py-2 text-xs text-text-primary outline-none focus:border-brand/40 transition-all w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="modern-card border-border-subtle shadow-sm bg-surface-panel/30 overflow-hidden">
        <div className="overflow-x-auto min-w-full custom-scrollbar">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-surface-panel/50 border-b border-border-subtle">
                <th className="w-12 px-5 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">#</th>
                <th className="w-44 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Customer</th>
                <th className="w-40 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Subject</th>
                <th className="w-28 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Status</th>
                <th className="w-20 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Unread</th>
                <th className="px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Last Message</th>
                <th className="w-36 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Date</th>
                <th className="w-28 px-6 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/10">
              {tickets.map((ticket, i) => (
                <motion.tr 
                  key={ticket.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-surface-panel/50 transition-all duration-300"
                >
                  <td className="px-5 py-4 text-[10px] font-bold text-text-muted">{ticket.id}</td>
                  <td className="px-4 py-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-text-primary truncate">{ticket.customer}</p>
                      <p className="text-[9px] font-bold text-text-muted opacity-60 tracking-tight">{ticket.phone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 min-w-0">
                    <p className="text-[10px] font-bold text-text-secondary truncate">{ticket.subject}</p>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className={`px-2 py-0.5 rounded-md text-[7px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 
                      ${ticket.status === 'Completed' ? 'bg-success/10 text-success border border-success/20' : 
                        ticket.status === 'Pending' ? 'bg-warning/10 text-warning border border-warning/20' : 
                        'bg-brand/10 text-brand border border-brand/20'}`}
                    >
                      <div className={`w-1 h-1 rounded-full ${ticket.status === 'Completed' ? 'bg-success shadow-[0_0_3px_var(--success)]' : ticket.status === 'Pending' ? 'bg-warning' : 'bg-brand'}`} />
                      {ticket.status}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-[10px] font-black ${ticket.unread > 0 ? 'text-brand' : 'text-text-muted/50'}`}>
                      {ticket.unread}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-start gap-1 min-w-0">
                       <span className="text-[8px] font-black text-text-muted uppercase mt-0.5">{ticket.sender}:</span>
                       <span className="text-[10px] font-medium text-text-secondary italic line-clamp-1">{ticket.lastMessage}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-black text-text-primary tracking-tight">{ticket.date}</p>
                      <p className="text-[8px] font-bold text-text-muted opacity-60">{ticket.timeAgo}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-brand text-white text-[8px] font-black uppercase tracking-widest rounded shadow-sm hover:translate-y-[-1px] transition-all">
                      <Eye size={10} /> View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border-subtle bg-surface-panel/20 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
             Showing <span className="text-text-primary">1 to 2</span> of 2 entries
           </p>
           <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 rounded-lg border border-border-subtle text-[9px] font-bold text-text-muted hover:bg-surface-raised transition-all">
                Previous
              </button>
              <button className="w-8 h-8 rounded-lg text-[9px] font-bold flex items-center justify-center bg-brand text-white shadow-lg shadow-brand/20">
                1
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-border-subtle text-[9px] font-bold text-text-muted hover:bg-surface-raised transition-all">
                Next
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
