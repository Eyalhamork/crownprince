"use client";

import { useState } from "react";
import {
  Zap,
  Hammer,
  Truck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Clock,
  Shield,
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
import Link from "next/link";

const services = [
  {
    id: "construction",
    icon: Hammer,
    title: "Construction",
    subtitle: "Premium Building Solutions",
    description:
      "Transform your vision into reality with our expert construction and renovation services, delivering unmatched quality and craftsmanship.",
    features: [
      "Residential Construction",
      "Commercial Renovations",
      "Custom Architecture",
      "Project Management",
      "Quality Assurance",
      "Timeline Guarantee",
    ],
    startingPrice: "5,000",
    image: "/construction-cover-home.png?height=400&width=600",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "from-orange-50 to-red-50",
    popular: false,
    stats: { projects: "500+", satisfaction: "99%", avgTime: "45 days" },
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Services",
    subtitle: "Powerful & Reliable Systems",
    description:
      "Professional electrical solutions engineered for safety, efficiency, and reliability across residential, commercial, and industrial sectors.",
    features: [
      "Smart Home Automation",
      "Commercial Systems",
      "Industrial Controls",
      "Emergency Services",
      "Energy Efficiency",
      "24/7 Support",
    ],
    startingPrice: "150",
    image: "/electrical-cover-home.png?height=400&width=600",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 to-cyan-50",
    popular: true,
    stats: { projects: "1000+", satisfaction: "98%", avgTime: "3 days" },
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Warehousing",
    subtitle: "Seamless Supply Chain",
    description:
      "Comprehensive storage and transportation solutions designed to optimize your supply chain and streamline operations with precision.",
    features: [
      "Climate-Controlled Storage",
      "Real-Time Tracking",
      "Inventory Analytics",
      "Same-Day Delivery",
      "Custom Solutions",
      "Security Systems",
    ],
    startingPrice: "200",
    image: "/logistics-cover-home.png?height=400&width=600",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgGradient: "from-green-50 to-emerald-50",
    popular: false,
    stats: { projects: "750+", satisfaction: "97%", avgTime: "1 day" },
  },
];

const benefits = [
  {
    icon: Target,
    title: "Precision Delivery",
    desc: "Every project completed to exact specifications",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "We respect your timeline and deliver as promised",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Rigorous testing and quality checks at every stage",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    desc: "Only the finest materials and latest technologies",
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-600 mr-2" />
            <span className="text-sm font-semibold text-yellow-800">
              Our Premium Services
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Royal Treatment for
            <span className="block bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Every Service
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            From electrical installations to major construction projects and
            logistics solutions, we deliver excellence with the precision and
            care worthy of royalty.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;

            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative ${
                  isHovered ? "shadow-2xl shadow-yellow-500/20 scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold px-3 py-1 shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10 pb-0">
                  {/* Service Image */}
                  <div className="w-full h-56 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm font-semibold text-gray-500">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {service.stats.projects}
                      </div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {service.stats.satisfaction}
                      </div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {service.stats.avgTime}
                      </div>
                      <div className="text-xs text-gray-600">Avg Time</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and CTA */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-sm text-gray-500">
                          Starting from
                        </span>
                        <div className="flex items-baseline">
                          <span className="text-3xl font-black text-gray-900">
                            $
                          </span>
                          <span
                            className={`text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                          >
                            {service.startingPrice}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">
                          Response Time
                        </div>
                        <div className="text-sm font-semibold text-gray-700">
                          Within 24hrs
                        </div>
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn border-0`}
                    >
                      <Link href={`/services/${service.id}`}>
                        <span className="flex items-center justify-center">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-amber-600/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and create a tailored solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  <span className="flex items-center">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-gray-700 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
