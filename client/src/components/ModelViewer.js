import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

const ModelViewer = ({ fileUrl }) => {
  if (!fileUrl) return null;

  const is3D =
    fileUrl.toLowerCase().endsWith(".glb") ||
    fileUrl.toLowerCase().endsWith(".gltf");

  if (!is3D) {
    return (
      <img
        src={fileUrl}
        alt="preview"
        style={{ maxWidth: "300px", borderRadius: "10px" }}
      />
    );
  }

  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        <Stage>
          <Model url={fileUrl} />
        </Stage>
      </Suspense>

      {/* 360 CONTROL */}
      <OrbitControls enableZoom autoRotate />
    </Canvas>
  );
};

export default ModelViewer;