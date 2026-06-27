import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zam Zam Door | Automatic Door Solutions UAE & GCC",
  description: "Leading supplier and installer of automatic doors, garage doors, gates, roller shutters, and industrial door solutions across UAE and GCC.",
  keywords: "automatic doors, garage doors, rolling shutters, automatic gates, UAE, GCC, Dubai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
