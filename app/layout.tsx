import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import NavigationBar from "@/components/NavigationBar";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";


// const inter = Inter({ subsets: [""] });
const myFont = localFont({ src: '../public/lora.ttf' })


export const metadata: Metadata = {
  title: "Zakwas",
  description: "Zduńska Wola, pizza, pizza neapolitańska, pizzeria Zduńska Wola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"} style={{"scrollBehavior": "smooth"}}>
      <body className={myFont.className}>
        <Providers>
          <NavigationBar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
