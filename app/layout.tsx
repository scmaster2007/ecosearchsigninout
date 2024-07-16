import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoSearch",
  description: "Search the web and trees get planted",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
