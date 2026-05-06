import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Megaphone, Save, Trash2, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AppNoticeView() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [noticeText, setNoticeText] = useState('সম্মানিত ব্যবহারকারী, অ্যাপের সিস্টেম আপডেটের কাজ চলায় সাময়িকভাবে সেবা ব্যবহারে কিছুটা বিঘ্ন ঘটতে পারে। সাময়িক এই অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত। আমাদের সাথেই থাকুন। — মেডিফাস্ট');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
          <Megaphone size={20} />
        </div>
        <h1 className="text-2xl font-display font-bold text-text-primary tracking-tight">
          App Notice Banner
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="modern-card p-10 border-border-subtle bg-surface-panel/30 shadow-sm space-y-10">
          
          {/* Status Section */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Notice Banner</h3>
            <label className="flex items-center gap-4 group cursor-pointer w-fit">
              <div 
                onClick={() => setIsEnabled(!isEnabled)}
                className={`w-12 h-6 rounded-full relative transition-all duration-500 border
                  ${isEnabled ? 'bg-danger/20 border-danger/40' : 'bg-surface-raised border-border-subtle'}`}
              >
                <div className={`absolute top-1 w-3.5 h-3.5 rounded-full transition-all duration-500 shadow-sm
                  ${isEnabled ? 'left-7 bg-danger' : 'left-1 bg-text-muted'}`} 
                />
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors
                ${isEnabled ? 'text-danger' : 'text-text-muted'}`}>
                {isEnabled ? 'Enabled - Notice banner is visible in the app' : 'Disabled - Notice banner is hidden'}
              </span>
            </label>
          </div>

          {/* Textarea Section */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Notice Text</h3>
            <div className="relative group">
              <textarea 
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
                rows={5}
                className="w-full bg-surface-base border border-border-subtle rounded-2xl p-6 text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand/40 transition-all font-sans resize-none shadow-sm"
                placeholder="Enter notice text here..."
              />
              <div className="absolute bottom-4 right-4 text-[9px] font-bold text-text-muted/40 uppercase tracking-widest">
                {noticeText.length} Characters
              </div>
            </div>
            <div className="flex items-center gap-2 px-1">
              <Info size={12} className="text-brand" />
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest opacity-60">
                This text will scroll across the top of the mobile app like a news headline.
              </p>
            </div>
          </div>

          {/* Preview Box */}
          <AnimatePresence>
            {isEnabled && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-brand/10 border-l-4 border-brand p-8 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2 text-brand">
                    <Megaphone size={16} />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Notice banner is currently ACTIVE.</span>
                  </div>
                  <p className="text-xs font-bold text-text-primary leading-relaxed opacity-90">
                    <span className="text-[10px] font-black uppercase text-text-muted mr-2">Text:</span>
                    {noticeText}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-6 border-t border-border-subtle/50">
            <button className="flex items-center gap-2 px-8 py-4 bg-brand text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Save size={14} /> Update Settings
            </button>
            <button 
              onClick={() => {
                setNoticeText('');
                setIsEnabled(false);
              }}
              className="flex items-center gap-2 px-8 py-4 bg-surface-raised border border-border-subtle text-text-muted text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-surface-panel transition-all"
            >
              Clear
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center">
           <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full">
              <CheckCircle2 size={12} className="text-success" />
              <span className="text-[9px] font-bold text-success uppercase tracking-widest">Settings will be synchronized across all mobile instances</span>
           </div>
        </div>
      </div>
    </div>
  );
}
