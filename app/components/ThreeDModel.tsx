// app/components/ThreeDModel.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = () => {
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/models/model.glb', // Путь к модели в папке public
      (gltf) => {
        setModel(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model', error);
      }
    );
  }, []);

  if (!model) return <div>Loading...</div>;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <primitive object={model} />
    </Canvas>
  );
};

export default ThreeDModel;
