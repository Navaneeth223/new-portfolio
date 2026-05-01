import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MERNNode = ({ position, color, label, speed = 1 }) => {
    const meshRef = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        meshRef.current.position.y = position[1] + Math.sin(t) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial 
                    color={color} 
                    emissive={color} 
                    emissiveIntensity={0.5}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
};

const Connection = ({ start, end, color }) => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial color={color} transparent opacity={0.2} />
        </line>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
            <MERNNode position={[-2, 0, 0]} color="#00f3ff" label="MongoDB" speed={1.2} />
            <MERNNode position={[0, 1.5, 0]} color="#ff00d4" label="Express" speed={1} />
            <MERNNode position={[2, 0, 0]} color="#7d00ff" label="React" speed={1.5} />
            <MERNNode position={[0, -1.5, 0]} color="#00f3ff" label="Node" speed={0.8} />
            
            <Connection start={[-2, 0, 0]} end={[0, 1.5, 0]} color="#00f3ff" />
            <Connection start={[0, 1.5, 0]} end={[2, 0, 0]} color="#ff00d4" />
            <Connection start={[2, 0, 0]} end={[0, -1.5, 0]} color="#7d00ff" />
            <Connection start={[0, -1.5, 0]} end={[-2, 0, 0]} color="#00f3ff" />
            
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
};

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>
            
            <div className="relative z-10 text-center space-y-8 px-6">
                <div className="space-y-2 animate-fadeInUp">
                    <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase">Architecture first</span>
                    <h1 className="text-6xl md:text-9xl font-display font-black uppercase italic leading-none tracking-tighter">
                        Senior <br /> 
                        <span className="text-gradient">Engineer</span>
                    </h1>
                </div>
                
                <p className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed animate-fadeInUp" style={{animationDelay: '200ms'}}>
                    Specializing in high-performance MERN systems, 3D interactive experiences, 
                    and scalable digital infrastructure.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp" style={{animationDelay: '400ms'}}>
                    <a href="#systems" className="btn-primary inline-flex items-center justify-center">View Systems</a>
                    <a href="#contact" className="px-8 py-3 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center">
                        Initiate Contact
                    </a>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
                <span className="text-[10px] uppercase tracking-widest">Scroll to Initiate</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
        </div>
    );
};

export default Hero;
