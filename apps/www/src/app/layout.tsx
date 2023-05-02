import { Metadata } from 'next';
import { Noto_Sans_Display, Noto_Sans_Mono, Noto_Serif_Display } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_Display({ subsets: ['latin'], variable: '--font-noto-sans-display', weight: 'variable' });
const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], variable: '--font-noto-sans-mono', weight: 'variable' });
const notoSerif = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Digital Talent - Province of British Columbia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSansMono.variable} ${notoSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
