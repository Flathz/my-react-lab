import { Canvas } from "@react-three/fiber";

function Three() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <mesh>
          <boxGeometry args={[3,4,4]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Three;
