"use client";

import { useEffect, useState } from "react";
import { RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ServiceWorkerRegister() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service Worker registered:", reg);
          setRegistration(reg);

          // Check for updates
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  // New content available
                  setUpdateAvailable(true);
                  toast({
                    title: "Update Available",
                    description: "A new version is available. Click to update.",
                    action: (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleUpdate}
                        className="gap-1"
                      >
                        <RefreshCw className="h-3 w-3" />
                        Update
                      </Button>
                    ),
                  });
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });

      // Listen for controller changes
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    }
  }, [toast]);

  const handleUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  };

  // Online/offline status indicator
  useEffect(() => {
    const handleOnline = () => {
      toast({
        title: "Back Online",
        description: "Your connection has been restored.",
        duration: 3000,
      });
    };

    const handleOffline = () => {
      toast({
        title: "You're Offline",
        description: "Some features may be limited.",
        variant: "destructive",
        duration: 5000,
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [toast]);

  // This component doesn't render anything visible
  // It just handles service worker registration
  return null;
}

// Network status indicator component
export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-yellow-600 text-black text-center py-2 text-sm font-medium">
      You are currently offline. Some features may be limited.
    </div>
  );
}
