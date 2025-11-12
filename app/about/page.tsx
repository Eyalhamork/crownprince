import {
  Crown,
  Users,
  Award,
  Target,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Building,
  Zap,
  Hammer,
  Truck,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Eye,
  Heart,
  Lightbulb,
  Globe,
  MapPin,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Crown,
      title: "Excellence",
      description:
        "We deliver royal-quality service in every project, ensuring the highest standards of craftsmanship and attention to detail.",
      color: "from-yellow-600 to-yellow-500",
      bgColor: "bg-yellow-50",
      stat: "98% Quality Score",
    },
    {
      icon: Users,
      title: "Integrity",
      description:
        "Our commitment to honesty and transparency builds lasting relationships with our clients and community partners.",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      stat: "100% Transparency",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and methods to provide superior solutions that exceed industry standards.",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-50",
      stat: "Latest Technology",
    },
    {
      icon: Target,
      title: "Reliability",
      description:
        "Count on us to deliver on time, within budget, and beyond expectations with unwavering consistency.",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-50",
      stat: "99% On-Time",
    },
  ];

  const milestones = [
    {
      year: "2009",
      event: "Crown Prince Incorporated founded with a vision for excellence",
      description:
        "Started as a small electrical contracting business with big dreams",
      icon: Lightbulb,
      projects: "10+",
    },
    {
      year: "2012",
      event: "Expanded to commercial electrical services",
      description: "Gained trust of major commercial clients across the region",
      icon: Building,
      projects: "100+",
    },
    {
      year: "2015",
      event: "Added construction division to our services",
      description: "Became a full-service construction and renovation company",
      icon: Hammer,
      projects: "300+",
    },
    {
      year: "2018",
      event: "Launched logistics & warehousing services",
      description:
        "Completed our trio of core services with supply chain solutions",
      icon: Truck,
      projects: "500+",
    },
    {
      year: "2020",
      event: "Achieved 1000+ completed projects milestone",
      description:
        "Celebrated a decade of royal service and client satisfaction",
      icon: Award,
      projects: "1000+",
    },
    {
      year: "2023",
      event: "Opened second location and expanded team",
      description:
        "Growing to serve more clients with the same royal treatment",
      icon: Globe,
      projects: "1500+",
    },
  ];

  const stats = [
    {
      number: "1500+",
      label: "Projects Completed",
      icon: Award,
      color: "text-yellow-600",
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "text-red-600",
    },
    {
      number: "50+",
      label: "Expert Team Members",
      icon: Users,
      color: "text-green-600",
    },
  ];

  const benefits = [
    "Licensed and insured professionals with full certifications",
    "15+ years of industry experience across all service areas",
    "24/7 emergency service availability for urgent needs",
    "Comprehensive warranty coverage on all completed work",
    "Transparent pricing with detailed estimates and no hidden fees",
    "Guaranteed on-time project completion with progress tracking",
    "Environmental responsibility and sustainable practices",
    "Continuous training and certification of all team members",
  ];

  const teamHighlights = [
    {
      title: "Expert Craftsmanship",
      description:
        "Our team consists of licensed professionals with decades of combined experience",
      icon: Award,
      stat: "50+ Certified Professionals",
    },
    {
      title: "Continuous Learning",
      description:
        "We invest in ongoing training to stay current with industry best practices",
      icon: TrendingUp,
      stat: "200+ Training Hours/Year",
    },
    {
      title: "Safety First",
      description:
        "Maintaining the highest safety standards on every project, every time",
      icon: Shield,
      stat: "Zero Safety Incidents",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
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
              👑 About Crown Prince
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Crafting Excellence
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Since 2009
              </span>
            </h1>

            {/* <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              For over 15 years, Crown Prince Incorporated has been the gold
              standard in electrical, construction, and logistics services,
              treating every client with the precision and care worthy of
              royalty.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Project
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
                  View Our Portfolio
                </Link>
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent
                        className={`h-8 w-8 mx-auto mb-3 ${stat.color}`}
                      />
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                  Our Story
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  From Vision to
                  <span className="block text-yellow-600">Industry Leader</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Crown Prince Incorporated was born from a simple yet powerful
                  vision: to provide exceptional service that treats every
                  client like royalty. What began as a small electrical
                  contracting business has evolved into a comprehensive
                  multi-service company that sets the standard for excellence.
                </p>
                <p>
                  Our founder, with over two decades of experience in the
                  construction industry, recognized the need for a company that
                  could deliver not just quality work, but an exceptional
                  customer experience. This vision became the cornerstone of our
                  business philosophy and continues to drive everything we do.
                </p>
                <p>
                  Today, we proudly serve residential, commercial, and
                  industrial clients across the region, maintaining the same
                  unwavering commitment to excellence that has defined us from
                  day one. Every project, regardless of size, receives the royal
                  treatment.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {teamHighlights.map((highlight) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={highlight.title} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {highlight.title}
                      </div>
                      <div className="text-xs text-yellow-600 font-medium">
                        {highlight.stat}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Crown Prince team at work"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating achievement cards */}
                <div className="absolute top-6 right-6">
                  <Card className="bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                      <div className="text-sm font-bold text-gray-900">
                        Industry Leader
                      </div>
                      <div className="text-xs text-gray-600">Since 2009</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute bottom-6 left-6">
                  <Card className="bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <div className="text-sm font-bold text-gray-900">
                        98% Satisfaction
                      </div>
                      <div className="text-xs text-gray-600">
                        5-Star Reviews
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Core Values
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Foundation of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we
              undertake, ensuring consistent quality and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className={`group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${value.bgColor}/30`}
                >
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-white/80"
                      >
                        {value.stat}
                      </Badge>
                    </div>

                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    <div className="mt-6">
                      <Progress value={85 + index * 5} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our company's growth and evolution into
              the industry leader we are today.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Timeline Content */}
                    <div
                      className={`space-y-6 ${
                        !isEven
                          ? "lg:col-start-2 lg:text-left"
                          : "lg:text-right"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg ${
                            !isEven ? "order-1" : "order-2"
                          }`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <div className={`${!isEven ? "order-2" : "order-1"}`}>
                          <div className="text-3xl font-bold text-yellow-600">
                            {milestone.year}
                          </div>
                          <Badge
                            variant="outline"
                            className="border-yellow-600 text-yellow-700"
                          >
                            {milestone.projects} Projects
                          </Badge>
                        </div>
                      </div>

                      <Card className="border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {milestone.event}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Visual */}
                    <div
                      className={`relative ${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={`/placeholder.svg?height=300&width=500&text=${milestone.year}`}
                          alt={`Milestone ${milestone.year}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/placeholder.svg?height=500&width=700"
                  alt="Professional construction work"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Service Icons Overlay */}
                <div className="absolute top-6 left-6 flex space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Quality Badge */}
                <div className="absolute bottom-6 right-6">
                  <Card className="bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        Royal Quality
                      </div>
                      <div className="text-xs text-gray-600">Guaranteed</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                  Why Crown Prince
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Royal
                  <span className="block text-yellow-600">Advantage</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We're not just another service provider - we're your partners
                  in excellence, committed to delivering results that exceed
                  expectations and set new standards.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
                >
                  <Link href="/services">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Crown className="h-16 w-16 text-yellow-500 animate-pulse" />
                <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience the
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Crown Prince Difference?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join over 1,500 satisfied clients who chose Crown Prince for their
              most important projects. Experience royal treatment, exceptional
              quality, and unmatched service.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4"
              >
                <Link href="/calculator">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Estimate
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-6 bg-gray-600"
              />
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>15+ Years Excellence</span>
              </div>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-6 bg-gray-600"
              />
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
