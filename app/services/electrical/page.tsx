"use client";

import { useState } from "react";
import {
  Zap,
  Home,
  Building,
  Factory,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Users,
  Calendar,
  ArrowRight,
  Lightbulb,
  Cpu,
  Battery,
  Wifi,
  Camera,
  Flame,
  AlertTriangle,
  Settings,
  Monitor,
  Plug,
  ChevronRight,
  Globe,
  Car,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function EnhancedElectricalServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const mainServices = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete electrical solutions for your home",
      features: [
        "Wiring & Rewiring",
        "Panel Upgrades",
        "Outlet Installation",
        "Lighting Design",
        "Smart Home Integration",
      ],
      startingPrice: "$150",
      category: "residential",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical systems for businesses",
      features: [
        "Office Wiring",
        "Security Systems",
        "Data Cabling",
        "Emergency Lighting",
        "Energy Audits",
      ],
      startingPrice: "$300",
      category: "commercial",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Factory,
      title: "Industrial Electrical",
      description: "Heavy-duty electrical solutions for industrial facilities",
      features: [
        "Motor Controls",
        "Power Distribution",
        "Automation Systems",
        "Maintenance",
        "Safety Compliance",
      ],
      startingPrice: "$500",
      category: "industrial",
      color: "from-purple-600 to-purple-500",
    },
  ];

  const specialtyServices = [
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Intelligent lighting solutions with automation",
      features: [
        "LED Installation",
        "Motion Sensors",
        "Dimmer Controls",
        "Color Changing Systems",
      ],
    },
    {
      icon: Camera,
      title: "Security Systems",
      description: "Comprehensive electrical security solutions",
      features: [
        "CCTV Installation",
        "Access Control",
        "Alarm Systems",
        "Intercom Systems",
      ],
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description: "Data and communication wiring",
      features: ["Cat6 Cabling", "Fiber Optic", "WiFi Setup", "Phone Systems"],
    },
    {
      icon: Battery,
      title: "Backup Power",
      description: "Uninterrupted power supply solutions",
      features: [
        "Generator Installation",
        "UPS Systems",
        "Battery Backup",
        "Transfer Switches",
      ],
    },
    {
      icon: Car,
      title: "EV Charging",
      description: "Electric vehicle charging stations",
      features: [
        "Home Chargers",
        "Commercial Stations",
        "Level 2 Installation",
        "Smart Charging",
      ],
    },
    {
      icon: Flame,
      title: "Safety & Code",
      description: "Electrical safety and code compliance",
      features: [
        "Inspections",
        "Code Updates",
        "GFCI Installation",
        "Arc Fault Protection",
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description:
        "Fully licensed electricians with comprehensive insurance coverage",
      stat: "100%",
      statLabel: "Compliance",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock availability for electrical emergencies",
      stat: "24/7",
      statLabel: "Availability",
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Highly trained professionals with years of experience",
      stat: "15+",
      statLabel: "Years Experience",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Dedicated to exceeding customer expectations",
      stat: "99%",
      statLabel: "Satisfaction Rate",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Outstanding service! They upgraded our entire electrical panel and installed smart switches throughout our home. Professional and clean work.",
      rating: 5,
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Mike Chen",
      role: "Restaurant Owner",
      content:
        "Crown Prince Electrical handled our commercial kitchen installation perfectly. They understood our needs and delivered on time and within budget.",
      rating: 5,
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Lisa Rodriguez",
      role: "Property Manager",
      content:
        "We use them for all our electrical maintenance across 15 properties. Reliable, professional, and always available when we need them.",
      rating: 5,
      avatar: "/api/placeholder/40/40",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 lg:pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-2xl blur opacity-30 animate-pulse" />
              </div>
            </div>

            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-6 px-4 py-2 text-sm font-medium">
              ⚡ Professional Electrical Services
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Power Your
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From smart home automation to industrial power systems, our
              certified electricians deliver cutting-edge electrical solutions
              with unmatched expertise and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-black font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/calculator" className="flex items-center gap-2">
                  Get Free Estimate <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 bg-transparent backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
              >
                <Link href="tel:555-0123" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Emergency: (555) 0123
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-700 mb-4 px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Electrical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential upgrades to complex industrial installations, we
              provide expert electrical services tailored to your specific needs
              and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`group border-2 border-gray-200 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                    hoveredService === service.title ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 font-medium">
                            Starting from
                          </span>
                          <span className="text-3xl font-bold text-yellow-600">
                            {service.startingPrice}
                          </span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-black font-bold py-3 transition-all duration-300 transform hover:scale-105">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-purple-100 text-purple-700 mb-4 px-4 py-2">
              Specialty Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Electrical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our cutting-edge electrical services designed for
              modern homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <ChevronRight className="h-4 w-4 text-yellow-600" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Electrical Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {feature.statLabel}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-4 px-4 py-2">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say.
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>

                      <blockquote className="text-lg text-white mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback className="bg-yellow-600 text-black font-bold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-slate-300">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
            <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-12">
            Get a free estimate today and discover why thousands of customers
            trust Crown Prince Electrical for all their electrical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg shadow-xl"
            >
              <Link href="/calculator" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Schedule Consultation
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent px-8 py-4 text-lg"
            >
              <Link href="tel:555-0123" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call Now: (555) 0123
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
