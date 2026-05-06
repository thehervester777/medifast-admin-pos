import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  Trash2, 
  ChevronDown,
  Info,
  CheckCircle2,
  XCircle,
  Hash,
  Image as ImageIcon
} from 'lucide-react';

interface Product {
  id: string;
  productId: string;
  image: string;
  name: string;
  brand: string;
  manufacturer: string;
  oldPrice: number;
  newPrice: number;
  purchasePrice: number;
  quantity: number;
  status: 'Active' | 'Inactive';
}

const initialProducts: Product[] = [
  { 
    id: '1', 
    productId: 'PROD-20260505-LIKJAD', 
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop', 
    name: 'Standard Digital Thermometer', 
    brand: 'MicroTech Medical', 
    manufacturer: 'MicroTech Medical', 
    oldPrice: 160.00, 
    newPrice: 85.00, 
    purchasePrice: 70.00, 
    quantity: 12, 
    status: 'Active' 
  },
  { 
    id: '2', 
    productId: 'PROD-20260505-RHKWPC', 
    image: 'https://images.unsplash.com/photo-1550572017-ed200f545dec?w=100&h=100&fit=crop', 
    name: 'Xpa Syrup 60ml', 
    brand: 'AristoPharma Limited', 
    manufacturer: 'AristoPharma Limited', 
    oldPrice: 35.00, 
    newPrice: 30.80, 
    purchasePrice: 27.00, 
    quantity: 5, 
    status: 'Active' 
  },
  { 
    id: '3', 
    productId: 'PROD-20260505-I42FBD', 
    image: 'https://images.unsplash.com/photo-1471864190281-ad5f9fb072b3?w=100&h=100&fit=crop', 
    name: 'Omegut 20mg Capsule', 
    brand: 'Popular Pharmaceuticals Ltd.', 
    manufacturer: 'Popular Pharmaceuticals Ltd.', 
    oldPrice: 200.00, 
    newPrice: 160.00, 
    purchasePrice: 152.00, 
    quantity: 1, 
    status: 'Active' 
  },
  { 
    id: '4', 
    productId: 'PROD-20260505-IK4K6A', 
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=100&h=100&fit=crop', 
    name: 'QTP XR 50mg Tablet', 
    brand: 'Square Pharmaceuticals Ltd.', 
    manufacturer: 'Square Pharmaceuticals Ltd.', 
    oldPrice: 240.00, 
    newPrice: 196.00, 
    purchasePrice: 168.00, 
    quantity: 7, 
    status: 'Active' 
  },
  { 
    id: '5', 
    productId: 'PROD-20260505-DUF0EF', 
    image: 'https://images.unsplash.com/photo-1550572017-4f5629d21d60?w=100&h=100&fit=crop', 
    name: 'Rosuva EZ 20/10mg Tablet', 
    brand: 'Square Pharmaceuticals Ltd.', 
    manufacturer: 'Square Pharmaceuticals Ltd.', 
    oldPrice: 660.00, 
    newPrice: 540.00, 
    purchasePrice: 462.00, 
    quantity: 4, 
    status: 'Active' 
  }
];

export default function ProductsView() {
  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === products.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map(p => p.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10 px-2 lg:px-4">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
            Manage product information
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] mt-2 flex items-center gap-2">
            Inventory Central <span className="w-1 h-1 rounded-full bg-border-subtle" /> Catalog Management
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all shadow-sm">
            <Upload size={14} /> Import
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-panel/50 border border-border-subtle text-text-primary text-[10px] font-bold uppercase tracking-widest hover:border-brand/40 transition-all shadow-sm">
            <Plus size={14} /> Add Product
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-panel/50 border border-border-subtle text-text-primary text-[10px] font-bold uppercase tracking-widest hover:border-brand/40 transition-all shadow-sm">
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="modern-card p-6 lg:p-8 border-border-subtle bg-surface-panel/30 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-text-muted uppercase tracking-widest px-1">Product Name</label>
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={13} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-surface-base border border-border-subtle rounded-xl px-3.5 py-3 pl-10 text-[11px] text-text-primary outline-none focus:border-brand/40 transition-all shadow-sm"
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-text-muted uppercase tracking-widest px-1">Brand</label>
            <div className="relative">
              <select className="w-full bg-surface-base border border-border-subtle rounded-xl px-3.5 py-3 text-[11px] text-text-primary outline-none focus:border-brand/40 transition-all appearance-none cursor-pointer">
                <option>All Brands</option>
                <option>MicroTech Medical</option>
                <option>Square Pharmaceuticals</option>
                <option>Popular Pharmaceuticals</option>
              </select>
              <ChevronDown size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-text-muted uppercase tracking-widest px-1">Page Size</label>
            <div className="relative">
              <select className="w-full bg-surface-base border border-border-subtle rounded-xl px-3.5 py-3 text-[11px] text-text-primary outline-none focus:border-brand/40 transition-all appearance-none cursor-pointer">
                <option>100</option>
                <option>500</option>
                <option>1000</option>
              </select>
              <ChevronDown size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full py-3 bg-brand text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-brand/20 hover:shadow-brand/40 transition-all active:scale-[0.98]">
              Search
            </button>
          </div>
        </div>

        {/* Bulk Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border-subtle/50">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-brand text-white rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-sm">
              Selected: {selectedItems.length}
            </div>
            <button className="px-4 py-1.5 bg-warning/10 text-warning border border-warning/20 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-warning hover:text-white transition-all shadow-sm">
              Bulk Update
            </button>
            <button 
              onClick={() => setSelectedItems([])}
              className="px-4 py-1.5 bg-surface-base border border-border-subtle rounded-lg text-[9px] font-bold text-text-muted uppercase tracking-widest hover:text-text-primary transition-all shadow-sm"
            >
              Clear
            </button>
          </div>
          
          <div className="flex-1 flex flex-wrap items-center gap-3 bg-surface-base/30 p-2 rounded-xl border border-border-subtle">
            <div className="flex items-center gap-2 px-2">
               <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">Pricing:</span>
               <input type="text" placeholder="Purchase %" className="w-20 bg-surface-base border border-border-subtle rounded-lg px-2.5 py-1.5 text-[9px] text-text-primary outline-none focus:border-brand/40 transition-all" />
               <input type="text" placeholder="Sale %" className="w-20 bg-surface-base border border-border-subtle rounded-lg px-2.5 py-1.5 text-[9px] text-text-primary outline-none focus:border-brand/40 transition-all" />
            </div>
            <button className="px-4 py-1.5 bg-danger text-white rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-md shadow-danger/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Apply
            </button>
            <div className="hidden xl:flex items-center gap-1 text-[8px] text-text-muted font-bold uppercase ml-auto px-2">
               <Info size={10} className="text-brand" />
               Formula: New = Price - %
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="modern-card border-border-subtle shadow-sm bg-surface-panel/30 overflow-hidden">
        <div className="overflow-x-auto min-w-full custom-scrollbar">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-surface-panel/50 border-b border-border-subtle">
                <th className="w-12 px-4 py-3">
                  <input 
                    type="checkbox" 
                    checked={selectedItems.length === products.length}
                    onChange={toggleSelectAll}
                    className="w-3 h-3 rounded border-border-subtle bg-surface-base text-brand focus:ring-brand accent-brand cursor-pointer" 
                  />
                </th>
                <th className="w-8 px-1 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">#</th>
                <th className="w-36 px-3 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Product ID</th>
                <th className="w-16 px-2 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Ref</th>
                <th className="px-3 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest">Details</th>
                <th className="w-24 px-3 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-right">Old</th>
                <th className="w-24 px-3 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-right">New</th>
                <th className="w-24 px-3 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-right">Buy</th>
                <th className="w-14 px-2 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Qty</th>
                <th className="w-24 px-2 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Status</th>
                <th className="w-32 px-4 py-3 text-[8px] font-black text-text-muted uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/10">
              {products.map((p, i) => (
                <motion.tr 
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-surface-panel/60 transition-all duration-300"
                >
                  <td className="px-4 py-3">
                    <input 
                      type="checkbox" 
                      checked={selectedItems.includes(p.id)}
                      onChange={() => toggleSelectItem(p.id)}
                      className="w-3 h-3 rounded border-border-subtle bg-surface-base text-brand focus:ring-brand accent-brand cursor-pointer" 
                    />
                  </td>
                  <td className="px-1 py-3 text-[9px] font-bold text-text-muted">{i + 1}</td>
                  <td className="px-3 py-3">
                    <div className="px-2 py-0.5 bg-brand/5 border border-brand/10 rounded-md inline-flex items-center gap-1">
                       <span className="text-[8px] font-bold text-brand uppercase tracking-tighter">{p.productId}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-base border border-border-subtle overflow-hidden p-0.5 shadow-sm">
                      <img src={p.image} alt="" className="w-full h-full object-cover rounded-md" />
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-text-primary leading-tight truncate">{p.name}</p>
                      <p className="text-[8px] font-bold text-text-muted uppercase tracking-widest mt-0.5 opacity-60">
                        {p.brand}
                      </p>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span className="text-[9px] font-mono font-bold text-text-muted/50 line-through tracking-tighter">${p.oldPrice.toFixed(1)}</span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span className="text-[10px] font-mono font-black text-success tracking-tight">${p.newPrice.toFixed(1)}</span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span className="text-[9px] font-mono font-bold text-text-primary px-1.5 py-0.5 bg-surface-base border border-border-subtle rounded-md tracking-tighter">${p.purchasePrice.toFixed(1)}</span>
                  </td>
                  <td className="px-2 py-3 text-center">
                    <span className={`text-[9px] font-black ${p.quantity < 5 ? 'text-danger' : 'text-text-secondary'} tracking-tight`}>
                      {p.quantity}
                    </span>
                  </td>
                  <td className="px-2 py-3 text-center">
                    <div className={`px-1.5 py-0.5 rounded-md text-[7px] font-bold uppercase tracking-widest inline-flex items-center gap-1 
                      ${p.status === 'Active' ? 'bg-success/10 text-success border border-success/20' : 'bg-danger/10 text-danger border border-danger/20'}`}
                    >
                      <div className={`w-0.5 h-0.5 rounded-full ${p.status === 'Active' ? 'bg-success shadow-[0_0_3px_var(--success)]' : 'bg-danger'}`} />
                      {p.status}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-3 py-1 bg-brand text-white text-[8px] font-black uppercase tracking-widest rounded shadow-sm hover:translate-y-[-1px] transition-all">
                      Options
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-8 border-t border-border-subtle bg-surface-panel/20 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
             Showing <span className="text-text-primary">1 to 5</span> of 1,242 products
           </p>
           <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl border border-border-subtle text-text-muted hover:bg-surface-raised transition-all">
                <ChevronDown size={14} className="rotate-90" />
              </button>
              {[1, 2, 3, '...', 12].map((n, i) => (
                <button 
                  key={i} 
                  className={`w-9 h-9 rounded-xl text-[10px] font-bold flex items-center justify-center transition-all
                    ${n === 1 ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'border border-border-subtle text-text-muted hover:bg-surface-raised'}`}
                >
                  {n}
                </button>
              ))}
              <button className="p-2.5 rounded-xl border border-border-subtle text-text-muted hover:bg-surface-raised transition-all">
                <ChevronDown size={14} className="-rotate-90" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
