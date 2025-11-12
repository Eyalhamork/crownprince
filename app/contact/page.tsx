"use client";

import type React from "react";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  AlertTriangle,
  Crown,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Star,
  Zap,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "24/7 Emergency Service Available",
    action: "Call Now",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    href: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Us",
    details: "+1 (555) 123-4567",
    description: "Quick support via WhatsApp",
    action: "Chat Now",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    href: "https://wa.me/15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@crownprinceinc.com",
    description: "We respond within 2 hours",
    action: "Send Email",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    href: "mailto:info@crownprinceinc.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Royal Business Plaza",
    description: "Downtown Business District",
    action: "Get Directions",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 7AM-7PM",
    description: "Sat-Sun: 9AM-5PM",
    action: "Schedule Visit",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    href: "#",
  },
];

// const serviceAreas = [
//   "Los Angeles County",
//   "Orange County",
//   "Riverside County",
//   "San Bernardino County",
//   "Ventura County",
// ];

const faqData = [
  {
    question: "How quickly can you respond to service requests?",
    answer:
      "We respond to general inquiries within 2 hours and emergency calls within 1 hour during business hours. Emergency service is available 24/7.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free estimates for all projects. You can use our online calculator for instant estimates or schedule an on-site consultation.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We are fully licensed, bonded, and insured. All our technicians are certified professionals with extensive training and experience.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Los Angeles, Orange, Riverside, San Bernardino, and Ventura counties. Contact us to confirm service availability in your specific area.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we provide comprehensive warranties on all our work. Warranty terms vary by service type and project scope. Details are provided with every quote.",
  },
  {
    question: "Can you handle both residential and commercial projects?",
    answer:
      "Yes, we serve both residential and commercial clients across all our service areas: electrical, construction, and logistics & warehousing.",
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    location: "",
    message: "",
    priority: "normal",
    projectType: "",
    preferredContact: "email",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setSubmitStatus("idle");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        location: "",
        message: "",
        priority: "normal",
        projectType: "",
        preferredContact: "email",
        newsletter: false,
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,206,84,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
                <div className="relative w-20 h-20 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full animate-ping opacity-20" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-amber-500/20 backdrop-blur-sm text-yellow-300 border border-yellow-500/30 rounded-full px-6 py-3 text-sm mb-8">
              <Sparkles className="h-4 w-4" />
              Get In Touch with Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent animate-pulse">
                Royal Project?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Contact us today for a free consultation and discover how we can
              bring
              <span className="text-yellow-400 font-semibold">
                {" "}
                excellence{" "}
              </span>
              to your next electrical, construction, or logistics project.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: "Licensed & Insured", value: "100%" },
                { icon: Star, label: "Client Satisfaction", value: "99%" },
                { icon: Clock, label: "Response Time", value: "< 2hr" },
                { icon: Globe, label: "Service Areas", value: "5+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.title}
                  className={`relative group bg-gradient-to-br ${info.bgGradient} border-2 border-white/50 hover:border-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 rounded-3xl overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />

                  <div className="relative p-6 text-center">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-800 font-semibold mb-1 text-sm">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-xs mb-4">
                      {info.description}
                    </p>
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`block w-full bg-gradient-to-r ${info.gradient} text-white font-semibold py-2.5 px-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm`}
                    >
                      {info.action}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-900 to-black p-8 text-white">
                  <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
                  <p className="text-gray-300 text-lg">
                    Choose the type of inquiry that best matches your needs for
                    a faster response.
                  </p>
                </div>

                <div className="p-8">
                  {/* Tabs */}
                  <div className="flex space-x-1 bg-gray-100 p-1 rounded-2xl mb-8">
                    {[
                      { id: "general", label: "General", icon: MessageSquare },
                      { id: "project", label: "Project", icon: Calendar },
                      {
                        id: "emergency",
                        label: "Emergency",
                        icon: AlertTriangle,
                      },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          activeTab === tab.id
                            ? tab.id === "emergency"
                              ? "bg-red-500 text-white shadow-lg"
                              : "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg"
                            : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                        }`}
                      >
                        <tab.icon className="h-5 w-5" />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Full Name *
                        </label>
                        <input
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="(555) 123-4567"
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Company (Optional)
                        </label>
                        <input
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder="Your company name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    {/* Tab-specific content */}
                    {activeTab === "general" && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Service Interest
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              handleInputChange("service", e.target.value)
                            }
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select a service</option>
                            <option value="electrical">
                              Electrical Services
                            </option>
                            <option value="construction">Construction</option>
                            <option value="logistics">
                              Logistics & Warehousing
                            </option>
                            <option value="consultation">
                              General Consultation
                            </option>
                            <option value="multiple">Multiple Services</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {activeTab === "project" && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">
                              Project Type *
                            </label>
                            <select
                              value={formData.projectType}
                              onChange={(e) =>
                                handleInputChange("projectType", e.target.value)
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                            >
                              <option value="">Select project type</option>
                              <option value="residential-electrical">
                                Residential Electrical
                              </option>
                              <option value="commercial-electrical">
                                Commercial Electrical
                              </option>
                              <option value="industrial-electrical">
                                Industrial Electrical
                              </option>
                              <option value="residential-construction">
                                Residential Construction
                              </option>
                              <option value="commercial-construction">
                                Commercial Construction
                              </option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">
                              Budget Range
                            </label>
                            <select
                              value={formData.budget}
                              onChange={(e) =>
                                handleInputChange("budget", e.target.value)
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                            >
                              <option value="">Select budget range</option>
                              <option value="under-5k">Under $5,000</option>
                              <option value="5k-15k">$5,000 - $15,000</option>
                              <option value="15k-50k">$15,000 - $50,000</option>
                              <option value="50k-100k">
                                $50,000 - $100,000
                              </option>
                              <option value="100k-250k">
                                $100,000 - $250,000
                              </option>
                              <option value="over-250k">Over $250,000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "emergency" && (
                      <div className="space-y-6">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                              <AlertTriangle className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="font-bold text-red-800 text-lg">
                              Emergency Service Request
                            </h3>
                          </div>
                          <p className="text-red-700">
                            For immediate assistance, please call our emergency
                            line at{" "}
                            <strong className="font-bold">
                              +1 (555) 123-4567
                            </strong>
                            . This form is for urgent but non-life-threatening
                            situations.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Emergency Type *
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              handleInputChange("service", e.target.value)
                            }
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select emergency type</option>
                            <option value="electrical-outage">
                              Electrical Outage
                            </option>
                            <option value="electrical-hazard">
                              Electrical Hazard
                            </option>
                            <option value="structural-damage">
                              Structural Damage
                            </option>
                            <option value="water-damage">Water Damage</option>
                            <option value="equipment-failure">
                              Equipment Failure
                            </option>
                            <option value="other">Other Emergency</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        {activeTab === "emergency"
                          ? "Emergency Details *"
                          : "Message *"}
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder={
                          activeTab === "emergency"
                            ? "Please describe the emergency situation in detail..."
                            : "Tell us about your project, requirements, or questions..."
                        }
                        rows={5}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-0 transition-colors duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      />
                    </div>

                    {/* Newsletter Signup */}
                    {activeTab !== "emergency" && (
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) =>
                            handleInputChange("newsletter", e.target.checked)
                          }
                          className="w-5 h-5 text-yellow-500 border-2 border-gray-300 rounded focus:ring-yellow-500"
                        />
                        <label htmlFor="newsletter" className="text-gray-700">
                          Subscribe to our newsletter for project updates and
                          industry insights
                        </label>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        activeTab === "emergency"
                          ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg"
                          : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-lg"
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : submitStatus === "success" ? (
                          <>
                            <CheckCircle className="w-6 h-6" />
                            <span>Message Sent Successfully!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6" />
                            <span>
                              {activeTab === "emergency"
                                ? "Send Emergency Request"
                                : "Send Message"}
                            </span>
                          </>
                        )}
                      </div>
                    </button>

                    {submitStatus === "success" && (
                      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-green-800">
                              Thank you for contacting us!
                            </h3>
                            <p className="text-green-700">
                              We'll respond within{" "}
                              {activeTab === "emergency" ? "1 hour" : "2 hours"}{" "}
                              during business hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Response Times */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-800 to-black p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Response Times</h3>
                  <p className="text-gray-300">
                    Our commitment to timely service
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      label: "General Inquiries",
                      time: "2 hours",
                      color: "bg-blue-500",
                    },
                    {
                      label: "Project Quotes",
                      time: "24 hours",
                      color: "bg-green-500",
                    },
                    {
                      label: "Emergency Service",
                      time: "1 hour",
                      color: "bg-red-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                      <div
                        className={`px-3 py-1 ${item.color} text-white text-sm font-bold rounded-full`}
                      >
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
                  <p className="text-purple-100">Get started right away</p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      label: "Calculate Project Cost",
                      href: "/calculator",
                      icon: Zap,
                      primary: true,
                    },
                    {
                      label: "View Our Portfolio",
                      href: "/projects",
                      icon: Globe,
                      primary: false,
                    },
                    {
                      label: "Call Emergency Line",
                      href: "tel:+15551234567",
                      icon: Phone,
                      primary: false,
                    },
                  ].map((action, index) => (
                    <a
                      key={index}
                      href={action.href}
                      className={`block w-full p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        action.primary
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl"
                          : "border-2 border-purple-200 text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <action.icon className="w-5 h-5" />
                        <span>{action.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop by our headquarters or schedule a consultation at your
              location.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Google Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4537825659866!2d-118.25684568478208!3d34.05223908060595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1625097600000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Crown Prince Headquarters
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-2">
                        Address
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        123 Royal Business Plaza
                        <br />
                        Downtown Business District
                        <br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-2">
                        Business Hours
                      </p>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                        <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                        <p className="text-red-600 font-bold mt-2">
                          🚨 24/7 Emergency Service
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-2">
                        Contact Information
                      </p>
                      <div className="text-gray-600 space-y-1">
                        <p>Main: +1 (555) 123-4567</p>
                        <p>Emergency: +1 (555) 123-4567</p>
                        <p>Email: info@crownprinceinc.com</p>
                        <p>WhatsApp: +1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Directions</span>
                  </div>
                </a>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
