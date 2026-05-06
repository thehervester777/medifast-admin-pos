import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Search, 
  ChevronDown, 
  Copy, 
  FileSpreadsheet, 
  FileText, 
  Printer, 
  Columns,
  Hash,
  CheckCircle2,
  XCircle,
  MoreHorizontal
} from 'lucide-react';

interface Brand {
  id: string;
  brandId: string;
  name: string;
  status: 'Active' | 'Inactive';
}

const initialBrands: Brand[] = [
  { id: '1', brandId: '123', name: 'Rephco Pharmaceuticals Limited.', status: 'Active' },
  { id: '2', brandId: '122', name: 'NAAFCO Pharma Ltd.', status: 'Active' },
  { id: '3', brandId: '121', name: 'Kemiko Pharmaceuticals Limited.', status: 'Active' },
  { id: '4', brandId: '120', name: 'Prime Pharmaceuticals Ltd.', status: 'Active' },
  { id: '5', brandId: '119', name: 'Zenith Pharmaceuticals Limited', status: 'Active' },
  { id: '6', brandId: '118', name: 'Leon Pharmaceuticals Ltd', status: 'Active' },
  { id: '7', brandId: '117', name: 'Emami Limited', status: 'Active' },
  { id: '8', brandId: '116', name: 'City Overseas Ltd.', status: 'Active' },
  { id: '9', brandId: '115', name: 'Purnava Limited', status: 'Active' },
  { id: '10', brandId: '114', name: 'Sonear Laboratories Ltd', status: 'Active' },
];

export default function BrandsView() {
  const [brands] = useState<Brand[]>(initialBrands);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10 px-2 lg:px-4">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
            Brand information
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[9px] mt-2 flex items-center gap-2">
            Catalog <span className="w-1 h-1 rounded-full bg-border-subtle" /> Brand Directory
          </p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20">
          <Plus size={16} /> Add Brand
        </button>
      </div>

      {/* Toolbar & Search */}
      <div className="modern-card p-6 border-border-subtle bg-surface-panel/30 shadow-sm space-y-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <Copy size={12} /> Copy
            </button>
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <FileSpreadsheet size={12} /> Excel
            </button>
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <FileText size={12} /> CSV
            </button>
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <FileText size={12} /> PDF
            </button>
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <Printer size={12} /> Print
            </button>
            <button className="px-4 py-2 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-raised transition-all flex items-center gap-2">
              <Columns size={12} /> Visibility <ChevronDown size={10} />
            </button>
          </div>

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="Search brands..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-surface-base border border-border-subtle rounded-xl px-4 py-3 pl-11 text-xs text-text-primary outline-none focus:border-brand/40 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="modern-card border-border-subtle shadow-sm bg-surface-panel/30 overflow-hidden">
        <div className="overflow-x-auto min-w-full custom-scrollbar">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-surface-panel/50 border-b border-border-subtle">
                <th className="w-16 px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">SI</th>
                <th className="w-40 px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Brand ID</th>
                <th className="px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest">Brand Name</th>
                <th className="w-40 px-6 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest text-center">Status</th>
                <th className="w-48 px-8 py-4 text-[9px] font-black text-text-muted uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/20">
              {brands.map((brand, i) => (
                <motion.tr 
                  key={brand.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="group hover:bg-surface-panel/60 transition-all duration-300"
                >
                  <td className="px-6 py-4 text-[10px] font-bold text-text-muted">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="px-2 py-0.5 bg-brand/5 border border-brand/10 rounded-lg inline-flex items-center gap-1.5">
                       <Hash size={10} className="text-brand/60" />
                       <span className="text-[10px] font-bold text-brand tracking-tighter">{brand.brandId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[11px] font-bold text-text-primary group-hover:text-brand transition-colors">
                      {brand.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 
                      ${brand.status === 'Active' ? 'bg-success/10 text-success border border-success/20' : 'bg-danger/10 text-danger border border-danger/20'}`}
                    >
                      <div className={`w-1 h-1 rounded-full ${brand.status === 'Active' ? 'bg-success shadow-[0_0_5px_var(--success)]' : 'bg-danger'}`} />
                      {brand.status}
                    </div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <button className="px-4 py-1.5 bg-brand text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-md shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 mx-auto">
                      Action Button <ChevronDown size={10} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer / Pagination */}
        <div className="p-6 border-t border-border-subtle bg-surface-panel/20 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
             Showing <span className="text-text-primary">1 to 10</span> of 123 entries
           </p>
           <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 rounded-lg border border-border-subtle text-[9px] font-bold text-text-muted hover:bg-surface-raised transition-all">
                Previous
              </button>
              {[1, 2, 3, 4, 5, '...', 13].map((n, i) => (
                <button 
                  key={i} 
                  className={`w-8 h-8 rounded-lg text-[9px] font-bold flex items-center justify-center transition-all
                    ${n === 1 ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'border border-border-subtle text-text-muted hover:bg-surface-raised'}`}
                >
                  {n}
                </button>
              ))}
              <button className="px-3 py-1.5 rounded-lg border border-border-subtle text-[9px] font-bold text-text-muted hover:bg-surface-raised transition-all">
                Next
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
