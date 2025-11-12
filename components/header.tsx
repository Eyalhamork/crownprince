"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Wrench,
  Calculator,
  FolderOpen,
  Users,
  Mail,
  Shield,
  Settings,
  User,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/components/auth/auth-context";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const getNavIcon = (name: string) => {
    const iconMap = {
      Services: Wrench,
      Calculator: Calculator,
      Projects: FolderOpen,
      About: Users,
      Contact: Mail,
      Admin: Shield,
      Manager: Settings,
      Staff: User,
      Portal: CreditCard,
    };
    return iconMap[name as keyof typeof iconMap];
  };

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Calculator", href: "/calculator" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    ...(user?.role === "admin" ? [{ name: "Admin", href: "/admin" }] : []),
    ...(user?.role === "manager"
      ? [{ name: "Manager", href: "/manager" }]
      : []),
    ...(user?.role === "staff" ? [{ name: "Staff", href: "/staff" }] : []),
    ...(user?.role === "client" ? [{ name: "Portal", href: "/portal" }] : []),
  ];

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-600/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Made Bigger */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/crown-logo.png"
                alt="Crown Prince Logo"
                width={48}
                height={48}
                className="object-contain group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-tight">
                Crown Prince
              </span>
              <span className="text-yellow-600 text-sm font-medium">
                INCORPORATED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const IconComponent = getNavIcon(item.name);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium flex items-center space-x-2 group"
                >
                  {IconComponent && (
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  )}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Authentication-aware Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">
                  Welcome, {user?.firstName}
                </span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
                >
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black border-yellow-600/20 px-6"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => {
                  const IconComponent = getNavIcon(item.name);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-600 transition-colors duration-300 font-medium text-lg flex items-center space-x-3 group p-3 rounded-lg hover:bg-yellow-600/10 border border-transparent hover:border-yellow-600/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                      )}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-yellow-600/20">
                  {isAuthenticated ? (
                    <Button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent w-full"
                    >
                      Logout
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent w-full"
                      >
                        <Link
                          href="/auth/login"
                          onClick={() => setIsOpen(false)}
                        >
                          Login
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold w-full"
                      >
                        <Link href="/quote" onClick={() => setIsOpen(false)}>
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
