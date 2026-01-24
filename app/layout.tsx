import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/context/mode-context";
import Navbar from "@/components/layout/navbar";
import SmoothScroll from "@/components/layout/smooth-scroll";
import Schema from "@/components/schema";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#F5F5F7', // Matches your off-white theme
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents zooming issues on mobile for your 3D elements
};

export const metadata: Metadata = {
  metadataBase: new URL('https://musfiqurtuhin.me'),
  title: {
    default: 'Md. Musfiqur Rahman | Machine Learning Engineer & Activist',
    template: '%s | Musfiqur Tuhin',
  },
  description: 'The living archive of Md. Musfiqur Rahman. 7+ Scopus publications in AI, founder of Muktanchol, and leader in the July Revolution. Explore the intersection of Logic and Legacy.',
  keywords: [
    'Md. Musfiqur Rahman',
    'Musfiqur Tuhin',
    'Machine Learning Engineer Bangladesh',
    'AI Researcher',
    'July Revolution Leader',
    'Muktanchol',
    'Prompt Injection Research',
    'Computer Vision Engineer'
  ],
  authors: [{ name: 'Md. Musfiqur Rahman', url: 'https://musfiqurtuhin.me' }],
  creator: 'Md. Musfiqur Rahman',
  publisher: 'Md. Musfiqur Rahman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph = How links look on Facebook/LinkedIn
  openGraph: {
    type: 'profile',
    firstName: 'Md. Musfiqur',
    lastName: 'Rahman',
    username: 'musfiqurtuhin',
    gender: 'male',
    url: 'https://musfiqurtuhin.me',
    siteName: 'Musfiqur Tuhin Archive',
    locale: 'en_US',
    title: 'Md. Musfiqur Rahman | Engineer & Activist',
    description: 'Bridging high-level AI research with grassroots activism. Discover the journey from Scouts to Scopus.',
    images: [
      {
        url: '/og-main.jpg', // You must create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Md. Musfiqur Rahman Portrait',
      },
    ],
  },
  // Twitter Card = How links look on X
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Musfiqur Rahman | Logic & Legacy',
    description: 'ML Engineer. Activist. Artist. Explore the timeline.',
    creator: '@Musfiqur_Tuhin', // Replace with actual handle if different
    images: ['/og-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Get this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G6KS54SZ1Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G6KS54SZ1Y');
          `}
        </Script>
        <ModeProvider>
          <Schema />
          <SmoothScroll />
          <Navbar />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>

          {/* Microsoft Clarity Script */}
          <Script id="clarity-script" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v6navnndxn");
          `}
          </Script>
        </ModeProvider>
      </body>
    </html>
  );
}
