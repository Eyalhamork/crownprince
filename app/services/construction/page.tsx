import {
  Hammer,
  Home,
  Building,
  Wrench,
  Users,
  Award,
  Clock,
  CheckCircle,
  Shield,
  Star,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  TrendingUp,
  Zap,
  Palette,
  TreePine,
  Recycle,
  HardHat,
  Ruler,
  Settings,
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
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function ConstructionServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom homes and residential projects with premium finishes",
      features: [
        "New Home Construction",
        "Home Additions",
        "Kitchen Remodeling",
        "Bathroom Renovations",
      ],
      startingPrice: "$15,000",
      category: "Residential",
      duration: "3-6 months",
      warranty: "10 years",
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description:
        "Professional commercial building solutions for growing businesses",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouse Construction",
        "Tenant Improvements",
      ],
      startingPrice: "$50,000",
      category: "Commercial",
      duration: "6-18 months",
      warranty: "15 years",
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with expert craftsmanship and modern design",
      features: [
        "Complete Renovations",
        "Room Additions",
        "Structural Modifications",
        "Historic Restorations",
      ],
      startingPrice: "$8,000",
      category: "Renovation",
      duration: "1-4 months",
      warranty: "5 years",
    },
    {
      icon: TreePine,
      title: "Sustainable Construction",
      description: "Eco-friendly building solutions with green certifications",
      features: [
        "LEED Certified Buildings",
        "Solar Integration",
        "Energy Efficient Design",
        "Sustainable Materials",
      ],
      startingPrice: "$25,000",
      category: "Green Building",
      duration: "4-8 months",
      warranty: "12 years",
    },
    {
      icon: HardHat,
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects and civil engineering",
      features: [
        "Road Construction",
        "Bridge Building",
        "Utility Installation",
        "Site Development",
      ],
      startingPrice: "$100,000",
      category: "Infrastructure",
      duration: "6-24 months",
      warranty: "20 years",
    },
    {
      icon: Palette,
      title: "Design & Build",
      description: "Complete design-build services from concept to completion",
      features: [
        "Architectural Design",
        "3D Visualization",
        "Interior Design",
        "Project Management",
      ],
      startingPrice: "$20,000",
      category: "Design",
      duration: "2-8 months",
      warranty: "8 years",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen with decades of combined experience",
      stat: "50+ professionals",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Comprehensive warranty on all construction work",
      stat: "99.8% satisfaction",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Projects completed on schedule and within budget",
      stat: "95% on-time rate",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage and bonding",
      stat: "$2M coverage",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Building },
    { label: "Years Experience", value: "25+", icon: Star },
    { label: "Client Satisfaction", value: "99.8%", icon: TrendingUp },
    { label: "Team Members", value: "50+", icon: Users },
  ];

  const certifications = [
    "Licensed General Contractor",
    "OSHA Safety Certified",
    "LEED Accredited Professional",
    "Better Business Bureau A+",
    "Construction Industry Institute",
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-transparent"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Hammer className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-6 px-4 py-2 text-sm font-medium">
              🏗️ Premium Construction Services
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Royal Craftsmanship
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Exceptional Results
              </span>
            </h1>

            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              From luxury custom homes to cutting-edge commercial buildings, we
              deliver world-class construction services with unmatched attention
              to detail and royal craftsmanship standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-3"
              >
                <Link href="/calculator" className="flex items-center gap-2">
                  Get Free Estimate <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-black bg-transparent/10 backdrop-blur-sm font-semibold px-8 py-3"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Schedule Consultation
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <IconComponent className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-orange-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From foundation to finish, we provide end-to-end construction
              services with royal precision and modern innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border-2 border-gray-200 hover:border-yellow-600/50 transition-all duration-300 group hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-bl-3xl"></div>

                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500 mb-1">Duration</div>
                          <div className="font-medium">{service.duration}</div>
                        </div>
                        <div>
                          <div className="text-gray-500 mb-1">Warranty</div>
                          <div className="font-medium">{service.warranty}</div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-600 font-medium">
                            Starting from
                          </span>
                          <span className="text-2xl font-bold text-yellow-600">
                            {service.startingPrice}
                          </span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                          Get Quote
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Crown Prince Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {feature.description}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-yellow-600 border-yellow-600"
                  >
                    {feature.stat}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Licensed & Certified Professionals
            </h2>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Our team holds the highest industry certifications and licenses to
              ensure quality and compliance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={cert}
                className="bg-white/10 text-white border-white/20 px-4 py-2 backdrop-blur-sm"
              >
                <Award className="h-4 w-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's turn your vision into reality with our royal construction
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call Now: (555) 123-4567
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> View Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
