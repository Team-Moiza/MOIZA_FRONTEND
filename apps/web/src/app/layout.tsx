"use client"
import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header';
import { usePathname } from 'next/navigation';

const pretendard = localFont({
  src: "../../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHeaderVisible = !["/login"].includes(pathname);

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        {isHeaderVisible && <Header />}
        {isHeaderVisible && <Header />}
        {children}
      </body>
    </html>
  );
}
