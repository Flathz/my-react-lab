import { Canvas } from "@react-three/fiber";
import { Car } from "../models/Car";
import { OrbitControls } from "@react-three/drei";

function Three() {
  return (
    <Canvas eventPrefix="layer">
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Car position={[0, -5,-7]} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Three;
