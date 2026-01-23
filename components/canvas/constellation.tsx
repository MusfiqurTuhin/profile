"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useMode } from "@/components/context/mode-context";
import * as THREE from "three";

function Particles(props: any) {
    const ref = useRef<any>(null);
    const { mode } = useMode();

    // Generate 3 sets of points for the 3 personas using useState to initialize once
    const [sphereResearch] = useState(() => random.inSphere(new Float32Array(50 * 3), { radius: 1.5 }));
    const [sphereActivism] = useState(() => random.inSphere(new Float32Array(30 * 3), { radius: 1.5 }));
    const [sphereArt] = useState(() => random.inSphere(new Float32Array(30 * 3), { radius: 1.5 }));

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* Research Nodes (Always visible) */}
            <Points ref={ref} positions={sphereResearch} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#0ea5e9"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>

            {/* Activism Nodes (Red) - Visible in Story Mode */}
            {mode === "story" && (
                <Points positions={sphereActivism} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                        transparent
                        color="#dc2626"
                        size={0.04}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            )}

            {/* Art Nodes (Amber) - Visible in Story Mode */}
            {mode === "story" && (
                <Points positions={sphereArt} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                        transparent
                        color="#d97706"
                        size={0.03}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            )}
        </group>
    );
}

function Rig() {
    useFrame((state) => {
        // Subtle Mouse parallax
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.2, 0.1)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.2, 0.1)
    })
    return null
}

export default function Constellation() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <fog attach="fog" args={['#000', 0.8, 4]} /> {/* Fade to black/bg */}
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Particles />
                </Float>
                <Rig />
            </Canvas>
        </div>
    );
}
