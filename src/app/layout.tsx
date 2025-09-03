import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";


const gilroy = localFont({
  src: [
    {
      path: "./fonts/SVNGiroyLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SVNGiroyBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});



export const metadata: Metadata = {
  title: "Ecommerce website",
  description: "Ecommerce website",

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="fr" className={`${gilroy.variable}`}>

      <body>
        {/* <CustomCursor /> */}

        {children}</body>
    </html>
  );
}
