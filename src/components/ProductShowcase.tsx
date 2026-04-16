import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function VoodakCore() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
      
      <mesh scale={0.4}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#ff4e00" emissive="#ff4e00" emissiveIntensity={2} />
      </mesh>

      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[3 + i * 0.5, 0.01, 16, 100]} />
          <meshStandardMaterial color="#ff4e00" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-32 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-1 h-1 bg-voodak-accent" />
          <span className="text-voodak-accent font-mono text-[10px] uppercase tracking-[0.3em] block">
            Core Technology // Obsidian_Engine
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter mb-8">
          The Obsidian <br /> Neural Engine.
        </h2>
        <p className="text-lg text-white/40 font-sans leading-relaxed max-w-lg mb-10">
          Our proprietary neural-engine that powers every software we build. 
          A masterpiece of computational elegance and raw power.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {[
            { label: "Processing", value: "4.2 Exaflops" },
            { label: "Latency", value: "< 0.001ms" },
            { label: "Security", value: "Quantum-Locked" },
            { label: "Efficiency", value: "99.99%" }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-voodak-paper hover:bg-white/[0.02] transition-colors">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-black uppercase tracking-tighter text-voodak-accent">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[600px] order-1 lg:order-2 relative group border border-white/5 bg-white/[0.01]">
        <div className="absolute top-4 left-4 font-mono text-[8px] opacity-20">
          [RENDER_MODE: REALTIME]<br />
          [ENGINE: VOODAK_V3]
        </div>
        <div className="absolute inset-0 bg-voodak-accent/5 blur-[150px] rounded-full group-hover:bg-voodak-accent/10 transition-colors duration-1000" />
        <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <VoodakCore />
            </Float>
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">
          Interact with the Core
        </div>
      </div>
    </section>
  );
}
