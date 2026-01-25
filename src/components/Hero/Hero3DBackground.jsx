import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Shape
const AnimatedShape = () => {
    const meshRef = useRef();
    const particlesRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate the main shape
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }

        // Animate particles
        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.05;
        }
    });

    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    return (
        <group>
            {/* Main floating geometric shape */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere ref={meshRef} args={[1.5, 100, 100]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#00d9ff"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#00d9ff"
                        emissiveIntensity={0.5}
                    />
                </Sphere>
            </Float>

            {/* Particle cloud */}
            <points ref={particlesRef} geometry={particlesGeometry}>
                <pointsMaterial
                    size={0.015}
                    color="#00d9ff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>

            {/* Additional floating rings */}
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <mesh position={[0, 0, -2]} rotation={[Math.PI / 4, 0, 0]}>
                    <torusGeometry args={[2, 0.05, 16, 100]} />
                    <meshStandardMaterial
                        color="#00a8cc"
                        emissive="#00a8cc"
                        emissiveIntensity={0.3}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
                <mesh position={[0, 0, -1]} rotation={[0, Math.PI / 3, 0]}>
                    <torusGeometry args={[2.5, 0.03, 16, 100]} />
                    <meshStandardMaterial
                        color="#66e5ff"
                        emissive="#66e5ff"
                        emissiveIntensity={0.2}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>
            </Float>

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
            <spotLight
                position={[0, 5, 5]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
                color="#00d9ff"
            />
        </group>
    );
};

// Mouse interaction component
const MouseInteraction = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = state.mouse.y * 0.3;
            groupRef.current.rotation.y = state.mouse.x * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            <AnimatedShape />
        </group>
    );
};

const Hero3DBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <MouseInteraction />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
};

export default Hero3DBackground;
