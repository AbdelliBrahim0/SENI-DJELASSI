import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { METIERS, type Metier } from "@/lib/entreprise";

function Geometrie({ forme }: { forme: Metier["forme"] }) {
  switch (forme) {
    case "cube":
      return <boxGeometry args={[0.62, 0.62, 0.62]} />;
    case "cylindre":
      return <cylinderGeometry args={[0.3, 0.34, 0.62, 32]} />;
    case "tore":
      return <torusGeometry args={[0.3, 0.12, 20, 48, Math.PI * 1.4]} />;
    case "cone":
      return <coneGeometry args={[0.34, 0.66, 28]} />;
    case "plaque":
      return <boxGeometry args={[0.7, 0.5, 0.12]} />;
    case "sphere":
      return <sphereGeometry args={[0.35, 40, 40]} />;
    case "octaedre":
      return <octahedronGeometry args={[0.42, 0]} />;
    case "capsule":
      return <capsuleGeometry args={[0.13, 0.7, 8, 24]} />;
    default:
      return <cylinderGeometry args={[0.4, 0.4, 0.1, 6]} />;
  }
}

function Objet({
  metier,
  position,
  actif,
  onSurvol,
  onClic,
}: {
  metier: Metier;
  position: [number, number, number];
  actif: boolean;
  onSurvol: (id: string | null) => void;
  onClic: (id: string) => void;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.x += delta * 0.18;
    const cible = actif ? 1.5 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(cible, cible, cible), 0.12);
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.06;
  });

  const survol = (v: boolean) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onSurvol(v ? metier.id : null);
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      onPointerOver={survol(true)}
      onPointerOut={survol(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClic(metier.id);
      }}
    >
      <Geometrie forme={metier.forme} />
      <meshStandardMaterial
        color={metier.matiere.couleur}
        metalness={metier.matiere.metalness}
        roughness={metier.matiere.roughness}
        emissive={actif ? "#E8815A" : "#000000"}
        emissiveIntensity={actif ? 0.35 : 0}
      />
    </mesh>
  );
}

function Couronnes({
  rotationCible,
  survole,
  setSurvole,
  onClic,
}: {
  rotationCible: React.MutableRefObject<number>;
  survole: string | null;
  setSurvole: (id: string | null) => void;
  onClic: (id: string) => void;
}) {
  const interne = useRef<THREE.Group>(null);
  const externe = useRef<THREE.Group>(null);
  const lumiere = useRef<THREE.PointLight>(null);

  const gros = METIERS.filter((m) => m.couronne === "gros-oeuvre");
  const fin = METIERS.filter((m) => m.couronne === "finitions");

  useFrame((state, delta) => {
    if (interne.current) interne.current.rotation.y += delta * 0.16 + rotationCible.current * 0.06;
    if (externe.current) externe.current.rotation.y -= delta * 0.1 + rotationCible.current * 0.04;
    rotationCible.current *= 0.92;
    if (lumiere.current) {
      lumiere.current.position.x += (state.pointer.x * 5 - lumiere.current.position.x) * 0.08;
      lumiere.current.position.y += (state.pointer.y * 3 - lumiere.current.position.y) * 0.08;
    }
  });

  const place = (n: number, i: number, rayon: number, hauteur: number): [number, number, number] => {
    const a = (i / n) * Math.PI * 2;
    return [Math.cos(a) * rayon, hauteur, Math.sin(a) * rayon];
  };

  return (
    <>
      <ambientLight intensity={0.16} />
      <pointLight ref={lumiere} position={[2, 2, 4]} intensity={45} color="#E8815A" distance={22} decay={2} />
      <directionalLight position={[-5, 5, -3]} intensity={0.4} color="#B8A369" />
      <group ref={interne}>
        {gros.map((m, i) => (
          <Objet
            key={m.id}
            metier={m}
            position={place(gros.length, i, 1.5, -0.35)}
            actif={survole === m.id}
            onSurvol={setSurvole}
            onClic={onClic}
          />
        ))}
      </group>
      <group ref={externe}>
        {fin.map((m, i) => (
          <Objet
            key={m.id}
            metier={m}
            position={place(fin.length, i, 2.9, 0.5)}
            actif={survole === m.id}
            onSurvol={setSurvole}
            onClic={onClic}
          />
        ))}
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <ringGeometry args={[1.2, 3.4, 96]} />
        <meshBasicMaterial color="#E8815A" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default function SceneExplorateur({
  onSurvol,
  onClic,
  survole,
}: {
  onSurvol: (id: string | null) => void;
  onClic: (id: string) => void;
  survole: string | null;
}) {
  const rotation = useRef(0);
  const [drag, setDrag] = useState<number | null>(null);

  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 1.6, 7], fov: 45 }}
      gl={{ antialias: true }}
      onPointerDown={(e) => setDrag(e.clientX)}
      onPointerUp={() => setDrag(null)}
      onPointerLeave={() => setDrag(null)}
      onPointerMove={(e) => {
        if (drag === null) return;
        rotation.current += (e.clientX - drag) * 0.004;
        setDrag(e.clientX);
      }}
      style={{ cursor: drag !== null ? "grabbing" : "grab", touchAction: "pan-y" }}
    >
      <color attach="background" args={["#0B0A09"]} />
      <fog attach="fog" args={["#0B0A09", 7, 16]} />
      <Couronnes rotationCible={rotation} survole={survole} setSurvole={onSurvol} onClic={onClic} />
    </Canvas>
  );
}