import type { Metadata } from "next";
import { Inter, Space_Grotesk ,Playfair_Display,Bree_Serif} from 'next/font/google'
import "./globals.css";
const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})
const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bree'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotest'
})
const PlayfairDisplay = Playfair_Display({
  subsets: ['cyrillic'],
  weight: ['600'],
  variable: '--font-playfairDisplay'
})

export const metadata: Metadata = {
  title: "Demo Real Estate",
  description: "This Project is a Demo Real Estate Project | Vishal Solanki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* by providing them here now i can access these varibale in global css or any other css or page */}
         <body className={`${interFont.variable} ${spaceGrotesk.variable} ${PlayfairDisplay.variable} ${breeSerif.variable}`}>
                        {children}
                    </body>
    </html>
  );
}
