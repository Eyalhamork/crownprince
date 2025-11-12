"use client";

import React, { useState, useEffect } from "react";
import {
  Crown,
  Home,
  ArrowRight,
  Sparkles,
  Search,
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Clock,
} from "lucide-react";

const NotFoundPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const quickLinks = [
    { label: "Our Services", href: "/services", icon: Shield },
    { label: "Portfolio", href: "/portfolio", icon: Award },
    { label: "Contact Us", href: "/contact", icon: Phone },
    { label: "Get Quote", href: "/calculator", icon: Clock },
  ];

  const services = [
    "Electrical Services",
    "Construction",
    "Logistics & Warehousing",
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 py-12 lg:py-40 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-600/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-600/10 to-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Crown Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <Crown className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-spin" />
                <Sparkles className="absolute -bottom-4 -left-4 h-6 w-6 text-yellow-300 animate-bounce" />
              </div>
            </div>

            {/* 404 Display */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text mb-4 leading-none">
                404
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mb-8" />
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                This Page Has Gone
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Beyond Our Kingdom
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Even royalty sometimes takes a wrong turn. The page you're
                looking for doesn't exist in our domain, but don't worry - we'll
                help you find your way back to our royal services.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="max-w-md mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              {searchQuery && (
                <div className="mt-4 max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <p className="text-gray-300 text-sm mb-2">
                      Popular searches:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-xs hover:bg-yellow-600/30 transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Home className="mr-2 h-5 w-5" />
                  Return Home
                </button>
                <button className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Support
                </button>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <div
                    key={link.label}
                    className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {link.label}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-auto group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFoundPage;
