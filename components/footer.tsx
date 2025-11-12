"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  ArrowUp,
  ExternalLink,
  Clock,
  Award,
  Shield,
} from "lucide-react";

// Simple CookieConsent component if not available
const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white p-4 z-50 border-t border-white/10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-medium transition-colors duration-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Electrical Services",
      href: "/services/electrical",
      description: "Professional electrical solutions",
    },
    {
      name: "Construction",
      href: "/services/construction",
      description: "Quality construction projects",
    },
    {
      name: "Logistics & Warehousing",
      href: "/services/logistics",
      description: "Efficient supply chain management",
    },
    {
      name: "Emergency Services",
      href: "/emergency",
      description: "24/7 emergency support",
      badge: "24/7",
    },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers", badge: "We're Hiring!" },
    { name: "News & Updates", href: "/news" },
    { name: "Certifications", href: "/certifications" },
  ];

  const resources = [
    { name: "Project Calculator", href: "/calculator" },
    { name: "Client Portal", href: "/portal", external: true },
    { name: "FAQ", href: "/faq" },
    { name: "Support Center", href: "/support" },
    { name: "Documentation", href: "/docs" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/crownprinceinc",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/crownprinceinc",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      href: "https://linkedin.com/company/crownprinceinc",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/crownprinceinc",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top Section with Company Info */}
          <div className="mb-16 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-3 mb-6 group"
                >
                  <div className="relative">
                    <img
                      src="/crown-logo.png"
                      alt="Crown Prince Incorporated Logo"
                      className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-400/30 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl leading-tight tracking-tight">
                      Crown Prince
                    </span>
                    <span className="text-yellow-500 text-sm font-semibold tracking-widest">
                      INCORPORATED
                    </span>
                  </div>
                </Link>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                  Delivering excellence in electrical, construction, and
                  logistics services with the precision and care worthy of
                  royalty. Your trusted partner for comprehensive business
                  solutions.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span>ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-yellow-500" />
                    <span>Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>25+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-white font-semibold">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="group relative p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                        <div className="absolute -inset-1 bg-yellow-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Services */}
            <div className="group">
              <h3 className="text-white font-bold text-xl mb-8 relative">
                Services
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-20 transition-all duration-300" />
              </h3>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name} className="group/item">
                    <Link
                      href={item.href}
                      className="flex items-start justify-between text-gray-300 hover:text-yellow-400 transition-all duration-300 group-hover/item:translate-x-1"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </div>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="group">
              <h3 className="text-white font-bold text-xl mb-8 relative">
                Company
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-20 transition-all duration-300" />
              </h3>
              <ul className="space-y-4">
                {company.map((item) => (
                  <li key={item.name} className="group/item">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-gray-300 hover:text-yellow-400 transition-all duration-300 group-hover/item:translate-x-1"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="group">
              <h3 className="text-white font-bold text-xl mb-8 relative">
                Resources
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-20 transition-all duration-300" />
              </h3>
              <ul className="space-y-4">
                {resources.map((item) => (
                  <li key={item.name} className="group/item">
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-yellow-400 transition-all duration-300 group-hover/item:translate-x-1"
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.external && (
                        <ExternalLink className="h-3 w-3 ml-2 opacity-60" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="group">
              <h3 className="text-white font-bold text-xl mb-8 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-20 transition-all duration-300" />
              </h3>
              <div className="space-y-6">
                <div className="group/contact">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/contact:border-yellow-500/30 group-hover/contact:bg-white/10 transition-all duration-300">
                    <Phone className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Call Us 24/7</p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group/contact">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/contact:border-yellow-500/30 group-hover/contact:bg-white/10 transition-all duration-300">
                    <Mail className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Email Us</p>
                      <a
                        href="mailto:info@crownprinceinc.com"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        info@crownprinceinc.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group/contact">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/contact:border-yellow-500/30 group-hover/contact:bg-white/10 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">
                        Visit Our Office
                      </p>
                      <p className="text-gray-300">
                        Tubman blvd, Crown Prince Plaza
                      </p>
                      <p className="text-gray-300">Old Congo Town, Monrovia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-2">
                  © {new Date().getFullYear()} Crown Prince Incorporated. All
                  rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Licensed, Bonded & Insured • Serving clients nationwide since
                  1998
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 hover:underline decoration-yellow-400"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 hover:underline decoration-yellow-400"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 hover:underline decoration-yellow-400"
                >
                  Cookie Policy
                </Link>
                {/* <Link
                  href="/accessibility"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 hover:underline decoration-yellow-400"
                >
                  Accessibility
                </Link> */}
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          )}
        </div>

        {/* Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  );
}
