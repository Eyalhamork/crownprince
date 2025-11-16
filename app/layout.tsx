import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";
import { AuthProvider } from "@/components/auth/auth-context";
import { DataStoreProvider } from "@/components/data/data-store-context";
import { PreferencesProvider } from "@/components/preferences/preferences-context";
import { PWAProvider } from "@/components/pwa/pwa-provider";

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
      <body className="font-sans antialiased">
        <AuthProvider>
          <DataStoreProvider>
            <PreferencesProvider>
              <PWAProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <ChatbotWidget />
              </PWAProvider>
            </PreferencesProvider>
          </DataStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
