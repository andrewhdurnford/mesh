"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians } from "popmotion";

const color = "#FFFFFF";

const Icosahedron = () => (
  <mesh rotation-x={0}>
    <icosahedronGeometry args={[1, 1]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

function Scene() {
  const { gl, camera } = useThree();

  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.0001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [1, 0], [2, 3]); // Adjusted distance range
  const time = useTime();

  useFrame(() => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
  }, [gl]);

  return (
    <>
      <Icosahedron className="-z-40 self-center" />
    </>
  );
}

const App = () => (
  <Canvas>
    <Scene />
  </Canvas>
);

export default App;
