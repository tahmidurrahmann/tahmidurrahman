"use client";

import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";

const imageUrls = [
  "/react.png",
  "/nextjs.png",
  "/node.png",
  "/express.png",
  "/mongo.png",
  "/postgresql.png",
  "/typescript.png",
  "/JavaScript.png",
];

const sphereConfigs = [...Array(imageUrls.length * 2)].map(() => ({
  scale: [0.75, 1, 0.85, 1, 1][Math.floor(Math.random() * 5)],
  materialIndex: Math.floor(Math.random() * imageUrls.length),
}));

// Module-level lazy singletons — zero React state, zero effects
let sharedGeometry: THREE.SphereGeometry | null = null;
let sharedMaterials: THREE.MeshPhysicalMaterial[] | null = null;

function getGeometry(): THREE.SphereGeometry {
  if (!sharedGeometry) {
    sharedGeometry = new THREE.SphereGeometry(1, 32, 32);
  }
  return sharedGeometry;
}

function getMaterials(): THREE.MeshPhysicalMaterial[] {
  if (!sharedMaterials) {
    const loader = new THREE.TextureLoader();
    sharedMaterials = imageUrls.map((url) => {
      const tex = loader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshPhysicalMaterial({
        map: tex,
        emissive: "#ffffff",
        emissiveMap: tex,
        emissiveIntensity: 0.2,
        roughness: 0.5,
        metalness: 0.1,
        clearcoat: 0.3,
        clearcoatRoughness: 0.2,
      });
    });
  }
  return sharedMaterials;
}

// ---------------------------------------------------------------------------

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  materialIndex: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
};

function Sphere({
  vec = new THREE.Vector3(),
  scale,
  materialIndex,
  r = THREE.MathUtils.randFloatSpread,
}: SphereProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const api = useRef<any>(null);
  const geo = getGeometry();
  const mats = getMaterials();

  useFrame((_state, delta) => {
    if (!api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-50 * delta * scale);
    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={geo}
        material={mats[materialIndex]}
      />
    </RigidBody>
  );
}

// ---------------------------------------------------------------------------

function Pointer({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useFrame(({ pointer, viewport }) => {
    if (!ref.current) return;
    ref.current.setNextKinematicTranslation(
      vec.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0,
      ),
    );
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[3]} />
    </RigidBody>
  );
}

// ---------------------------------------------------------------------------

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={2} />
      <directionalLight position={[0, -15, 0]} intensity={0.5} color="white" />

      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {sphereConfigs.map((cfg, i) => (
          <Sphere key={i} scale={cfg.scale} materialIndex={cfg.materialIndex} />
        ))}
      </Physics>

      <Environment preset="city" environmentIntensity={0.6} />

      <EffectComposer enableNormalPass={false}>
        <N8AO color="#0f002c" aoRadius={2} intensity={1} />
      </EffectComposer>
    </>
  );
}

// ---------------------------------------------------------------------------

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        background: "#0d0d0d",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: "10%",
          width: "100%",
          textAlign: "center",
          color: "#ffffff",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          pointerEvents: "none",
          zIndex: 10,
          margin: 0,
        }}
      >
        MY TECHSTACK
      </h2>

      <Canvas
        shadows
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        gl={{ alpha: true, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 100 }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
        }}
      >
        <Scene />
      </Canvas>
    </section>
  );
};

export default TechStack;
