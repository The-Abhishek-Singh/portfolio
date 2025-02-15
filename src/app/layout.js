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
    default: "Abhishek Singh | Full Stack Developer | MERN, Next.js, Python, AWS",
    template: `%s | Abhishek Singh`,
  },
  description: "Abhishek Singh is a skilled Full Stack Developer with expertise in MERN, Next.js, Python, Django, and AWS. With over a year of experience, he builds scalable web applications, including Careertronics and UI clones. Open to global collaborations and full-time opportunities. Explore his work at Abhishekworks.com.",
  verification: {
    // Add any necessary verification meta tags (Google, Bing, etc.)
  },
  openGraph: {
    title: "Abhishek Singh | Full Stack Developer & MERN Expert",
    description: "Abhishek Singh specializes in MERN, Next.js, Python, Django, and AWS. He has built scalable projects, including Careertronics. Open to collaborations worldwide. Discover his work at Abhishekworks.com.",
    type: "website",
    url: "https://abhishekworks.com",
    images: [
      {
        url: "https://abhishekworks.com/home.png", // Added an actual Open Graph image for better SEO
        width: 1200,
        height: 630,
        alt: "Abhishek Singh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Replace with your actual X (Twitter) handle if you want better visibility
    title: "Abhishek Singh | Full Stack Developer & MERN Expert",
    description: "Abhishek Singh builds modern web apps using MERN, Next.js, Python, and AWS. Explore his work at Abhishekworks.com.",
    images: ["https://abhishekworks.com/AbhishekX.png"], // Ensure you have a Twitter-specific preview image
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
