"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Lamp() {
  const { scene } = useGLTF("/models/lamp.glb");
  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={ref} object={scene} scale={5} />;
}

useGLTF.preload("/models/lamp.glb");