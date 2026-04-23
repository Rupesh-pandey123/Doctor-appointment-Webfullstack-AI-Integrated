import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Medickit- Doctors appointment app",
  description: "connect with doctors anytime , anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    appearance={{
      baseTheme: dark,
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
