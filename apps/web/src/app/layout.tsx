import Header from '../components/Header';
import './globals.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        {<Header />}
        {children}
      </body>
    </html>
  );
}
