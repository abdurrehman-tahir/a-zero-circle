'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb(){ const ref = useRef<THREE.Mesh>(null); useFrame(({clock})=>{ if(ref.current){ref.current.rotation.y = clock.elapsedTime*0.15;}}); return <Float speed={0.8} rotationIntensity={0.3}><mesh ref={ref}><icosahedronGeometry args={[1.2,1]} /><meshPhysicalMaterial transmission={0.9} roughness={0.15} color='#b8e6c4' transparent opacity={0.7} /></mesh></Float>; }
export default function ThreeHeroScene(){
  return <div className='h-[340px] md:h-[460px] w-full rounded-3xl bg-gradient-to-br from-mint to-pale'><Canvas camera={{position:[0,0,4]}}><ambientLight intensity={1.3}/><directionalLight position={[2,2,2]} intensity={1.2}/><Orb/><OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.35}/></Canvas></div>;
}
