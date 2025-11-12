"use client";

import { useState } from "react";
import {
  Crown,
  Award,
  Shield,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
  Building,
  Zap,
  Truck,
  Users,
  Sparkles,
  Certificate,
  Eye,
  FileText,
  TrendingUp,
  Target,
  Clock,
  ArrowRight,
  Verified,
  Globe,
  Building2,
  Wrench,
  HardHat,
  Lightbulb,
  BadgeCheck,
  Medal,
} from "lucide-react";

const certificationCategories = [
  { id: "all", name: "All Certifications", icon: Award, count: 15 },
  { id: "construction", name: "Construction", icon: Building2, count: 6 },
  { id: "electrical", name: "Electrical", icon: Zap, count: 5 },
  { id: "logistics", name: "Logistics", icon: Truck, count: 4 },
];

const certifications = [
  {
    id: "cert-1",
    title: "ISO 9001:2015 Quality Management",
    category: "construction",
    issuingBody: "ISO",
    issueDate: "2024-08-15",
    expiryDate: "2027-08-15",
    status: "Active",
    credentialId: "ISO-9001-2024-CPI-001",
    description:
      "Quality management systems certification ensuring consistent delivery of premium construction services.",
    featured: true,
  },
  {
    id: "cert-2",
    title: "Green Building Professional",
    category: "construction",
    issuingBody: "Liberian Green Building Council",
    issueDate: "2024-06-20",
    expiryDate: "2026-06-20",
    status: "Active",
    credentialId: "LGBC-PRO-2024-045",
    description:
      "Expertise in sustainable construction practices and environmental compliance.",
    featured: false,
  },
  {
    id: "cert-3",
    title: "Construction Safety Excellence Award",
    category: "construction",
    issuingBody: "Liberian Construction Safety Authority",
    issueDate: "2024-03-10",
    expiryDate: "2025-03-10",
    status: "Active",
    credentialId: "LCSA-SAFETY-2024-CPI",
    description:
      "Recognition for exceptional safety record with zero major incidents.",
    featured: true,
  },
  {
    id: "cert-4",
    title: "Project Management Professional (PMP)",
    category: "construction",
    issuingBody: "PMI",
    issueDate: "2023-11-15",
    expiryDate: "2026-11-15",
    status: "Active",
    credentialId: "PMI-PMP-2023-789456",
    description:
      "Advanced project management certification for complex construction projects.",
    featured: false,
  },
  {
    id: "cert-5",
    title: "Master Electrician License",
    category: "electrical",
    issuingBody: "Liberian Electrical Board",
    issueDate: "2023-09-20",
    expiryDate: "2026-09-20",
    status: "Active",
    credentialId: "LEB-ME-2023-CPI-001",
    description:
      "Highest level electrical certification for all electrical installation and design work.",
    featured: true,
  },
  {
    id: "cert-6",
    title: "Smart Home Technology Specialist",
    category: "electrical",
    issuingBody: "International Smart Home Association",
    issueDate: "2024-07-12",
    expiryDate: "2026-07-12",
    status: "Active",
    credentialId: "ISHA-SHT-2024-567",
    description:
      "Specialized certification in smart home automation and IoT integration.",
    featured: false,
  },
  {
    id: "cert-7",
    title: "Supply Chain Management Professional",
    category: "logistics",
    issuingBody: "Supply Chain Management Institute",
    issueDate: "2024-03-22",
    expiryDate: "2027-03-22",
    status: "Active",
    credentialId: "SCMI-SCMP-2024-123",
    description:
      "Professional certification in supply chain optimization and logistics management.",
    featured: true,
  },
  {
    id: "cert-8",
    title: "Dangerous Goods Transport",
    category: "logistics",
    issuingBody: "IATA",
    issueDate: "2024-01-10",
    expiryDate: "2026-01-10",
    status: "Active",
    credentialId: "IATA-DG-2024-CPI-789",
    description:
      "Certification for safe handling and transport of hazardous materials.",
    featured: false,
  },
];

const certificationStats = [
  {
    label: "Total Certifications",
    value: "15",
    icon: Award,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    label: "Active Certifications",
    value: "15",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    label: "Professional Level",
    value: "8",
    icon: Star,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Years of Excellence",
    value: "12+",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCertification, setSelectedCertification] = useState(null);

  const filteredCertifications = certifications.filter(
    (cert) => selectedCategory === "all" || cert.category === selectedCategory
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "expired":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-xl" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full px-4 py-2 text-sm inline-block mb-6">
              🏆 Certified Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Our comprehensive certifications demonstrate Crown Prince's
              commitment to excellence, safety, and professional standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {certificationStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div
                    className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}
                  >
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {certificationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-black"
                    : "border border-gray-300 text-gray-700 hover:border-yellow-500"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
                <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  cert.featured ? "border-yellow-400" : "border-gray-200"
                }`}
              >
                {cert.featured && (
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-t-xl">
                    ⭐ Featured Certification
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {cert.issuingBody}
                      </p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        cert.status
                      )}`}
                    >
                      {cert.status}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>Issued: {formatDate(cert.issueDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Expires: {formatDate(cert.expiryDate)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-xs text-gray-500">
                      ID: {cert.credentialId}
                    </div>
                    <button className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No certifications found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Certified Professionals?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our certified team is ready to deliver excellence in your next
              project. Contact us to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all flex items-center gap-2 justify-center">
                Get Quote Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
                <Download className="h-5 w-5" />
                Download Certificates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
