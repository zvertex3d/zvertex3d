import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export default function ModelPreview({ color }) {
  return (
    <div style={{ height: 400 }}>
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} />
        <Box>
          <meshStandardMaterial color={color} />
        </Box>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}