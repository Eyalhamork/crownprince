"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, Briefcase, Users, Settings, HelpCircle, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "page" | "service" | "help" | "action";
  url: string;
  icon: React.ReactNode;
  keywords: string[];
}

// Static search index for the application
const searchIndex: SearchResult[] = [
  // Pages
  {
    id: "home",
    title: "Home",
    description: "Return to the main homepage",
    category: "page",
    url: "/",
    icon: <Home className="h-4 w-4" />,
    keywords: ["home", "main", "start", "landing"],
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn about Crown Prince Incorporated",
    category: "page",
    url: "/about",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["about", "company", "history", "team", "mission"],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    category: "page",
    url: "/contact",
    icon: <Users className="h-4 w-4" />,
    keywords: ["contact", "email", "phone", "location", "support"],
  },
  {
    id: "careers",
    title: "Careers",
    description: "View job opportunities and apply",
    category: "page",
    url: "/careers",
    icon: <Briefcase className="h-4 w-4" />,
    keywords: ["careers", "jobs", "employment", "hiring", "work"],
  },
  {
    id: "projects",
    title: "Projects Portfolio",
    description: "Browse our completed projects",
    category: "page",
    url: "/projects",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["projects", "portfolio", "work", "showcase", "gallery"],
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Frequently asked questions",
    category: "help",
    url: "/faq",
    icon: <HelpCircle className="h-4 w-4" />,
    keywords: ["faq", "questions", "help", "answers", "support"],
  },
  {
    id: "support",
    title: "Support Center",
    description: "Get help and support",
    category: "help",
    url: "/support",
    icon: <HelpCircle className="h-4 w-4" />,
    keywords: ["support", "help", "assistance", "ticket", "issue"],
  },
  {
    id: "docs",
    title: "Documentation",
    description: "Technical documentation and guides",
    category: "help",
    url: "/docs",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["docs", "documentation", "guides", "manual", "instructions"],
  },

  // Services
  {
    id: "services",
    title: "All Services",
    description: "Overview of all our services",
    category: "service",
    url: "/services",
    icon: <Briefcase className="h-4 w-4" />,
    keywords: ["services", "offerings", "solutions"],
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description: "Professional electrical installations and repairs",
    category: "service",
    url: "/services/electrical",
    icon: <Briefcase className="h-4 w-4" />,
    keywords: ["electrical", "wiring", "power", "lighting", "panel", "circuits"],
  },
  {
    id: "construction",
    title: "Construction Services",
    description: "Commercial and residential construction",
    category: "service",
    url: "/services/construction",
    icon: <Briefcase className="h-4 w-4" />,
    keywords: ["construction", "building", "renovation", "remodeling", "contractor"],
  },
  {
    id: "logistics",
    title: "Logistics Services",
    description: "Supply chain and logistics solutions",
    category: "service",
    url: "/services/logistics",
    icon: <Briefcase className="h-4 w-4" />,
    keywords: ["logistics", "shipping", "delivery", "supply chain", "warehouse"],
  },

  // Actions
  {
    id: "quote",
    title: "Request Quote",
    description: "Get a free quote for your project",
    category: "action",
    url: "/quote",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["quote", "estimate", "pricing", "cost", "free"],
  },
  {
    id: "calculator",
    title: "Cost Calculator",
    description: "Calculate project costs",
    category: "action",
    url: "/calculator",
    icon: <Settings className="h-4 w-4" />,
    keywords: ["calculator", "cost", "estimate", "budget", "pricing"],
  },
  {
    id: "login",
    title: "Login",
    description: "Sign in to your account",
    category: "action",
    url: "/auth/login",
    icon: <Users className="h-4 w-4" />,
    keywords: ["login", "signin", "account", "portal"],
  },
  {
    id: "signup",
    title: "Sign Up",
    description: "Create a new account",
    category: "action",
    url: "/auth/signup",
    icon: <Users className="h-4 w-4" />,
    keywords: ["signup", "register", "create account", "join"],
  },

  // Legal
  {
    id: "privacy",
    title: "Privacy Policy",
    description: "Our privacy and data protection policy",
    category: "page",
    url: "/privacy",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["privacy", "policy", "data", "gdpr", "protection"],
  },
  {
    id: "terms",
    title: "Terms of Service",
    description: "Terms and conditions",
    category: "page",
    url: "/terms",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["terms", "conditions", "legal", "agreement"],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    description: "How we use cookies",
    category: "page",
    url: "/cookies",
    icon: <FileText className="h-4 w-4" />,
    keywords: ["cookies", "tracking", "privacy"],
  },
];

const categoryColors: Record<string, string> = {
  page: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  service: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  help: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  action: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
};

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const scored = searchIndex.map((item) => {
      let score = 0;

      // Title match (highest priority)
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 10;
        if (item.title.toLowerCase().startsWith(lowerQuery)) {
          score += 5;
        }
      }

      // Description match
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }

      // Keyword match
      const keywordMatches = item.keywords.filter((k) => k.includes(lowerQuery)).length;
      score += keywordMatches * 3;

      return { ...item, score };
    });

    const filtered = scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, []);

  // Keyboard shortcut to open search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search when query changes
  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(results.length, 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          navigateToResult(results[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const navigateToResult = (result: SearchResult) => {
    router.push(result.url);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="gap-0 p-0 outline-none sm:max-w-[550px]">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle className="sr-only">Search</DialogTitle>
            <div className="flex items-center border-b pb-4">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Input
                ref={inputRef}
                placeholder="Search pages, services, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex h-10 w-full border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {query && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </DialogHeader>

          <div className="max-h-[300px] overflow-y-auto px-2 pb-2">
            {query && results.length === 0 && (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No results found for "{query}"
              </div>
            )}

            {!query && (
              <div className="py-4 text-center text-sm text-muted-foreground">
                Start typing to search...
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-1">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    className={cn(
                      "flex w-full items-center rounded-sm px-3 py-2 text-left text-sm outline-none transition-colors",
                      index === selectedIndex
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent/50"
                    )}
                    onClick={() => navigateToResult(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                      {result.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{result.title}</span>
                        <Badge
                          variant="secondary"
                          className={cn("text-[10px] px-1.5 py-0", categoryColors[result.category])}
                        >
                          {result.category}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center border-t px-3 py-2">
            <div className="flex gap-2 text-xs text-muted-foreground">
              <kbd className="rounded border bg-muted px-1.5 py-0.5">↑↓</kbd>
              <span>Navigate</span>
              <kbd className="rounded border bg-muted px-1.5 py-0.5">↵</kbd>
              <span>Select</span>
              <kbd className="rounded border bg-muted px-1.5 py-0.5">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
