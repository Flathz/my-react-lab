import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function Three() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Environment preset="city" background />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default Three;
