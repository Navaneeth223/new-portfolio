import { useEffect, useRef } from 'react';
import { animateFadeIn } from '../../utils/gsapAnimations';

const About = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            animateFadeIn(titleRef.current, { y: 30 });
        }
        if (contentRef.current) {
            animateFadeIn(contentRef.current, { y: 40, delay: 0.2 });
        }
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-dark-bg"
        >
            <div className="max-w-6xl w-full">
                <h2
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-display font-bold mb-12 text-gradient"
                >
                    About Me
                </h2>

                <div ref={contentRef} className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Full Stack MERN Developer with <span className="text-primary font-semibold">5+ years</span> of hands-on experience
                            building scalable web applications using <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span>.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Strong in designing <span className="font-semibold">REST APIs</span>, responsive user interfaces,
                            and complex database schemas. Experienced with <span className="font-semibold">Firebase integration</span>,
                            freelancing, and delivering production-ready solutions.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Graduated with a <span className="font-semibold">BSc in Computer Science</span> (2019-2022) from
                            College of Applied Science, Neruvambram. Transitioned from academic foundation to specialized
                            <span className="text-primary font-semibold"> Freelance Full Stack Developer</span>,
                            emphasizing rapid learning and delivering high-quality solutions.
                        </p>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            Beyond traditional MERN stack, I specialize in creating <span className="font-semibold">high-performance front-ends</span>
                            with technologies like <span className="text-primary">Three.js, GSAP, and modern animation libraries</span>
                            to build immersive digital experiences.
                        </p>
                    </div>

                    <div className="glass-card p-8 space-y-8">
                        <div>
                            <h3 className="text-2xl font-display font-bold text-primary mb-4">Education</h3>
                            <div className="space-y-2">
                                <p className="text-lg font-semibold text-white">BSc Computer Science</p>
                                <p className="text-white/60">College of Applied Science, Neruvambram</p>
                                <p className="text-white/40">2019 - 2022</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-display font-bold text-primary mb-4">Experience</h3>
                            <div className="space-y-2">
                                <p className="text-lg font-semibold text-white">Freelance Full Stack Developer</p>
                                <p className="text-white/60">2021 - Present</p>
                                <ul className="list-disc list-inside text-white/60 space-y-2 mt-3">
                                    <li>Developed responsive MERN stack web applications</li>
                                    <li>Built RESTful APIs with Node.js and Express.js</li>
                                    <li>Designed MongoDB schemas and optimized queries</li>
                                    <li>Delivered complete solutions independently to deployment</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-display font-bold text-primary mb-4">Location</h3>
                            <p className="text-white/80">📍 Taliprambu, Kannur, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
