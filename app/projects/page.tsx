"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Star,
  Eye,
  ArrowRight,
  Crown,
  Filter,
  Play,
  Award,
  Clock,
  DollarSign,
  Users,
  ChevronLeft,
  ChevronRight,
  Building2,
  Zap,
  Truck,
  X,
  ExternalLink,
  Download,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Renovation",
    category: "construction",
    service: "Construction",
    location: "Beverly Hills, CA",
    date: "2024-01-15",
    duration: "4 months",
    budget: "$250,000",
    rating: 5.0,
    client: "Johnson Family",
    description:
      "Complete home renovation including kitchen remodel, bathroom upgrades, and electrical system overhaul.",
    featured: true,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    ],
    features: [
      "Smart Home Integration",
      "Energy Efficient Systems",
      "Custom Millwork",
      "Premium Finishes",
    ],
    testimonial:
      "Crown Prince exceeded our expectations in every way. The attention to detail was remarkable.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Commercial Office Complex Electrical",
    category: "electrical",
    service: "Electrical",
    location: "Downtown LA, CA",
    date: "2024-02-20",
    duration: "6 weeks",
    budget: "$180,000",
    rating: 4.9,
    client: "TechCorp Industries",
    description:
      "Complete electrical infrastructure for a 50,000 sq ft office complex with advanced automation systems.",
    featured: false,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=800&h=600&fit=crop",
    ],
    features: [
      "LED Lighting Systems",
      "Emergency Power Backup",
      "Smart Building Controls",
      "Data Center Setup",
    ],
    testimonial:
      "Professional, efficient, and delivered on time. Our building automation is now state-of-the-art.",
  },
  {
    id: 3,
    title: "Warehouse Distribution Center",
    category: "logistics",
    service: "Logistics",
    location: "Long Beach, CA",
    date: "2024-03-10",
    duration: "8 weeks",
    budget: "$320,000",
    rating: 4.8,
    client: "Global Supply Co.",
    description:
      "Design and implementation of automated warehouse systems with inventory management integration.",
    featured: true,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    ],
    features: [
      "Automated Sorting Systems",
      "Climate Control",
      "Security Integration",
      "Real-time Tracking",
    ],
    testimonial:
      "The efficiency gains have been incredible. Our throughput increased by 40% after implementation.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Historic Building Restoration",
    category: "construction",
    service: "Construction",
    location: "Pasadena, CA",
    date: "2023-11-05",
    duration: "10 months",
    budget: "$450,000",
    rating: 5.0,
    client: "Heritage Foundation",
    description:
      "Careful restoration of a 1920s historic building while maintaining architectural integrity.",
    featured: false,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    ],
    features: [
      "Period-Accurate Materials",
      "Structural Reinforcement",
      "Modern Safety Systems",
      "Heritage Compliance",
    ],
    testimonial:
      "They preserved the building's character while making it functional for modern use. Exceptional work.",
  },
  {
    id: 5,
    title: "Industrial Power Distribution",
    category: "electrical",
    service: "Electrical",
    location: "Vernon, CA",
    date: "2024-01-30",
    duration: "12 weeks",
    budget: "$380,000",
    rating: 4.9,
    client: "Manufacturing Plus",
    description:
      "High-voltage power distribution system for manufacturing facility with redundant safety systems.",
    featured: false,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
    ],
    features: [
      "High-Voltage Systems",
      "Redundant Safety",
      "Motor Controls",
      "Power Monitoring",
    ],
    testimonial:
      "Critical infrastructure delivered flawlessly. Zero downtime during the transition.",
  },
  {
    id: 6,
    title: "Multi-Modal Transportation Hub",
    category: "logistics",
    service: "Logistics",
    location: "Ontario, CA",
    date: "2023-12-15",
    duration: "16 weeks",
    budget: "$520,000",
    rating: 4.8,
    client: "TransLogistics Corp",
    description:
      "Comprehensive logistics hub with rail, truck, and air freight coordination capabilities.",
    featured: true,
    status: "completed",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    ],
    features: [
      "Multi-Modal Integration",
      "Real-Time Tracking",
      "Automated Routing",
      "24/7 Operations",
    ],
    testimonial:
      "Game-changing facility that revolutionized our distribution capabilities.",
  },
];

const categories = [
  { value: "all", label: "All Projects", icon: Crown, count: 6 },
  { value: "construction", label: "Construction", icon: Building2, count: 2 },
  { value: "electrical", label: "Electrical", icon: Zap, count: 2 },
  { value: "logistics", label: "Logistics", icon: Truck, count: 2 },
];

const stats = [
  { label: "Completed Projects", value: "1,250+", icon: Award, trend: "+12%" },
  { label: "Happy Clients", value: "850+", icon: Users, trend: "+8%" },
  { label: "Years Experience", value: "15+", icon: Clock, trend: "Growing" },
  { label: "Average Rating", value: "4.9", icon: Star, trend: "★★★★★" },
];

export default function PremiumProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  const nextImage = () => {
    if (!selectedProject) return;
    const project = projects.find((p) => p.id === selectedProject);
    if (project && project.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (!selectedProject) return;
    const project = projects.find((p) => p.id === selectedProject);
    if (project && project.gallery) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
      );
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(amount.replace(/[$,]/g, "")));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Crown className="h-16 w-16 text-yellow-600 animate-pulse" />
            <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-ping" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading Excellence...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-16 overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Crown Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Crown className="h-12 w-12 text-slate-900 drop-shadow-sm" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-xl animate-pulse" />
                <div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-300 font-medium">
                Premium Project Portfolio
              </span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Excellence in
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Every Project
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our portfolio of successful projects across electrical,
              construction, and logistics services. Each project represents our
              commitment to{" "}
              <span className="text-yellow-400 font-semibold">
                royal-quality craftsmanship
              </span>
              .
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-7 w-7 text-yellow-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-green-400 text-xs font-semibold">
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-lg text-gray-600">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
              {selectedCategory !== "all" &&
                ` in ${
                  categories.find((c) => c.value === selectedCategory)?.label
                }`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-yellow-300 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-gray-900">
                    {project.service}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold text-gray-900">
                      {project.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(project.budget)}
                      </span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* View Button */}
                  <button
                    onClick={() => {
                      setSelectedProject(project.id);
                      setCurrentImageIndex(0);
                    }}
                    className="w-full bg-gray-900 hover:bg-yellow-600 text-white hover:text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 group/btn"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" />
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)!;
              return (
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-gray-600">
                        {project.client} • {project.location}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <X className="h-5 w-5 text-gray-500 group-hover:text-red-600" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="grid lg:grid-cols-2 gap-8 p-6">
                      {/* Image Gallery */}
                      <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative h-80 rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={project.gallery[currentImageIndex]}
                            alt={`${project.title} - Image ${
                              currentImageIndex + 1
                            }`}
                            className="w-full h-full object-cover"
                          />

                          {/* Navigation Arrows */}
                          {project.gallery.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
                              >
                                <ChevronLeft className="h-5 w-5 text-white" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
                              >
                                <ChevronRight className="h-5 w-5 text-white" />
                              </button>
                            </>
                          )}

                          {/* Image Counter */}
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {project.gallery.length}
                          </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-2">
                          {project.gallery.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                                index === currentImageIndex
                                  ? "ring-2 ring-yellow-600 scale-105"
                                  : "hover:scale-105"
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              {index === currentImageIndex && (
                                <div className="absolute inset-0 bg-yellow-600/20" />
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Video Button */}
                        {project.videoThumbnail && (
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                            <Play className="h-5 w-5" />
                            Watch Project Video
                          </button>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        {/* Project Overview */}
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-600" />
                            Project Overview
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Key Metrics Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                              <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-gray-600">
                                  Budget
                                </span>
                              </div>
                              <div className="text-xl font-bold text-gray-900">
                                {formatCurrency(project.budget)}
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-gray-600">
                                  Duration
                                </span>
                              </div>
                              <div className="text-xl font-bold text-gray-900">
                                {project.duration}
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="h-4 w-4 text-yellow-600" />
                                <span className="text-sm font-medium text-gray-600">
                                  Rating
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-xl font-bold text-gray-900">
                                  {project.rating}
                                </span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(project.rating)
                                          ? "text-yellow-500 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-100">
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-red-600" />
                                <span className="text-sm font-medium text-gray-600">
                                  Location
                                </span>
                              </div>
                              <div className="text-sm font-bold text-gray-900">
                                {project.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-6 rounded-xl border border-yellow-200">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-yellow-600" />
                            Key Features & Technologies
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature) => (
                              <div
                                key={feature}
                                className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-colors"
                              >
                                ✓ {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Client Testimonial */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            Client Testimonial
                          </h3>
                          <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                            "{project.testimonial}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                {project.client
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                {project.client}
                              </p>
                              <p className="text-sm text-gray-600">
                                Verified Client
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 group">
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            Get Similar Quote
                          </button>
                          <button className="flex-1 border-2 border-gray-300 hover:border-yellow-600 text-gray-700 hover:text-yellow-600 font-bold py-4 px-6 rounded-xl transition-all hover:bg-yellow-50 flex items-center justify-center gap-2">
                            <Download className="h-5 w-5" />
                            Download Portfolio
                          </button>
                        </div>

                        {/* Additional Actions */}
                        <div className="flex gap-3">
                          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            View Full Case Study
                          </button>
                          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2">
                            <Users className="h-4 w-4" />
                            Contact Team
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Premium CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
        {/* Background Elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50L0 0h100z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Crown Icon Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <Crown className="h-10 w-10 text-slate-900" />
                </div>
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Create Your
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Royal Masterpiece?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join our distinguished clients and experience the Crown Prince
              difference. Let's transform your vision into a{" "}
              <span className="text-yellow-400 font-semibold">
                legendary project
              </span>
              .
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 text-black font-black py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]">
                <Crown className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                Start Your Project
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <button className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 min-w-[200px] backdrop-blur-sm">
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                Free Portfolio Download
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-2">
                  100%
                </div>
                <div className="text-gray-400 text-sm">
                  Project Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Premium Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-2">
                  15+
                </div>
                <div className="text-gray-400 text-sm">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-2">
                  850+
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
