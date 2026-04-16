import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CyberFlower({ 
  color = "#0088cc", 
  petalCount = 6,
  speed = 1,
  offset = 0,
  radius = 5,
  ...props 
}: any) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime() * 0.2 * speed + offset;
      group.current.position.x = Math.cos(t) * radius + props.position[0];
      group.current.position.z = Math.sin(t) * radius + props.position[2];
      group.current.position.y = Math.sin(t * 2) * (radius * 0.3) + props.position[1];
      group.current.rotation.y += 0.01;
      group.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <group {...props} ref={group}>
        {/* Center */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive={color} emissiveIntensity={2} />
        </mesh>
        {/* Petals */}
        {Array.from({ length: petalCount }).map((_, i) => (
          <mesh 
            key={i} 
            rotation={[0, 0, (i / petalCount) * Math.PI * 2]} 
            position={[0, 0, 0]}
            scale={[1, 0.2, 0.1]}
          >
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial 
              color={color} 
              metalness={0.8} 
              roughness={0.2} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        ))}
        {Array.from({ length: petalCount }).map((_, i) => (
          <group key={`petal-${i}`} rotation={[0, (i / petalCount) * Math.PI * 2, 0]}>
            <mesh position={[0.4, 0, 0]} scale={[1, 0.1, 0.4]}>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

function FloatingChar({ 
  char = "@", 
  color = "#b08d4a",
  speed = 1,
  offset = 0,
  radius = 5,
  ...props 
}: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() * 0.3 * speed + offset;
      meshRef.current.position.x = Math.cos(t) * radius + props.position[0];
      meshRef.current.position.z = Math.sin(t) * radius + props.position[2];
      meshRef.current.position.y = Math.cos(t * 1.5) * (radius * 0.4) + props.position[1];
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} {...props}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 60;
      p[i * 3 + 1] = (Math.random() - 0.5) * 60;
      p[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#b08d4a" transparent opacity={0.2} />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-voodak-paper">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
        <color attach="background" args={['#0a0a0a']} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 20, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-15, -10, -10]} color="#00d2ff" intensity={1} />
        <pointLight position={[0, 10, 0]} color="#ff4e00" intensity={0.8} />
        
        {/* Industrial Nodes - Theme Colors */}
        <CyberFlower position={[-10, 5, -10]} color="#00d2ff" speed={0.8} radius={10} offset={0} />
        <CyberFlower position={[10, -5, -15]} color="#ff4e00" speed={1.2} radius={12} offset={Math.PI} />
        <CyberFlower position={[0, -10, -25]} color="#ff4e00" speed={0.5} radius={15} offset={Math.PI / 2} />
        <CyberFlower position={[-15, -5, -20]} color="#00d2ff" speed={1.5} radius={8} offset={Math.PI * 1.5} />
        <CyberFlower position={[15, 10, -30]} color="#ff4e00" speed={0.6} radius={20} offset={2} />
        
        {/* Floating Geometric Elements */}
        <FloatingChar char="{" position={[-5, -5, -5]} color="#ff4e00" speed={1} radius={6} offset={1} />
        <FloatingChar char="}" position={[5, 5, -5]} color="#ff4e00" speed={1.1} radius={7} offset={2} />
        <FloatingChar char="@" position={[-12, 10, -15]} color="#ffffff" speed={0.9} radius={14} offset={3} />
        <FloatingChar char="#" position={[12, -10, -15]} color="#ffffff" speed={1.3} radius={16} offset={4} />
        <FloatingChar char="&" position={[0, 15, -20]} color="#ff4e00" speed={0.7} radius={18} offset={5} />
        <FloatingChar char="*" position={[-18, -15, -25]} color="#ffffff" speed={1.5} radius={22} offset={6} />
        <FloatingChar char="<" position={[18, 15, -30]} color="#ff4e00" speed={0.8} radius={25} offset={7} />
        <FloatingChar char=">" position={[-20, 0, -35]} color="#ffffff" speed={1.2} radius={28} offset={8} />
        <FloatingChar char="/" position={[0, 0, -40]} color="#ff4e00" speed={0.5} radius={30} offset={9} />
        
        <Particles count={400} />
        <Environment preset="night" />
        <fog attach="fog" args={['#0a0a0a', 10, 60]} />
      </Canvas>
    </div>
  );
}
