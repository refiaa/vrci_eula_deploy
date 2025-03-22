import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VRCiOS Legal Documents',
    description: 'Privacy Policy and Terms of Service for VRCiOS Application',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            {children}
        </div>
        </body>
        </html>
    );
}