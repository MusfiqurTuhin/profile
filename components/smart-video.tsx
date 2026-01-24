import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface SmartVideoProps {
    src: string;
    poster?: string; // Optional poster
    className?: string; // Optional className for styling
}

export default function SmartVideo({ src, poster, className = "" }: SmartVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.muted = false; // Restore sound on hover
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start
            videoRef.current.muted = true;
        }
    };

    return (
        <div
            className={`relative overflow-hidden ${className} group cursor-pointer bg-black`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Optional Poster Image (if provided) */}
            {poster && !isHovered && (
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <Image
                        src={poster}
                        alt="Video thumbnail"
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Play Overlay - Visible when not hovering */}
            <div
                className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            >
                <div className="bg-black/30 p-3 rounded-full backdrop-blur-sm border border-white/10">
                    <Play className="w-6 h-6 text-white/90 fill-current" />
                </div>
            </div>

            <video
                ref={videoRef}
                src={src}
                // preload="metadata" ensures the first frame is downloaded and shown
                // alleviating the "blank black" issue
                preload="metadata"
                loop
                muted // Start muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
    );
}
