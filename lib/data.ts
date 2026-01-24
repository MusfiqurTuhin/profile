export type Education = {
    degree: string;
    institution: string;
    major?: string;
    year: string;
    sortDate: number;
};

export const education: Education[] = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "United International University",
        major: "Data Science",
        year: "2021 - 2025",
        sortDate: 40
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Border Guard Public School & College, Sylhet",
        major: "Science",
        year: "2018 - 2020",
        sortDate: 5
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Habiganj Govt. High School",
        major: "Science",
        year: "2010 - 2018",
        sortDate: 2
    }
];

export type Experience = {
    role: string;
    company: string;
    duration: string;
    description: string;
    link?: string;
    sortDate: number;
};

export const experience: Experience[] = [
    {
        role: "Machine Learning (ML) Engineer",
        company: "Metamorphosis Ltd",
        duration: "Nov 2025 — Present",
        description: "Currently working as a professional Machine Learning Engineer contributing to core AI products.",
        link: "https://www.metamorphosis.com.bd/",
        sortDate: 50
    },
    {
        role: "Independent Freelancer (Graphic & Web Designer)",
        company: "Self-Employed",
        duration: "2020 — Present",
        description: "Delivering end-to-end branding and website design solutions for clients across multiple industries.",
        sortDate: 10
    },
    {
        role: "Intern in Graphic Design Department",
        company: "Youth School for Social Entrepreneurs (YSSE)",
        duration: "May 2024 — Nov 2024",
        description: "Created visual content for entrepreneurship campaigns, maintaining brand consistency and meeting deadlines.",
        sortDate: 20
    },
    {
        role: "Level 1 Freelancer (Graphic Design)",
        company: "Fiverr",
        duration: "2022 — 2024",
        description: "Completed 20+ international design projects with consistent 5/5 star client ratings and established repeat collaborations.",
        sortDate: 30
    }
];

export type Award = {
    title: string;
    project: string;
    event: string;
    description?: string;
    year: string;
    placement: string;
};

export const awards: Award[] = [
    {
        title: "RiceResQ: Rice Disease Detection and AI based Pesticide Recommendation",
        project: "Final Year Design Project-I",
        event: "CSE PROJECT SHOW, UIU",
        placement: "Champion",
        year: "Fall 2024"
    }
];

export type Paper = {
    id: string;
    title: string;
    conference: string;
    publisher: "IEEE Xplore" | "Springer Nature" | "Other";
    year: string;
    metrics: string[];
    description: string;
    link?: string;
    category: "AI" | "Engineering" | "Security";
    abstract?: string;
    doi?: string;
    citation?: string;
    datasetName?: string;
    datasetLink?: string;
    datasetDescription?: string;
    fullConferenceName?: string;
    status: "Published" | "Accepted";
};

export const papers: Paper[] = [
    {
        id: "ecce-2025",
        title: "Plant Disease Recognition from the Perspective of Bangladesh: A Comparative Study of Deep Learning Models and Ensemble Techniques",
        conference: "ECCE 2025",
        fullConferenceName: "International Conference on Electrical, Computer and Communication Engineering (ECCE)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["95.45% Accuracy", "19-Class Dataset", "Ensemble Model"],
        description: "A comparative study of deep learning models and ensemble techniques for early detection of crop diseases.",
        category: "AI",
        abstract: "Evaluated deep learning models (Xception, VGG-16/19, ResNet) for plant disease detection on a 19-class dataset. Proposed an ensemble approach combining Xception, VGG-19, and ResNet-152V2, achieving 95.45% test accuracy and 99.93% ROC-AUC. Results demonstrate that ensemble methods effectively leverage diverse architectures for improved classification robustness.",
        doi: "10.1109/ECCE64574.2025.11013222",
        citation: `@InProceedings{11013222,  
  author={Rahman, Md. Musfiqur and Tusher, Md Mahbubur Rahman and Rinky, Susmita Roy and Mokit, Junaid Rahman and Biswas, Sudipa},  
  booktitle={2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)},   
  title={Plant Disease Recognition from the Perspective of Bangladesh: A Comparative Study of Deep Learning Models and Ensemble Techniques},   
  year={2025},  
  pages={1-6},  
  doi={10.1109/ECCE64574.2025.11013222}  
}`,
        datasetName: "Bangladeshi Crops Disease Dataset (BCDD)",
        datasetDescription: "Curated benchmark of 5 crops (Rice, Wheat, Corn, Potato, Tomato) with 19 diseases. Includes 8,992 images.",
        datasetLink: "https://www.kaggle.com/datasets/musfiqurtuhin/bangladeshi-crops-disease-dataset-bcdd",
        status: "Published"
    },
    {
        id: "bim-2023",
        title: "A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh",
        conference: "BIM 2023",
        fullConferenceName: "International Conference on Big Data, IoT and Machine Learning (BIM)",
        publisher: "Springer Nature",
        year: "2023",
        metrics: ["8,386 Images", "ViT 99.91% Acc", "13 Classes"],
        description: "Built a novel Bangladeshi traffic sign dataset (13 classes) and evaluated 9 models.",
        category: "AI",
        abstract: "Constructed a novel balanced dataset of 8,386 images across 13 classes of Bangladeshi traffic signs. Evaluated nine deep learning models using transfer learning and fine-tuning. ViT achieved the highest validation accuracy of 99.91% for fine-tuning, while DenseNet201 reached 99.86% for transfer learning, establishing a robust baseline for autonomous driving systems in Bangladesh.",
        doi: "10.1007/978-981-99-8937-9_37",
        citation: `@InProceedings{10.1007/978-981-99-8937-9_37,  
  author="Tusher, M.M.R. and Kafi, H.M. and Rinky, S.R. and Islam, M. and Rahman, M.M.",  
  title="A Comparative Analysis of Various Deep Learning Models for Traffic Signs Recognition from the Perspective of Bangladesh",  
  booktitle="Proceedings of the 2nd International Conference on Big Data, IoT and Machine Learning (BIM)",  
  year="2024",  
  publisher="Springer Nature Singapore",  
  doi="10.1007/978-981-99-8937-9_37"  
}`,
        datasetName: "Bangladeshi Traffic Signs (BTSR-13)",
        datasetDescription: "A balanced dataset of 8,386 images covering 13 distinct classes of Bangladeshi traffic signs, captured in diverse real-world conditions.",
        datasetLink: "https://www.kaggle.com/datasets/musfiqurtuhin/bangladeshi-traffic-signs-btsr-13",
        status: "Published"
    },
    {
        id: "qpain-2025",
        title: "Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach",
        conference: "QPAIN 2025",
        fullConferenceName: "International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["82.43% Accuracy", "12K Documents", "Multi-layer LSTM"],
        description: "Detecting misinformation in mainstream Bangladeshi media using a multi-layered LSTM ensemble approach.",
        category: "AI",
        abstract: "Developed a fake news detection model for mainstream Bangladeshi media using a dataset of 11,839 documents. Implemented a multi-layered LSTM ensemble approach to handle sequence data inherent in news content. The model achieved an accuracy of 82.43%, significantly outperforming previous benchmarks and demonstrating efficacy in discerning authentic journalism from fabricated stories.",
        doi: "10.1109/QPAIN66474.2025.11171927",
        citation: `@INPROCEEDINGS{11171927,  
  author={Rinky, Susmita Roy and Tusher, Md. Mahbubur Rahman and Rahman, Md. Musfiqur and Porag, Prithweeraj Acharjee and Islam, Jahidul and Miah, Abu Saleh Musa},  
  booktitle={2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)},   
  title={Bengali Fake News Detection: A Multi-Layered LSTM Ensemble Approach},   
  year={2025},  
  pages={1-6},  
  doi={10.1109/QPAIN66474.2025.11171927}  
}`,
        datasetName: "Bengali Fake News Detection Dataset",
        datasetDescription: "Aggregates news from credible top TV channels and newspapers to provide a robust benchmark with 11,839 documents.",
        datasetLink: "https://www.kaggle.com/datasets/musfiqurtuhin/bengali-fake-news-detection-dataset",
        status: "Published"
    },
    {
        id: "iccit-2025-prompt",
        title: "A Reproducible Benchmark for Prompt Injection Vulnerability Assessment in Small-to-Medium Language Models",
        conference: "ICCIT 2025",
        fullConferenceName: "International Conference on Computer and Information Technology (ICCIT)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["2,250 Model-Prompt Tests", "Dual-Judge Eval", "Standardized Framework"],
        description: "Standardized framework for prompt-injection assessment in Small-to-Medium Language Models.",
        category: "Security",
        abstract: "Automated benchmark of 2,250 adversarial prompt interactions across ten small-to-medium language models (e.g., TinyLlama, LLaMA-3) using a dual-judge evaluation system. Empirical results show a mean Attack Success Rate (ASR) of 65.2%, with significant variance (0.44%–97.3%). JailbreakBench prompts proved most effective (74.4%), minimizing manual oversight in vulnerability assessment.",

        status: "Accepted"
    },
    {
        id: "sti-2025",
        title: "Predictive Assessment and Social-Cost Estimation of Methane Emissions in Bio-Slurry Amended Systems",
        conference: "STI 2025",
        fullConferenceName: "International Conference on Sustainable Technologies for Industry (STI)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["R² = 0.66", "SHAP Features", "Ensemble ML"],
        description: "Predicting methane emissions from Bio-Slurry Amended Systems using Ensemble ML.",
        category: "AI",
        abstract: "Proposed a stacking-ensemble framework (Random Forest, LightGBM, XGBoost, CatBoost) to predict methane emissions in bio-slurry systems. The model achieved an R² of 0.6643 and classification accuracy of 68.57%, outperforming individual base learners. SHAP analysis identified bio-slurry percentage as a key predictor, offering a validated social-cost estimation framework.",

        datasetName: "Bio-Slurry Methane Emission Dataset",
        datasetDescription: "Experimental data on methane emissions from agricultural bio-slurry systems. Contains 350 cleaned rows for regression and classification tasks.",
        datasetLink: "https://www.kaggle.com/datasets/musfiqurtuhin/bio-slurry-methane-emission-dataset",
        status: "Accepted"
    },
    {
        id: "iccit-2025-img",
        title: "Deep Learning-Based Recognition of Recaptured Images for Digital Media Authentication",
        conference: "ICCIT 2025",
        fullConferenceName: "International Conference on Computer and Information Technology (ICCIT)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["99% Accuracy", "DenseNet201/Xception"],
        description: "Detecting recaptured images for digital media authentication.",
        category: "Security",
        abstract: "Introduced a dataset of 1,088 original and recaptured images to detect digital media authenticity. DenseNet201 achieved 99.12% accuracy on RGB inputs, while Xception reached 99.01% on Canny edge-detected images. Results confirm that combining RGB dense features with Canny edge cues provides a reliable framework for forensic recapture detection.",

        status: "Accepted"
    },
    {
        id: "eict-2025",
        title: "Multi-Level Ensemble Learning for Fine-Grained Classification of Traditional Bangladeshi Dress Using Deep Transfer Models",
        conference: "EICT 2025",
        fullConferenceName: "International Conference on Electrical, Information and Communication Technology (EICT)",
        publisher: "IEEE Xplore",
        year: "2025",
        metrics: ["96.75% Accuracy", "Deep Transfer Models", "Fine-Grained"],
        description: "Fine-grained classification of traditional Bangladeshi dress.",
        category: "AI",
        abstract: "Created 'BanglaDressNet', a fine-grained dataset of 8,000 images across 16 traditional clothing categories. Evaluated 10 CNNs, with DenseNet121, EfficientNetB1, and Xception performing best. A proposed weighted averaging ensemble strategy achieved 96.75% test accuracy and 99.91% macro ROC-AUC, demonstrating the efficacy of hierarchical learning for cultural attire classification.",

        datasetName: "BanglaDressNet: Traditional Bangladeshi Dress Dataset",
        datasetDescription: "A fine-grained image dataset of 8,000 images across 16 distinct categories of traditional Bangladeshi clothing.",
        datasetLink: "https://www.kaggle.com/datasets/musfiqurtuhin/bangladressnet",
        status: "Accepted"
    },
];

export const activismTimeline = [
    {
        year: "2024",
        title: "July Revolution",
        role: "Student Leader",
        description: "Played a key leadership role in the July Movement, organizing university students and coordinating protests across Dhaka. One of the prominent student leaders from the private university sector.",
    },
    {
        year: "2020 — Present",
        title: "Muktanchol Sahittya Chorcha Kendro",
        role: "Founder & President",
        description: "Leading a literary organization in Habiganj dedicated to promoting local literature and culture.",
    },
    {
        year: "Eye Donation Society",
        title: "Eye Donation BD",
        role: "Posthumous Eye Donor",
        description: "Registered posthumous eye donor, advocating for cornea donation awareness.",
    },
    {
        year: "2016 — 2020",
        title: "Ovizatri (Social Organization)",
        role: "Founder General Secretary",
        description: "Established and led a youth social organization focused on community service and social welfare.",
    },
    {
        year: "2016 — 2017",
        title: "Swopnojatra Society",
        role: "Founder Member",
        description: "Founder member of Swopnojatra. Acted as the main character and writer for '71', a short film on the liberation war.",
    },
    {
        year: "2015 — 2016",
        title: "Odhivorsho Society",
        role: "Founder President",
        description: "Founded a social organization to engage youth in social contribution activities.",
    },
    {
        year: "2015 — 2016",
        title: "Tarunno Society",
        role: "Founder Member",
        description: "Founder member. Played the lead role in 'Lal Panjabi', a short film highlighting social issues.",
    },
    {
        year: "2014 — 2016",
        title: "Hand For Help",
        role: "Member",
        description: "Active member of a social welfare group dedicated to helping the underprivileged.",
    },
    {
        year: "2015 — 2017",
        title: "National Children's Task Force",
        role: "Child Journalist",
        description: "Served as a child journalist for NCTF, Habiganj, advocating for children's rights.",
    },
    {
        year: "2013 — 2018",
        title: "Bangladesh Scouts",
        role: "Patrol Leader",
        description: "Patrol Leader at Habiganj Govt. High School Unit. Developed leadership and discipline early on.",
    }
];


export type MediaItem = {
    src: string;
    alt: string;
    type?: "image" | "video";
};

export const storyGallery: Record<string, MediaItem[]> = {
    july: [
        { src: "/images/story/july.jpg", alt: "July Movement" },
        { src: "/images/story/july2.jpg", alt: "July Movement" },
        { src: "/images/story/july3.jpg", alt: "July Movement" },
        { src: "/images/story/july4.jpg", alt: "July Movement" },
        { src: "/images/story/july 6.jpg", alt: "July Movement" },
        { src: "/images/story/julyyy.jpg", alt: "July Movement" },
        { src: "/images/story/july.mp4", type: "video", alt: "July Movement" },
    ],
    postJuly: [
        { src: "/images/story/post july.jpg", alt: "Post July" },
        { src: "/images/story/post july2.jpg", alt: "Post July" },
        { src: "/images/story/post july3.jpg", alt: "Post July" },
        { src: "/images/story/post july3_1.jpg", alt: "Post July" },
        { src: "/images/story/post julyy.jpg", alt: "Post July" },
        { src: "/images/story/post july 3_2.jpg", alt: "Post July" },
        { src: "/images/story/post jullly.mp4", type: "video", alt: "Post July" },
    ],
    social: [
        // Muktanchol
        { src: "/images/story/muktanchol Musfiq1854.jpg", alt: "Muktanchol" },
        { src: "/images/story/muktanchol Musfiq1856.jpg", alt: "Muktanchol" },
        { src: "/images/story/muktanchol Musfiq1857.jpg", alt: "Muktanchol" },
        { src: "/images/story/muktanchol Musfiq1858.jpg", alt: "Muktanchol" },
        { src: "/images/story/muktanchol.mp4", type: "video", alt: "Muktanchol" },
        // Ovizatri
        { src: "/images/story/ovizatri.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri2.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri3.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri4.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri5.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri6.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri7.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri8.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri 9.jpg", alt: "Ovizatri" },
        { src: "/images/story/ovizatri 10.jpg", alt: "Ovizatri" },
        // Scouts
        { src: "/images/story/scout.jpg", alt: "Scouts" },
        { src: "/images/story/scout2.jpg", alt: "Scouts" },
        { src: "/images/story/scout5.jpg", alt: "Scouts" },
        { src: "/images/story/scout10.jpeg", alt: "Scouts" },
        // NCTF & Others
        { src: "/images/story/nctfMusfiq1846.jpg", alt: "NCTF" },
        { src: "/images/story/nctfMusfiq1847.jpg", alt: "NCTF" },
        { src: "/images/story/odhivorsho.jpg", alt: "Odhivorsho" },
        { src: "/images/story/odhivorsho2.jpg", alt: "Odhivorsho" },
        { src: "/images/story/hand for help.jpg", alt: "Hand For Help" },
        { src: "/images/story/hand for help 2.jpg", alt: "Hand For Help" },
        { src: "/images/story/eye donor.jpg", alt: "Eye Donor" },
    ],
    cultural: [
        { src: "/images/story/lal panjabi.jpg", alt: "Lal Panjabi Film" },
        { src: "/images/story/lal panjabi2.jpg", alt: "Lal Panjabi Film" },
        { src: "/images/story/lal panjabi4.jpg", alt: "Lal Panjabi Film" },
        { src: "/images/story/71.jpg", alt: "71 Film" },
        { src: "/images/story/71 _ 2.jpg", alt: "71 Film" },
        { src: "/images/story/swapnojatra.jpg", alt: "Swapnojatra" },
    ]
};

// Deprecated: simple list, kept for backward compatibility if needed
export const galleryImages = [
    ...storyGallery.july.slice(0, 2),
    ...storyGallery.social.slice(0, 2)
];

export const books = [
    { title: "Muktanchol Sahittya", role: "Editor", color: "bg-amber-100" },
    { title: "Anthology Vol 1", role: "Writer", color: "bg-stone-200" },
    { title: "Poems of Revolt", role: "Cover Artist", color: "bg-orange-100" },
    { title: "Habiganj History", role: "Contributor", color: "bg-yellow-50" },
];

export const badges = [
    { name: "Ovizatri", role: "Founder General Secretary", year: "2016-2020" },
    { name: "Hand For Help", role: "Member", year: "2014-2016" },
    { name: "Odhivorsho Society", role: "Founder President", year: "2015-2016" },
    { name: "Tarunno Society", role: "Founder Member", year: "2015-2016" },
    { name: "Swopnojatra Society", role: "Founder Member", year: "2016-2017" },
    { name: "Nat'l Children Task Force", role: "Child Journalist", year: "2015-2017" },
    { name: "Bangladesh Scouts", role: "Petrol Leader", year: "2013-2018" },
];

export type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github?: string;
    image?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        title: "Violence Tracker",
        description: "A real-time comprehensive violence monitoring platform. Tracks and visualizes incidents with detailed analytics.",
        tech: ["Next.js", "Python", "Data Visualization", "Fullstack"],
        link: "https://violencetracker.org/",
        featured: true
    },
    {
        title: "MM Blog Generator",
        description: "AI-powered tool that transforms YouTube videos into SEO-optimized infographic blog posts using Gemini 2.5/3 models.",
        tech: ["TypeScript", "Next.js", "Gemini AI", "SEO"],
        link: "https://mm-blog-generator.vercel.app/",
        github: "https://github.com/MusfiqurTuhin/youtube-blog-generator",
        featured: true
    },
    {
        title: "Carousel Meta",
        description: "Automated LinkedIn carousel generator. Converts content into engaging, swipeable slide formats for professional branding.",
        tech: ["TypeScript", "React", "Automation", "Content Creation"],
        link: "https://carousel-meta.vercel.app/",
        github: "https://github.com/MusfiqurTuhin/carousel-meta",
        featured: true
    },
    {
        title: "Metamorphosis Studio",
        description: "Interactive digital studio platform featuring advanced animations and a dynamic design showcase.",
        tech: ["JavaScript", "GSAP", "Interactive UI", "Frontend"],
        link: "https://metamorphosis-studio-git.vercel.app/",
        github: "https://github.com/MusfiqurTuhin/metamorphosis-studio-git",
        featured: true
    },
    {
        title: "Metamorphosis Docs",
        description: "Comprehensive documentation platform built with Streamlit, serving as the knowledge base for Metamorphosis tools.",
        tech: ["Python", "Streamlit", "Documentation", "Technical Writing"],
        link: "https://metamorphosis-documentation-c3enezfmr4exg4auzluikn.streamlit.app/",
        github: "https://github.com/MusfiqurTuhin/metamorphosis-documentation",
        featured: true
    },
    {
        title: "NPA Photocard App",
        description: "Digital campaign tool for the NPA political platform, enabling users to generate and share branded photocard templates.",
        tech: ["TypeScript", "React", "Canvas API", "Frontend"],
        link: "#",
        github: "https://github.com/MusfiqurTuhin/npa-photocard-app",
        featured: false
    },

];

export type Testimonial = {
    name: string;
    location: string;
    iso: string;
    lat: number;
    lng: number;
    flag: string;
    rating: number;
    text: string;
    date: string;
    avatar?: string;
};

export const testimonials: Testimonial[] = [
    {
        name: "Joudalq",
        location: "Saudi Arabia",
        iso: "SAU",
        lat: 23.8859,
        lng: 45.0792,
        flag: "🇸🇦",
        rating: 5,
        text: "Highly recommended for his exceptional work. Delivered the project earlier than expected, maintained professional communication throughout, and ensured my complete satisfaction.",
        date: "Apr 18, 2024",
    },
    {
        name: "krinart23",
        location: "United States",
        iso: "USA",
        lat: 37.0902,
        lng: -95.7129,
        flag: "🇺🇸",
        rating: 5,
        text: "Musfiqur did a great job with this one. As is with previous 5 orders, I am 100% going to return to him in the future. He listens to all the requirements and makes all necessary changes. Recommend 10/10.",
        date: "Nov 27, 2023",
    },
    {
        name: "Anju Sidharthan",
        location: "Australia",
        iso: "AUS",
        lat: -25.2744,
        lng: 133.7751,
        flag: "🇦🇺",
        rating: 5,
        text: "Musfiqur is highly efficient, responsive, knowledgeable, and professional. He provided everything that I asked for my first and second projects with him. The service was beyond my expectations!",
        date: "Oct 31, 2023",
    },
    {
        name: "Law_And_Living",
        location: "Netherlands",
        iso: "NLD",
        lat: 52.1326,
        lng: 5.2913,
        flag: "🇳🇱",
        rating: 5,
        text: "I really enjoyed working with this friendly and proactive freelancer. The layout turned out great after mutual consultation.",
        date: "Aug 10, 2023",
    },
    {
        name: "Jacqueline76123",
        location: "United States",
        iso: "USA",
        lat: 39.0902,
        lng: -97.7129,
        flag: "🇺🇸",
        rating: 5,
        text: "Excellent work and timely response. Very satisfied with the great service and quality work.",
        date: "Apr 23, 2022",
    },
    {
        name: "Collins Ugwunwa",
        location: "Nigeria",
        iso: "NGA",
        lat: 9.0820,
        lng: 8.6753,
        flag: "🇳🇬",
        rating: 5,
        text: "His communication is very professional, and his work ethic is awesome.",
        date: "May 13, 2023",
    },
    {
        name: "Eric Saumure",
        location: "Canada",
        iso: "CAN",
        lat: 56.1304,
        lng: -106.3468,
        flag: "🇨🇦",
        rating: 5,
        text: "Great work. Flexible and awesome.",
        date: "Apr 30, 2022",
    }
];

export const socialLinks = {
    scholar: "https://scholar.google.com/citations?user=yLdzv6IAAAAJ&hl=en",
    fiverr: "https://www.fiverr.com/musfiqur_",
    linkedin: "https://www.linkedin.com/in/mdmusfiqurrahmantuhin/",
    behance: "https://www.behance.net/musfiqurtuhin",
    github: "https://github.com/MusfiqurTuhin",
    facebook: "https://www.facebook.com/TuhinMusfiqur",
    instagram: "https://www.instagram.com/musfiqur___tuhin/",
    quora: "https://bn.quora.com/profile/Musfiqur-Tuhin",
    twitter: "https://twitter.com/Musfiqur_Tuhin",
    youtube: "https://www.youtube.com/@musfiqurtuhin",
    telegram: "https://t.me/musfiqurtuhin",
    whatsapp: "https://wa.me/+8801521563251",
    email: "mailto:musfiqurrahmantuhin@gmail.com"
};
