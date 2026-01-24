"use client";

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-[#F5F5F7] text-[#1A1A1A] overflow-hidden flex flex-col justify-between py-6 md:py-0">

            {/* --- GRID BACKGROUND --- */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- TOP: THINKER --- */}
            <div className="relative z-10 flex justify-center items-start h-[25vh] md:h-[30vh]">
                <h1 className="text-[18vw] md:text-[15vw] font-black tracking-tighter leading-none text-[#1A1A1A] mix-blend-darken select-none">
                    THINKER.
                </h1>
            </div>

            {/* --- CENTER: THE MONOLITH --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] md:w-[400px] group">

                {/* The Image Container */}
                <div className="relative bg-black shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    {/* Your Image with Black BG */}
                    <img
                        src="/images/story/Md Musfiqur Rahman.jpg"
                        alt="Musfiqur Tuhin"
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Tech Detail: Corner Label */}
                    <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md px-3 py-1">
                        <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                            Archive_ID: 2002
                        </span>
                    </div>
                </div>

                {/* --- THE MAVERICK STAMP --- */}
                {/* This overlaps the image and background */}
                <div className="absolute -bottom-8 md:-bottom-10 -right-8 md:-right-20 z-30">
                    <h2 className="text-5xl md:text-8xl font-serif italic text-[#D60000] tracking-tighter leading-none mix-blend-normal transform -rotate-6">
                        Maverick.
                    </h2>
                    {/* Decorative Red Line */}
                    <div className="h-2 w-full bg-[#D60000] mt-2 transform -skew-x-12"></div>
                </div>

            </div>

            {/* --- BOTTOM: ORGANIZER --- */}
            <div className="relative z-10 flex justify-center items-end h-[25vh] md:h-[30vh]">
                <h1 className="text-[18vw] md:text-[15vw] font-black tracking-tighter leading-none text-[#1A1A1A] mix-blend-darken select-none">
                    ORGANIZER.
                </h1>
            </div>

            {/* --- FOOTER: DATA STREAM --- */}
            <div className="absolute bottom-4 md:bottom-6 w-full flex justify-between px-4 md:px-12 font-mono text-[9px] md:text-xs text-gray-400 z-40 uppercase tracking-widest">
                <span>[ Loc: Dhaka, BD ]</span>
                <span className="hidden md:block">Logic & Legacy System</span>
                <span>[ Est. 2002 ]</span>
            </div>

        </section>
    );
}
