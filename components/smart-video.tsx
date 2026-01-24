import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface SmartVideoProps {
    src: string;
    poster?: string; // Optional poster
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
            className={`relative overflow-hidden ${className} group cursor-pointer`}
            onMouseEnter={handleInteraction} // Load on Hover
            onTouchStart={handleInteraction} // Load on Tap (Mobile)
        >
            {/* Thumbnail Image - Visible until played */}
            <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 bg-zinc-900 flex items-center justify-center ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                {poster ? (
                    <Image
                        src={poster}
                        alt="Video thumbnail"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
                    />
                ) : (
                    /* Fallback UI when no poster is available */
                    <div className="flex flex-col items-center gap-2 text-white/30 group-hover:text-white/50 transition-colors">
                        <Play className="w-12 h-12 fill-current" />
                        <span className="text-[10px] font-mono tracking-widest uppercase">Video Preview</span>
                    </div>
                )}
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
