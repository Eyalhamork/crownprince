import {
  Zap,
  Hammer,
  Truck,
  ArrowRight,
  Star,
  CheckCircle,
  Crown,
  Award,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Sparkles,
  Eye,
  Phone,
  Calendar,
  Download,
  Building,
  Wrench,
  Home,
  Factory,
  Gauge,
  Lightbulb,
  Settings,
  Target,
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
import Link from "next/link";

export default function ServicesPage() {
  const mainServices = [
    {
      id: "construction",
      icon: Hammer,
      title: "Construction Mastery",
      subtitle: "Building Dreams Into Reality",
      description:
        "Premier construction and renovation services that transform spaces with meticulous attention to detail and superior craftsmanship.",
      detailedDescription:
        "From concept to completion, our construction team delivers projects that exceed expectations while maintaining the highest standards of quality and safety.",
      features: [
        "Custom Home Construction",
        "Commercial Building Projects",
        "Complete Renovations",
        "Kitchen & Bathroom Remodeling",
        "Architectural Design Services",
        "Project Management",
        "Permit & Licensing",
        "Interior Design Consultation",
      ],
      projects: "320+",
      rating: 4.8,
      startingPrice: "$5,000",
      averageProject: "$75,000",
      completionTime: "4-12 weeks",
      warranty: "10 years",
      image: "/construction-services.png",
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      gradientBg: "from-orange-950 via-orange-900 to-slate-900",
      satisfaction: 96,
      emergencyAvailable: false,
      certifications: ["Licensed Contractor", "Insured", "OSHA Certified"],
    },
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical Excellence",
      subtitle: "Power Solutions That Work",
      description:
        "From residential rewiring to complex industrial automation, we deliver electrical solutions with precision and safety at the forefront.",
      detailedDescription:
        "Our certified electricians bring decades of experience to every project, ensuring your electrical systems are safe, efficient, and future-ready.",
      features: [
        "Residential Wiring & Rewiring",
        "Commercial Electrical Systems",
        "Industrial Automation & Controls",
        "Emergency Electrical Repairs",
        "Smart Home Integration",
        "Energy Efficiency Audits",
        "Solar Panel Installation",
        "EV Charging Stations",
      ],
      projects: "450+",
      rating: 4.9,
      startingPrice: "$150",
      averageProject: "$2,500",
      completionTime: "2-5 days",
      warranty: "5 years",
      image: "/electrical-services.png",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradientBg: "from-blue-950 via-blue-900 to-slate-900",
      satisfaction: 98,
      emergencyAvailable: true,
      certifications: ["Licensed", "Insured", "Bonded"],
    },

    {
      id: "logistics",
      icon: Truck,
      title: "Logistics & Supply Chain",
      subtitle: "Seamless Movement, Perfect Timing",
      description:
        "Comprehensive logistics solutions that optimize your supply chain from warehouse to doorstep with cutting-edge technology.",
      detailedDescription:
        "Our logistics network combines advanced technology with strategic partnerships to deliver unmatched efficiency and reliability.",
      features: [
        "Smart Warehouse Management",
        "Nationwide Transportation",
        "E-commerce Fulfillment",
        "International Shipping",
        "Real-time Tracking",
        "Inventory Management",
        "Supply Chain Analytics",
        "Reverse Logistics",
      ],
      projects: "280+",
      rating: 4.9,
      startingPrice: "$200",
      averageProject: "$8,500",
      completionTime: "1-3 days",
      warranty: "Full Coverage",
      image: "/logistics-services.png",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradientBg: "from-emerald-950 via-emerald-900 to-slate-900",
      satisfaction: 97,
      emergencyAvailable: true,
      certifications: ["DOT Certified", "Insured", "ISO 9001"],
    },
  ];

  const serviceCategories = [
    {
      category: "Residential",
      icon: Home,
      services: [
        "Home Electrical",
        "Residential Construction",
        "Home Automation",
      ],
      color: "text-blue-600",
    },
    {
      category: "Commercial",
      icon: Building,
      services: ["Office Buildings", "Retail Spaces", "Commercial Logistics"],
      color: "text-orange-600",
    },
    {
      category: "Industrial",
      icon: Factory,
      services: [
        "Industrial Electrical",
        "Manufacturing Facilities",
        "Supply Chain Solutions",
      ],
      color: "text-green-600",
    },
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We begin with an in-depth consultation to understand your vision, requirements, and constraints.",
      icon: Eye,
      duration: "1-2 hours",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Our experts develop a comprehensive project plan with detailed timelines, materials, and cost breakdowns.",
      icon: Target,
      duration: "2-5 days",
    },
    {
      step: "03",
      title: "Professional Execution",
      description:
        "Skilled craftsmen implement your project with regular progress updates and quality checkpoints.",
      icon: Settings,
      duration: "Project dependent",
    },
    {
      step: "04",
      title: "Quality Assurance & Handover",
      description:
        "Comprehensive inspection, testing, cleanup, and documentation handover with warranty coverage.",
      icon: Award,
      duration: "1 day",
    },
  ];

  const whyChooseUs = [
    {
      title: "15+ Years Excellence",
      description: "Proven track record across all service categories",
      icon: Award,
      stat: "1000+ Projects",
    },
    {
      title: "Licensed & Certified",
      description: "Fully licensed, insured, and certified professionals",
      icon: Shield,
      stat: "100% Compliant",
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock availability for urgent needs",
      icon: Clock,
      stat: "24/7 Available",
    },
    {
      title: "Royal Quality Promise",
      description: "Comprehensive warranties on all completed work",
      icon: Crown,
      stat: "10 Year Warranty",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, clear estimates, fair pricing",
      icon: TrendingUp,
      stat: "Fixed Pricing",
    },
    {
      title: "Expert Craftsmen",
      description: "Skilled professionals trained to royal standards",
      icon: Users,
      stat: "50+ Specialists",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      text: "Crown Prince transformed our entire home electrical system. Professional, timely, and exceptional quality.",
      service: "Electrical",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      rating: 5,
      text: "Their construction team delivered our office renovation ahead of schedule and under budget. Incredible attention to detail.",
      service: "Construction",
    },
    {
      name: "Jennifer Davis",
      role: "E-commerce CEO",
      rating: 5,
      text: "Crown Prince logistics scaled with our business perfectly. Their technology and service are unmatched.",
      service: "Logistics",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                  <Crown className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              👑 Royal Treatment for Every Service
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Excellence in
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Every Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From cutting-edge electrical solutions to masterful construction
              projects and seamless logistics operations - we deliver
              royal-grade excellence with the precision and care your projects
              deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Link href="/calculator">
                  <Gauge className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4 backdrop-blur-sm"
              >
                <Link href="/projects">
                  <Eye className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Service Categories Quick Nav */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={category.category}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent
                        className={`h-8 w-8 mx-auto mb-3 ${category.color}`}
                      />
                      <h3 className="text-white font-semibold mb-2">
                        {category.category}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {category.services.join(" • ")}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services with Enhanced Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Core Services
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Three Pillars of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized divisions working in perfect harmony to deliver
              comprehensive solutions that exceed expectations and set new
              industry standards.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div
                    className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.gradientBg}/20 to-transparent`}
                      />

                      {/* Service Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                            <div className="font-bold text-gray-900">
                              {service.projects}
                            </div>
                            <div className="text-xs text-gray-600">
                              Projects
                            </div>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                            <div className="font-bold text-gray-900 flex items-center justify-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {service.rating}
                            </div>
                            <div className="text-xs text-gray-600">Rating</div>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                            <div className="font-bold text-gray-900">
                              {service.satisfaction}%
                            </div>
                            <div className="text-xs text-gray-600">
                              Satisfied
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div
                    className={`space-y-8 ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <Badge
                            variant="secondary"
                            className={`${service.bgColor} ${service.borderColor} mb-2`}
                          >
                            {service.subtitle}
                          </Badge>
                          {service.emergencyAvailable && (
                            <Badge className="bg-red-100 text-red-800 ml-2">
                              24/7 Emergency
                            </Badge>
                          )}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.detailedDescription}
                      </p>
                    </div>

                    {/* Service Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Service Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">
                          {service.startingPrice}
                        </div>
                        <div className="text-sm text-gray-600">
                          Starting Price
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {service.averageProject}
                        </div>
                        <div className="text-sm text-gray-600">Avg Project</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {service.completionTime}
                        </div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {service.warranty}
                        </div>
                        <div className="text-sm text-gray-600">Warranty</div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2">
                      {service.certifications.map((cert) => (
                        <Badge
                          key={cert}
                          variant="outline"
                          className="border-yellow-600 text-yellow-700"
                        >
                          <Shield className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        size="lg"
                        className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold flex-1`}
                      >
                        <Link href={`/services/${service.id}`}>
                          <Lightbulb className="mr-2 h-5 w-5" />
                          Learn More
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white flex-1"
                      >
                        <Link href="/calculator">
                          <Phone className="mr-2 h-5 w-5" />
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Royal Service Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven four-step process that ensures exceptional results,
              transparent communication, and complete client satisfaction on
              every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={process.step} className="relative">
                  <Card className="text-center border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-yellow-600 mb-2">
                        {process.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {process.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {process.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Why Crown Prince
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Royal Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another service provider - we're your partners in
              excellence, committed to delivering results that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason) => {
              const IconComponent = reason.icon;
              return (
                <Card
                  key={reason.title}
                  className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900">
                            {reason.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 text-yellow-800 text-xs"
                          >
                            {reason.stat}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real clients who experienced the Crown Prince
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-yellow-600 text-yellow-700"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Crown className="h-16 w-16 text-yellow-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Royal Service?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who chose Crown Prince for
              their most important projects. Contact us today for a free
              consultation and discover the royal difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4"
              >
                <Link href="/calculator">
                  <Download className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Quality Guaranteed</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
