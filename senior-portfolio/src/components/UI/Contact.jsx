import React from 'react';
import { Mail, Briefcase, Terminal, MessageSquare, ArrowUpRight, Send } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, value, href, colorClass }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="glass-card p-6 flex items-center justify-between group hover:border-white/20 transition-all border border-white/5"
    >
        <div className="flex items-center gap-6">
            <div className={`p-4 rounded-2xl bg-white/5 ${colorClass} group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{label}</div>
                <div className="text-xl font-bold text-white">{value}</div>
            </div>
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
    </a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col mb-16 items-center text-center">
                    <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Transmission</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic mb-8">
                        Initiate <span className="text-gradient">Contact</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl font-light text-lg">
                        Currently available for senior-level engineering opportunities and high-impact digital projects. Let's discuss your next breakthrough.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Contact Info */}
                    <div className="space-y-4">
                        <ContactLink 
                            icon={Mail} 
                            label="Direct Email" 
                            value="navaneethkv@email.com" 
                            href="mailto:navaneethkv@email.com" 
                            colorClass="text-primary"
                        />
                        <ContactLink 
                            icon={Briefcase} 
                            label="Professional Network" 
                            value="linkedin.com/in/navaneeth" 
                            href="https://linkedin.com" 
                            colorClass="text-secondary"
                        />
                        <ContactLink 
                            icon={Terminal} 
                            label="Open Source" 
                            value="github.com/Navaneeth223" 
                            href="https://github.com/Navaneeth223" 
                            colorClass="text-accent"
                        />
                        <ContactLink 
                            icon={MessageSquare} 
                            label="Instant Message" 
                            value="WhatsApp Connect" 
                            href="https://wa.me/yournumber" 
                            colorClass="text-green-500"
                        />
                    </div>

                    {/* Right: CTA Card */}
                    <div className="glass-card p-12 border-primary/20 bg-primary/[0.02] flex flex-col items-center justify-center text-center h-full border-dashed border-2">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 animate-pulse">
                            <Send className="text-primary" size={32} />
                        </div>
                        <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic">Ready to scale?</h3>
                        <p className="text-white/40 mb-10 font-light italic">
                            "The best way to predict the future is to invent it."
                        </p>
                        <a 
                            href="mailto:navaneethkv@email.com"
                            className="w-full py-5 bg-primary text-dark-bg rounded-xl font-black uppercase tracking-[0.2em] hover:bg-white transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,243,255,0.2)]"
                        >
                            Send Brief
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
