import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF(
    "/car.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.812}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0.468, 3.122]}
            rotation={[-2.834, 0, Math.PI]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["930_stickers"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.plate}
            />
          </group>
          <group position={[-1.161, 0.557, -1.209]} rotation={[0.479, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["930_rim"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["930_tire"]}
            />
          </group>
          <group
            position={[-1.017, 0.557, 1.973]}
            rotation={[0.503, -0.286, 0.154]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials["930_rim"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["930_tire"]}
            />
          </group>
          <group
            position={[0.663, 0.484, 3.11]}
            rotation={[0.165, 0.101, -0.017]}
            scale={0.906}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group position={[0.014, 1.667, 0.653]} scale={0.058}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.791, 0.486, -2.379]}
            rotation={[-1.772, -0.014, -0.46]}
            scale={6.314}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials["930_chromes"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.black}
            />
          </group>
          <group
            position={[0, 0.871, 2.917]}
            rotation={[0.464, 0, 0]}
            scale={0.031}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials["930_stickers"]}
            />
          </group>
          <group
            position={[-0.253, 1.326, 1.325]}
            rotation={[0.581, 0.323, -0.008]}
            scale={0.014}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials["930_plastics"]}
              position={[37.469, -1.968, 0.92]}
              rotation={[-2.945, -1.38, -2.99]}
              scale={[14.486, 9.233, 13.309]}
            />
          </group>
          <group position={[0, 0.683, -2.621]} scale={[1, 0.96, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials["930_stickers"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.plate}
            />
          </group>
          <group
            position={[1.017, 0.557, 1.973]}
            rotation={[0.521, -0.283, 0.159]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials["930_rim"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials["930_tire"]}
            />
          </group>
          <group
            position={[1.161, 0.557, -1.209]}
            rotation={[0.481, 0, 0]}
            scale={[0.885, 0.936, 0.936]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_117.geometry}
              material={materials["930_rim"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={materials["930_tire"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials["930_lights"]}
            position={[0.702, 0.515, -2.532]}
            rotation={[0.044, -0.215, 0.01]}
            scale={0.243}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials["930_lights"]}
            position={[0, 0.689, -2.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials["930_lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.coat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials["930_plastics"]}
            position={[0.251, 1.327, 1.325]}
            rotation={[0.615, 0.436, -0.099]}
            scale={0.014}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials["930_chromes"]}
            position={[0.702, 0.515, -2.532]}
            rotation={[0.044, -0.215, 0.01]}
            scale={0.243}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials["930_plastics"]}
            position={[0.702, 0.515, -2.532]}
            rotation={[0.044, -0.215, 0.01]}
            scale={0.243}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials["930_chromes"]}
            position={[-1.014, 1.262, 1.5]}
            rotation={[0.05, 0.001, 0.046]}
            scale={0.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials["930_plastics"]}
            position={[-0.005, 0.981, -2.489]}
            rotation={[2.323, 0, -Math.PI]}
            scale={0.022}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials["930_chromes"]}
            position={[0.014, 1.667, 0.653]}
            scale={0.058}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials["930_plastics"]}
            position={[0.63, 1.548, -1.292]}
            rotation={[-0.355, 0.041, -0.1]}
            scale={[0.201, 0.128, 0.188]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials["930_plastics"]}
            position={[0.673, 1.359, 1.109]}
            rotation={[0.068, -1.094, -0.482]}
            scale={[0.201, 0.128, 0.182]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials["930_plastics"]}
            position={[0.319, 1.391, -1.83]}
            rotation={[-0.514, -0.831, -0.188]}
            scale={0.013}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials["930_plastics"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials["930_lights"]}
            rotation={[0.002, -0.048, 0.154]}
            scale={[0.718, 0.818, 0.818]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_86.geometry}
            material={materials["930_chromes"]}
            position={[0, 1.049, 1.382]}
            rotation={[0.002, -0.048, 0.154]}
            scale={[0.718, 0.818, 0.818]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials["930_lights_refraction"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials["930_lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials["930_plastics"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials["930_plastics"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_115.geometry}
            material={materials["930_chromes"]}
            position={[1.082, 1.215, 0.935]}
            rotation={[0, 0, -0.061]}
            scale={0.933}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_120.geometry}
            material={materials["930_rim"]}
            position={[1.017, 0.557, 1.973]}
            rotation={[0.521, -0.283, 0.159]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_122.geometry}
            material={materials["930_wunderbaum"]}
            position={[-0.002, 1.581, 0.667]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_124.geometry}
            material={materials["930_lights"]}
            position={[0, 0.689, -2.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_126.geometry}
            material={materials["930_lights"]}
            position={[-1.799, 0.145, 3.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_130.geometry}
            material={materials["930_lights"]}
            position={[0, 0.892, 4.007]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_132.geometry}
            material={materials["930_lights"]}
            position={[0, 0.897, -3.498]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_134.geometry}
            material={materials["930_lights"]}
            position={[1.799, 0.145, 3.197]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_138.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_140.geometry}
            material={materials.material_0}
            position={[0, 0.145, 0.276]}
            scale={[1.918, 1.918, 3.836]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/car.gltf");
