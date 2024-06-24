import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";
import Drawer from "./components/Drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SA - Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[auto_1fr_auto] h-screen`}
      >
        <Drawer>{children}</Drawer>
        <Footer />
      </body>
      {/* <body className={inter.className}>
        <Drawer> {children}</Drawer>
        <Footer />
      </body>  */}
    </html>
  );
}