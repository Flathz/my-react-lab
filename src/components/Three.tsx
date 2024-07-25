import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Car } from "../models/Car";

function Three() {
  return (
    <Canvas eventPrefix="layer">
      <Suspense fallback={null}>
        <Environment  preset="city" background />
        <Car/>
        <OrbitControls attach={'Car'}/>
      </Suspense>
    </Canvas>
  );
}

export default Three;
