"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Download,
  Eye,
  Star,
  Crown,
  Filter,
  Shield,
  Award,
  Clock,
  Users,
  ChevronRight,
  Building2,
  Zap,
  Truck,
  Search,
  Calendar,
  CheckCircle,
  ExternalLink,
  FileImage,
  File,
  X,
} from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Corporate Service Brochure",
    category: "marketing",
    type: "PDF",
    size: "2.4 MB",
    pages: 12,
    description:
      "Comprehensive overview of Crown Prince services, capabilities, and premium solutions.",
    featured: true,
    downloads: 1247,
    rating: 4.9,
    lastUpdated: "2024-12-15",
    thumbnail:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    icon: FileImage,
    color: "from-blue-600 to-blue-500",
    preview: true,
  },
  {
    id: 2,
    title: "Standard Service Contract",
    category: "legal",
    type: "PDF",
    size: "1.8 MB",
    pages: 24,
    description:
      "Comprehensive service agreement template covering all project phases and deliverables.",
    featured: true,
    downloads: 892,
    rating: 5.0,
    lastUpdated: "2024-12-10",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    icon: File,
    color: "from-red-600 to-red-500",
    confidential: true,
  },
  {
    id: 3,
    title: "Project Cost Calculator",
    category: "tools",
    type: "XLSX",
    size: "456 KB",
    pages: 8,
    description:
      "Advanced Excel template for accurate project cost estimation and budget planning.",
    featured: false,
    downloads: 634,
    rating: 4.8,
    lastUpdated: "2024-12-08",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    icon: FileText,
    color: "from-green-600 to-green-500",
  },
  {
    id: 4,
    title: "Safety & Compliance Manual",
    category: "compliance",
    type: "PDF",
    size: "3.2 MB",
    pages: 45,
    description:
      "Complete safety protocols and compliance guidelines for all service categories.",
    featured: true,
    downloads: 723,
    rating: 4.9,
    lastUpdated: "2024-12-05",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    icon: Shield,
    color: "from-orange-600 to-orange-500",
    critical: true,
  },
  {
    id: 5,
    title: "Client Testimonial Portfolio",
    category: "marketing",
    type: "PDF",
    size: "5.1 MB",
    pages: 18,
    description:
      "Curated collection of client success stories and project testimonials.",
    featured: false,
    downloads: 456,
    rating: 4.7,
    lastUpdated: "2024-11-28",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    icon: Award,
    color: "from-purple-600 to-purple-500",
  },
  {
    id: 6,
    title: "Technical Specifications Guide",
    category: "technical",
    type: "PDF",
    size: "4.3 MB",
    pages: 38,
    description:
      "Detailed technical requirements and specifications for all service categories.",
    featured: false,
    downloads: 389,
    rating: 4.8,
    lastUpdated: "2024-11-25",
    thumbnail:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    icon: Zap,
    color: "from-yellow-600 to-yellow-500",
  },
];

const categories = [
  { value: "all", label: "All Documents", count: 6 },
  { value: "marketing", label: "Marketing", count: 2 },
  { value: "legal", label: "Legal", count: 1 },
  { value: "technical", label: "Technical", count: 1 },
  { value: "compliance", label: "Compliance", count: 1 },
  { value: "tools", label: "Tools", count: 1 },
];

const stats = [
  { label: "Total Downloads", value: "4,841", icon: Download, trend: "+15%" },
  { label: "Active Documents", value: "24", icon: FileText, trend: "+3 new" },
  { label: "Average Rating", value: "4.8", icon: Star, trend: "★★★★★" },
  { label: "Last Updated", value: "Today", icon: Clock, trend: "Recent" },
];

export default function PremiumDocsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredDocuments = documents.filter((doc) => doc.featured);

  const handleDownload = (doc) => {
    // Simulate download
    console.log(`Downloading ${doc.title}...`);
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
            Loading Premium Documents...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <FileText className="h-10 w-10 text-slate-900" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <Crown className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-300 font-medium">
                Premium Document Library
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Corporate
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Document Center
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive collection of premium corporate
              documents, contracts, and resources designed for{" "}
              <span className="text-yellow-400 font-semibold">
                professional excellence
              </span>
              .
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-xs font-medium mb-1">
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

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-yellow-600 text-black shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      selectedCategory === category.value
                        ? "bg-black/20 text-black"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Featured <span className="text-yellow-600">Documents</span>
            </h2>
            <p className="text-gray-600">
              Most popular and essential documents for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-yellow-300 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-3 left-3 bg-yellow-600 text-black px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2">
                    {doc.confidential && (
                      <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        <Shield className="h-3 w-3 inline mr-1" />
                        Confidential
                      </div>
                    )}
                    {doc.critical && (
                      <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">
                        Critical
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                    {doc.type} • {doc.size}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{doc.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{doc.downloads} downloads</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDownload(doc)}
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <Download className="h-4 w-4 group-hover/btn:animate-bounce" />
                      Download
                    </button>
                    {doc.preview && (
                      <button
                        onClick={() => setSelectedDocument(doc.id)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Documents Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Document Library
            </h2>
            <p className="text-gray-600">
              Showing {filteredDocuments.length} document
              {filteredDocuments.length !== 1 ? "s" : ""}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-yellow-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <doc.icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 truncate">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.pages} pages</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">
                      {doc.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {doc.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>
                    Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                  </span>
                  <span>{doc.downloads} downloads</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="flex-1 bg-gray-900 hover:bg-yellow-600 text-white hover:text-black font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  {doc.preview && (
                    <button
                      onClick={() => setSelectedDocument(doc.id)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Preview Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {(() => {
              const doc = documents.find((d) => d.id === selectedDocument)!;
              return (
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {doc.title}
                      </h2>
                      <p className="text-gray-600">
                        {doc.type} • {doc.size} • {doc.pages} pages
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedDocument(null)}
                      className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <X className="h-5 w-5 text-gray-500 group-hover:text-red-600" />
                    </button>
                  </div>

                  <div className="flex-1 p-6">
                    <div className="bg-gray-50 rounded-xl p-8 text-center">
                      <doc.icon className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Document Preview
                      </h3>
                      <p className="text-gray-600 mb-6">{doc.description}</p>

                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => handleDownload(doc)}
                          className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                        >
                          <Download className="h-5 w-5" />
                          Download Full Document
                        </button>
                        <button className="border-2 border-gray-300 hover:border-yellow-600 text-gray-700 hover:text-yellow-600 font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                          <ExternalLink className="h-5 w-5" />
                          View Online
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="h-8 w-8 text-slate-900" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Need Custom
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Documentation?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Our team can create bespoke documents tailored to your specific
              business requirements and industry standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" />
                Request Custom Documents
                <ChevronRight className="h-5 w-5" />
              </button>

              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
