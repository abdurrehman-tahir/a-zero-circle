import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'A Zero Circle | Authentic Korean Skincare in Pakistan',
  description: 'Discover authentic Korean skincare in Pakistan, carefully selected for ingredient safety, halal-conscious concerns, Pakistani skin needs, and trusted K-beauty routines.',
  keywords: ['Korean skincare Pakistan','authentic Korean skincare Pakistan','K-beauty Pakistan','Korean beauty products Pakistan','original Korean skincare','COSRX Pakistan','Beauty of Joseon Pakistan','Anua Pakistan','SKIN1004 Pakistan','halal skincare Pakistan','skincare for Pakistani skin','ingredient-safe skincare Pakistan'],
  openGraph: { title: 'A Zero Circle | Authentic Korean Skincare in Pakistan', description: 'Discover authentic Korean skincare in Pakistan, carefully selected for ingredient safety, halal-conscious concerns, Pakistani skin needs, and trusted K-beauty routines.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='en'><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>;
}
