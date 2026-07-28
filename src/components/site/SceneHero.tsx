import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function BlocDePierre({ progression }: { progression: () => number }) {
  const groupe = useRef<THREE.Group>(null);
  const lumiere = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const p = progression();
    const x = state.pointer.x;
    const y = state.pointer.y;

    if (lumiere.current) {
      lumiere.current.position.x += (x * viewport.width * 0.8 - lumiere.current.position.x) * 0.08;
      lumiere.current.position.y += (y * viewport.height * 0.8 - lumiere.current.position.y) * 0.08;
    }
    if (groupe.current) {
      groupe.current.rotation.y += delta * 0.12;
      groupe.current.rotation.x += (y * 0.25 - groupe.current.rotation.x) * 0.05;
      groupe.current.position.y = -p * 3.2;
      groupe.current.position.x = 2.6;
      const echelle = 1 + p * 0.6;
      groupe.current.scale.setScalar(echelle);
      groupe.current.children.forEach((enfant, i) => {
        const dir = enfant.userData.dir as THREE.Vector3 | undefined;
        if (dir) enfant.position.copy(dir.clone().multiplyScalar(p * (1.6 + i * 0.12)));
      });
    }
  });

  const eclats = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a), Math.sin(a) * 0.7, Math.sin(a * 1.7) * 0.6);
  });

  return (
    <>
      <ambientLight intensity={0.28} />
      <pointLight ref={lumiere} position={[2, 1, 3]} intensity={55} color="#E8815A" distance={26} decay={2} />
      <directionalLight position={[4, 5, 4]} intensity={0.85} color="#F0C9A8" />
      <directionalLight position={[-5, 2, -3]} intensity={0.45} color="#B8A369" />
      <group ref={groupe}>
        {eclats.map((dir, i) => (
          <mesh key={i} userData={{ dir }} castShadow receiveShadow>
            <dodecahedronGeometry args={[0.55 + (i % 3) * 0.18, 0]} />
          <meshStandardMaterial color="#8b8279" roughness={0.9} metalness={0.08} flatShading />
          </mesh>
        ))}
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial color="#7a7268" roughness={0.95} metalness={0.04} flatShading />
        </mesh>
      </group>
    </>
  );
}

export default function SceneHero({ progression }: { progression: () => number }) {
  return (
    <Canvas
      dpr={[1, 1.7]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 13], fov: 40 }}
    >
      <color attach="background" args={["#0A0A0A"]} />
      <fog attach="fog" args={["#0A0A0A", 14, 30]} />
      <BlocDePierre progression={progression} />
    </Canvas>
  );
}