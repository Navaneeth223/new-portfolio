import React from 'react';
import { Server, Database, ShieldCheck, Zap, CheckCircle, Globe } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, status, colorClass }) => (
    <div className="glass-card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all border border-white/5 hover:border-white/20">
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-xl bg-white/5 ${colorClass}`}>
                <Icon size={24} />
            </div>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500'} animate-pulse`} />
                <span className="text-[10px] uppercase tracking-widest text-white/40">{status}</span>
            </div>
        </div>
        <div>
            <div className="text-white/40 text-xs uppercase tracking-tighter mb-1">{title}</div>
            <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{value}</div>
        </div>
    </div>
);

const ArchitectureGrid = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col mb-16 items-center text-center">
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Engineering Health</span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-gradient uppercase italic">
                    Production Systems
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard 
                    icon={Server} 
                    title="API Infrastructure" 
                    value="99.9% Uptime" 
                    status="active" 
                    colorClass="text-primary" 
                />
                <StatCard 
                    icon={Database} 
                    title="Data Reliability" 
                    value="NoSQL/SQL Sync" 
                    status="active" 
                    colorClass="text-secondary" 
                />
                <StatCard 
                    icon={ShieldCheck} 
                    title="Security Layer" 
                    value="AES-256 Auth" 
                    status="active" 
                    colorClass="text-accent" 
                />
                <StatCard 
                    icon={Zap} 
                    title="Performance" 
                    value="<100ms Latency" 
                    status="active" 
                    colorClass="text-primary" 
                />
                <StatCard 
                    icon={CheckCircle} 
                    title="CI/CD Status" 
                    value="Build: Passing" 
                    status="active" 
                    colorClass="text-secondary" 
                />
                <StatCard 
                    icon={Globe} 
                    title="Global Traffic" 
                    value="CDN Optimized" 
                    status="active" 
                    colorClass="text-accent" 
                />
            </div>
        </section>
    );
};

export default ArchitectureGrid;
