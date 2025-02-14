// src/app/layout.js
// "use client";
import { Roboto_Slab, Roboto, Afacad , Open_Sans, Ysabeau_SC, Ubuntu, Inter, Playfair_Display, Yellowtail} from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";

const yellowTail = Yellowtail({
  subsets: ["latin"],
  variable: "--font-yellowtail",
  weight: ['400']
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: [ '400', '700', '900']
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['100', '300', '400', '700', '900']
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--roboto-slab",
  weight: ['100', '300', '400', '700', '900']
});
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--afacad",
  weight: [ '400', '700']
});
const ysabeau = Ysabeau_SC({
  subsets: ["latin"],
  variable: "--ysabeau",
  weight: ['400', '700']
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ['100', '300', '400', '700', '900']
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans",
  weight: [ '300', '400', '700']
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--ubuntu",
  weight: ['300', '400', '700']
});
export const metadata = {
  title: {
    default: "Abhishek Singh | Full Stack Developer & MERN Expert",
    template: `%s | Abhishek Singh`,
  },
  description: "Abhishek Singh is a passionate Full Stack Developer specializing in React, Next.js, Django, and AWS. Explore his projects and expertise at Abhishekworks.com.",
  verification: {
  },
  openGraph: {
    title: "Abhishek Singh | Full Stack Developer & MERN Expert",
    description: "Abhishek Singh is a passionate Full Stack Developer specializing in React, Next.js, Django, and AWS. Explore his projects and expertise at Abhishekworks.com.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoSlab.variable} ${roboto.variable} ${afacad.variable} ${openSans.variable} ${ysabeau.variable} ${ubuntu.variable} ${inter.variable} ${playfairDisplay.variable} ${yellowTail.variable} dark:bg-[#0f0017] overflow-x-hidden`} suppressHydrationWarning >
        <Providers>
        <NextUIProvider>        
          {children}
        </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
