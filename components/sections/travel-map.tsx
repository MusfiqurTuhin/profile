"use client";

import { travelData } from "@/lib/travel-data";
import { useState } from "react";

export default function TravelMap() {
    const [isMapHovered, setIsMapHovered] = useState(false);
    const visitedCount = travelData.visitedDistricts.length;
    const visitedPercentage = Math.round((visitedCount / travelData.totalDistricts) * 100);

    // Travel photos - using all 37 found
    const travelPhotos = [
        "468526371_17994753080714591_832146755417126345_n.jpg",
        "480474287_1022664116634283_6861207374996785542_n.jpg",
        "480475216_1021942273373134_5359121277222586579_n.jpg",
        "481274784_18005609453714591_6425983771888587927_n.jpeg",
        "488725977_1058223169745044_9109197646216975619_n.jpg",
        "490275841_1064930105741017_4138701779973042969_n.jpg",
        "491355347_1077928621107832_1455165775556501128_n.jpg",
        "491999623_1077928627774498_6600704608818726482_n.jpg",
        "492088254_1077928811107813_3262497670119431978_n.jpg",
        "492101807_1078334367733924_1481840040689288507_n.jpg",
        "492331246_1078337644400263_1333415051765423674_n.jpg",
        "492336331_1078336591067035_8219196515500960976_n.jpg",
        "492414530_1077936207773740_215282736116850438_n.jpg",
        "492501480_1078334227733938_817954589743068738_n.jpg",
        "492554455_1078334331067261_3711685723591352569_n.jpg",
        "493315558_1078040754429952_6862375236586650486_n.jpg",
        "493494265_1078338271066867_4899950149779093717_n.jpg",
        "502492348_1110321691201858_4845616588514134424_n.jpg",
        "502571387_1115139980720029_8130666282325262220_n.jpg",
        "502760469_1110637697836924_5531822604082594632_n.jpg",
    ].map(filename => `/images/Travel/${filename}`);

    // Generate random chaotic styles for photos
    const chaoticStyles = travelPhotos.map(() => ({
        rotation: (Math.random() - 0.5) * 12, // More extreme rotation: -6 to 6 deg (doubled)
        xOffset: (Math.random() - 0.5) * 20, // Random X nudge: -10px to 10px
        yOffset: (Math.random() - 0.5) * 40, // Random Y nudge: -20px to 20px
        scale: 0.9 + Math.random() * 0.2, // Random scale: 0.9 to 1.1
        zIndex: Math.floor(Math.random() * 10), // Random stacking order
    }));

    return (
        <section className="min-h-screen w-full py-20 md:py-32 px-6 bg-white relative overflow-hidden">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h2 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight mb-4 font-mono uppercase">
                    The Architect's Desk
                </h2>
                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
                    Mapping {visitedCount} districts across Bangladesh — a documentary archive of exploration
                </p>
            </div>

            {/* Split-Screen Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* LEFT: Sticky Map */}
                <div className="lg:sticky lg:top-24 lg:h-screen lg:flex lg:flex-col lg:justify-start">
                    <div
                        className="bg-white border-2 border-stone-300 rounded-lg p-8 shadow-lg relative"
                        onMouseEnter={() => setIsMapHovered(true)}
                        onMouseLeave={() => setIsMapHovered(false)}
                    >
                        {/* Blueprint Header */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-xs text-stone-500 uppercase tracking-widest">
                            <span>Field Map // Archive 2024</span>
                            <span className={`transition-colors duration-300 ${isMapHovered ? 'text-red-600' : ''}`}>
                                {isMapHovered ? '● ACTIVE' : '○ STANDBY'}
                            </span>
                        </div>

                        {/* Actual Bangladesh SVG Map */}
                        <div className="mt-8 relative">
                            <div className="relative bg-stone-50 rounded border-2 border-stone-300 p-4 overflow-hidden">
                                <img
                                    src="/images/story/BD_Map_admin.svg"
                                    alt="Bangladesh Administrative Map"
                                    className={`w-full h-auto transition-all duration-500 ${isMapHovered ? 'opacity-100' : 'opacity-80'
                                        }`}
                                    style={{
                                        filter: isMapHovered
                                            ? 'contrast(1.2) saturate(1.3) hue-rotate(350deg)'
                                            : 'grayscale(0.3) contrast(1.1)',
                                        maxHeight: '60vh'
                                    }}
                                />

                                {/* Overlay Stats */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-stone-300 rounded-lg p-3 shadow-md">
                                    <div className="text-right space-y-1">
                                        <div className="text-3xl font-black text-red-600">{visitedCount}</div>
                                        <div className="text-xs font-mono text-stone-500">DISTRICTS</div>
                                        <div className="text-xs text-stone-400 border-t border-stone-200 pt-1">
                                            {visitedPercentage}% explored
                                        </div>
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-stone-300 rounded-lg px-3 py-2">
                                    <div className="flex items-center gap-3 text-xs font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-3 h-3 rounded-sm transition-colors duration-300 ${isMapHovered ? 'bg-red-600' : 'bg-stone-400'
                                                }`}></div>
                                            <span className="text-stone-600">Visited</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-3 h-3 rounded-sm bg-stone-200"></div>
                                            <span className="text-stone-600">Unvisited</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Geographic Stats */}
                        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-2xl font-bold text-stone-900">{travelData.stats.visitedDivisions}</div>
                                <div className="text-xs font-mono text-stone-500 uppercase">Divisions</div>
                            </div>
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-2xl font-bold text-stone-900">{visitedCount}</div>
                                <div className="text-xs font-mono text-stone-500 uppercase">Districts</div>
                            </div>
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-2xl font-bold text-red-600">{visitedPercentage}%</div>
                                <div className="text-xs font-mono text-stone-500 uppercase">Coverage</div>
                            </div>
                        </div>

                        {/* Blueprint Footer */}
                        <div className="mt-4 flex justify-between text-xs font-mono text-stone-400">
                            <div>
                                <span className="text-stone-500">SCALE:</span> 1:2,000,000
                            </div>
                            <div>
                                <span className="text-stone-500">METHOD:</span> Field Survey
                            </div>
                        </div>
                    </div>

                    {/* District List */}
                    <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-6">
                        <h3 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                            <span>Logged Districts</span>
                            <span className="text-red-600">{visitedCount} entries</span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                            {travelData.visitedDistricts.map((district) => (
                                <div key={district} className="font-mono text-stone-700 bg-white border border-stone-200 px-2 py-1 rounded truncate hover:bg-red-50 hover:border-red-200 transition-colors">
                                    • {district}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Masonry Photo Gallery */}
                <div className="space-y-6">
                    <div className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-6">
                        Field Evidence // {travelPhotos.length} Entries
                    </div>

                    {/* Masonry Grid - 2 cols on mobile for chaotic look */}
                    <div className="columns-2 gap-4 lg:gap-8 space-y-8 lg:space-y-8 px-2">
                        {travelPhotos.map((photo, index) => {
                            const style = chaoticStyles[index];
                            return (
                                <div
                                    key={index}
                                    className="break-inside-avoid group relative mb-8"
                                    style={{
                                        transform: `
                                            rotate(${style.rotation}deg) 
                                            translate(${style.xOffset}px, ${style.yOffset}px) 
                                            scale(${style.scale})
                                        `,
                                        zIndex: style.zIndex,
                                        transition: 'transform 0.4s ease-out'
                                    }}
                                >
                                    {/* Tape Decoration */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 md:w-20 h-4 md:h-8 bg-amber-100/80 border-t border-b border-amber-200/50 z-20 shadow-sm rotate-[-2deg]"></div>

                                    {/* Photo */}
                                    <div className="relative hover:z-50 hover:scale-105 transition-all duration-300 ease-out shadow-md hover:shadow-2xl">
                                        <img
                                            src={photo}
                                            alt={`Travel memory ${index + 1}`}
                                            className="w-full h-auto rounded-sm bg-stone-100 p-1.5 md:p-2 border border-stone-200 shadow-sm"
                                            style={{
                                                filter: 'sepia(0.05) contrast(1.05) brightness(0.95)'
                                            }}
                                        />
                                        {/* Entry Number */}
                                        <div className="absolute bottom-3 right-3 font-mono text-[10px] text-stone-400 opacity-60">
                                            #{String(index + 1).padStart(3, '0')}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
