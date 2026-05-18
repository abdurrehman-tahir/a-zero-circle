'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function SerumDrop({ x }: { x: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.position.y = Math.sin(clock.elapsedTime * 0.5 + x) * 0.15;
    mesh.current.rotation.y = clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={mesh} position={[x, 0, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshPhysicalMaterial color='#c6f2d2' transmission={1} roughness={0.08} thickness={1.2} transparent opacity={0.65} />
      </mesh>
    </Float>
  );
}

function SkinArc() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.12;
  });
  return (
    <mesh ref={ref} position={[0, -0.5, -0.7]}>
      <torusGeometry args={[1.5, 0.1, 12, 120, Math.PI]} />
      <meshStandardMaterial color='#8fc99f' transparent opacity={0.35} />
    </mesh>
  );
}

export default function ThreeHeroScene() {
  return (
    <div className='h-[320px] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-mint via-white to-pale md:h-[500px]' aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 48 }} dpr={[1, 1.8]}>
        <ambientLight intensity={1} />
        <directionalLight position={[4, 3, 4]} intensity={1.2} />
        <SkinArc />
        <SerumDrop x={-1.1} />
        <SerumDrop x={0} />
        <SerumDrop x={1.1} />
        <Environment preset='city' />
      </Canvas>
    </div>
  );
}
