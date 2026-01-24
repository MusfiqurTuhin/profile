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

                {/* RIGHT: Photo Gallery */}
                <div className="space-y-6">
                    <div className="font-mono text-xs text-stone-500 uppercase tracking-widest">
                        Field Evidence // 20 Entries
                    </div>

                    {/* Masonry Photo Gallery */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "Travel/Travel (1).jpg",
                            "Travel/Travel (2).jpg",
                            "Travel/Travel (3).jpg",
                            "Travel/Travel (4).jpg",
                            "Travel/Travel (5).jpg",
                            "Travel/Travel (6).jpg",
                            "Travel/Travel (7).jpg",
                            "Travel/Travel (8).jpg",
                            "Travel/Travel (9).jpg",
                            "Travel/Travel (10).jpg",
                            "Travel/Travel (11).jpg",
                            "Travel/Travel (12).jpg",
                            "Travel/Travel (13).jpg",
                            "Travel/Travel (14).jpg",
                            "Travel/Travel (15).jpg",
                            "Travel/Travel (16).jpg",
                            "Travel/Travel (17).jpg",
                            "Travel/Travel (18).jpg",
                            "Travel/Travel (19).jpg",
                            "Travel/Travel (20).jpg",
                        ].map((photo, idx) => {
                            const rotation = [
                                "rotate-[-1deg]",
                                "rotate-[0.5deg]",
                                "rotate-[-0.5deg]",
                                "rotate-[1deg]",
                            ][idx % 4];

                            return (
                                <div
                                    key={photo}
                                    className={`relative group ${rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-10`}
                                >
                                    {/* Sticky Tape Decoration */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-100/60 rotate-[-2deg] z-10 border border-amber-200/40"></div>

                                    {/* Photo Frame */}
                                    <div className="bg-white border-2 border-stone-300 p-2 shadow-md">
                                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                            <img
                                                src={`/images/${photo}`}
                                                alt={`Travel memory ${idx + 1}`}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <div className="mt-2 text-center font-mono text-[10px] text-stone-400">
                                        #{String(idx + 1).padStart(3, "0")}
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
