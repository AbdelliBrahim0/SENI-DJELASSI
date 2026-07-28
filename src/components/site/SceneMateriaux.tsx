import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const FICHIERS = [
  "Cinder Block by Quaternius - lLkVKoJsKm",
  "Gardening Trowel by involuntary tsetse - 3Jrn0djxEEF",
  "Ladder by CreativeTrio - p1RR8Ls9EH",
  "Paint Bucket by Don Carson - wOomnJNisB",
  "Paint roller by Poly by Google - eeYDEQ1jJi5",
  "Shovel by Quaternius - NrMejTU6kz",
  "the wall hammer by Arnd Mnd - 42OZv60U293",
  "Wheelbarrow by Poly by Google - 6XpEkgDXwkU",
  "Paint Brush Large by reyshapes - Ha1JYRVRRX",
];

const URLS = FICHIERS.map((f) => `/3DMaterials/${f}.glb`);

const FACTEURS: Record<string, number> = {
  "Cinder Block by Quaternius - lLkVKoJsKm": 0.7,
  "Gardening Trowel by involuntary tsetse - 3Jrn0djxEEF": 0.9,
  "Ladder by CreativeTrio - p1RR8Ls9EH": 1.3,
  "Paint Bucket by Don Carson - wOomnJNisB": 0.6,
  "Paint roller by Poly by Google - eeYDEQ1jJi5": 0.9,
  "Shovel by Quaternius - NrMejTU6kz": 1.0,
  "the wall hammer by Arnd Mnd - 42OZv60U293": 0.95,
  "Wheelbarrow by Poly by Google - 6XpEkgDXwkU": 1.1,
  "Paint Brush Large by reyshapes - Ha1JYRVRRX": 0.9,
};

function Modele({ url, facteur, position, flottant, rotationInitiale, animation }: {
  url: string; facteur: number; position: [number, number, number];
  flottant?: boolean; rotationInitiale?: [number, number, number];
  animation?: "flottant" | "frapper";
}) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  const clone = useMemo(() => {
    const c = scene.clone();
    const box = new THREE.Box3().setFromObject(c);
    const taille = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(taille.x, taille.y, taille.z);
    c.scale.setScalar(1.5 / maxDim * facteur);
    c.traverse((n) => {
      if ((n as THREE.Mesh).isMesh) {
        const m = n as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });
    return c;
  }, [scene]);

  const random = useMemo(() => ({
    ry: 0.04 + Math.random() * 0.06,
    rx: 0.002 + Math.random() * 0.003,
    rz: 0.002 + Math.random() * 0.002,
  }), []);

  const tempsRef = useMemo(() => ({ temps: 0 }), []);

  const flottantParams = useMemo(() => ({
    decalage: Math.random() * Math.PI * 2,
    freqY: 0.2 + Math.random() * 0.3,
    freqZ: 0.12 + Math.random() * 0.2,
    amplY: 0.06 + Math.random() * 0.06,
    amplZ: 0.02 + Math.random() * 0.03,
  }), []);

  useFrame(() => {
    if (!ref.current) return;
    if (animation === "frapper") {
      tempsRef.temps += 0.016;
      const t = tempsRef.temps;
      ref.current.rotation.x = (rotationInitiale?.[0] ?? 0) + Math.sin(t * 0.3) * 0.6;
    } else if (flottant) {
      tempsRef.temps += 0.016;
      const t = tempsRef.temps + flottantParams.decalage;
      ref.current.position.y = position[1] + Math.sin(t * flottantParams.freqY) * flottantParams.amplY;
      ref.current.rotation.z = (rotationInitiale?.[2] ?? 0) + Math.sin(t * flottantParams.freqZ) * flottantParams.amplZ;
    } else {
      ref.current.rotation.y += 0.005 * random.ry;
      ref.current.rotation.x += 0.005 * random.rx;
      ref.current.rotation.z += 0.005 * random.rz;
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotationInitiale}>
      <primitive object={clone} />
    </group>
  );
}

function Scene({ disposition }: { disposition: "gauche" | "bas" | "brouette" }) {
  const positions = useMemo<[number, number, number][]>(() => {
    const n = FICHIERS.length;
    if (disposition === "gauche") {
      return Array.from({ length: n }, (_, i) => {
        const angle = (i / n) * Math.PI * 2;
        return [
          Math.cos(angle) * 1.4,
          Math.sin(angle) * 3.6 + 0.4,
          0,
        ] as [number, number, number];
      });
    }
    if (disposition === "brouette") {
      return Array.from({ length: n }, (_, i) =>
        i === 7 ? [0.6, 1.4, 0] as [number, number, number] : i === 5 ? [0.7, -0.1, 0] as [number, number, number] : i === 8 ? [-0.7, -1.3, 0] as [number, number, number] : i === 3 ? [0, -2.2, 0] as [number, number, number] : i === 4 ? [0.7, -1.3, 0] as [number, number, number] : i === 6 ? [-0.1, -0.6, 0] as [number, number, number] : [0, 0, 0]
      );
    }
    return [
      [-1.2,  1.8, 0], // 0: Cinder Block
      [ 1.2,  1.8, 0], // 1: Gardening Trowel
      [ 0,    0.5, 0], // 2: Ladder
      [-1.2,  0.5, 0], // 3: Paint Bucket
      [ 1.2,  0.5, 0], // 4: Paint roller
      [-1.2, -0.7, 0], // 5: Shovel
      [ 0,   -0.7, 0], // 6: Hammer
      [ 0,    2.8, 0], // 7: Wheelbarrow
      [-2.0, -0.8, 0], // 8: Paint Brush
    ];
  }, [disposition]);

  const indices = disposition === "brouette" ? [7, 5, 8, 3, 4, 6] : FICHIERS.map((_, i) => i);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 4]} intensity={30} color="#E8815A" distance={14} decay={2} />
      <directionalLight position={[-4, 2, 3]} intensity={0.6} color="#B8A369" />
      {indices.map((i) => (
        <Modele
          key={FICHIERS[i]}
          url={URLS[i]}
          facteur={FACTEURS[FICHIERS[i]] * (disposition === "brouette" ? (i === 3 ? 1.0 : i === 6 ? 0.45 : 0.55) : 1)}
          position={positions[i]}
          flottant={disposition === "brouette" || i >= 7}
          rotationInitiale={i === 7 ? [0, 1.1, 0] : i === 8 ? [0.6, 1.2, 0] : i === 4 ? [0, 0, -0.3] : [0, 0, 0]}
          animation={i === 6 ? "frapper" : undefined}
        />
      ))}
    </>
  );
}

export function SceneMateriaux({ disposition = "gauche" }: { disposition?: "gauche" | "bas" | "brouette" }) {
  const camera = disposition === "gauche"
    ? { position: [0, 0, 12], fov: 35 }
    : { position: [0, 0, 8], fov: 35 };

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={camera}
      style={{ pointerEvents: "none", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <Scene disposition={disposition} />
      </Suspense>
    </Canvas>
  );
}
