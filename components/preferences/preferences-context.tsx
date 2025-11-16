"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getStorageItem, setStorageItem } from "@/lib/local-storage";

export interface UserPreferences {
  // Display preferences
  theme: "light" | "dark" | "system";
  sidebarCollapsed: boolean;
  compactMode: boolean;
  showAnimations: boolean;

  // Notification preferences
  emailNotifications: boolean;
  pushNotifications: boolean;
  soundEnabled: boolean;
  notifyOnTaskDue: boolean;
  notifyOnProjectUpdate: boolean;
  notifyOnNewMessage: boolean;
  notifyOnQuoteStatus: boolean;

  // Dashboard preferences
  defaultDashboardView: "grid" | "list" | "kanban";
  itemsPerPage: number;
  autoRefreshInterval: number; // in seconds, 0 = disabled

  // Regional preferences
  dateFormat: "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD";
  timeFormat: "12h" | "24h";
  currency: "USD" | "EUR" | "GBP" | "CAD";
  language: "en" | "es" | "fr";

  // Privacy preferences
  showOnlineStatus: boolean;
  shareActivityStatus: boolean;
}

const defaultPreferences: UserPreferences = {
  theme: "system",
  sidebarCollapsed: false,
  compactMode: false,
  showAnimations: true,

  emailNotifications: true,
  pushNotifications: true,
  soundEnabled: true,
  notifyOnTaskDue: true,
  notifyOnProjectUpdate: true,
  notifyOnNewMessage: true,
  notifyOnQuoteStatus: true,

  defaultDashboardView: "grid",
  itemsPerPage: 10,
  autoRefreshInterval: 0,

  dateFormat: "MM/DD/YYYY",
  timeFormat: "12h",
  currency: "USD",
  language: "en",

  showOnlineStatus: true,
  shareActivityStatus: true,
};

interface PreferencesContextType {
  preferences: UserPreferences;
  updatePreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  resetPreferences: () => void;
  isLoading: boolean;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

const STORAGE_KEY = "user_preferences";

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(true);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedPreferences = getStorageItem<UserPreferences>(STORAGE_KEY, defaultPreferences);
    setPreferences({ ...defaultPreferences, ...savedPreferences });
    setIsLoading(false);
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEY, preferences);
    }
  }, [preferences, isLoading]);

  // Apply theme preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyTheme = (theme: UserPreferences["theme"]) => {
      const root = document.documentElement;

      if (theme === "system") {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", systemDark);
      } else {
        root.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme(preferences.theme);

    // Listen for system theme changes if using system theme
    if (preferences.theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [preferences.theme]);

  const updatePreference = <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  const value: PreferencesContextType = {
    preferences,
    updatePreference,
    updatePreferences,
    resetPreferences,
    isLoading,
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}

// Helper hook for formatted dates based on user preferences
export function useFormattedDate() {
  const { preferences } = usePreferences();

  const formatDate = (date: Date | string): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    switch (preferences.dateFormat) {
      case "DD/MM/YYYY":
        return `${day}/${month}/${year}`;
      case "YYYY-MM-DD":
        return `${year}-${month}-${day}`;
      case "MM/DD/YYYY":
      default:
        return `${month}/${day}/${year}`;
    }
  };

  const formatTime = (date: Date | string): string => {
    const d = new Date(date);

    if (preferences.timeFormat === "24h") {
      return d.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
    }

    return d.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "2-digit" });
  };

  const formatDateTime = (date: Date | string): string => {
    return `${formatDate(date)} ${formatTime(date)}`;
  };

  const formatCurrency = (amount: number): string => {
    const symbols: Record<string, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      CAD: "C$",
    };

    const symbol = symbols[preferences.currency] || "$";
    return `${symbol}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return { formatDate, formatTime, formatDateTime, formatCurrency };
}
