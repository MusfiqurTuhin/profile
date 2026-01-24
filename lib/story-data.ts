export type StoryMedia = {
    src: string;
    type: "image" | "video";
    alt: string;
    caption?: string;
};

export type StorySection = {
    id: string;
    title: string;
    age: string | number;
    yearRange: string;
    theme: string;
    description: string;
    media: StoryMedia[];
    stats?: { label: string; value: string; link?: string }[];
    link?: string;
};

export const storyData: StorySection[] = [
    {
        id: "foundation",
        title: "The Foundation",
        age: "11 — 16",
        yearRange: "2013 — 2018",
        theme: "Discipline & Duty",
        description: "At 11, I didn't just participate. I founded. Roots in service and discipline through Scouts and social organizations.",
        media: [
            { src: "/images/story/scout.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout2.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout3.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout4.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout5.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout6.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout7.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout8.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout9.jpg", type: "image", alt: "Scouts" },
            { src: "/images/story/scout10.jpeg", type: "image", alt: "Scouts" },
            { src: "/images/story/ovizatri.jpg", type: "image", alt: "Ovizatri" },
            { src: "/images/story/ovizatri2.jpg", type: "image", alt: "Ovizatri" },
            { src: "/images/story/nctfMusfiq1846.jpg", type: "image", alt: "NCTF" },
            { src: "/images/story/nctfMusfiq1847.jpg", type: "image", alt: "NCTF" },
            { src: "/images/story/odhivorsho.jpg", type: "image", alt: "Odhivorsho" },
            { src: "/images/story/odhivorsho2.jpg", type: "image", alt: "Odhivorsho" },
            { src: "/images/story/odhibhorshooo.jpg", type: "image", alt: "Odhivorsho" },
            { src: "/images/story/hand for help.jpg", type: "image", alt: "Hand For Help" },
            { src: "/images/story/hand for help 2.jpg", type: "image", alt: "Hand For Help" },
        ]
    },
    {
        id: "lifeline",
        title: "The Lifeline",
        age: "15 — 24",
        yearRange: "2017 — 2026",
        theme: "Blood & Vision",
        description: "Volunteering since 2017. A network of life across Habiganj, Sylhet, and Dhaka.",
        stats: [
            { label: "Bags Managed", value: "500+" },
            { label: "Experience", value: "9 Years" }
        ],
        media: [
            { src: "/images/story/blood.jpg", type: "image", alt: "Blood Donation" },
            { src: "/images/story/blood .jpg", type: "image", alt: "Blood Donation" },
            { src: "/images/story/blood2.jpg", type: "image", alt: "Blood Donation" },
            { src: "/images/story/blood5.jpg", type: "image", alt: "Blood Donation" },
            { src: "/images/story/blood7.jpg", type: "image", alt: "Blood Donation" },
            { src: "/images/story/blood9.jpg", type: "image", alt: "Blood Donation" },

        ]
    },
    {
        id: "renaissance",
        title: "The Renaissance",
        age: "18 — 22",
        yearRange: "2020 — 2024",
        theme: "The Intellectual",
        description: "Founder & President of Muktanchol Sahittya Chorcha Kendro. Preserving culture in a digital age.",
        media: [
            { src: "/images/story/muktanchol.mp4", type: "video", alt: "Muktanchol Video" },
            { src: "/images/story/muktanchol%20Musfiq1854.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktanchol%20Musfiq1856.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktanchol%20Musfiq1857.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktanchol%20Musfiq1858.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1848.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1849.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1851.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1852.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1853.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1855.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1859.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1860.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1861.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1862.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1863.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1864.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1865.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1866.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1867.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1868.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1869.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1870.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1871.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1872.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1873.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1874.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1875.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1876.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1877.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1878.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1879.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1880.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1881.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1882.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1883.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1884.jpg", type: "image", alt: "Muktanchol" },
            { src: "/images/story/muktancholMusfiq1885.jpg", type: "image", alt: "Muktanchol" },
        ]
    },
    {
        id: "early-activism",
        title: "The Sparks",
        age: "12 — 15",
        yearRange: "2014 — 2017",
        theme: "Activism & Cinema",
        description: "From child journalism to social welfare and independent filmmaking. The early years of expression.",
        media: [
            // Films
            { src: "/images/story/71.jpg", type: "image", alt: "71 Film" },
            { src: "/images/story/71%20_%202.jpg", type: "image", alt: "71 Film" },
            { src: "/images/story/lal%20panjabi.jpg", type: "image", alt: "Lal Panjabi" },
            { src: "/images/story/lal%20panjabi2.jpg", type: "image", alt: "Lal Panjabi" },
            { src: "/images/story/lal%20panjabi3.jpg", type: "image", alt: "Lal Panjabi" },
            { src: "/images/story/lal%20panjabi4.jpg", type: "image", alt: "Lal Panjabi" },
            { src: "/images/story/swapnojatra.jpg", type: "image", alt: "Swapnojatra" },
            { src: "/images/story/swapnojatra2.jpg", type: "image", alt: "Swapnojatra" },

            // Organizations
            { src: "/images/story/hand%20for%20help.jpg", type: "image", alt: "Hand For Help" },
            { src: "/images/story/hand%20for%20help%202.jpg", type: "image", alt: "Hand For Help" },
            { src: "/images/story/odhivorsho.jpg", type: "image", alt: "Odhivorsho" },
            { src: "/images/story/odhivorsho2.jpg", type: "image", alt: "Odhivorsho" },
            { src: "/images/story/nctfMusfiq1846.jpg", type: "image", alt: "NCTF" },
            { src: "/images/story/nctfMusfiq1847.jpg", type: "image", alt: "NCTF" },
            { src: "/images/story/nctfMusfiq1954.jpg", type: "image", alt: "NCTF" },
        ]
    },
    {
        id: "ovizatri",
        title: "অভিযাত্রী (Ovizatri)",
        age: "14 — 18",
        yearRange: "2016 — 2020",
        theme: "The Community Leader",
        description: "Founder & General Secretary | 2016–2020. A district-wide voluntary network serving humanity.",
        stats: [
            { label: "Reach", value: "9 Upazilas" },
            { label: "Network", value: "2,000+ Volunteers" },
            { label: "Focus", value: "Humanitarian Response" },
            { label: "Structure", value: "School-based Units" },
        ],
        link: "https://www.facebook.com/ovizatri.club",
        media: [
            { src: "/images/story/ovizatri.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri2.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri3.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri4.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri5.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri6.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri7.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri8.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%209.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2010.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2011.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2012.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2013.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2014.jpg", type: "image", alt: "Ovizatri Activity" },
            { src: "/images/story/ovizatri%2015.jpg", type: "image", alt: "Ovizatri Activity" },
        ]
    },

    {
        id: "revolution",
        title: "The Uprising & Reform",
        age: "22 — 24",
        yearRange: "2024 — 2026",
        theme: "Revolution & Reconstruction",
        description: "From leading the July Uprising to building the foundations of a new political reality.",
        // We will misuse 'stats' here to store the detailed text blocks for the custom component
        stats: [
            { label: "Building a New Political Platform (NPA)", value: "Actively involved in building Network for People’s Action (NPA)—a people-centric political initiative grounded in equality, social justice, and the protection of life and nature.", link: "https://ournpa.org/" },
            { label: "Working with “সম্প্রীতি যাত্রা”", value: "Engaged with Shompriti Jatra, a citizen movement dedicated to protecting religious and cultural harmony, resisting mob violence, and safeguarding marginalized communities.", link: "https://www.facebook.com/march4harmony" },
            { label: "Post-July Reform Movement", value: "Actively participated in the post-July university reform movement, advocating for structural reforms, student rights, and accountable academic governance." },
            { label: "July Uprising", value: "Actively participated in and led student mobilization during the July Uprising, contributing to organization, coordination, and on-ground leadership." }
        ],
        media: [
            // VIDEOS (9 Items - ALL RESTORED)
            { src: "/images/story/july1.mp4", type: "video", alt: "July Revolution Main" },
            { src: "/images/story/july.mp4", type: "video", alt: "July Revolution" },
            { src: "/images/story/julyyyy.mp4", type: "video", alt: "July Protest" },
            { src: "/images/story/julyyyyyy.mp4", type: "video", alt: "July Protest Large" },
            { src: "/images/story/post july university movemeny.mp4", type: "video", alt: "University Movement" },
            { src: "/images/story/post jullly.mp4", type: "video", alt: "Post July" },
            { src: "/images/story/post julllyy.mp4", type: "video", alt: "Post July" },
            { src: "/images/story/post july.mp4", type: "video", alt: "Post July" },
            { src: "/images/story/post julyyy.mp4", type: "video", alt: "Post July" },

            // IMAGES (12 Items)
            { src: "/images/story/july 6.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/july.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/july2.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/july3.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/july4.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/julyyy.jpg", type: "image", alt: "July Protest" },
            { src: "/images/story/post july.jpg", type: "image", alt: "Post July" },
            { src: "/images/story/post july2.jpg", type: "image", alt: "Post July" },
            { src: "/images/story/post july3.jpg", type: "image", alt: "Post July" },
            { src: "/images/story/post july3_1.jpg", type: "image", alt: "Post July" },
            { src: "/images/story/post july 3_2.jpg", type: "image", alt: "Post July" },
            { src: "/images/story/post julyy.jpg", type: "image", alt: "Post July" },
        ]
    }
];
