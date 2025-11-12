"use client";

import {
  Crown,
  Star,
  Award,
  Users,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Coffee,
  Zap,
  Building,
  Briefcase,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Plus,
  Target,
  Lightbulb,
  BookOpen,
  Rocket,
  Sparkles,
  Globe,
  Home,
  Car,
  Laptop,
  Phone,
  Mail,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  Gamepad2,
  Dumbbell,
  Stethoscope,
  Plane,
  Gift,
  PiggyBank,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Electrical Engineer",
      department: "Electrical Services",
      location: "New York, NY",
      type: "Full-time",
      experience: "5-8 years",
      salary: "$85,000 - $120,000",
      description:
        "Lead complex electrical projects and mentor junior engineers while ensuring the highest standards of safety and quality.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "5+ years experience in commercial/industrial electrical systems",
        "Professional Engineer (PE) license preferred",
        "Experience with AutoCAD and electrical design software",
        "Strong project management skills",
      ],
      benefits: [
        "Health Insurance",
        "401k Match",
        "Professional Development",
        "Flexible Hours",
      ],
      urgent: true,
      featured: true,
      postedDays: 3,
    },
    {
      id: 2,
      title: "Construction Project Manager",
      department: "Construction",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "7-10 years",
      salary: "$95,000 - $135,000",
      description:
        "Oversee large-scale construction projects from planning to completion, ensuring quality, budget, and timeline adherence.",
      requirements: [
        "Bachelor's degree in Construction Management or related field",
        "7+ years of construction project management experience",
        "PMP certification preferred",
        "Experience with commercial and residential projects",
        "Strong leadership and communication skills",
      ],
      benefits: [
        "Health Insurance",
        "Company Vehicle",
        "Performance Bonus",
        "Training Budget",
      ],
      urgent: false,
      featured: true,
      postedDays: 5,
    },
    {
      id: 3,
      title: "Logistics Coordinator",
      department: "Logistics",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$60,000 - $80,000",
      description:
        "Coordinate supply chain operations and optimize transportation logistics for maximum efficiency and customer satisfaction.",
      requirements: [
        "Bachelor's degree in Supply Chain Management or related field",
        "3+ years of logistics coordination experience",
        "Knowledge of transportation management systems",
        "Strong analytical and problem-solving skills",
        "Excellent communication abilities",
      ],
      benefits: [
        "Health Insurance",
        "Remote Work Options",
        "Career Growth",
        "Wellness Program",
      ],
      urgent: false,
      featured: false,
      postedDays: 7,
    },
    {
      id: 4,
      title: "Master Electrician",
      department: "Electrical Services",
      location: "Houston, TX",
      type: "Full-time",
      experience: "10+ years",
      salary: "$75,000 - $105,000",
      description:
        "Lead electrical installations and troubleshooting for complex industrial and commercial systems.",
      requirements: [
        "Master Electrician license required",
        "10+ years of electrical experience",
        "Industrial automation experience preferred",
        "Ability to read complex electrical schematics",
        "Leadership experience with field teams",
      ],
      benefits: [
        "Health Insurance",
        "Tool Allowance",
        "Overtime Pay",
        "Certification Support",
      ],
      urgent: true,
      featured: false,
      postedDays: 2,
    },
    {
      id: 5,
      title: "Construction Safety Manager",
      department: "Construction",
      location: "Miami, FL",
      type: "Full-time",
      experience: "5-7 years",
      salary: "$70,000 - $95,000",
      description:
        "Ensure all construction sites maintain the highest safety standards and regulatory compliance.",
      requirements: [
        "Bachelor's degree in Construction Management or Safety",
        "OSHA 30-hour certification required",
        "5+ years of construction safety experience",
        "Knowledge of safety regulations and standards",
        "Strong attention to detail and communication skills",
      ],
      benefits: [
        "Health Insurance",
        "Safety Bonus",
        "Professional Development",
        "Flexible Schedule",
      ],
      urgent: false,
      featured: false,
      postedDays: 4,
    },
    {
      id: 6,
      title: "Supply Chain Analyst",
      department: "Logistics",
      location: "Denver, CO",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$55,000 - $75,000",
      description:
        "Analyze supply chain data to identify optimization opportunities and improve operational efficiency.",
      requirements: [
        "Bachelor's degree in Business, Analytics, or related field",
        "2+ years of supply chain or data analysis experience",
        "Proficiency in Excel, SQL, and data visualization tools",
        "Strong analytical and problem-solving skills",
        "Experience with ERP systems preferred",
      ],
      benefits: [
        "Health Insurance",
        "Remote Work",
        "Learning Stipend",
        "Team Events",
      ],
      urgent: false,
      featured: false,
      postedDays: 6,
    },
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      icon: Stethoscope,
      color: "text-red-600",
      items: [
        "Comprehensive health, dental, and vision insurance",
        "Mental health support and counseling services",
        "Wellness programs and gym membership discounts",
        "Annual health screenings and preventive care",
      ],
    },
    {
      category: "Financial Security",
      icon: PiggyBank,
      color: "text-green-600",
      items: [
        "Competitive salaries with annual reviews",
        "401(k) retirement plan with company matching",
        "Performance-based bonuses and profit sharing",
        "Life and disability insurance coverage",
      ],
    },
    {
      category: "Work-Life Balance",
      icon: Heart,
      color: "text-purple-600",
      items: [
        "Flexible work schedules and remote work options",
        "Generous paid time off and holiday schedule",
        "Parental leave and family support programs",
        "Employee assistance programs",
      ],
    },
    {
      category: "Growth & Development",
      icon: Rocket,
      color: "text-blue-600",
      items: [
        "Professional development and training opportunities",
        "Tuition reimbursement for continuing education",
        "Mentorship programs and career coaching",
        "Conference attendance and certification support",
      ],
    },
    {
      category: "Perks & Rewards",
      icon: Gift,
      color: "text-yellow-600",
      items: [
        "Employee recognition and appreciation programs",
        "Company events and team building activities",
        "Referral bonuses for successful hires",
        "Exclusive discounts and partnership benefits",
      ],
    },
    {
      category: "Equipment & Tools",
      icon: Laptop,
      color: "text-indigo-600",
      items: [
        "Latest technology and equipment provided",
        "Tool allowances for field professionals",
        "Company vehicles for eligible positions",
        "Mobile device and communication allowances",
      ],
    },
  ];

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "Electrical Services", label: "Electrical Services" },
    { value: "Construction", label: "Construction" },
    { value: "Logistics", label: "Logistics" },
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "New York, NY", label: "New York, NY" },
    { value: "Los Angeles, CA", label: "Los Angeles, CA" },
    { value: "Chicago, IL", label: "Chicago, IL" },
    { value: "Houston, TX", label: "Houston, TX" },
    { value: "Miami, FL", label: "Miami, FL" },
    { value: "Denver, CO", label: "Denver, CO" },
  ];

  const whyWorkHere = [
    {
      title: "Industry Leadership",
      description:
        "Work with the best in the business on cutting-edge projects",
      icon: Crown,
      stat: "15+ Years",
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and development opportunities",
      icon: TrendingUp,
      stat: "85% Promoted",
    },
    {
      title: "Team Excellence",
      description: "Collaborate with passionate, skilled professionals",
      icon: Users,
      stat: "120+ Experts",
    },
    {
      title: "Innovation Focus",
      description: "Embrace new technologies and innovative solutions",
      icon: Lightbulb,
      stat: "25+ Patents",
    },
    {
      title: "Client Impact",
      description: "Make a real difference in high-profile projects",
      icon: Target,
      stat: "1,250+ Projects",
    },
    {
      title: "Recognition",
      description: "Your contributions are valued and rewarded",
      icon: Award,
      stat: "Top Employer",
    },
  ];

  const applicationProcess = [
    {
      step: "01",
      title: "Apply Online",
      description:
        "Submit your application and resume through our career portal",
      icon: FileText,
      duration: "5 minutes",
    },
    {
      step: "02",
      title: "Initial Review",
      description: "Our HR team reviews your application and qualifications",
      icon: Search,
      duration: "3-5 days",
    },
    {
      step: "03",
      title: "Phone Interview",
      description: "Initial conversation with our hiring manager",
      icon: Phone,
      duration: "30 minutes",
    },
    {
      step: "04",
      title: "In-Person/Virtual Interview",
      description: "Meet the team and discuss your experience in detail",
      icon: Users,
      duration: "1-2 hours",
    },
    {
      step: "05",
      title: "Reference Check",
      description: "We verify your background and speak with references",
      icon: Shield,
      duration: "2-3 days",
    },
    {
      step: "06",
      title: "Offer & Onboarding",
      description: "Welcome to the Crown Prince family!",
      icon: Gift,
      duration: "1 week",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "all" || job.location === selectedLocation;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getDepartmentColor = (department) => {
    switch (department) {
      case "Electrical Services":
        return {
          bg: "bg-blue-100",
          text: "text-blue-800",
          border: "border-blue-200",
        };
      case "Construction":
        return {
          bg: "bg-orange-100",
          text: "text-orange-800",
          border: "border-orange-200",
        };
      case "Logistics":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          border: "border-green-200",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-800",
          border: "border-gray-200",
        };
    }
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
                  <Briefcase className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              👑 Join Our Royal Team
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Your Career
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Awaits Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Build your future with Crown Prince. Join a team where your
              talents are valued, your growth is supported, and your impact is
              meaningful. Discover career opportunities that match your
              ambitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4 backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {filteredJobs.length}+
                  </div>
                  <div className="text-gray-300 text-sm">Open Positions</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    85%
                  </div>
                  <div className="text-gray-300 text-sm">
                    Internal Promotions
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    4.8
                  </div>
                  <div className="text-gray-300 text-sm">Employee Rating</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    Top 10
                  </div>
                  <div className="text-gray-300 text-sm">Best Employer</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search & Listings */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Current Openings
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find Your Perfect Role
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities across our departments and find the position
              that matches your skills and career goals.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Positions
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search by title or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500"
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500"
                    >
                      {locations.map((location) => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <Card className="border-2 border-gray-100">
                <CardContent className="p-12 text-center">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No positions found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or filters.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job) => {
                const colorClasses = getDepartmentColor(job.department);
                return (
                  <Card
                    key={job.id}
                    className={`group border-2 ${
                      job.featured
                        ? "border-yellow-500/30 bg-yellow-50/30"
                        : "border-gray-100"
                    } hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg`}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                                  {job.title}
                                </h3>
                                {job.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                                    <Star className="h-3 w-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                {job.urgent && (
                                  <Badge className="bg-red-100 text-red-800 border-red-300">
                                    <Clock className="h-3 w-3 mr-1" />
                                    Urgent
                                  </Badge>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-4 mb-4">
                                <Badge
                                  className={`${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}
                                >
                                  {job.department}
                                </Badge>
                                <div className="flex items-center text-gray-600">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Briefcase className="h-4 w-4 mr-1" />
                                  {job.type}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {job.experience}
                                </div>
                                <div className="flex items-center text-green-600 font-semibold">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  {job.salary}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500 mb-2">
                                Posted {job.postedDays} days ago
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {job.description}
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Key Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements
                                  .slice(0, 3)
                                  .map((req, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start space-x-2"
                                    >
                                      <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700 text-sm">
                                        {req}
                                      </span>
                                    </li>
                                  ))}
                                {job.requirements.length > 3 && (
                                  <li className="flex items-center space-x-2 text-yellow-600 text-sm font-medium">
                                    <Plus className="h-4 w-4" />
                                    <span>
                                      {job.requirements.length - 3} more
                                      requirements
                                    </span>
                                  </li>
                                )}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Benefits Highlights
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit) => (
                                  <Badge
                                    key={benefit}
                                    variant="outline"
                                    className="border-gray-300 text-gray-700"
                                  >
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[160px]">
                          <Button
                            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
                            size="lg"
                          >
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Why Crown Prince
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where Excellence Meets Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that invests in your success, values your
              contributions, and provides the platform for your professional
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkHere.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card
                  key={index}
                  className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 text-sm"
                      >
                        {reason.stat}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Benefits & Perks
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Care Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our people with a comprehensive
              benefits package that supports your health, wealth, and
              well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mr-4 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-colors duration-300">
                        <IconComponent
                          className={`h-6 w-6 ${benefit.color} group-hover:text-yellow-600 transition-colors duration-300`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {benefit.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Application Process
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Journey to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to be transparent,
              efficient, and respectful of your time. Here's what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationProcess.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === applicationProcess.length - 1;
                return (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute top-6 left-8 text-xs font-bold text-yellow-600 bg-white px-2 py-1 rounded-full border-2 border-yellow-500">
                          {step.step}
                        </div>
                        {!isLast && (
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-yellow-500 to-yellow-300"></div>
                        )}
                      </div>
                      <Card className="flex-1 ml-8 border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="bg-yellow-100 text-yellow-800"
                            >
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Crown Prince */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Life at Crown Prince
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More Than Just a Job
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a workplace culture that values collaboration,
              innovation, and personal growth. See what makes Crown Prince a
              great place to work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-24 w-24 text-yellow-600 mx-auto mb-4" />
                  <p className="text-yellow-800 font-semibold">
                    Team collaboration at Crown Prince
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Collaborative Environment
                  </h3>
                  <p className="text-gray-600">
                    Work alongside talented professionals who share your passion
                    for excellence and innovation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation First
                  </h3>
                  <p className="text-gray-600">
                    Embrace cutting-edge technologies and methodologies that
                    keep us at the industry forefront.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-600">
                    Flexible schedules and comprehensive support help you
                    maintain a healthy balance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Career Growth
                  </h3>
                  <p className="text-gray-600">
                    Clear advancement paths and continuous learning
                    opportunities fuel your professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Culture Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <Coffee className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-gray-600 text-sm">Team Events</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">$2M</div>
                <div className="text-gray-600 text-sm">Training Investment</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 mx-auto mb-3 text-red-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">96%</div>
                <div className="text-gray-600 text-sm">
                  Employee Satisfaction
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-gray-600 text-sm">Industry Awards</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Employee Stories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hear From Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Listen to what our employees say
              about their experience working at Crown Prince.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Director of Electrical Services",
                quote:
                  "Crown Prince has given me the opportunity to lead innovative projects and grow professionally. The support from leadership and the collaborative environment make this an exceptional place to build a career.",
                years: "6 years",
              },
              {
                name: "Michael Rodriguez",
                role: "Construction Project Manager",
                quote:
                  "The variety of projects and the trust placed in our team to deliver excellence keeps me motivated every day. Crown Prince truly values its people and invests in our success.",
                years: "4 years",
              },
              {
                name: "Jennifer Davis",
                role: "Logistics Coordinator",
                quote:
                  "The work-life balance and professional development opportunities here are outstanding. I've grown tremendously both personally and professionally since joining Crown Prince.",
                years: "3 years",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center border-4 border-yellow-500">
                      <Users className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-yellow-600 font-semibold">
                        {testimonial.role}
                      </p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {testimonial.years} at Crown Prince
                      </Badge>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Ready to Join
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Royal Family?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Take the next step in your career journey. Explore our open
              positions, submit your application, or reach out to learn more
              about life at Crown Prince.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Search className="mr-2 h-5 w-5" />
                Browse All Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4 backdrop-blur-sm"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Recruiting Team
              </Button>
            </div>

            {/* Contact Information */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-white font-semibold mb-1">Call Us</div>
                  <div className="text-gray-300 text-sm">(555) 123-JOBS</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-white font-semibold mb-1">Email Us</div>
                  <div className="text-gray-300 text-sm">
                    careers@crownprince.com
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
                  <div className="text-white font-semibold mb-1">Visit Us</div>
                  <div className="text-gray-300 text-sm">
                    Multiple Locations
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
