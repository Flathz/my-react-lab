import { Canvas } from "@react-three/fiber";
import { Car } from "../models/Car";

function Three() {

  return (

    <Canvas camera={{ near: 0.1, far: 1000, position: [-20, 4, -10]} }>
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Car position={[0, -5, -7]} />
    </Canvas>
  );
}

export default Three;
