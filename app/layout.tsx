import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";
import { AuthProvider } from "@/components/auth/auth-context";
import { DataStoreProvider } from "@/lib/data-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crown Prince Incorporated - Premium Multi-Service Solutions",
  description:
    "Professional electrical, construction, and logistics services with royal-grade quality and reliability.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DataStoreProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <ChatbotWidget />
          </DataStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
