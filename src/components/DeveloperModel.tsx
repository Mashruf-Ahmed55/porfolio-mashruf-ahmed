'use client';

import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'motion/react';
import React, { Suspense, useRef } from 'react';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // floating effect
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 100, 200]}
      scale={2.5}
      position={[0, 0, 0]} // center it explicitly
    >
      <MeshDistortMaterial
        color="#3B82F6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
};

const DeveloperModel: React.FC = () => {
  return (
    <div

      className="w-full h-full flex items-center justify-center"
    >
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Optional background color */}
        {/* <color attach="background" args={['#0f172a']} /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DeveloperModel;
