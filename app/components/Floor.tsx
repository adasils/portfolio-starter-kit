//components/Floor.jsx

import React from "react";

import { MeshProps } from '@react-three/fiber';

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor;
