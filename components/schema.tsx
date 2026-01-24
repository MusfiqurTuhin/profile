"use client";

// src/components/schema.tsx
export default function Schema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://musfiqurtuhin.me/#person',
        name: 'Md. Musfiqur Rahman',
        alternateName: ['Musfiqur Tuhin', 'Md. Musfiqur Rahman Tuhin'],
        url: 'https://musfiqurtuhin.me',
        image: 'https://musfiqurtuhin.me/images/profile.jpg', // Your formal portrait
        jobTitle: 'Machine Learning Engineer',
        worksFor: {
            '@type': 'Organization',
            name: 'Metamorphosis Ltd',
            url: 'https://metamorphosis.com.bd' // Replace with actual URL
        },
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'United International University',
                url: 'https://www.uiu.ac.bd'
            }
        ],
        sameAs: [
            'https://www.linkedin.com/in/mdmusfiqurrahmantuhin/',
            'https://github.com/MusfiqurTuhin',
            'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID', // CRITICAL for research visibility
            'https://www.facebook.com/TuhinMusfiqur',
            'https://twitter.com/Musfiqur_Tuhin'
        ],
        knowsAbout: [
            'Machine Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Social Activism',
            'Prompt Injection',
            'Graphic Design'
        ],
        // Listing your 7 Papers directly in schema helps Google Scholar indexing
        hasCredential: [
            {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                educationalLevel: 'Bachelor of Science',
                about: 'Computer Science & Engineering'
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
