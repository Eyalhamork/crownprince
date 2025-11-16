"use client";

import { ServiceWorkerRegister, NetworkStatus } from "./service-worker-register";
import { PWAInstallPrompt } from "./pwa-install-prompt";
import { Toaster } from "@/components/ui/toaster";

export function PWAProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServiceWorkerRegister />
      <PWAInstallPrompt />
      <NetworkStatus />
      <Toaster />
    </>
  );
}
