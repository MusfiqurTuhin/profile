"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function ReputationGlobe() {
    const globeEl = useRef<any>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    const [countries, setCountries] = useState({ features: [] });
    const [mounted, setMounted] = useState(false);
    const [isAutoTouring, setIsAutoTouring] = useState(true);

    useEffect(() => {
        setMounted(true);
        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setCountries);
    }, []);

    // Unique countries with reviews
    const reviewCountries = useMemo(() => {
        return Array.from(new Set(testimonials.map(t => t.iso)));
    }, []);

    // Auto-Tour Logic
    useEffect(() => {
        if (!isAutoTouring || !mounted) return;

        let currentIndex = 0;
        let timer1: NodeJS.Timeout;
        let timer2: NodeJS.Timeout;

        const tourLoop = () => {
            // 1. Select Country (Fly to it)
            const countryIso = reviewCountries[currentIndex];
            setSelectedCountry(countryIso);

            // 2. Wait for Fly (2s) + Read (3s) = 5s total hold
            timer1 = setTimeout(() => {
                // 3. Clear Selection (Resume rotation)
                setSelectedCountry(null);

                // 4. Wait for Rotation/Transition (3s) before next
                timer2 = setTimeout(() => {
                    currentIndex = (currentIndex + 1) % reviewCountries.length;
                    if (isAutoTouring) tourLoop(); // Recursive call
                }, 3000);

            }, 5000);
        };

        // Start delay
        const initialTimer = setTimeout(tourLoop, 1000);

        // Cleanup on unmount or when tour stops
        return () => {
            clearTimeout(initialTimer);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [isAutoTouring, mounted, reviewCountries]);

    // Camera & Rotation Control based on State
    useEffect(() => {
        if (!globeEl.current) return;

        const controls = globeEl.current.controls();

        if (selectedCountry) {
            // Mode: CAPTURE (Stop rotation, Fly to Point)
            controls.autoRotate = false;

            const targetReview = testimonials.find(t => t.iso === selectedCountry);
            if (targetReview) {
                // Smooth fly to location
                globeEl.current.pointOfView({ lat: targetReview.lat, lng: targetReview.lng, altitude: 1.5 }, 2000);
            }
        } else {
            // Mode: ORBIT (Resume rotation, Zoom out)
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.8;

            // Smoothly zoom out to orbit view
            globeEl.current.pointOfView({ altitude: 2.5 }, 2000);
        }
    }, [selectedCountry]);

    // Stop auto-tour on user interaction
    const handleUserInteraction = () => {
        if (isAutoTouring) {
            setIsAutoTouring(false);
        }
    };

    // Data for visual effects
    const arcsData = useMemo(() => {
        return testimonials.map(t => ({
            startLat: 23.8103, startLng: 90.4125, // Dhaka, Bangladesh (Base)
            endLat: t.lat, endLng: t.lng,
            color: [['#06b6d4', '#8b5cf6']] // Cyan to Purple gradient
        }));
    }, []);

    const ringsData = useMemo(() => {
        return testimonials.map(t => ({
            lat: t.lat,
            lng: t.lng,
            maxR: 5,
            propagationSpeed: 2,
            repeatPeriod: 1000
        }));
    }, []);


    // Filter reviews based on selection
    const visibleReviews = selectedCountry
        ? testimonials.filter(t => t.iso === selectedCountry)
        : [];

    return (
        <div className="relative w-full h-[500px] md:h-[800px] bg-black overflow-hidden flex flex-col md:flex-row rounded-3xl border border-white/5"
            onMouseDown={handleUserInteraction} // Stop tour on click
            onTouchStart={handleUserInteraction} // Stop tour on touch
        >

            {/* 1. THE GLOBE CONTAINER */}
            <div className="w-full h-full cursor-move">
                <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                    // Atmosphere & Lighting
                    atmosphereColor="#06b6d4" // Cyan
                    atmosphereAltitude={0.25}

                    // Arcs (Network Connections)
                    arcsData={arcsData}
                    arcColor="color"
                    arcDashLength={0.4}
                    arcDashGap={4}
                    arcDashInitialGap={() => Math.random() * 5}
                    arcDashAnimateTime={2000}
                    arcStroke={0.5}

                    // Rings (Pulse Effect)
                    ringsData={ringsData}
                    ringColor={() => (t: any) => `rgba(6, 182, 212, ${1 - t})`}
                    ringMaxRadius="maxR"
                    ringPropagationSpeed="propagationSpeed"
                    ringRepeatPeriod="repeatPeriod"

                    // Polygon (Country) styling
                    polygonsData={countries.features.filter((d: any) => d.properties.ISO_A3 !== 'AQ')} // Filter Antarctica
                    polygonAltitude={(d: any) => d.properties.ISO_A3 === selectedCountry ? 0.12 : 0.06}
                    polygonCapColor={(d: any) =>
                        d.properties.ISO_A3 === selectedCountry ? 'rgba(6, 182, 212, 0.9)' : // Selected: Cyan
                            testimonials.some(t => t.iso === d.properties.ISO_A3) ? 'rgba(255, 255, 255, 0.1)' : // Has Client: Faint White
                                'rgba(255, 255, 255, 0)' // Others: Transparent
                    }
                    polygonSideColor={() => 'rgba(255, 255, 255, 0.05)'}
                    polygonStrokeColor={() => '#111'}
                    onPolygonClick={(d: any) => {
                        handleUserInteraction();
                        if (d) setSelectedCountry(d.properties.ISO_A3);
                    }}
                    onPolygonHover={(d: any) => setHoveredCountry(d ? d.properties.ISO_A3 : null)}

                    // HTML Labels (The Pins)
                    htmlElementsData={testimonials}
                    htmlLat="lat"
                    htmlLng="lng"
                    htmlElement={(d: any) => {
                        const el = document.createElement('div');
                        // Simple CSS marker
                        el.innerHTML = `
                <div style="
                    width: 6px; 
                    height: 6px; 
                    background: ${d.iso === selectedCountry ? '#06b6d4' : '#fff'}; 
                    border-radius: 50%; 
                    box-shadow: 0 0 10px ${d.iso === selectedCountry ? '#06b6d4' : '#fff'};
                    cursor: pointer;
                    opacity: ${d.iso === selectedCountry ? 1 : 0.8};
                "></div>
            `;
                        return el;
                    }}
                />
            </div>

            {/* 2. DYNAMIC REVIEW PANEL (Only appears when country selected) */}
            <AnimatePresence>
                {selectedCountry && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute right-0 top-0 h-full w-full md:w-[400px] bg-black/95 backdrop-blur-xl border-l border-zinc-800 p-6 md:p-8 overflow-y-auto pointer-events-auto z-20 shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-6 md:mb-8 sticky top-0 bg-black/95 py-4 z-10 border-b border-white/5">
                            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-2">
                                {visibleReviews[0]?.flag} {visibleReviews[0]?.location}
                            </h3>
                            <button
                                onClick={() => {
                                    handleUserInteraction();
                                    setSelectedCountry(null);
                                }}
                                className="p-2 rounded-full hover:bg-white/10 text-zinc-500 hover:text-white transition-all"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-6 pb-12">
                            {visibleReviews.map((review, idx) => (
                                <div key={idx} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-cyan-500/30 transition-colors group">
                                    <p className="text-zinc-300 italic mb-4 leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-xs text-black group-hover:scale-110 transition-transform">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-white">{review.name}</p>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Verified Buyer</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {isAutoTouring && (
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                    className="h-full bg-cyan-500"
                                />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
