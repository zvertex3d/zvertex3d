import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

const Model = ({ url }) => {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1.5} />;
  } catch {
    return null;
  }
};

const ModelViewer = ({ fileUrl }) => {
  if (!fileUrl) return null;

  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.5} />
      <Stage>
        <Model url={fileUrl} />
      </Stage>
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default ModelViewer;