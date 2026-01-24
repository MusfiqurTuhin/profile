"use client";

import { useEffect, useState } from "react";
import { travelData } from "@/lib/travel-data";
import dynamic from "next/dynamic";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";

// Dynamic import to avoid SSR issues with Leaflet
const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);
const CircleMarker = dynamic(
    () => import("react-leaflet").then((mod) => mod.CircleMarker),
    { ssr: false }
);
const Popup = dynamic(
    () => import("react-leaflet").then((mod) => mod.Popup),
    { ssr: false }
);
const Tooltip = dynamic(
    () => import("react-leaflet").then((mod) => mod.Tooltip),
    { ssr: false }
);

interface District {
    id: string;
    name: string;
    bn_name: string;
    lat: string;
    long: string;
    division_id: string;
}

export default function TravelMapInteractive() {
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    const visitedCount = travelData.visitedDistricts.length;
    const visitedPercentage = Math.round((visitedCount / travelData.totalDistricts) * 100);

    // Load districts data
    useEffect(() => {
        fetch("/images/Travel/bd-districts.json")
            .then((res) => res.json())
            .then((data) => {
                setDistricts(data.districts);
                setMounted(true);
            });
    }, []);

    const isVisited = (districtName: string) => {
        return travelData.visitedDistricts.some(
            (visited) => visited.toLowerCase() === districtName.toLowerCase() ||
                districtName.toLowerCase().includes(visited.toLowerCase()) ||
                visited.toLowerCase().includes(districtName.toLowerCase())
        );
    };

    if (!mounted) {
        return (
            <section className="min-h-screen w-full py-20 md:py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-2xl font-mono text-stone-500">Loading Map...</div>
                </div>
            </section>
        );
    }

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
                {/* LEFT: Sticky Interactive Map */}
                <div className="lg:sticky lg:top-24 lg:h-screen lg:flex lg:flex-col lg:justify-start">
                    <div className="bg-white border-2 border-stone-300 rounded-lg p-6 shadow-lg relative">
                        {/* Blueprint Header */}
                        <div className="flex justify-between items-center mb-4 font-mono text-xs text-stone-500 uppercase tracking-widest">
                            <span>Interactive Field Map</span>
                            <span className="text-red-600">● Live</span>
                        </div>

                        {/* Leaflet Map */}
                        <div className="relative h-[500px] lg:h-[600px] rounded border-2 border-stone-300 overflow-hidden bg-stone-50">
                            <style jsx global>{`
                .leaflet-container {
                  height: 100%;
                  width: 100%;
                  z-index: 1;
                }
              `}</style>

                            <MapContainer
                                center={[23.8103, 90.4125]}
                                zoom={7}
                                style={{ height: "100%", width: "100%" }}
                                className="z-0"
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                />

                                {/* District Markers */}
                                {districts.map((district) => {
                                    const visited = isVisited(district.name);
                                    return (
                                        <CircleMarker
                                            key={district.id}
                                            center={[parseFloat(district.lat), parseFloat(district.long)] as LatLngExpression}
                                            radius={visited ? 8 : 4}
                                            pathOptions={{
                                                fillColor: visited ? "#DC2626" : "#D1D5DB",
                                                color: visited ? "#991B1B" : "#9CA3AF",
                                                weight: visited ? 2 : 1,
                                                fillOpacity: visited ? 0.7 : 0.3,
                                            }}
                                            eventHandlers={{
                                                click: () => setSelectedDistrict(district.name),
                                                mouseover: (e: LeafletMouseEvent) => {
                                                    e.target.setStyle({
                                                        fillOpacity: 0.9,
                                                        radius: visited ? 10 : 6,
                                                    });
                                                },
                                                mouseout: (e: LeafletMouseEvent) => {
                                                    e.target.setStyle({
                                                        fillOpacity: visited ? 0.7 : 0.3,
                                                        radius: visited ? 8 : 4,
                                                    });
                                                },
                                            }}
                                        >
                                            <Tooltip direction="top" offset={[0, -5]} opacity={0.9}>
                                                <div className="text-xs font-mono">
                                                    <div className="font-bold">{district.name}</div>
                                                    <div className="text-stone-500">{district.bn_name}</div>
                                                    {visited && (
                                                        <div className="text-red-600 mt-1">✓ Visited</div>
                                                    )}
                                                </div>
                                            </Tooltip>
                                        </CircleMarker>
                                    );
                                })}
                            </MapContainer>

                            {/* Legend Overlay */}
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-stone-300 rounded-lg px-4 py-3 shadow-md z-[1000]">
                                <div className="flex items-center gap-4 text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-red-900"></div>
                                        <span className="text-stone-700">Visited ({visitedCount})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-stone-300 border border-stone-400"></div>
                                        <span className="text-stone-500">Unvisited</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Overlay */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-stone-300 rounded-lg p-4 shadow-md z-[1000]">
                                <div className="text-right space-y-1">
                                    <div className="text-4xl font-black text-red-600">{visitedCount}</div>
                                    <div className="text-xs font-mono text-stone-500">DISTRICTS</div>
                                    <div className="text-xs text-stone-400 border-t border-stone-200 pt-1 mt-1">
                                        {visitedPercentage}% explored
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Geographic Stats */}
                        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-xl font-bold text-stone-900">{travelData.stats.visitedDivisions}</div>
                                <div className="text-[10px] font-mono text-stone-500 uppercase">Divisions</div>
                            </div>
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-xl font-bold text-stone-900">{visitedCount}</div>
                                <div className="text-[10px] font-mono text-stone-500 uppercase">Districts</div>
                            </div>
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-3">
                                <div className="text-xl font-bold text-red-600">{visitedPercentage}%</div>
                                <div className="text-[10px] font-mono text-stone-500 uppercase">Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Chaotic Round Photo Gallery */}
                <div className="space-y-6">
                    <div className="font-mono text-xs text-stone-500 uppercase tracking-widest">
                        Field Evidence // 37 Entries
                    </div>

                    {/* Chaotic Scattered Photo Grid */}
                    <div className="relative min-h-screen">
                        {[
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
                            "464494819_17959773298714591_2064851088078856476_n.jpg",
                            "480485222_1021939803373381_6073738098932742992_n.jpg",
                            "480568331_1022664209967607_4997052399906836843_n.jpg",
                            "481276256_18005609456714591_8636889374695685434_n.jpeg",
                            "488743099_1058223206411707_4699056134568614260_n.jpg",
                            "490361109_1064930145741013_4447636078048676503_n.jpg",
                            "491373847_1077928647774496_6384503912506486892_n.jpg",
                            "492000255_1077928664441161_5635458367127515682_n.jpg",
                            "492088318_1077928817774479_8959129699716159165_n.jpg",
                            "492110007_1078334604400567_6559393026868764082_n.jpg",
                            "492333246_1078337681067026_2530054740682076324_n.jpg",
                            "492369531_1078336631067131_890618885656859913_n.jpg",
                            "492470630_1077936244440836_4318023301935168007_n.jpg",
                            "492526680_1078334281067272_8726562999134088584_n.jpg",
                            "492597055_1078334374400596_3068982890738472319_n.jpg",
                            "493413058_1078040794429954_8025523881914595405_n.jpg",
                            "502471148_1110321734535187_6990333730074405046_n.jpg",
                        ].map((filename, idx) => {
                            // Create random chaotic positioning
                            const randomRotation = (Math.random() - 0.5) * 20; // -10 to +10 degrees
                            const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
                            const isLarge = idx % 5 === 0; // Every 5th photo is larger

                            return (
                                <div
                                    key={filename}
                                    className="absolute group cursor-pointer"
                                    style={{
                                        top: `${(idx % 7) * 14}%`,
                                        left: `${(idx % 5) * 20}%`,
                                        transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
                                        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                        zIndex: 1,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.zIndex = "50";
                                        e.currentTarget.style.transform = `rotate(0deg) scale(1.3)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.zIndex = "1";
                                        e.currentTarget.style.transform = `rotate(${randomRotation}deg) scale(${randomScale})`;
                                    }}
                                >
                                    {/* Polaroid Frame */}
                                    <div className="bg-white p-2 shadow-2xl rounded-lg">
                                        {/* Round Image Container */}
                                        <div
                                            className={`${isLarge ? "w-48 h-48" : "w-32 h-32"
                                                } rounded-full overflow-hidden border-4 border-white shadow-inner bg-stone-100`}
                                        >
                                            <img
                                                src={`/images/Travel/${filename}`}
                                                alt={`Travel ${idx + 1}`}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Caption */}
                                        <div className="mt-2 text-center font-mono text-[8px] text-stone-400">
                                            #{String(idx + 1).padStart(2, "0")}
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
