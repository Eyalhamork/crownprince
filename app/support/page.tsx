"use client";

import { useState } from "react";
import {
  Crown,
  HeadphonesIcon,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Star,
  Search,
  ChevronRight,
  User,
  FileText,
  Zap,
  Shield,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Plus,
  Minus,
  Send,
  MapPin,
  Globe,
  Sparkles,
  Target,
  Award,
  TrendingUp,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    category: "general",
    description: "",
  });

  const supportStats = [
    {
      label: "Avg Response Time",
      value: "< 2hrs",
      icon: Clock,
      color: "text-green-600",
    },
    {
      label: "Resolution Rate",
      value: "99.8%",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      label: "Customer Rating",
      value: "4.9/5",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      label: "24/7 Availability",
      value: "365 days",
      icon: Shield,
      color: "text-purple-600",
    },
  ];

  const supportChannels = [
    {
      title: "Live Chat Support",
      description: "Get instant help from our expert support team",
      icon: MessageSquare,
      availability: "24/7",
      responseTime: "< 1 min",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our specialists",
      icon: Phone,
      availability: "Mon-Fri 8AM-8PM",
      responseTime: "Immediate",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Detailed assistance via email",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 2 hrs",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      action: "Send Email",
    },
    {
      title: "Priority Support",
      description: "Premium support for enterprise clients",
      icon: Crown,
      availability: "24/7",
      responseTime: "< 15 min",
      color: "from-yellow-600 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      action: "Access Premium",
    },
  ];

  const knowledgeBase = [
    {
      category: "Getting Started",
      icon: BookOpen,
      articles: [
        "How to Request Your First Quote",
        "Understanding Our Service Process",
        "Setting Up Your Client Portal",
        "Project Timeline Expectations",
      ],
      color: "text-blue-600",
    },
    {
      category: "Account Management",
      icon: User,
      articles: [
        "Managing Your Account Settings",
        "Updating Payment Information",
        "Viewing Project History",
        "Team Member Access",
      ],
      color: "text-green-600",
    },
    {
      category: "Services & Pricing",
      icon: Zap,
      articles: [
        "Electrical Services Overview",
        "Construction Project Scope",
        "Logistics Solutions Guide",
        "Emergency Service Rates",
      ],
      color: "text-yellow-600",
    },
    {
      category: "Troubleshooting",
      icon: AlertCircle,
      articles: [
        "Common Project Delays",
        "Quality Concerns Resolution",
        "Payment Processing Issues",
        "Communication Problems",
      ],
      color: "text-red-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer:
        "Most projects can begin within 48-72 hours of contract signing. Emergency services are available 24/7 with immediate response times. Our project managers will provide you with a detailed timeline during the initial consultation.",
    },
    {
      question: "What's included in your project warranty?",
      answer:
        "All Crown Prince projects come with comprehensive warranties: 2 years for electrical work, 5 years for construction projects, and 1 year for logistics solutions. We also provide 24/7 emergency support during the warranty period.",
    },
    {
      question: "Can I track my project progress in real-time?",
      answer:
        "Yes! Our client portal provides real-time project tracking with photo updates, milestone notifications, and direct communication with your project manager. You'll receive automated updates at each project phase.",
    },
    {
      question: "Do you provide emergency services?",
      answer:
        "Absolutely. We offer 24/7 emergency services for electrical issues, urgent construction repairs, and critical logistics needs. Emergency response typically arrives within 2-4 hours depending on location.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "Our quality assurance process includes regular inspections, photo documentation, client check-ins, and final quality reviews. All work is performed by licensed professionals and meets or exceeds industry standards.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, checks, and offer flexible payment plans for larger projects. Payment schedules are typically milestone-based with no upfront payment required.",
    },
  ];

  const contactInfo = {
    phone: "+231 (555) 001-0000",
    email: "support@crownprince.com",
    address: "123 Royal Street, Monrovia, Liberia",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
      weekends: "Saturday - Sunday: 10:00 AM - 6:00 PM",
      emergency: "24/7 Emergency Support Available",
    },
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission logic here
    console.log("Ticket submitted:", ticketForm);
    // Reset form or show success message
  };

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
                  <HeadphonesIcon className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              🎯 Premium Support
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Support Center
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Get the help you need, when you need it. Our world-class support
              team is here to ensure your success with Crown Prince services.
            </p>

            {/* Support Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {supportStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm border-white/20"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent
                        className={`h-8 w-8 mx-auto mb-3 ${stat.color}`}
                      />
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
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

      {/* Support Channels */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Get Help Now
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is
              ready to provide expert assistance across all platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <Card
                  key={index}
                  className={`group border-2 ${channel.borderColor} hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {channel.description}
                    </p>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-semibold text-gray-700">
                          {channel.availability}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Response:</span>
                        <span className="font-semibold text-green-600">
                          {channel.responseTime}
                        </span>
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-semibold transition-all duration-300 group-hover:scale-105`}
                    >
                      {channel.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="knowledge" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="ticket">Submit Ticket</TabsTrigger>
            </TabsList>

            {/* Knowledge Base */}
            <TabsContent value="knowledge" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Knowledge Base
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Find answers to common questions and learn how to make the
                  most of our services.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search our knowledge base..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-yellow-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {knowledgeBase.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Card
                      key={index}
                      className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-yellow-50 transition-colors duration-300">
                            <IconComponent
                              className={`h-5 w-5 ${category.color} group-hover:text-yellow-600 transition-colors duration-300`}
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {category.category}
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          {category.articles.map((article, i) => (
                            <li key={i}>
                              <button className="text-left w-full text-gray-600 hover:text-yellow-600 transition-colors duration-300 flex items-center justify-between group/item">
                                <span className="text-sm">{article}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Quick answers to the questions we hear most often from our
                  valued clients.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <button
                        onClick={() =>
                          setExpandedFAQ(expandedFAQ === index ? null : index)
                        }
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                      >
                        <span className="font-semibold text-gray-900 text-lg pr-4">
                          {faq.question}
                        </span>
                        {expandedFAQ === index ? (
                          <Minus className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {expandedFAQ === index && (
                        <div className="px-6 pb-6">
                          <Separator className="mb-4" />
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Submit Ticket */}
            <TabsContent value="ticket" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Submit Support Ticket
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Can't find what you're looking for? Submit a detailed support
                  ticket and our team will get back to you promptly.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="border-2 border-gray-100">
                  <CardContent className="p-8">
                    <form onSubmit={handleTicketSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            value={ticketForm.name}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                name: e.target.value,
                              })
                            }
                            className="border-2 border-gray-200 focus:border-yellow-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={ticketForm.email}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                email: e.target.value,
                              })
                            }
                            className="border-2 border-gray-200 focus:border-yellow-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          value={ticketForm.subject}
                          onChange={(e) =>
                            setTicketForm({
                              ...ticketForm,
                              subject: e.target.value,
                            })
                          }
                          className="border-2 border-gray-200 focus:border-yellow-500"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Priority Level
                          </label>
                          <select
                            value={ticketForm.priority}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                priority: e.target.value,
                              })
                            }
                            className="w-full p-3 border-2 border-gray-200 focus:border-yellow-500 rounded-md focus:outline-none"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">
                            Category
                          </label>
                          <select
                            value={ticketForm.category}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                category: e.target.value,
                              })
                            }
                            className="w-full p-3 border-2 border-gray-200 focus:border-yellow-500 rounded-md focus:outline-none"
                          >
                            <option value="general">General Support</option>
                            <option value="technical">Technical Issue</option>
                            <option value="billing">Billing Question</option>
                            <option value="project">Project Related</option>
                            <option value="emergency">Emergency</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Description *
                        </label>
                        <Textarea
                          value={ticketForm.description}
                          onChange={(e) =>
                            setTicketForm({
                              ...ticketForm,
                              description: e.target.value,
                            })
                          }
                          className="border-2 border-gray-200 focus:border-yellow-500 min-h-32"
                          placeholder="Please provide as much detail as possible about your request or issue..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg py-3 transition-all duration-300 hover:scale-105"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Contact Information
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get In Touch Directly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer direct contact? Here are all the ways you can reach our
              support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Phone Support
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-6">
                  {contactInfo.phone}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.weekends}</p>
                  <p className="font-semibold text-red-600">
                    {contactInfo.hours.emergency}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Email Support
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-6 break-all">
                  {contactInfo.email}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>24/7 Email Support</p>
                  <p>Response within 2 hours</p>
                  <p>Detailed technical assistance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Visit Us
                </h3>
                <p className="text-gray-700 mb-6">{contactInfo.address}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Walk-in consultations welcome</p>
                  <p>Monday - Friday: 8AM - 6PM</p>
                  <p>Free parking available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Crown className="h-16 w-16 text-yellow-500 animate-pulse mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Still Need Help?
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                We're Here for You
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our support team is standing by to provide you with the
              exceptional service you deserve. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Support Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              Resources
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Additional Support Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive library of resources designed to help
              you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-2 border-purple-100 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Video Tutorials
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch step-by-step video guides covering everything from
                  account setup to advanced features.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Available Videos:</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Duration:</span>
                    <span className="font-semibold">4+ hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updated:</span>
                    <span className="font-semibold text-green-600">Weekly</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:opacity-90 text-white font-semibold">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-blue-100 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Download Center
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access forms, contracts, specification sheets, and other
                  important documents.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Contract Templates:</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spec Sheets:</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safety Guidelines:</span>
                    <span className="font-semibold">15</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Access Downloads
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-2 border-green-100 hover:border-green-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Community Forum
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with other clients, share experiences, and get
                  peer-to-peer support.
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Active Members:</span>
                    <span className="font-semibold">1,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Posts:</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Rate:</span>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 text-white font-semibold">
                  <Users className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Team Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Meet Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Expert Support Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team combines technical expertise with exceptional
              customer service to ensure you get the help you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Support Manager",
                specialty: "Technical Issues & Account Management",
                experience: "8+ years",
                availability: "Mon-Fri 8AM-8PM",
                image: "/placeholder.svg?height=300&width=300",
                stats: { resolved: "2,500+", rating: "4.9/5" },
              },
              {
                name: "Marcus Thompson",
                role: "Senior Technical Specialist",
                specialty: "Electrical & Construction Support",
                experience: "12+ years",
                availability: "24/7 Emergency Response",
                image: "/placeholder.svg?height=300&width=300",
                stats: { resolved: "3,200+", rating: "4.8/5" },
              },
              {
                name: "Lisa Chen",
                role: "Client Success Manager",
                specialty: "Project Coordination & Billing",
                experience: "6+ years",
                availability: "Mon-Sat 7AM-7PM",
                image: "/placeholder.svg?height=300&width=300",
                stats: { resolved: "1,800+", rating: "5.0/5" },
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg group-hover:border-yellow-500 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-1">
                    {member.role}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {member.experience}
                  </Badge>

                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">
                        Specialty:
                      </span>
                      <p className="text-gray-600">{member.specialty}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">
                        Available:
                      </span>
                      <p className="text-gray-600">{member.availability}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {member.stats.resolved}
                      </div>
                      <div className="text-xs text-gray-600">
                        Tickets Resolved
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">
                        {member.stats.rating}
                      </div>
                      <div className="text-xs text-gray-600">Client Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Agreement */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 mb-4">
                Service Guarantee
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Service Level Agreement
              </h2>
              <p className="text-xl text-gray-600">
                We stand behind our support with concrete commitments and
                measurable standards.
              </p>
            </div>

            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <Shield className="h-6 w-6 text-green-600 mr-3" />
                      Response Time Guarantees
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          level: "Emergency Issues",
                          time: "< 15 minutes",
                          priority: "Critical",
                        },
                        {
                          level: "High Priority",
                          time: "< 1 hour",
                          priority: "High",
                        },
                        {
                          level: "Standard Requests",
                          time: "< 4 hours",
                          priority: "Normal",
                        },
                        {
                          level: "General Inquiries",
                          time: "< 24 hours",
                          priority: "Low",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <div className="font-semibold text-gray-900">
                              {item.level}
                            </div>
                            <Badge
                              variant={
                                item.priority === "Critical"
                                  ? "destructive"
                                  : item.priority === "High"
                                  ? "default"
                                  : "secondary"
                              }
                              className="mt-1"
                            >
                              {item.priority}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">
                              {item.time}
                            </div>
                            <div className="text-sm text-gray-600">
                              Response
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <Target className="h-6 w-6 text-blue-600 mr-3" />
                      Quality Standards
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          metric: "First Contact Resolution",
                          target: "85%",
                          current: "92%",
                        },
                        {
                          metric: "Customer Satisfaction",
                          target: "95%",
                          current: "98.2%",
                        },
                        {
                          metric: "Average Resolution Time",
                          target: "< 4 hours",
                          current: "2.1 hours",
                        },
                        {
                          metric: "Support Availability",
                          target: "99.5%",
                          current: "99.9%",
                        },
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">
                              {item.metric}
                            </span>
                            <span className="text-sm text-gray-600">
                              Target: {item.target}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-blue-600">
                              {item.current}
                            </div>
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="my-12" />

                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    100% Satisfaction Guarantee
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    If you're not completely satisfied with our support service,
                    we'll make it right. Our commitment to excellence means
                    we'll work with you until your issue is resolved to your
                    complete satisfaction, or we'll escalate to our executive
                    team for immediate attention.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
