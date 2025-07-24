import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VRCiOS Legal Documents',
    description: 'Privacy Policy and Terms of Service for VRCiOS Application',
};

function Navigation() {
    return (
        <nav className="border-b border-slate-200 bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Navigation Links */}
                    <div className="flex space-x-1">
                        <Link
                            href="/privacy"
                            className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                        >
                            Privacy Policy　/　
                        </Link>
                        <Link
                            href="/terms"
                            className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-slate-50`}>
        <Navigation />
        <main className="min-h-screen">
            <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-sm rounded-lg mt-4 mb-8">
                {children}
            </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white mt-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600">
                    <div className="mb-2 sm:mb-0">
                        <span>© {new Date().getFullYear()} VRCi Team. All rights reserved.</span>
                    </div>
                    <div className="flex space-x-6">
                        <Link
                            href="/privacy"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}