"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Soothing particle background animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];

        // Create floating particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5
            });
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update particles
            particles.forEach((particle, i) => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw connections
                particles.forEach((particle2, j) => {
                    if (i === j) return;
                    const dx = particle.x - particle2.x;
                    const dy = particle.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative h-screen w-full bg-[#F5F5F7] text-[#1A1A1A] overflow-hidden flex flex-col justify-between">

            {/* Animated Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-100" />

            {/* Static Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- TOP: THINKER --- */}
            <div className="relative z-10 flex justify-center items-start pt-24 sm:pt-20 md:pt-24 flex-shrink-0">
                <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-black tracking-tighter leading-none text-[#1A1A1A] select-none">
                    THINKER.
                </h1>
            </div>

            {/* --- CENTER: THE MONOLITH --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] group">

                {/* The Image Container */}
                <div className="relative bg-black shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    {/* Your Image with Black BG */}
                    <img
                        src="/images/story/70977299.jpeg"
                        alt="Musfiqur Tuhin"
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Tech Detail: Corner Label */}
                    <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md px-2 md:px-3 py-1">
                        <span className="font-mono text-[8px] md:text-[10px] text-white tracking-widest uppercase">
                            Archive_ID: 2002
                        </span>
                    </div>
                </div>

                {/* --- THE MAVERICK STAMP --- */}
                <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-6 sm:-right-8 md:-right-16 lg:-right-20 z-30">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif italic text-[#D60000] tracking-tighter leading-none mix-blend-normal transform -rotate-6">
                        Maverick.
                    </h2>
                    {/* Decorative Red Line */}
                    <div className="h-1.5 md:h-2 w-full bg-[#D60000] mt-1 md:mt-2 transform -skew-x-12"></div>
                </div>

            </div>

            {/* --- BOTTOM: ORGANIZER --- */}
            <div className="relative z-10 flex justify-center items-end pb-20 sm:pb-16 md:pb-20 flex-shrink-0">
                <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-black tracking-tighter leading-none text-[#1A1A1A] select-none">
                    ORGANIZER.
                </h1>
            </div>

            {/* --- FOOTER: DATA STREAM --- */}
            <div className="absolute bottom-4 md:bottom-6 w-full flex justify-between px-4 sm:px-6 md:px-12 font-mono text-[8px] sm:text-[9px] md:text-xs text-gray-500 z-40 uppercase tracking-widest">
                <span>[ Loc: Dhaka, BD ]</span>
                <span className="hidden sm:block">Logic & Legacy System</span>
                <span>[ Est. 2002 ]</span>
            </div>

        </section>
    );
}
