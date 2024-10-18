import type { Metadata } from "next";
import Header from "@/components/header/Header";
// import { DM_Sans } from "next/font/google";
// import clsx from "clsx";
// {clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}
import "./globals.css";

// const dmSans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sass Landing Page",
  description: "Product That we can use it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] min-h-screen bg-white ">
        <Header />
        {children}
      </body>
    </html>
  );
}
