"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls, FlyControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[2, 3]} className="vh-svh">
      <directionalLight position={[-5, -5, 10]} intensity={4} />
      <Suspense fallback={<Loader />}>
          <Model />
      </Suspense>
    </Canvas>
  )
}
