import {
  Crown,
  Star,
  Award,
  Users,
  Shield,
  TrendingUp,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Target,
  Heart,
  Zap,
  Building,
  Briefcase,
  GraduationCap,
  Globe,
  Coffee,
  Camera,
  Music,
  Palette,
  Code,
  Wrench,
  Lightbulb,
  BookOpen,
  Rocket,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Monitor,
  Settings,
  PenTool,
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

export default function TeamPage() {
  const leadership = [
    {
      name: "Prince Howard",
      role: "Chief Executive Officer & Founder",
      department: "Executive Leadership",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Prince Howard founded Crown Prince with a vision to deliver premium services that exceed industry standards. His strategic leadership and business acumen have positioned the company as a trusted partner for complex projects across multiple sectors.",
      experience: "15+ years",
      education: "MBA Business Management, BS Engineering",
      specialties: [
        "Strategic Leadership",
        "Business Development",
        "Contract Management",
      ],
      contact: {
        email: "prince@crownprince.com",
        linkedin: "prince-howard",
        phone: "+231 (555) 001-0001",
      },
      achievements: [
        "Founded Crown Prince Services",
        "Successfully managed 500+ contract projects",
        "Built strategic partnerships across West Africa",
      ],
      interests: ["Strategic Planning", "Innovation", "Team Development"],
      quote:
        "Excellence isn't just our standard—it's our promise to every client who trusts us with their vision.",
    },
    {
      name: "Pedro Howard",
      role: "Chief Operations Officer",
      department: "Operations Management",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Pedro Howard brings exceptional operational oversight and strategic planning to Crown Prince. His dedication to operational excellence ensures seamless project execution from contract award to final delivery.",
      experience: "12+ years",
      education: "MS Operations Management, BS Business Administration",
      specialties: [
        "Operations Strategy",
        "Resource Management",
        "Quality Assurance",
      ],
      contact: {
        email: "pedro@crownprince.com",
        linkedin: "pedro-howard",
        phone: "+231 (555) 001-0002",
      },
      achievements: [
        "Streamlined operations across all departments",
        "Reduced project delivery time by 30%",
        "Implemented quality management systems",
      ],
      interests: [
        "Process Innovation",
        "Team Leadership",
        "Strategic Planning",
      ],
      quote:
        "Great operations are invisible to the client—they just experience excellent results.",
    },
    {
      name: "Mohammed Kromah",
      role: "Chief Technology Officer",
      department: "Technology Division",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mohammed Kromah leads Crown Prince's technological innovation and digital transformation initiatives. His expertise ensures the company stays at the forefront of industry technology and digital solutions.",
      experience: "10+ years",
      education: "MS Computer Science, BS Information Technology",
      specialties: [
        "Technology Strategy",
        "Digital Innovation",
        "System Integration",
      ],
      contact: {
        email: "mohammed@crownprince.com",
        linkedin: "mohammed-kromah",
        phone: "+231 (555) 001-0003",
      },
      achievements: [
        "Led company-wide digital transformation",
        "Implemented advanced project management systems",
        "Developed proprietary tracking solutions",
      ],
      interests: ["Emerging Technologies", "Digital Strategy", "Innovation"],
      quote: "Technology should empower excellence and simplify complexity.",
    },
  ];

  const departmentManagers = [
    {
      name: "Stanley Togba",
      role: "Electrical Services Manager",
      department: "Electrical Division",
      image: "/placeholder.svg?height=350&width=350",
      bio: "Stanley Togba manages all electrical service operations with precision and safety as top priorities. His extensive experience ensures every electrical project meets the highest industry standards.",
      experience: "14+ years",
      education: "BS Electrical Engineering, Master Electrician Certification",
      specialties: [
        "Electrical Systems Design",
        "Industrial Automation",
        "Safety Management",
      ],
      projectsCompleted: "200+",
      teamSize: "Contract-based teams up to 25 specialists",
      contact: {
        email: "stanley@crownprince.com",
        phone: "+231 (555) 002-0001",
      },
      icon: Zap,
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Michael Rodriguez",
      role: "Construction Manager",
      department: "Construction Division",
      image: "/placeholder.svg?height=350&width=350",
      bio: "Michael Rodriguez oversees all construction operations, ensuring projects are delivered on time, within budget, and to exact specifications. His attention to detail is unmatched.",
      experience: "16+ years",
      education: "BS Civil Engineering, Project Management Certification",
      specialties: [
        "Project Management",
        "Quality Control",
        "Safety Coordination",
      ],
      projectsCompleted: "150+",
      teamSize: "Contract-based teams up to 40 specialists",
      contact: {
        email: "michael@crownprince.com",
        phone: "+231 (555) 002-0002",
      },
      icon: Building,
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "Jennifer Davis",
      role: "Logistics Manager",
      department: "Supply Chain & Logistics",
      image: "/placeholder.svg?height=350&width=350",
      bio: "Jennifer Davis manages the complex logistics that keep projects running smoothly. Her strategic approach to supply chain management ensures materials and resources are always available when needed.",
      experience: "13+ years",
      education: "MS Supply Chain Management, BS Business Operations",
      specialties: [
        "Supply Chain Strategy",
        "Vendor Relations",
        "Inventory Management",
      ],
      projectsCompleted: "300+",
      teamSize: "Dynamic logistics networks as needed",
      contact: {
        email: "jennifer@crownprince.com",
        phone: "+231 (555) 002-0003",
      },
      icon: Briefcase,
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const techTeam = [
    {
      name: "Kester Howard",
      role: "Digital Design & IT Support Specialist",
      department: "Technology Division",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Kester Howard combines creative design expertise with comprehensive IT support capabilities. As Mohammed's key partner, he ensures all digital assets and technical systems operate flawlessly.",
      experience: "6+ years",
      specialties: [
        "Graphic Design",
        "IT Systems Support",
        "Digital Asset Management",
      ],
      contact: {
        email: "kester@crownprince.com",
        phone: "+231 (555) 003-0001",
      },
      relation: "Technology Division Key Partner",
    },
  ];

  const companyValues = [
    {
      title: "Excellence First",
      description:
        "We pursue perfection in every project, no matter the size or complexity",
      icon: Crown,
      color: "text-yellow-600",
    },
    {
      title: "Contract Integrity",
      description:
        "Every commitment made is a promise kept, on time and within budget",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      title: "Innovation Drive",
      description:
        "We embrace cutting-edge solutions to deliver superior results",
      icon: Rocket,
      color: "text-purple-600",
    },
    {
      title: "Strategic Partnership",
      description:
        "Building lasting relationships with clients, vendors, and specialists",
      icon: Users,
      color: "text-green-600",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Years Combined Experience", value: "60+", icon: Award },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Specialist Network", value: "200+", icon: Users },
  ];

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
                  <Crown className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              👑 Leadership Excellence
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Elite Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Behind every successful contract is a team of exceptional leaders
              and specialists. Meet the professionals who deliver premium
              results on every project.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm border-white/20"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
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

      {/* Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Executive Leadership
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our executive team provides the strategic direction and
              operational excellence that drives Crown Prince's success in every
              contract.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Contact Overlay */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-full p-2"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-full p-2"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-yellow-600 font-semibold text-lg mb-1">
                        {leader.role}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800"
                      >
                        {leader.department}
                      </Badge>
                    </div>

                    <blockquote className="italic text-gray-600 mb-6 border-l-4 border-yellow-500 pl-4">
                      "{leader.quote}"
                    </blockquote>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {leader.bio}
                    </p>

                    {/* Experience & Education */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-yellow-600" />
                        <span className="text-gray-700">
                          <strong>Experience:</strong> {leader.experience}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <span className="text-gray-700 text-sm">
                          <strong>Education:</strong> {leader.education}
                        </span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Core Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="border-yellow-600 text-yellow-700"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-yellow-600" />
                          <span>{leader.contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-yellow-600" />
                          <span>{leader.contact.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Managers */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Department Leaders
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Operational Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our department managers coordinate with specialized contractors
              and vendors to deliver exceptional results across all service
              areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {departmentManagers.map((manager, index) => {
              const IconComponent = manager.icon;
              return (
                <Card
                  key={index}
                  className={`group border-2 ${manager.borderColor} hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                >
                  <CardContent className="p-0">
                    {/* Header with Icon */}
                    <div
                      className={`${manager.bgColor} p-6 rounded-t-lg relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${manager.color} rounded-xl flex items-center justify-center`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <Badge className={`${manager.bgColor} border-gray-300`}>
                          {manager.experience}
                        </Badge>
                      </div>
                      <div className="absolute -bottom-2 -right-8 w-24 h-24 bg-white/20 rounded-full" />
                    </div>

                    {/* Profile Image */}
                    <div className="px-6 pt-6">
                      <div className="relative">
                        <img
                          src={manager.image}
                          alt={manager.name}
                          className="w-32 h-32 object-cover rounded-2xl mx-auto border-4 border-white shadow-lg group-hover:border-yellow-500 transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {manager.name}
                        </h3>
                        <p className="text-yellow-600 font-semibold">
                          {manager.role}
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          {manager.department}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                        {manager.bio}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">
                            {manager.projectsCompleted}
                          </div>
                          <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">
                            5★
                          </div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                          Specialties
                        </h4>
                        <div className="space-y-2">
                          {manager.specialties.map((specialty, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {specialty}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Team Structure */}
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-700">
                          <strong>Team Structure:</strong>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {manager.teamSize}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3 text-yellow-600" />
                            <span className="text-xs">
                              {manager.contact.email}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3 text-yellow-600" />
                            <span className="text-xs">
                              {manager.contact.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              Technology Team
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Digital Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology team ensures Crown Prince stays at the forefront of
              digital solutions and technical excellence.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {techTeam.map((member, index) => (
              <Card
                key={index}
                className="group border-2 border-purple-100 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Profile Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-2xl border-4 border-white shadow-lg group-hover:border-purple-500 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                          <PenTool className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-purple-600 font-semibold text-lg">
                          {member.role}
                        </p>
                        <Badge className="bg-purple-100 text-purple-800 mt-2">
                          {member.relation}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Experience */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                          <span className="text-gray-700">
                            <strong>Experience:</strong> {member.experience}
                          </span>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Core Specialties
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {member.specialties.map((specialty, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-purple-600 text-purple-700 justify-center"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-600">
                          <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Mail className="h-4 w-4 text-purple-600" />
                            <span>{member.contact.email}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Phone className="h-4 w-4 text-purple-600" />
                            <span>{member.contact.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every contract, every decision, and every
              relationship we build in pursuit of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-yellow-50 group-hover:to-yellow-100 transition-colors duration-300`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${value.color} group-hover:text-yellow-600 transition-colors duration-300`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
              Partner With
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the Crown Prince difference? Connect with our
              team to discuss how we can bring premium results to your next
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl"
              >
                <Target className="mr-2 h-5 w-5" />
                Request Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
