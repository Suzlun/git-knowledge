import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
    weight: ['400', '500', '600', '700', '800'],
});

const montserratAlternates = Montserrat_Alternates({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat-alternates',
    weight: ['400', '500', '600', '700', '800'],
});

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Git Knowledge',
    description: 'Git Knowledge Base and Tech Blog Framework',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='ja'
            suppressHydrationWarning>
            <body
                className={`${montserrat.variable} ${montserratAlternates.variable} ${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <main
                    style={{
                        paddingTop: '3.5rem',
                        minHeight: 'calc(100vh - 250px)',
                    }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
