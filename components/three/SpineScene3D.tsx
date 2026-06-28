"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vertebra } from "./Vertebra";
import { SPINE_SEGMENTS } from "@/lib/spine-data";

// 3D layout: an S-curve running along Y (up/down), with X offset creating
// the cervical/thoracic/lumbar curvature, mirroring the original 2D LAYOUT
// but in world units centered around the origin.
const LAYOUT_3D: Record<string, { x: number; y: number }> = {
  C1: { x: 0, y: 9.4 },
  C2: { x: 0.08, y: 8.9 },
  C3: { x: 0.16, y: 8.4 },
  C4: { x: 0.22, y: 7.9 },
  C5: { x: 0.22, y: 7.4 },
  C6: { x: 0.16, y: 6.9 },
  C7: { x: 0.08, y: 6.4 },
  T1: { x: 0, y: 5.9 },
  T2: { x: -0.08, y: 5.4 },
  T3: { x: -0.16, y: 4.9 },
  T4: { x: -0.24, y: 4.4 },
  T5: { x: -0.32, y: 3.9 },
  T6: { x: -0.32, y: 3.4 },
  T7: { x: -0.32, y: 2.9 },
  T8: { x: -0.24, y: 2.4 },
  T9: { x: -0.16, y: 1.9 },
  T10: { x: -0.08, y: 1.4 },
  T11: { x: 0, y: 0.9 },
  T12: { x: 0.08, y: 0.4 },
  L1: { x: 0.16, y: -0.2 },
  L2: { x: 0.24, y: -0.8 },
  L3: { x: 0.24, y: -1.4 },
  L4: { x: 0.16, y: -2.0 },
  L5: { x: 0.08, y: -2.6 },
  SACRUM: { x: -0.08, y: -3.4 },
  COCCYX: { x: -0.16, y: -4.2 },
};

const SEGMENT_SCALE: Record<string, number> = {
  SACRUM: 1.6,
  COCCYX: 0.6,
};

type SceneProps = {
  activeId: string;
  onSelect: (id: string) => void;
  scrollProgress: { current: number };
};

function SpineGroup({ activeId, onSelect, scrollProgress }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const total = SPINE_SEGMENTS.length;

  useFrame(() => {
    if (!groupRef.current) return;
    const p = scrollProgress.current;
    // Gentle continuous rotation tied to scroll position — the spine slowly
    // turns as the user scrolls through the section.
    groupRef.current.rotation.y = p * Math.PI * 0.6 - 0.3;
    groupRef.current.position.y = -p * 1.5 + 0.75;
  });

  return (
    <group ref={groupRef}>
      {SPINE_SEGMENTS.map((seg, index) => {
        const pos = LAYOUT_3D[seg.id];
        const revealThreshold = (index / total) * 0.65;
        const isRevealed = scrollProgress.current >= revealThreshold - 0.65;
        return (
          <Vertebra
            key={seg.id}
            seg={seg}
            position={[pos.x, pos.y, 0]}
            scale={SEGMENT_SCALE[seg.id] ?? 1}
            isActive={seg.id === activeId}
            isRevealed={isRevealed}
            onSelect={onSelect}
          />
        );
      })}
    </group>
  );
}

function CameraRig({ scrollProgress }: { scrollProgress: { current: number } }) {
  const { camera } = useThree();

  useFrame(() => {
    const p = scrollProgress.current;
    // Camera drifts inward and slightly down as the user scrolls,
    // creating the sense of moving through/around the spine.
    camera.position.x = Math.sin(p * Math.PI * 0.4) * 1.2;
    camera.position.z = 9 - p * 2.5;
    camera.position.y = 1 - p * 0.6;
    camera.lookAt(0, 0.5, 0);
  });

  return null;
}

export function SpineScene3D({ activeId, onSelect, scrollProgress }: SceneProps) {
  const dpr = useMemo<[number, number]>(() => [1, 1.5], []);

  return (
    <Canvas
      shadows
      dpr={dpr}
      camera={{ position: [0, 1, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, -2, -4]} intensity={0.3} color="#9d8753" />
      <CameraRig scrollProgress={scrollProgress} />
      <SpineGroup activeId={activeId} onSelect={onSelect} scrollProgress={scrollProgress} />
    </Canvas>
  );
}
