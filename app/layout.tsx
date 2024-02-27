import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google'
import "./globals.css";
const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotest'
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
         <body className={`${interFont.variable} ${spaceGrotesk.variable}`}>
                        {children}
                    </body>
    </html>
  );
}
