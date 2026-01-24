import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // If you have a dashboard
        },
        sitemap: 'https://musfiqurtuhin.me/sitemap.xml',
    };
}
