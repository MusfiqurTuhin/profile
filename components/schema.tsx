"use client";

// src/components/Schema.tsx
export default function Schema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://musfiqurtuhin.me/#person',
        name: 'Md. Musfiqur Rahman',
        alternateName: ['Musfiqur Tuhin', 'Md. Musfiqur Rahman Tuhin', 'Tuhin Musfiqur'],
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

        // THE CORE IDENTITY NETWORK (11 Identity Links)
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
            'https://t.me/musfiqurtuhin'                                     // Direct Channel
        ],

        // CONTACT METHODS (WhatsApp & Messenger)
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
