"use client";

// src/components/Schema.tsx
export default function Schema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://musfiqurtuhin.me/#person',
        name: 'Md. Musfiqur Rahman (Tuhin)',
        givenName: 'Musfiqur',
        familyName: 'Rahman',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Habiganj',
            addressCountry: 'Bangladesh'
        },
        // Approximate coordinates for Habiganj
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '24.3745',
            longitude: '91.4125'
        },
        alternateName: [
            "Md. Musfiqur Rahman Tuhin", "Musfiqur Rahman Tuhin", "Musfiq Tuhin", "Tuhin Rahman",
            "Musfiqur Tuhin", "Md Musfiqur Rahman", "M. Musfiqur Rahman", "M. M. Rahman",
            "Musfiqur R. Tuhin", "Tuhin Musfiqur", "Mushfiqur Rahman", "Mushfiq Tuhin",
            "Mosfiqur Rahman", "Mosfikur Rahman", "Musfikur Rahman", "Musfik Tuhin",
            "Moshfiqur Rahman", "Musfiqur Rahaman", "Musfiqur Rehman", "Tuheen", "Tohin",
            "মোঃ মুশফিকুর রহমান", "মুশফিকুর রহমান তুহিন", "মুশফিক তুহিন", "মুসফিকুর রহমান",
            "মুসফিক তুহিন", "মোঃ মুসফিকুর রহমান", "মো: মুশফিকুর রহমান", "মুশফিকুর রাহমান",
            "তুহিন", "মুশফিক"
        ],
        url: 'https://musfiqurtuhin.me',
        image: 'https://musfiqurtuhin.me/images/profile.jpg', // Ensure this path matches your uploaded portrait
        jobTitle: 'Machine Learning Engineer',
        description: 'AI Researcher, Social Activist, and Founder of Muktanchol Sahitya Charcha Kendro.',

        // ORGANIZATION & EDUCATION
        worksFor: {
            '@type': 'Organization',
            name: 'Metamorphosis Ltd',
            url: 'https://metamorphosis.com.bd' // Replace if they have a different URL
        },
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'United International University',
                sameAs: 'https://www.uiu.ac.bd'
            }
        ],

        // THE CORE IDENTITY NETWORK
        // This tells Google: "All these high-authority profiles belong to this one person."
        sameAs: [
            'https://scholar.google.com/citations?user=yLdzv6IAAAAJ&hl=en', // Research Authority
            'https://www.linkedin.com/in/mdmusfiqurrahmantuhin/',           // Professional Authority
            'https://github.com/MusfiqurTuhin',                              // Code Authority
            'https://www.fiverr.com/musfiqur_',                              // Freelance Reputation
            'https://www.behance.net/musfiqurtuhin',                         // Design Portfolio
            'https://www.youtube.com/@musfiqurtuhin',                        // Video Content
            'https://www.facebook.com/TuhinMusfiqur',                        // Social Graph
            'https://twitter.com/Musfiqur_Tuhin',                            // Real-time Updates
            'https://www.instagram.com/musfiqur___tuhin/',                   // Visuals
            'https://bn.quora.com/profile/Musfiqur-Tuhin',                   // Knowledge Sharing
            'https://t.me/musfiqurtuhin',                                    // Direct Channel
            'https://www.violencetracker.org/'                               // Project Link
        ],

        // CONTACT METHODS (WhatsApp & Messenger & Email)
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'WhatsApp',
                url: 'https://wa.me/+8801521563251',
                availableLanguage: ['English', 'Bengali']
            },
            {
                '@type': 'ContactPoint',
                contactType: 'Messenger',
                url: 'https://m.me/TuhinMusfiqur'
            },
            {
                '@type': 'ContactPoint',
                contactType: 'Email',
                email: 'musfiqurrahmantuhin@gmail.com'
            }
        ],

        // EXPERTISE KEYWORDS (For SEO ranking)
        knowsAbout: [
            'Machine Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Prompt Injection',
            'Graphic Design',
            'Social Activism',
            'Humanitarian Response'
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
