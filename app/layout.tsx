import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuitUp",
  description: "Merging contemporary design with timeless elegance.",
  
  icons: {
    icon: '/favicon.png',
  }, // ADD favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

/* 
    ADD FAVICON:
    <head>
      <link rel="shortcut icon" href="/article-img1.jpg" type="image/x-icon" />
    </head>
*/