import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexAI — AI Platform",
  description: "NexAI UI recreated in Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
