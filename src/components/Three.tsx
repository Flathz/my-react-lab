import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Car } from "../models/Car";

function Three() {
  return (
    <Canvas eventPrefix="layer">
      <Suspense fallback={null}>
        <mesh>
          <meshStandardMaterial />
          <ambientLight/>
          <directionalLight position={[0, 3, 4]} />
          <Car />
          <OrbitControls />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

export default Three;
