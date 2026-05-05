/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe,
  Eye,
  EyeOff
} from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('medifast_saved_email');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Demo credentials check
    setTimeout(() => {
      if (email === 'admin@medifast.com' && password === 'medifast2026') {
        if (rememberMe) {
          localStorage.setItem('medifast_saved_email', email);
        } else {
          localStorage.removeItem('medifast_saved_email');
        }
        onLogin();
      } else {
        setError('Invalid credentials. Please use the demo login.');
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-surface-base overflow-hidden">
      {/* Left Decoration - Branding/Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface-base items-center justify-center p-20 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.1),transparent)]" />
         <div className="absolute inset-0 bg-surface-base" />
         
         {/* Animated Grid Background */}
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:40px_40px]" />
         
         <div className="relative z-10 w-full max-w-lg">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="mb-12"
            >
               <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-brand/40 mb-8">
                  <Package size={36} />
               </div>
               <h1 className="text-5xl font-display font-bold text-text-primary leading-tight tracking-tight">
                  Next-Gen <br/>
                  <span className="text-brand">Medical Logistics</span> <br/>
                  Architecture.
               </h1>
            </motion.div>

            <div className="space-y-8">
               {[
                 { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Enterprise-grade encryption and audited security protocols." },
                 { icon: Zap, title: "Real-time Analytics", desc: "Sub-millisecond latency on operational and logistics tracking." },
                 { icon: Globe, title: "Global Compliance", desc: "Cross-border medical transport regulatory monitoring." }
               ].map((feature, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.5 + (i * 0.1) }}
                   className="flex gap-4 group"
                 >
                    <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-brand transition-all shadow-sm">
                       <feature.icon size={20} />
                    </div>
                    <div>
                       <h3 className="text-text-primary font-bold tracking-tight">{feature.title}</h3>
                       <p className="text-text-muted text-sm font-medium mt-1 leading-relaxed">{feature.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <div className="mt-20 pt-8 border-t border-border-subtle">
               <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-base bg-surface-raised shadow-sm" />
                     ))}
                  </div>
                  <p className="text-text-muted text-xs font-bold uppercase tracking-widest ml-4">Empowering 500+ Healthcare Facilities</p>
               </div>
            </div>
         </div>
      </div>

      {/* Right Content - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface-base relative">
         <div className="absolute top-8 right-8">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest bg-surface-panel px-3 py-1.5 rounded-lg border border-border-subtle shadow-sm">v2.4.0 Production</span>
         </div>

         <div className="w-full max-w-md">
            <div className="text-center lg:text-left mb-12">
               <div className="lg:hidden w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-brand/20 shadow-lg">
                  <Package size={24} />
               </div>
               <h2 className="text-3xl font-display font-bold text-text-primary tracking-tight">Welcome Back</h2>
               <p className="text-text-muted font-medium mt-2">Access the Medifast logistics gateway.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Work Email</label>
                     <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={18} />
                        <input 
                           required
                           type="email" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="admin@medifast.com"
                           className="w-full bg-surface-raised border border-border-subtle rounded-xl py-3.5 pl-12 pr-4 text-text-primary placeholder:text-text-muted/40 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium shadow-sm"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex items-center justify-between ml-1">
                        <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Master Key</label>
                        <button type="button" className="text-[10px] font-bold text-brand uppercase tracking-widest hover:underline transition-all">Forgot Security Key?</button>
                     </div>
                     <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={18} />
                        <input 
                           required
                           type={showPassword ? "text" : "password"} 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="••••••••••••"
                           className="w-full bg-surface-raised border border-border-subtle rounded-xl py-3.5 pl-12 pr-12 text-text-primary placeholder:text-text-muted/40 focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all font-medium shadow-sm"
                        />
                        <button 
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors p-1"
                        >
                           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer group">
                     <div className="relative flex items-center">
                        <input 
                           type="checkbox" 
                           checked={rememberMe}
                           onChange={(e) => setRememberMe(e.target.checked)}
                           className="peer sr-only" 
                        />
                        <div className="w-5 h-5 bg-surface-raised border-2 border-border-subtle rounded-md peer-checked:bg-brand peer-checked:border-brand transition-all shadow-sm" />
                        <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white scale-0 peer-checked:scale-100 transition-transform" size={12} strokeWidth={4} />
                     </div>
                     <span className="text-xs font-bold text-text-muted group-hover:text-text-primary transition-colors uppercase tracking-widest">Persistence on this device</span>
                  </label>
               </div>

               {error && (
                 <motion.p 
                   initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                   className="text-xs font-bold text-rose-500 uppercase tracking-widest text-center py-2 bg-rose-500/5 rounded-lg border border-rose-500/10 shadow-sm"
                 >
                   {error}
                 </motion.p>
               )}

               <button 
                  disabled={isLoading}
                  type="submit"
                  className="w-full bg-text-primary hover:opacity-90 text-surface-base py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-2xl group relative overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
               >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                     {isLoading ? "Authenticating Gateway..." : "Authorize Personnel"}
                     {!isLoading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                  {isLoading && (
                    <motion.div 
                      initial={{ left: "-100%" }}
                      animate={{ left: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-0 bg-brand/10"
                    />
                  )}
               </button>
            </form>

            <div className="mt-12 p-6 bg-surface-panel/50 border border-dashed border-border-subtle rounded-2xl shadow-sm">
               <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 text-center">Demo Credentials</p>
               <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="flex gap-2 items-center">
                     <span className="text-[9px] text-text-muted font-bold uppercase">ID:</span>
                     <code className="text-xs text-brand font-bold bg-brand/5 px-2 py-0.5 rounded border border-brand/10 shadow-sm">admin@medifast.com</code>
                  </div>
                  <div className="flex gap-2 items-center">
                     <span className="text-[9px] text-text-muted font-bold uppercase">KEY:</span>
                     <code className="text-xs text-brand font-bold bg-brand/5 px-2 py-0.5 rounded border border-brand/10 shadow-sm">medifast2026</code>
                  </div>
               </div>
            </div>

            <p className="mt-12 text-center text-[10px] font-bold text-text-muted uppercase tracking-widest leading-loose">
               Secure Access Protocol Required. <br/>
               Unauthorized access attempts are logged and reported.
            </p>
         </div>
      </div>
    </div>
  );
}
