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
    // turns as the camera pans down it. Vertical movement is handled by the
    // camera rig, not the group, so the two don't fight each other.
    groupRef.current.rotation.y = p * Math.PI * 0.5 - 0.2;
  });

  return (
    <group ref={groupRef}>
      {SPINE_SEGMENTS.map((seg, index) => {
        const pos = LAYOUT_3D[seg.id];
        // Reveal each vertebra slightly before the camera reaches it,
        // top to bottom, across the full scroll range.
        const revealThreshold = (index / total) * 0.9;
        const isRevealed = scrollProgress.current >= revealThreshold;
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

// Spine spans roughly y = 9.4 (C1) down to y = -4.2 (Coccyx).
const SPINE_TOP_Y = 9.4;
const SPINE_BOTTOM_Y = -4.2;

function CameraRig({ scrollProgress }: { scrollProgress: { current: number } }) {
  const { camera } = useThree();

  useFrame(() => {
    const p = scrollProgress.current;
    // The camera pans from the top of the spine to the bottom as the user
    // scrolls, so every vertebra — not just the middle third — comes into
    // view and stays clickable. A small horizontal drift and slow orbit
    // give the sense of moving around the model rather than just sliding.
    const focusY = SPINE_TOP_Y + (SPINE_BOTTOM_Y - SPINE_TOP_Y) * p;
    camera.position.x = Math.sin(p * Math.PI * 0.5) * 1.6;
    camera.position.z = 6.5;
    camera.position.y = focusY;
    camera.lookAt(0, focusY, 0);
  });

  return null;
}

export function SpineScene3D({ activeId, onSelect, scrollProgress }: SceneProps) {
  const dpr = useMemo<[number, number]>(() => [1, 1.5], []);

  return (
    <Canvas
      shadows
      dpr={dpr}
      camera={{ position: [0, SPINE_TOP_Y, 6.5], fov: 42 }}
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
