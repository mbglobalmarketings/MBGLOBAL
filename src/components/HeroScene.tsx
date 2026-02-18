import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const WireframeGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12;
      wireRef.current.rotation.x = Math.sin(t * 0.08) * 0.2;
    }
  });

  const wireGeo = useMemo(() => new THREE.IcosahedronGeometry(2, 3), []);

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        <mesh ref={meshRef} geometry={wireGeo}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.2}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#6d28d9"
            transmission={0.95}
            roughness={0.1}
          />
        </mesh>
        <lineSegments ref={wireRef}>
          <edgesGeometry args={[wireGeo]} />
          <lineBasicMaterial color="#a78bfa" transparent opacity={0.25} />
        </lineSegments>
      </group>
    </Float>
  );
};

const OrbitingSphere = ({ radius, speed, offset, color, size = 0.12 }: { radius: number; speed: number; offset: number; color: string; size?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius * 0.6;
      ref.current.position.y = Math.sin(t * 1.5) * radius * 0.4;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} toneMapped={false} />
    </mesh>
  );
};

const DataStreams = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 350;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const purple = new THREE.Color("#7c3aed");
    const gold = new THREE.Color("#e9b308");
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.3 ? purple : gold;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-4, -2, 4]} intensity={0.8} color="#e9b308" />
      <spotLight position={[0, 10, 5]} angle={0.25} penumbra={1} intensity={1} color="#a78bfa" castShadow />
      <WireframeGlobe />
      <OrbitingSphere radius={3} speed={0.5} offset={0} color="#e9b308" size={0.15} />
      <OrbitingSphere radius={3.2} speed={0.35} offset={Math.PI * 0.7} color="#7c3aed" size={0.1} />
      <OrbitingSphere radius={2.8} speed={0.65} offset={Math.PI * 1.4} color="#a78bfa" size={0.08} />
      <OrbitingSphere radius={3.5} speed={0.25} offset={Math.PI * 0.3} color="#e9b308" size={0.06} />
      <DataStreams />
      <Environment preset="night" />
    </Canvas>
  </div>
);

export default HeroScene;
