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

    // Generate random rotations for photos (between -3 and 3 degrees)
    const rotations = travelPhotos.map(() => (Math.random() - 0.5) * 6);

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
                        <div className="absolute top-4 left-4 font-mono text-xs text-stone-500 uppercase tracking-widest">
                            Field Map // Archive 2024
                        </div>

                        {/* Simplified Vector Map Placeholder */}
                        <div className="aspect-[3/4] relative bg-stone-50 rounded border border-stone-200 flex items-center justify-center mt-8">
                            <div className="text-center space-y-4">
                                <div className={`text-6xl font-black transition-colors duration-300 ${isMapHovered ? 'text-red-600' : 'text-stone-400'
                                    }`}>
                                    🗺️
                                </div>
                                <div className="font-mono text-sm text-stone-500">
                                    <div className="text-2xl font-bold text-stone-900">{visitedCount}/64</div>
                                    <div>Districts Explored</div>
                                    <div className="mt-2 text-xs text-stone-400">{visitedPercentage}% Coverage</div>
                                </div>
                                <div className={`text-xs transition-opacity duration-300 ${isMapHovered ? 'opacity-100 text-red-600' : 'opacity-0'
                                    }`}>
                                    Visited regions highlighted
                                </div>
                            </div>
                        </div>

                        {/* Blueprint Footer */}
                        <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-500">
                            <div>
                                <span className="text-stone-400">DIVISIONS:</span> {travelData.stats.visitedDivisions}/8
                            </div>
                            <div className="text-right">
                                <span className="text-stone-400">STATUS:</span> ACTIVE
                            </div>
                        </div>
                    </div>

                    {/* District List */}
                    <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-6">
                        <h3 className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-3">Logged Districts</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                            {travelData.visitedDistricts.map((district) => (
                                <div key={district} className="font-mono text-stone-700 truncate">
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

                    {/* Masonry Grid */}
                    <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                        {travelPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid group relative"
                                style={{
                                    transform: `rotate(${rotations[index]}deg)`,
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                {/* Tape Decoration */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-100/60 border-t border-b border-amber-200/80 z-10 backdrop-blur-sm"></div>

                                {/* Photo */}
                                <div className="relative">
                                    <img
                                        src={photo}
                                        alt={`Travel memory ${index + 1}`}
                                        className="w-full h-auto rounded shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white"
                                        style={{
                                            filter: 'contrast(1.1) brightness(0.95)'
                                        }}
                                    />
                                    {/* Entry Number */}
                                    <div className="absolute bottom-2 right-2 font-mono text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                        #{String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
