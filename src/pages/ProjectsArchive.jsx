import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectModal from '../components/Projects/ProjectModal';
import PageTransition from '../components/PageTransition';
import gsap from 'gsap';

const ProjectsArchive = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedProject, setSelectedProject] = useState(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const filtered = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredProjects(filtered);
    }, [searchTerm, selectedCategory]);

    useEffect(() => {
        gsap.fromTo(headerRef.current, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
        );
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="min-h-screen bg-dark-bg pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div ref={headerRef} className="mb-16">
                        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-8 group">
                            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                            <span className="font-medium uppercase tracking-widest text-xs">Back to Home</span>
                        </Link>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6">
                            Project <br />Archive
                        </h1>
                        <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
                            A comprehensive collection of my digital explorations, open-source contributions, 
                            and professional developments across various technology stacks.
                        </p>
                    </div>

                    {/* Search & Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                            <input 
                                type="text"
                                placeholder="Search by title or tech..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary/50 transition-all focus:bg-white/10"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                        selectedCategory === cat 
                                        ? 'bg-primary text-dark-bg' 
                                        : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <ProjectCard 
                                        {...project} 
                                        onClick={() => setSelectedProject(project)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24 glass-card-premium border-dashed">
                            <Search className="mx-auto text-white/20 mb-4" size={48} />
                            <h3 className="text-2xl font-display font-bold text-white mb-2">No projects found</h3>
                            <p className="text-white/40">Try adjusting your search or category filters</p>
                            <button 
                                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                                className="mt-6 text-primary hover:underline underline-offset-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Footer CTA */}
                    <div className="mt-32 text-center">
                        <div className="inline-flex items-center gap-8 glass px-12 py-6 rounded-3xl border border-white/10">
                            <span className="text-white/50 font-light">See something interesting?</span>
                            <a 
                                href="https://github.com/Navaneeth223" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Details Modal */}
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            </div>
        </PageTransition>
    );
};

export default ProjectsArchive;
