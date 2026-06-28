"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { SpineSegment } from "@/lib/spine-data";

const REGION_COLOR: Record<string, string> = {
  cervical: "#9d8753",
  thoracic: "#173326",
  lumbar: "#9d8753",
  sacral: "#173326",
};

type VertebraProps = {
  seg: SpineSegment;
  position: [number, number, number];
  scale: number;
  isActive: boolean;
  isRevealed: boolean;
  onSelect: (id: string) => void;
};

// A single vertebra: a flattened body (the disc-like main mass) plus a
// small posterior spinous process, built from primitives rather than a
// single cylinder so the silhouette actually reads as a vertebra.
export function Vertebra({
  seg,
  position,
  scale,
  isActive,
  isRevealed,
  onSelect,
}: VertebraProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef(0);

  const color = useMemo(() => new THREE.Color(REGION_COLOR[seg.region]), [seg.region]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Reveal animation: scale + opacity driven externally via `scale` prop,
    // but we smooth the group's own scale toward target for a soft settle.
    const targetScale = isRevealed ? scale : 0.001;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 6
    );

    // Active vertebra gets a gentle pulse.
    if (isActive && bodyRef.current) {
      pulseRef.current += delta * 3;
      const pulse = 1 + Math.sin(pulseRef.current) * 0.04;
      bodyRef.current.scale.setScalar(pulse);
    } else if (bodyRef.current) {
      bodyRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 6);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Vertebral body — flattened capsule */}
      <mesh
        ref={bodyRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(seg.id);
        }}
        castShadow
        receiveShadow
      >
        <capsuleGeometry args={[0.55, 0.25, 4, 12]} />
        <meshStandardMaterial
          color={color}
          opacity={isActive ? 1 : 0.55}
          transparent
          roughness={0.45}
          metalness={0.08}
          emissive={isActive ? color : "#000000"}
          emissiveIntensity={isActive ? 0.25 : 0}
        />
      </mesh>

      {/* Posterior spinous process — small protrusion toward the back */}
      <mesh position={[0, 0, -0.55]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <coneGeometry args={[0.12, 0.4, 6]} />
        <meshStandardMaterial
          color={color}
          opacity={isActive ? 1 : 0.55}
          transparent
          roughness={0.5}
        />
      </mesh>

      {/* Transverse processes — small lateral bumps */}
      <mesh position={[0.45, 0, -0.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <coneGeometry args={[0.07, 0.22, 6]} />
        <meshStandardMaterial color={color} opacity={isActive ? 1 : 0.55} transparent roughness={0.5} />
      </mesh>
      <mesh position={[-0.45, 0, -0.1]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <coneGeometry args={[0.07, 0.22, 6]} />
        <meshStandardMaterial color={color} opacity={isActive ? 1 : 0.55} transparent roughness={0.5} />
      </mesh>
    </group>
  );
}
