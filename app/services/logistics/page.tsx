import {
  Truck,
  Warehouse,
  BarChart3,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Package,
  Globe,
  Zap,
  TrendingUp,
  MapPin,
  Boxes,
  Settings,
  RefreshCw,
  Star,
  ArrowRight,
  Download,
  Calendar,
  Award,
  Target,
  Calculator,
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
import Link from "next/link";

export default function LogisticsServicesPage() {
  const services = [
    {
      icon: Warehouse,
      title: "Smart Warehousing",
      description:
        "AI-powered storage facilities with advanced inventory management and real-time tracking",
      features: [
        "Climate-Controlled Storage",
        "Automated Inventory",
        "Pick & Pack Services",
        "Cross-Docking",
        "Quality Control",
        "24/7 Security",
      ],
      startingPrice: "$200",
      popularityScore: 95,
      projects: "180+",
      category: "storage",
    },
    {
      icon: Truck,
      title: "Transportation Network",
      description:
        "Comprehensive freight and delivery solutions with nationwide coverage",
      features: [
        "Same-Day Delivery",
        "Long-Haul Freight",
        "Expedited Shipping",
        "White Glove Service",
        "Temperature Control",
        "Hazmat Certified",
      ],
      startingPrice: "$150",
      popularityScore: 92,
      projects: "250+",
      category: "transport",
    },
    {
      icon: BarChart3,
      title: "Supply Chain Analytics",
      description:
        "Data-driven supply chain optimization with predictive insights",
      features: [
        "Demand Forecasting",
        "Vendor Management",
        "Route Optimization",
        "Performance Analytics",
        "Cost Analysis",
        "Risk Assessment",
      ],
      startingPrice: "$500",
      popularityScore: 88,
      projects: "120+",
      category: "analytics",
    },
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Complete order fulfillment solutions for online retailers",
      features: [
        "Order Processing",
        "Multi-Channel Integration",
        "Returns Management",
        "Gift Wrapping",
        "Custom Packaging",
        "Real-time Updates",
      ],
      startingPrice: "$300",
      popularityScore: 90,
      projects: "160+",
      category: "ecommerce",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description:
        "Global logistics solutions with customs clearance and compliance",
      features: [
        "Customs Clearance",
        "Documentation",
        "International Freight",
        "Trade Compliance",
        "Duty Management",
        "Port Services",
      ],
      startingPrice: "$400",
      popularityScore: 85,
      projects: "95+",
      category: "international",
    },
    {
      icon: RefreshCw,
      title: "Reverse Logistics",
      description:
        "Efficient returns processing and product lifecycle management",
      features: [
        "Returns Processing",
        "Refurbishment",
        "Recycling Programs",
        "Asset Recovery",
        "Disposal Services",
        "Warranty Management",
      ],
      startingPrice: "$250",
      popularityScore: 83,
      projects: "75+",
      category: "reverse",
    },
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Emergency Logistics",
      description: "24/7 rapid response logistics solutions",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored logistics systems for unique requirements",
    },
    {
      icon: TrendingUp,
      title: "Consulting Services",
      description: "Strategic logistics planning and optimization",
    },
    {
      icon: MapPin,
      title: "Last-Mile Delivery",
      description: "Efficient final-mile delivery solutions",
    },
    {
      icon: Boxes,
      title: "Bulk Storage",
      description: "Large-scale storage for industrial clients",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Comprehensive quality control programs",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Full insurance coverage and advanced security systems",
      stats: "99.9% Security Rate",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Live tracking and updates for all shipments",
      stats: "100% Visibility",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers for all clients",
      stats: "24/7 Available",
    },
    {
      icon: Target,
      title: "99.5% On-Time",
      description: "Industry-leading delivery performance",
      stats: "99.5% Success",
    },
  ];

  const stats = [
    { label: "Warehouses", value: "25+", icon: Warehouse },
    { label: "Fleet Vehicles", value: "500+", icon: Truck },
    { label: "Daily Shipments", value: "10K+", icon: Package },
    { label: "Countries Served", value: "45+", icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                  <Truck className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-4 py-2">
              🚚 Logistics & Supply Chain Excellence
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Generation
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Logistics Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your supply chain with our AI-powered logistics
              platform. From smart warehousing to global distribution, we
              deliver royal-grade efficiency at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Instant Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-8 py-4 backdrop-blur-sm"
              >
                <Link href="#contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Tour
                </Link>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-emerald-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Services Portfolio
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From storage to delivery, analytics to fulfillment - we provide
              end-to-end logistics services that scale with your business needs.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 mb-12 bg-gray-100">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="international">Global</TabsTrigger>
              <TabsTrigger value="reverse">Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group border-2 border-gray-200 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                    >
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-600">
                                4.9
                              </span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {service.projects} projects
                            </Badge>
                          </div>
                        </div>

                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {service.description}
                        </CardDescription>

                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Popularity</span>
                            <span className="font-medium">
                              {service.popularityScore}%
                            </span>
                          </div>
                          <Progress
                            value={service.popularityScore}
                            className="h-2"
                          />
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                                <span className="text-gray-700 text-xs">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-gray-600">
                                Starting from
                              </span>
                              <span className="text-2xl font-bold text-yellow-600">
                                {service.startingPrice}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                              >
                                Learn More
                              </Button>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-semibold"
                              >
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Individual category tabs */}
            {[
              "storage",
              "transport",
              "analytics",
              "ecommerce",
              "international",
              "reverse",
            ].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {services
                    .filter((service) => service.category === category)
                    .map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Card
                          key={service.title}
                          className="group border-2 border-gray-200 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                          {/* Same card content as above */}
                          <CardHeader className="relative">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <IconComponent className="h-8 w-8 text-white" />
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 mb-1">
                                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium text-gray-600">
                                    4.9
                                  </span>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {service.projects} projects
                                </Badge>
                              </div>
                            </div>

                            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mb-4">
                              {service.description}
                            </CardDescription>

                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                  Popularity
                                </span>
                                <span className="font-medium">
                                  {service.popularityScore}%
                                </span>
                              </div>
                              <Progress
                                value={service.popularityScore}
                                className="h-2"
                              />
                            </div>
                          </CardHeader>

                          <CardContent>
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-2">
                                {service.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-center space-x-2"
                                  >
                                    <CheckCircle className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                                    <span className="text-gray-700 text-xs">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="border-t pt-4">
                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-gray-600">
                                    Starting from
                                  </span>
                                  <span className="text-2xl font-bold text-yellow-600">
                                    {service.startingPrice}
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                                  >
                                    Learn More
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-semibold"
                                  >
                                    Get Quote
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to complement your core logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Logistics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading capabilities that set us apart from the
              competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="text-center border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      {feature.stats}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-emerald-100 mb-10">
              Join hundreds of businesses that trust us with their logistics
              operations. Get started with a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-8 py-4"
              >
                <Link href="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-8 py-4"
              >
                <Link href="/calculator">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
