"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

function GridPlane() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            // Move texture or position to simulate infinite forward motion
            mesh.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
        }
    });

    // Create a procedural grid texture
    const gridTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const context = canvas.getContext('2d');
        if (context) {
            context.fillStyle = 'black';
            context.fillRect(0, 0, 1024, 1024);
            context.strokeStyle = '#00f0ff'; // Cyan
            context.lineWidth = 2;
            context.shadowBlur = 10;
            context.shadowColor = '#00f0ff';

            // Draw Grid
            const step = 64;
            context.beginPath();
            for (let i = 0; i <= 1024; i += step) {
                context.moveTo(i, 0);
                context.lineTo(i, 1024);
                context.moveTo(0, i);
                context.lineTo(1024, i);
            }
            context.stroke();
        }
        return new THREE.CanvasTexture(canvas);
    }, []);

    gridTexture.wrapS = THREE.RepeatWrapping;
    gridTexture.wrapT = THREE.RepeatWrapping;
    gridTexture.repeat.set(4, 4);

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial
                map={gridTexture}
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
                fog={true}
            />
        </mesh>
    );
}

function Fog() {
    return <fog attach="fog" args={['#030305', 5, 20]} />
}

export default function CyberGrid() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
                <Fog />
                <GridPlane />
                {/* Upper grid for ceiling effect */}
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
                    <planeGeometry args={[100, 100]} />
                    <meshBasicMaterial color="#bd00ff" wireframe transparent opacity={0.05} />
                </mesh>
            </Canvas>
        </div>
    );
}
