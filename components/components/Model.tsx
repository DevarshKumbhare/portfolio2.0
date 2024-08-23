import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("./robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("./robot_playground.glb");
  const { actions } = useAnimations(animations, scene);
  const [playTime, setPlayTime] = useState(0);

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = true;
    }
  }, [actions]);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const updatePlayTime = (time: number) => {
      const elapsedTime = (time - startTime) / 1000; // Convert to seconds
      startTime = time;
      setPlayTime((prev) => {
        const newTime = prev + elapsedTime;
        const duration = actions["Experiment"].getClip().duration;
        return newTime % duration; // Loop the animation time
      });
      animationFrameId = requestAnimationFrame(updatePlayTime);
    };

    startTime = performance.now();
    animationFrameId = requestAnimationFrame(updatePlayTime);

    return () => cancelAnimationFrame(animationFrameId);
  }, [actions]);

  useFrame(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].time = playTime;
    }
  });

  return (
    <group scale={[1.5, 1.5, 1.5]} ref={group}>
      <primitive object={scene} />
    </group>
  );
}
