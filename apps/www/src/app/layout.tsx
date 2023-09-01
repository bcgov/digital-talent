import { Metadata } from 'next';
import { Montserrat, Noto_Sans_Display, Noto_Sans_Mono, Noto_Serif_Display } from 'next/font/google';
import Analytics from '../common/components/analytics.component';
import { wrapTitle } from '../common/utils/wrap-title.util';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: 'variable' });
const notoSans = Noto_Sans_Display({ subsets: ['latin'], variable: '--font-noto-sans-display', weight: 'variable' });
const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], variable: '--font-noto-sans-mono', weight: 'variable' });
const notoSerif = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: wrapTitle('Digital Talent'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Note: smooth scrolling introduces a scroll bug where it doesn't scroll all the way to the top of the page
    // when navigatingd between internal links. This is addressed in header component by temporarily disabling smooth scroll when
    // navigating between pages
    <html className="scroll-smooth " lang="en">
      <body
        className={`${montserrat.variable} ${notoSans.variable} ${notoSansMono.variable} ${notoSerif.variable} font-sans`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
