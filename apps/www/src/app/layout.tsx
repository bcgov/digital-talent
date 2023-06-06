import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = localFont({
  src: '../common/fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
  weight: 'variable',
});
const notoSans = localFont({
  src: '../common/fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf',
  variable: '--font-noto-sans-display',
  weight: 'variable',
});
const notoSansMono = localFont({
  src: '../common/fonts/NotoSansMono-VariableFont_wdth,wght.ttf',
  variable: '--font-noto-sans-mono',
  weight: 'variable',
});
const notoSerif = localFont({
  src: '../common/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf',
  variable: '--font-noto-serif-display',
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Digital Talent - Province of British Columbia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body
        className={`${montserrat.variable} ${notoSans.variable} ${notoSansMono.variable} ${notoSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
