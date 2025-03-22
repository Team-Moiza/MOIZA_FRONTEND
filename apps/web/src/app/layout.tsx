import Header from "../components/layouts/Header";
import "./globals.css";
import localFont from "next/font/local";
import { Provider } from "./Provider";
import { Metadata } from "next";

const pretendard = localFont({
  src: "../../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
	title: "모이자",
	description: "4대 소마고 이력서 공유 사이트",
	icons: {
		icon: "/Moiza.jpg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
