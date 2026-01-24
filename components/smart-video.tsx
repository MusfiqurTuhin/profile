"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface SmartVideoProps {
    src: string;
    poster: string; // URL for the thumbnail image
    className?: string; // Optional className for styling
}

export default function SmartVideo({ src, poster, className = "" }: SmartVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleInteraction = () => {
        setIsPlaying(true);
        // Wait for state update then play
        setTimeout(() => videoRef.current?.play(), 0);
    };

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={handleInteraction} // Load on Hover
            onTouchStart={handleInteraction} // Load on Tap (Mobile)
        >
            {/* Thumbnail Image - Visible until played */}
            <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <Image
                    src={poster}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
                />
            </div>

            {/* The video tag exists but src is only fully active/playing when needed */}
            <video
                ref={videoRef}
                src={src}
                preload="none" // KEY: Don't download bytes until requested
                loop
                muted
                playsInline
                className={`w-full h-full object-cover relative z-0 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} // Hide video until playing to avoid flash
            />
        </div>
    );
}
