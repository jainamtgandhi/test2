import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Hey It\'s Jainam',
  description: 'Strategic Product Marketing Manager specializing in customer research, market analysis, and go-to-market strategy. Helping B2B companies accelerate growth through data-driven insights.',
  keywords: ['product marketing', 'customer research', 'market analysis', 'go-to-market strategy', 'B2B marketing'],
  authors: [{ name: 'Jainam Gandhi' }],
  creator: 'Jainam Gandhi',
  publisher: 'Hey It\'s Jainam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://heyitsjainam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hey It\'s Jainam - Product Marketing Manager',
    description: 'Strategic Product Marketing Manager specializing in customer research, market analysis, and go-to-market strategy.',
    url: 'https://heyitsjainam.com',
    siteName: 'Hey It\'s Jainam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hey It\'s Jainam - Product Marketing Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey It\'s Jainam - Product Marketing Manager',
    description: 'Strategic Product Marketing Manager specializing in customer research, market analysis, and go-to-market strategy.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jainam Gandhi',
              jobTitle: 'Product Marketing Manager',
              description: 'Strategic Product Marketing Manager specializing in customer research, market analysis, and go-to-market strategy.',
              url: 'https://heyitsjainam.com',
              sameAs: [
                'https://www.linkedin.com/in/jainamtgandhi',
              ],
              knowsAbout: [
                'Product Marketing',
                'Customer Research',
                'Market Analysis',
                'Go-to-Market Strategy',
                'B2B Marketing',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
