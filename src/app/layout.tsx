import type { Metadata } from "next";
import { Inter, Source_Sans_3, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: ["300", "400"],
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson-text",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ruang Esensi Studio - Minimalist Design, Maximum Comfort",
  description:
    "Transform your home into a stress-free sanctuary with authentic Japandi interior design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSansPro.variable} ${crimsonText.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
