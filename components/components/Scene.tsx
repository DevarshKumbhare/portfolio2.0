"use client";

import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { useProgress, Html } from "@react-three/drei";

// Loader component for showing loading progress
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

// Scene component wrapping the Canvas
export default function Scene() {
  return (
    <Canvas 
      gl={{ antialias: true }} 
      dpr={[1, 2]} // Adjusted DPR to be more typical; 2 or 3 can be overkill
      className="vh-svh"
    >
      {/* Adjust lighting as needed */}
      <directionalLight position={[-5, -5, 10]} intensity={4} />
      
      {/* Suspense for loading the 3D model */}
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
