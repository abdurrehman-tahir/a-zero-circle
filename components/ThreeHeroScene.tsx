'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function SerumCapsule() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.25;
    ref.current.rotation.y += 0.005;
  });
  return (
    <Float speed={0.8} floatIntensity={0.6} rotationIntensity={0.2}>
      <mesh ref={ref} position={[0, 0.1, 0]}>
        <capsuleGeometry args={[0.45, 1.4, 6, 18]} />
        <meshPhysicalMaterial color='#c9b7eb' transmission={1} transparent opacity={0.72} roughness={0.09} thickness={1.2} />
      </mesh>
    </Float>
  );
}

function Particles() {
  return (
    <group>
      {[-1.5, -0.8, 0.8, 1.4].map((x, i) => (
        <Float key={x} speed={0.4 + i * 0.1} floatIntensity={0.5}>
          <mesh position={[x, i % 2 ? 0.7 : -0.4, -0.5]}>
            <sphereGeometry args={[0.11 + i * 0.03, 20, 20]} />
            <meshStandardMaterial color='#e8dcfb' transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeHeroScene() {
  return (
    <div className='h-[340px] w-full overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#f6f1ff] via-[#ebddfb] to-[#d2c0f3] shadow-soft md:h-[520px]' aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.7], fov: 42 }} dpr={[1, 1.8]}>
        <ambientLight intensity={1.1} />
        <directionalLight intensity={1.2} position={[3, 4, 4]} />
        <SerumCapsule />
        <Particles />
        <Environment preset='sunset' />
      </Canvas>
    </div>
  );
}
