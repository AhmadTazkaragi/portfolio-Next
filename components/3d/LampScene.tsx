"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Center,
} from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Lamp from "./Lamp";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";


// 💡 Flickering light
function FlickerLight() {
  const light = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (light.current) {
      light.current.intensity = 1.3 + Math.sin(t * 3) * 0.5;
    }
  });

  return (
    <pointLight
      ref={light}
      position={[0, 1.5, 1]}
      intensity={2}
      color="#ffffff"
      distance={10}
    />
  );
}


// 🎥 Camera animation (GSAP)
function CameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 0.3,
      y: 0.2,
      z: 4.5,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => camera.lookAt(0, 0, 0),
    });
  }, [camera]);

  return null;
}


// MAIN SCENE
export default function LampScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}
      dpr={[1, 2]}
      shadows
    >

      <CameraAnimation />

      {/* 🌍 HDRI environment */}
      <Environment preset="studio" />

      {/* 🌫 base light */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 3, 2]} intensity={1} castShadow />

      {/* 💡 flicker light */}
      <FlickerLight />

      {/* 💡 MODEL (FIXED CENTER ISSUE) */}
      <Center>
        <Lamp />
      </Center>

  

      {/* 🎥 controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

    </Canvas>
  );
}