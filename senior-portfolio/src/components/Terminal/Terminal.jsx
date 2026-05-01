import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'Antigravity OS v1.0.0 initialized...' },
        { type: 'system', content: 'Type "help" to see available commands.' }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'user', content: `> ${input}` }];

            switch (cmd) {
                case 'help':
                    newHistory.push({ type: 'system', content: 'Available commands: about, skills, projects, contact, clear' });
                    break;
                case 'about':
                    newHistory.push({ type: 'system', content: 'Navaneeth KV - Senior MERN Stack Engineer specialized in high-performance web systems and immersive UI.' });
                    break;
                case 'skills':
                    newHistory.push({ type: 'system', content: 'Technical Proficiency: React, Node.js, MongoDB, Express, AWS, Docker, Three.js, GSAP.' });
                    break;
                case 'projects':
                    newHistory.push({ type: 'system', content: 'Querying project database... [OpenMind AI, Serene Clinic, Mountain Resort, Premium Bakery]' });
                    break;
                case 'contact':
                    newHistory.push({ type: 'system', content: 'Establishing secure link... [navaneeth@example.com] [LinkedIn]' });
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                default:
                    newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className="terminal-window h-[400px] max-w-2xl mx-auto mt-12 animate-fadeInUp">
            <div className="terminal-header">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs ml-4">
                    <TerminalIcon size={12} />
                    <span>bash — 80x24</span>
                </div>
            </div>
            
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-2 scrollbar-hide bg-dark-surface/50">
                {history.map((line, i) => (
                    <div key={i} className={`
                        ${line.type === 'system' ? 'text-primary/80' : ''}
                        ${line.type === 'user' ? 'text-white' : ''}
                        ${line.type === 'error' ? 'text-red-400' : ''}
                    `}>
                        {line.content}
                    </div>
                ))}
                
                <div className="flex items-center gap-2 text-white">
                    <span className="text-primary font-bold">➜</span>
                    <span className="text-secondary font-bold">~</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
