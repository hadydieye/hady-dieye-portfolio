import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 600;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      [0, 1, 0.53],
      [0, 0.83, 1],
      [0.7, 0, 1],
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return { positions: pos, colors: col };
  }, []);

  const positionAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colorAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = t * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <primitive object={positionAttr} attach="attributes-position" />
        <primitive object={colorAttr} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
