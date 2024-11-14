import { MeshProps } from '@react-three/fiber';

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      {/* Можно использовать meshStandardMaterial, который тоже поддерживает color */}
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor;
