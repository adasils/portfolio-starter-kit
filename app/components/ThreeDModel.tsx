// app/components/ThreeDModel.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/model.glb', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return (
    <Canvas>
      {/* Используем ambientLight без ошибок типов */}
      <ambientLight args={[0x404040, 0.5]} />
      
      {/* Правильные параметры для spotLight */}
      <spotLight position={[10, 10, 10]} castShadow intensity={1} />
      
      {model && <primitive object={model} />}
    </Canvas>
  );
}

export default ThreeDModel;
