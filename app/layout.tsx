import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
