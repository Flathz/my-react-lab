// @ts-nocheck
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Car(props) {
  const { nodes, materials } = useGLTF("/low_poly_small_car/scene.gltf");
  
  return (
    <group {...props} dispose={null}>
      <group position={[-1.817, 0.787, 3.104]}>
        <group
          position={[0.228, 0, 0]}
          rotation={[0, -1.57, 0]}
          scale={[1.096, 1.096, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Wheel_Tire_0.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Wheel_Rim_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Wheel_Handler_0.geometry}
            material={materials.Handler}
          />
        </group>
      </group>
      <group position={[-1.817, 0.787, -3.186]}>
        <group
          position={[0.228, 0, 0]}
          rotation={[0, -1.57, 0]}
          scale={[1.096, 1.096, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Wheel_Tire_0.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Wheel_Rim_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Wheel_Handler_0.geometry}
            material={materials.Handler}
          />
        </group>
      </group>
      <group position={[1.817, 0.787, 3.104]}>
        <group
          position={[-0.228, 0, 0]}
          rotation={[0, 1.57, 0]}
          scale={[1.096, 1.096, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Wheel_Tire_0.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Wheel_Rim_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Wheel_Handler_0.geometry}
            material={materials.Handler}
          />
        </group>
      </group>
      <group position={[1.817, 0.787, -3.186]}>
        <group
          position={[-0.228, 0, 0]}
          rotation={[0, 1.57, 0]}
          scale={[1.096, 1.096, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Wheel_Tire_0.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Wheel_Rim_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Wheel_Handler_0.geometry}
            material={materials.Handler}
          />
        </group>
      </group>
      <group position={[0, 2.252, -0.369]}>
        <group position={[0, 0.375, 2.374]} rotation={[0, -1.57, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Interior_InteriorPanel_0.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Interior_InteriorPanel_0_1.geometry}
            material={materials.InteriorPanel_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Interior_Handler_0.geometry}
            material={materials.Handler}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Interior_Tire_0.geometry}
            material={materials.Tire}
          />
        </group>
      </group>
      <group position={[0.92, 2.814, 1.268]}>
        <group position={[0, 0.002, -0.005]} rotation={[Math.PI / 9, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Steerwheel_InteriorPanel_0.geometry}
            material={materials.InteriorPanel_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Steerwheel_InteriorPanel_0_1.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Steerwheel_Handler_0.geometry}
            material={materials.Handler}
          />
        </group>
      </group>
      <group position={[0, 2.89, -0.029]}>
        <group position={[0, -2.229, 0.029]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chassis_Bumpers_0.geometry}
            material={materials.Bumpers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chassis_Chassis_0.geometry}
            material={materials.Chassis}
          />
        </group>
      </group>
      <group position={[0, 2.669, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turn_Lights_r_Turn_lights_0.geometry}
          material={materials.Turn_lights}
          position={[0, -2.008, 0.03]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[2.057, 2.945, 1.906]}>
        <group position={[-2.057, 0, -1.163]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_Chassis_0.geometry}
            material={materials.Chassis}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_InteriorPanel_0.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_Bumpers_0.geometry}
            material={materials.Bumpers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_Handler_0.geometry}
            material={materials.Handler}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_Mirror_0.geometry}
            material={materials.Mirror}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FL_Door_Windows_0.geometry}
            material={materials.Windows}
          />
        </group>
      </group>
      <group position={[2.049, 2.945, -0.616]}>
        <group position={[-2.049, 0, -1.046]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Door_Chassis_0.geometry}
            material={materials.Chassis}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Door_InteriorPanel_0.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Door_Handler_0.geometry}
            material={materials.Handler}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Door_Bumpers_0.geometry}
            material={materials.Bumpers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RL_Door_Windows_0.geometry}
            material={materials.Windows}
          />
        </group>
      </group>
      <group position={[-2.049, 2.945, -0.616]}>
        <group position={[2.049, 0, -1.046]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Door_Chassis_0.geometry}
            material={materials.Chassis}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Door_InteriorPanel_0.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Door_Handler_0.geometry}
            material={materials.Handler}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Door_Bumpers_0.geometry}
            material={materials.Bumpers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RR_Door_Windows_0.geometry}
            material={materials.Windows}
          />
        </group>
      </group>
      <group position={[-2.057, 2.945, 1.906]}>
        <group position={[2.057, 0, -1.163]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_Chassis_0.geometry}
            material={materials.Chassis}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_InteriorPanel_0.geometry}
            material={materials.InteriorPanel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_Bumpers_0.geometry}
            material={materials.Bumpers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_Handler_0.geometry}
            material={materials.Handler}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_Mirror_0.geometry}
            material={materials.Mirror}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FR_Door_Windows_0.geometry}
            material={materials.Windows}
          />
        </group>
      </group>
      <group position={[0, 3.891, -0.761]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Windows_0.geometry}
          material={materials.Windows}
          position={[0.002, 0.001, 2.749]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0, 2.224, 4.352]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Front_Lights_Front_lights_0.geometry}
          material={materials.Front_lights}
          position={[0, -1.563, -4.352]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0, 2.906, -4.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Brake_Lights_Brake_lights_0.geometry}
          material={materials.Brake_lights}
          position={[0, -2.245, 4.398]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0, 2.669, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turn_Lights_l_Turn_lights_0.geometry}
          material={materials.Turn_lights}
          position={[0, -2.008, 0.03]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/low_poly_small_car/scene.gltf");