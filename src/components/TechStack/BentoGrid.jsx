import { useEffect, useRef } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';
import SkillCard from './SkillCard';

const BentoGrid = () => {
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            animateFadeIn(titleRef.current, { y: 30 });
        }
        if (gridRef.current) {
            animateFadeIn(gridRef.current, { y: 40, delay: 0.2 });
        }
    }, []);

    return (
        <section id="tech-stack" className="min-h-screen py-20 px-4 md:px-8 bg-dark-surface">
            <div className="max-w-7xl mx-auto">
                <h2
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-display font-bold mb-12 text-gradient"
                >
                    Tech Stack
                </h2>

                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,_auto)]"
                >
                    {/* Front-End - Large card */}
                    <SkillCard
                        title="Front-End"
                        skills={['HTML5', 'CSS3', 'JavaScript', 'React.js', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Three.js']}
                        size="large"
                        color="primary"
                    />

                    {/* Back-End */}
                    <SkillCard
                        title="Back-End"
                        skills={['Node.js', 'Express.js', 'Django']}
                        size="normal"
                        color="secondary"
                    />

                    {/* Databases */}
                    <SkillCard
                        title="Databases"
                        skills={['MongoDB', 'SQL', 'PostgreSQL', 'Firebase']}
                        size="normal"
                        color="accent"
                    />

                    {/* Mobile Development */}
                    <SkillCard
                        title="Mobile"
                        skills={['Flutter', 'Dart']}
                        size="normal"
                        color="primary"
                    />

                    {/* Tools & DevOps */}
                    <SkillCard
                        title="Tools & DevOps"
                        skills={['Git', 'GitHub', 'VS Code', 'Android Studio']}
                        size="normal"
                        color="secondary"
                    />

                    {/* Additional Skills - Large card */}
                    <SkillCard
                        title="Specializations"
                        skills={['REST APIs', 'CRUD Operations', 'Authentication', 'Responsive Design', 'Performance Optimization', 'Animation (GSAP)', '3D Graphics (Three.js)']}
                        size="large"
                        color="accent"
                    />
                </div>

                {/* Additional highlights */}
                <div className="mt-12 glass-card p-8 bg-gradient-to-r from-primary/10 to-transparent">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                        Core Competencies
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-4xl mb-2">🚀</div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Full Stack Development</h4>
                            <p className="text-white/60">End-to-end application development with MERN stack</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">🎨</div>
                            <h4 className="text-lg font-semibold text-primary mb-2">UI/UX Focus</h4>
                            <p className="text-white/60">Creating beautiful, responsive, and accessible interfaces</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">⚡</div>
                            <h4 className="text-lg font-semibold text-primary mb-2">Performance</h4>
                            <p className="text-white/60">Optimized code and fast-loading applications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
