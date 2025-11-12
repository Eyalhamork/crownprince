"use client";

import { useState } from "react";
import {
  Crown,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Clock,
  Shield,
  Users,
  Building,
  Zap,
  Truck,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    id: "general",
    name: "General Services",
    icon: Building,
    color: "from-blue-600 to-blue-500",
    count: 8,
  },
  {
    id: "electrical",
    name: "Electrical Services",
    icon: Zap,
    color: "from-yellow-600 to-yellow-500",
    count: 6,
  },
  {
    id: "construction",
    name: "Construction",
    icon: Building,
    color: "from-orange-600 to-orange-500",
    count: 7,
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    color: "from-green-600 to-green-500",
    count: 5,
  },
  {
    id: "pricing",
    name: "Pricing & Contracts",
    icon: Shield,
    color: "from-purple-600 to-purple-500",
    count: 6,
  },
];

const faqs = [
  // General Services
  {
    category: "general",
    question: "What services does Crown Prince Incorporated offer?",
    answer:
      "Crown Prince provides comprehensive premium services including electrical installations and maintenance, construction and renovation projects, and logistics and warehousing solutions. We serve residential, commercial, and industrial clients with a focus on excellence and reliability.",
  },
  {
    category: "general",
    question: "How long has Crown Prince been in business?",
    answer:
      "Crown Prince Incorporated has been delivering premium services for over 15 years, with our leadership team bringing decades of combined experience across all our service areas. We've successfully completed over 1,250 projects during this time.",
  },
  {
    category: "general",
    question: "What areas do you serve?",
    answer:
      "We primarily serve the Greater Monrovia area and surrounding regions in Liberia. For larger projects or special circumstances, we can extend our services to other areas. Contact us to discuss your specific location requirements.",
  },
  {
    category: "general",
    question: "Are you licensed and insured?",
    answer:
      "Yes, Crown Prince Incorporated is fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverage to protect both our clients and our team members. Proof of insurance and licensing can be provided upon request.",
  },
  {
    category: "general",
    question: "Do you offer emergency services?",
    answer:
      "Yes, we provide 24/7 emergency services for electrical issues and urgent construction repairs. Our response time is typically within 2-4 hours for emergency calls. Emergency service rates may apply for after-hours calls.",
  },
  {
    category: "general",
    question: "How do I request a quote?",
    answer:
      "You can request a quote by calling us, filling out our online contact form, or emailing us directly. We typically provide initial estimates within 24-48 hours and detailed quotes within 3-5 business days after site evaluation.",
  },
  {
    category: "general",
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, all our work comes with comprehensive warranties. Construction work typically carries a 2-year warranty, electrical work has a 1-year warranty, and logistics services include satisfaction guarantees. Specific warranty terms vary by project scope.",
  },
  {
    category: "general",
    question: "Can you work with my existing contractor or designer?",
    answer:
      "Absolutely! We frequently collaborate with architects, designers, and other contractors. Our team is experienced in coordinating with multiple parties to ensure seamless project execution while maintaining our quality standards.",
  },

  // Electrical Services
  {
    category: "electrical",
    question: "What types of electrical work do you handle?",
    answer:
      "Our electrical services include residential and commercial wiring, panel upgrades, lighting installation, smart home automation, industrial electrical systems, emergency repairs, and electrical inspections. We handle projects from simple outlet installations to complex industrial systems.",
  },
  {
    category: "electrical",
    question: "Do you install smart home systems?",
    answer:
      "Yes, we specialize in smart home automation including smart lighting, security systems, climate control, and integrated home management systems. Our team stays current with the latest smart home technologies and can design custom solutions.",
  },
  {
    category: "electrical",
    question: "How quickly can you respond to electrical emergencies?",
    answer:
      "We provide 24/7 emergency electrical services with typical response times of 2-4 hours. For safety reasons, we recommend shutting off power at the main breaker if you suspect dangerous electrical issues and calling us immediately.",
  },
  {
    category: "electrical",
    question: "Do you handle commercial and industrial electrical work?",
    answer:
      "Yes, our electrical team has extensive experience with commercial and industrial electrical systems including three-phase power, motor controls, industrial automation, and compliance with commercial electrical codes.",
  },
  {
    category: "electrical",
    question: "Can you help with electrical code compliance?",
    answer:
      "Absolutely. Our licensed electricians ensure all work meets local electrical codes and safety standards. We can also perform electrical inspections and help bring older systems up to current code requirements.",
  },
  {
    category: "electrical",
    question: "Do you offer electrical system maintenance?",
    answer:
      "Yes, we provide scheduled maintenance services for both residential and commercial electrical systems. Regular maintenance helps prevent problems, ensures safety, and can extend the life of your electrical equipment.",
  },

  // Construction
  {
    category: "construction",
    question: "What types of construction projects do you handle?",
    answer:
      "We handle residential construction, commercial renovations, custom architecture projects, and building maintenance. Our services range from minor repairs and updates to complete construction and major renovation projects.",
  },
  {
    category: "construction",
    question: "Do you handle both residential and commercial construction?",
    answer:
      "Yes, Crown Prince has experience with both residential and commercial construction projects. Our team adapts our approach based on the specific requirements, codes, and timelines associated with each project type.",
  },
  {
    category: "construction",
    question: "How long do construction projects typically take?",
    answer:
      "Project timelines vary significantly based on scope, size, and complexity. Small renovations may take 1-2 weeks, while larger construction projects can take several months. We provide detailed timeline estimates during the planning phase.",
  },
  {
    category: "construction",
    question: "Do you help with permits and approvals?",
    answer:
      "Yes, we assist with obtaining necessary permits and approvals for construction projects. Our team is familiar with local building codes and permitting processes, which helps streamline project approval and ensures compliance.",
  },
  {
    category: "construction",
    question: "Can you work within my budget?",
    answer:
      "We work closely with clients to develop solutions that fit their budgets. During planning, we discuss options and alternatives to help maximize value while maintaining quality. We provide detailed cost breakdowns and can suggest phased approaches for larger projects.",
  },
  {
    category: "construction",
    question: "Do you provide project management services?",
    answer:
      "Yes, comprehensive project management is included with all our construction services. We coordinate scheduling, materials, subcontractors, and quality control to ensure projects stay on track and meet our quality standards.",
  },
  {
    category: "construction",
    question:
      "What happens if there are unexpected issues during construction?",
    answer:
      "We conduct thorough initial assessments to minimize surprises, but if unexpected issues arise, we communicate immediately with clients, provide options and cost estimates, and work together to determine the best path forward.",
  },

  // Logistics
  {
    category: "logistics",
    question: "What logistics and warehousing services do you provide?",
    answer:
      "Our logistics services include climate-controlled storage, inventory management, real-time tracking, same-day delivery, custom logistics solutions, and comprehensive security systems for stored goods.",
  },
  {
    category: "logistics",
    question: "Do you offer same-day delivery services?",
    answer:
      "Yes, we provide same-day delivery services within our service area. Delivery scheduling depends on availability, location, and the nature of items being delivered. Contact us to check availability for your specific needs.",
  },
  {
    category: "logistics",
    question: "How secure is your warehousing facility?",
    answer:
      "Our warehousing facilities feature comprehensive security systems including 24/7 surveillance, controlled access, alarm systems, and climate control. We maintain detailed inventory tracking and provide insurance coverage for stored items.",
  },
  {
    category: "logistics",
    question: "Can you handle specialized storage requirements?",
    answer:
      "Yes, we can accommodate various specialized storage needs including climate-controlled environments, secure storage for valuable items, and custom solutions based on specific requirements. Discuss your needs with our team for a tailored solution.",
  },
  {
    category: "logistics",
    question: "Do you provide inventory management services?",
    answer:
      "Yes, we offer comprehensive inventory management including real-time tracking, automated reporting, and analytics. Our systems help optimize inventory levels and provide detailed reporting for better business decision-making.",
  },

  // Pricing & Contracts
  {
    category: "pricing",
    question: "How do you price your services?",
    answer:
      "Our pricing varies based on project scope, complexity, materials, and timeline requirements. We provide transparent, detailed quotes that break down costs clearly. We offer competitive pricing while maintaining our premium quality standards.",
  },
  {
    category: "pricing",
    question: "Do you require payment upfront?",
    answer:
      "Payment terms vary by project type and size. Typically, we require a deposit to begin work, with progress payments scheduled throughout the project. Final payment is due upon completion and client approval. We discuss payment terms during the contract phase.",
  },
  {
    category: "pricing",
    question: "Do you offer financing options?",
    answer:
      "We can work with clients to develop payment plans for larger projects. While we don't provide direct financing, we can discuss flexible payment arrangements and can recommend financing partners for qualifying projects.",
  },
  {
    category: "pricing",
    question: "Are your quotes binding?",
    answer:
      "Our detailed written quotes are binding for the specified scope of work, provided there are no changes to the project specifications. Any changes or additional work would be discussed and approved before implementation with updated pricing.",
  },
  {
    category: "pricing",
    question: "What's included in your service quotes?",
    answer:
      "Our quotes include labor, materials, permits (where applicable), project management, quality assurance, and cleanup. We provide detailed breakdowns so you understand exactly what's included. Any exclusions are clearly noted.",
  },
  {
    category: "pricing",
    question: "Do you offer discounts for multiple services or large projects?",
    answer:
      "We often provide value pricing for clients who use multiple services or for larger projects. Bundle pricing and volume discounts may be available. Discuss your complete needs with us for the most competitive pricing structure.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const contactOptions = [
    {
      title: "Call Us",
      description: "Speak directly with our team",
      icon: Phone,
      action: "Call Now",
      contact: "+231 (555) 100-0001",
      color: "from-green-600 to-green-500",
    },
    {
      title: "Email Support",
      description: "Get detailed written responses",
      icon: Mail,
      action: "Send Email",
      contact: "info@crownprince.com",
      color: "from-blue-600 to-blue-500",
    },
    {
      title: "Live Chat",
      description: "Quick answers to simple questions",
      icon: MessageCircle,
      action: "Start Chat",
      contact: "Available 9 AM - 6 PM",
      color: "from-purple-600 to-purple-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                  <HelpCircle className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              💡 Get Answers Fast
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Find answers to common questions about our premium services. Can't
              find what you're looking for? Our team is here to help.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400"
                  : "border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600"
              }`}
            >
              All Categories
              <Badge className="ml-2 bg-white/20">{faqs.length}</Badge>
            </Button>
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-3 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white hover:scale-105`
                      : "border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600"
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge className="ml-2 bg-white/20">{category.count}</Badge>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <Card
                    key={index}
                    className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl overflow-hidden"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="px-8 py-6 text-left hover:no-underline">
                          <div className="flex items-start space-x-4 w-full">
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <HelpCircle className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">
                                {faq.question}
                              </h3>
                              <Badge className="mt-2 capitalize text-xs">
                                {faq.category.replace("-", " ")}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-8 pb-6">
                          <div className="ml-12 prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-16">
                <CardContent>
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    No questions found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse a different
                    category.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("general");
                    }}
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400"
                  >
                    Reset Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Still Need Help?
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get Personal Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team is ready to provide personalized assistance for
              your specific needs and questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card
                  key={index}
                  className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-6">
                      {option.contact}
                    </p>
                    <Button
                      className={`w-full bg-gradient-to-r ${option.color} text-white hover:scale-105 transition-transform duration-300`}
                    >
                      {option.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Crown className="h-16 w-16 text-yellow-500 animate-pulse mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Premium Service?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project needs and show you why Crown Prince
              delivers the royal treatment for every client.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
