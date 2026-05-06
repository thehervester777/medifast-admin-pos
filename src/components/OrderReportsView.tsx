import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  Printer, 
  FileText, 
  Edit, 
  Wand2, 
  Copy, 
  FileDown as FileCsv, 
  FileJson as FilePdf, 
  LayoutGrid,
  Filter,
  Calendar as CalendarIcon,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface Order {
  si: number;
  trackId: string;
  customerName: string;
  customerPhone: string;
  totalPrice: string;
  orderDate: string;
  orderTime: string;
  cancelRequest: string;
  status: string;
}

const mockOrders: Order[] = [
  { si: 1, trackId: '501293', customerName: 'Rajib Farma', customerPhone: '01759317129', totalPrice: 'SR 790', orderDate: 'May 06, 2026', orderTime: '03:03:30 am', cancelRequest: 'No', status: 'Pending' },
  { si: 2, trackId: '214566', customerName: 'Rajib Farma', customerPhone: '01759317129', totalPrice: 'SR 17228.35', orderDate: 'May 06, 2026', orderTime: '02:53:01 am', cancelRequest: 'No', status: 'Pending' },
  { si: 3, trackId: '669771', customerName: 'Bismillah Pharmacy (1)', customerPhone: '01945940886', totalPrice: 'SR 373', orderDate: 'May 06, 2026', orderTime: '02:49:19 am', cancelRequest: 'No', status: 'Pending' },
  { si: 4, trackId: '669823', customerName: 'Raha pharmacy', customerPhone: '01741726475', totalPrice: 'SR 1200', orderDate: 'May 06, 2026', orderTime: '02:48:13 am', cancelRequest: 'No', status: 'Pending' },
  { si: 5, trackId: '442600', customerName: 'Raha pharmacy', customerPhone: '01741726475', totalPrice: 'SR 3075', orderDate: 'May 06, 2026', orderTime: '02:42:00 am', cancelRequest: 'No', status: 'Pending' },
  { si: 6, trackId: '814776', customerName: 'Raj pharma', customerPhone: '01968484901', totalPrice: 'SR 1897.4', orderDate: 'May 06, 2026', orderTime: '02:37:21 am', cancelRequest: 'No', status: 'Pending' },
  { si: 7, trackId: '914486', customerName: 'Friends & Family Pharma', customerPhone: '01707369694', totalPrice: 'SR 1184', orderDate: 'May 06, 2026', orderTime: '02:13:10 am', cancelRequest: 'No', status: 'Pending' },
];

export default function OrderReportsView({ activeStatus = 'Pending' }: { activeStatus?: string }) {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const toggleOrder = (si: number) => {
    setSelectedOrders(prev => 
      prev.includes(si) ? prev.filter(id => id !== si) : [...prev, si]
    );
  };

  const toggleAll = () => {
    if (selectedOrders.length === mockOrders.length) setSelectedOrders([]);
    else setSelectedOrders(mockOrders.map(o => o.si));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700 pb-10">
      {/* Breadcrumb & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-1">
        <h1 className="text-xl font-display font-medium text-text-primary">Order information</h1>
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
          <span>Home</span> <ChevronRight size={10} />
          <span>editor</span> <ChevronRight size={10} />
          <span>order</span> <ChevronRight size={10} />
          <span>manage</span> <ChevronRight size={10} />
          <span className="text-brand">pending</span>
        </div>
      </div>

      {/* Filters Card */}
      <div className="modern-card p-4 border-border-subtle bg-surface-panel/30 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand/30" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-9 gap-3 items-end">
          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">Status</label>
            <select className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40 transition-all cursor-pointer">
              <option>{activeStatus}</option>
              <option>Accepted</option>
              <option>In Process</option>
            </select>
          </div>
          
          <div className="space-y-1.5 xl:col-span-1">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">District</label>
            <div className="relative">
              <input type="text" placeholder="District" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none opacity-50" />
            </div>
          </div>

          <div className="space-y-1.5 xl:col-span-1">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">Area</label>
            <div className="relative">
              <input type="text" placeholder="Area" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none opacity-50" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">Filter</label>
            <select className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40 cursor-pointer">
              <option>All</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">S. Date</label>
            <input type="date" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">S. Time</label>
            <input type="time" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">E. Date</label>
            <input type="date" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest px-1">E. Time</label>
            <input type="time" className="w-full bg-surface-base border border-border-subtle rounded-lg px-2 py-1.5 text-[10px] font-bold text-text-secondary outline-none focus:border-brand/40" />
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <button className="w-full px-6 py-1.5 bg-success text-white text-[10px] font-black uppercase tracking-widest rounded shadow-md shadow-success/20 hover:bg-success/90 hover:scale-[1.02] active:scale-[0.98] transition-all h-[33px]">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-surface-panel/10 p-1 rounded-xl">
        <button className="flex items-center gap-1.5 px-3 py-2 bg-warning text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm hover:scale-[1.02] transition-all">
          <Wand2 size={12} /> Merge Selected
        </button>
        
        <div className="flex bg-surface-base border border-border-subtle rounded-lg overflow-hidden h-[34px] group focus-within:border-brand/40 transition-all">
          <select className="bg-transparent px-3 py-1 text-[10px] font-bold text-text-muted outline-none border-r border-border-subtle cursor-pointer appearance-none">
            <option>-- Select Status --</option>
          </select>
          <button className="px-3 bg-teal-500 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
            <Edit size={12} /> Update Status
          </button>
        </div>

        <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm hover:scale-[1.02] transition-all">
          <Printer size={12} /> Print Invoice
        </button>

        <button className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm hover:scale-[1.02] transition-all">
          Warehouse Paper
        </button>
      </div>

      {/* Table Section */}
      <div className="modern-card border-border-subtle shadow-sm bg-surface-panel/30 overflow-hidden">
        {/* Table Controls */}
        <div className="p-4 border-b border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            {[
              { label: 'Copy', icon: Copy },
              { label: 'Excel', icon: FileCsv },
              { label: 'Csv', icon: FileCsv },
              { label: 'PDF', icon: FilePdf },
              { label: 'Print', icon: Printer },
              { label: 'Print all', icon: Printer },
            ].map((btn) => (
              <button key={btn.label} className="px-3 py-1.5 bg-surface-raised border border-border-subtle text-[10px] font-bold text-text-secondary hover:bg-surface-panel transition-all rounded">
                {btn.label}
              </button>
            ))}
            <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-raised border border-border-subtle text-[10px] font-bold text-text-secondary hover:bg-surface-panel transition-all rounded">
              Column visibility <ChevronDown size={12} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Search:</span>
            <div className="relative">
              <input type="text" className="bg-surface-base border border-border-subtle rounded-lg px-4 py-1.5 text-xs text-text-primary outline-none focus:border-brand/40 transition-all w-48" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto min-w-full custom-scrollbar">
          <table className="w-full text-left border-collapse table-fixed min-w-[1000px]">
             <thead>
                <tr className="bg-surface-panel/50 border-b border-border-subtle text-[8px] font-black text-text-muted uppercase tracking-widest">
                   <th className="w-10 px-4 py-3 text-center">
                      <input type="checkbox" checked={selectedOrders.length === mockOrders.length} onChange={toggleAll} className="rounded border-border-subtle text-brand focus:ring-brand" />
                   </th>
                   <th className="w-10 px-3 py-3">SI</th>
                   <th className="w-24 px-3 py-3">Track Id</th>
                   <th className="w-48 px-3 py-3">Customer Name</th>
                   <th className="w-36 px-3 py-3">Phone</th>
                   <th className="w-24 px-3 py-3">Price</th>
                   <th className="w-40 px-3 py-3">Time</th>
                   <th className="w-20 px-3 py-3 text-center">Cancel</th>
                   <th className="w-24 px-3 py-3 text-center">Status</th>
                   <th className="w-28 px-4 py-3 text-center">Action</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-border-subtle/10">
                {mockOrders.map((o) => (
                   <tr key={o.si} className="group hover:bg-surface-panel/40 transition-all duration-300">
                      <td className="px-4 py-3 text-center">
                         <input type="checkbox" checked={selectedOrders.includes(o.si)} onChange={() => toggleOrder(o.si)} className="rounded border-border-subtle text-brand focus:ring-brand" />
                      </td>
                      <td className="px-3 py-3 text-[10px] font-bold text-text-muted">{o.si}</td>
                      <td className="px-3 py-3 text-[10px] font-black text-brand tracking-tight">{o.trackId}</td>
                      <td className="px-3 py-3">
                        <p className="text-[10px] font-black text-text-primary truncate" title={o.customerName}>{o.customerName}</p>
                      </td>
                      <td className="px-3 py-3 text-[10px] font-bold text-text-muted tracking-tight">{o.customerPhone}</td>
                      <td className="px-3 py-3 text-[10px] font-black text-text-primary">{o.totalPrice}</td>
                      <td className="px-3 py-3">
                         <div className="space-y-0.5">
                            <p className="text-[9px] font-black text-text-primary flex items-center gap-1">
                               <span className="text-text-muted/60 text-[8px] uppercase font-black">@</span> {o.orderDate}
                            </p>
                            <p className="text-[9px] font-bold text-text-muted opacity-80">{o.orderTime}</p>
                         </div>
                      </td>
                      <td className="px-3 py-3 text-center text-[10px] font-bold text-text-muted">{o.cancelRequest}</td>
                      <td className="px-3 py-3 text-center">
                         <div className="px-1.5 py-0.5 rounded bg-surface-raised border border-border-subtle text-[8px] font-black uppercase text-text-muted tracking-widest inline-block">
                            {o.status}
                         </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                         <button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-brand text-white text-[8px] font-black uppercase tracking-widest rounded shadow-sm hover:translate-y-[-1px] transition-all">
                            <LayoutGrid size={11} /> Actions
                         </button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
