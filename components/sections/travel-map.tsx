"use client";

import { useRef, useEffect, useState } from "react";
import { travelData } from "@/lib/travel-data";

export default function TravelMap() {
    const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
    const visitedCount = travelData.visitedDistricts.length;
    const visitedPercentage = Math.round((visitedCount / travelData.totalDistricts) * 100);

    return (
        <section className="min-h-screen w-full py-20 md:py-32 px-6 bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight mb-4">
                        Explored Bangladesh
                    </h2>
                    <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
                        Across plains, hills, and rivers — documenting stories from every corner of the nation.
                    </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    <div className="bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-stone-200">
                        <div className="text-4xl md:text-5xl font-black text-story-red">{visitedCount}</div>
                        <div className="text-sm md:text-base text-stone-600 font-mono uppercase tracking-wider">Districts Visited</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-stone-200">
                        <div className="text-4xl md:text-5xl font-black text-story-red">{visitedPercentage}%</div>
                        <div className="text-sm md:text-base text-stone-600 font-mono uppercase tracking-wider">Coverage</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-stone-200">
                        <div className="text-4xl md:text-5xl font-black text-story-red">{travelData.stats.visitedDivisions}/{travelData.stats.divisions}</div>
                        <div className="text-sm md:text-base text-stone-600 font-mono uppercase tracking-wider">Divisions</div>
                    </div>
                </div>

                {/* Map Placeholder - Will be replaced with actual SVG map */}
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-stone-200">
                    <div className="text-center text-stone-500 py-20">
                        <p className="text-2xl font-bold mb-4">Interactive Map Coming Soon</p>
                        <p className="text-lg">SVG map of Bangladesh with clickable districts will be integrated here</p>
                    </div>
                </div>

                {/* District List */}
                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Visited Districts</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {travelData.visitedDistricts.sort().map((district) => (
                            <div
                                key={district}
                                className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow hover:shadow-lg hover:bg-story-red hover:text-white transition-all duration-300 text-center font-medium text-stone-700 hover:scale-105 cursor-pointer border border-stone-200"
                            >
                                {district}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
