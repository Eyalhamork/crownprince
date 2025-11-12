"use client";

import { useState } from "react";
import {
  Crown,
  Newspaper,
  Calendar,
  Clock,
  User,
  Eye,
  Share2,
  ArrowRight,
  Filter,
  Search,
  Tag,
  TrendingUp,
  Award,
  Building,
  Zap,
  Truck,
  Users,
  Sparkles,
  ExternalLink,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const newsCategories = [
  {
    id: "all",
    name: "All News",
    count: 12,
  },
  {
    id: "company",
    name: "Company Updates",
    count: 4,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "projects",
    name: "Project Highlights",
    count: 5,
    color: "bg-green-100 text-green-800",
  },
  {
    id: "industry",
    name: "Industry News",
    count: 3,
    color: "bg-purple-100 text-purple-800",
  },
];

const featuredNews = {
  id: "featured-1",
  title: "Crown Prince Completes Largest Commercial Project to Date",
  excerpt:
    "Our team successfully delivered the premium renovation of the Grand Plaza Complex, setting new standards for commercial construction in the region.",
  content:
    "Crown Prince Incorporated proudly announces the completion of our largest commercial project to date - the comprehensive renovation of the Grand Plaza Complex in downtown Monrovia. This $2.5 million project showcased our full range of services, from electrical systems modernization to complete interior construction and logistics coordination. The project involved upgrading 50,000 square feet of commercial space with state-of-the-art electrical infrastructure, premium construction finishes, and efficient logistics management that ensured zero downtime for existing tenants. Our team implemented smart building technologies, energy-efficient lighting systems, and advanced security infrastructure. The Grand Plaza Complex now stands as a testament to Crown Prince's commitment to excellence and our ability to deliver premium results on complex commercial projects. This milestone achievement reinforces our position as Liberia's premier construction, electrical, and logistics services provider.",
  category: "projects",
  author: "Prince Howard",
  authorRole: "CEO & Founder",
  publishedAt: "2025-01-15",
  readTime: "5 min read",
  views: 1250,
  image: "/placeholder.svg?height=400&width=600",
  tags: ["Construction", "Commercial", "Premium", "Milestone"],
  featured: true,
};

const newsArticles = [
  {
    id: "news-2",
    title: "New Smart Home Automation Division Launched",
    excerpt:
      "Crown Prince expands electrical services to include cutting-edge smart home automation solutions for residential and commercial clients.",
    content:
      "We're excited to announce the launch of our Smart Home Automation Division, led by our CTO Mohammed Kromah. This expansion represents our commitment to staying at the forefront of technological innovation in the electrical services industry. Our new division offers comprehensive smart home solutions including automated lighting systems, intelligent climate control, advanced security integration, and IoT connectivity for both residential and commercial properties. The division will provide consultation, design, installation, and ongoing support for smart building technologies. This strategic expansion aligns with growing demand for intelligent building solutions and positions Crown Prince as the region's leader in modern electrical services.",
    category: "company",
    author: "Mohammed Kromah",
    authorRole: "Chief Technology Officer",
    publishedAt: "2025-01-08",
    readTime: "3 min read",
    views: 892,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Technology", "Smart Homes", "Innovation", "Electrical"],
    featured: false,
  },
  {
    id: "news-3",
    title: "Crown Prince Achieves Industry Excellence Certification",
    excerpt:
      "Our commitment to quality and safety has been recognized with the prestigious Industry Excellence Certification from the Construction Authority of Liberia.",
    content:
      "Crown Prince Incorporated has been awarded the Industry Excellence Certification, recognizing our outstanding commitment to safety, quality, and professional standards across all our service divisions. This certification validates our rigorous quality management systems, comprehensive safety protocols, and continuous improvement initiatives. The certification process involved extensive audits of our construction practices, electrical installations, and logistics operations. This achievement demonstrates our dedication to maintaining the highest industry standards and provides our clients with additional assurance of our professional capabilities and commitment to excellence.",
    category: "company",
    author: "Pedro Howard",
    authorRole: "Chief Operations Officer",
    publishedAt: "2025-01-02",
    readTime: "4 min read",
    views: 1105,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Certification", "Quality", "Safety", "Recognition"],
    featured: false,
  },
  {
    id: "news-4",
    title: "Major Infrastructure Project Partnership Announced",
    excerpt:
      "Crown Prince partners with regional authorities for a significant infrastructure development project, bringing premium services to public sector.",
    content:
      "We're proud to announce our partnership with regional authorities for the Monrovia Infrastructure Enhancement Project, a multi-phase initiative that will showcase our logistics and construction capabilities on an unprecedented scale. This partnership involves the modernization of critical infrastructure including electrical grid upgrades, construction of logistics hubs, and implementation of smart city technologies. The project spans 24 months and represents one of the largest infrastructure investments in the region. Our role encompasses project management, electrical systems design and installation, construction services, and comprehensive logistics coordination.",
    category: "projects",
    author: "Stanley Togba",
    authorRole: "Electrical Services Manager",
    publishedAt: "2024-12-28",
    readTime: "6 min read",
    views: 756,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Infrastructure", "Partnership", "Public Sector", "Construction"],
    featured: false,
  },
  {
    id: "news-5",
    title: "Sustainable Construction Practices Initiative",
    excerpt:
      "Crown Prince leads the way in environmental responsibility with new sustainable construction practices and green building solutions.",
    content:
      "Crown Prince Incorporated is pioneering sustainable construction practices in Liberia, implementing eco-friendly materials, energy-efficient systems, and waste reduction strategies. Our commitment to environmental responsibility aligns with our premium service standards. The initiative includes the use of sustainable building materials, implementation of energy-efficient electrical systems, waste minimization programs, and carbon footprint reduction strategies. We're also investing in training our team on green building practices and obtaining relevant environmental certifications. This sustainability focus not only benefits the environment but also provides long-term cost savings for our clients through reduced energy consumption and maintenance requirements.",
    category: "company",
    author: "Michael Rodriguez",
    authorRole: "Construction Manager",
    publishedAt: "2024-12-20",
    readTime: "4 min read",
    views: 643,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Sustainability", "Green Building", "Environment", "Innovation"],
    featured: false,
  },
  {
    id: "news-6",
    title: "Advanced Logistics Technology Implementation",
    excerpt:
      "New real-time tracking and inventory management systems enhance our logistics capabilities and client transparency.",
    content:
      "Crown Prince has implemented state-of-the-art logistics technology including real-time GPS tracking, automated inventory management, and client portal access. These improvements significantly enhance transparency and efficiency in our warehousing and delivery services. The new system provides clients with real-time visibility into their shipments, automated delivery notifications, and comprehensive reporting capabilities. Our warehouse management system now features barcode scanning, automated stock level monitoring, and predictive analytics for demand forecasting. This technology investment demonstrates our commitment to operational excellence and client satisfaction.",
    category: "company",
    author: "Jennifer Davis",
    authorRole: "Logistics Manager",
    publishedAt: "2024-12-15",
    readTime: "3 min read",
    views: 521,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Logistics", "Technology", "Efficiency", "Client Service"],
    featured: false,
  },
  {
    id: "news-7",
    title: "Industry Safety Standards Recognition",
    excerpt:
      "Crown Prince receives recognition for exceeding industry safety standards across all service divisions.",
    content:
      "The Liberian Safety Council has recognized Crown Prince Incorporated for our exceptional safety record and proactive safety management across electrical, construction, and logistics operations. This recognition reflects our unwavering commitment to worker and client safety. Our comprehensive safety program includes regular training sessions, safety equipment updates, incident prevention protocols, and continuous monitoring of safety performance. We maintain zero-tolerance policies for safety violations and have implemented industry-leading safety management systems. This recognition validates our belief that safety is not just a priority but a core value that guides all our operations.",
    category: "industry",
    author: "Prince Howard",
    authorRole: "CEO & Founder",
    publishedAt: "2024-12-10",
    readTime: "2 min read",
    views: 789,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Safety", "Recognition", "Industry Standards", "Excellence"],
    featured: false,
  },
  {
    id: "news-8",
    title: "Premium Residential Project Showcase",
    excerpt:
      "Highlighting our recent luxury residential projects that demonstrate Crown Prince's commitment to premium quality and craftsmanship.",
    content:
      "Our latest residential projects showcase the Crown Prince difference - from smart home electrical systems to luxury renovations and custom storage solutions. Each project reflects our commitment to delivering royal treatment to every client. Recent projects include a luxury villa with integrated smart home systems, premium condominium electrical upgrades, and custom residential construction featuring high-end finishes and advanced building technologies. Our residential services combine technical expertise with aesthetic excellence, ensuring that every project meets the highest standards of quality and sophistication.",
    category: "projects",
    author: "Kester Howard",
    authorRole: "Digital Design & IT Support Specialist",
    publishedAt: "2024-12-05",
    readTime: "5 min read",
    views: 934,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Residential", "Luxury", "Craftsmanship", "Premium"],
    featured: false,
  },
  {
    id: "news-9",
    title: "Industry Trends: The Future of Construction Technology",
    excerpt:
      "Crown Prince's perspective on emerging trends in construction technology and how we're preparing for the future of the industry.",
    content:
      "As technology continues to reshape the construction industry, Crown Prince remains at the forefront of innovation. From Building Information Modeling (BIM) to IoT integration and automated systems, we're investing in tomorrow's solutions today. Our technology roadmap includes adoption of drone surveying, 3D printing for construction components, augmented reality for project visualization, and AI-powered project management systems. We're also exploring blockchain applications for supply chain transparency and smart contracts for project management. This forward-thinking approach ensures our clients benefit from cutting-edge solutions and improved project outcomes.",
    category: "industry",
    author: "Mohammed Kromah",
    authorRole: "Chief Technology Officer",
    publishedAt: "2024-11-28",
    readTime: "7 min read",
    views: 1156,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Technology", "Future", "Innovation", "Industry Trends"],
    featured: false,
  },
  {
    id: "news-10",
    title: "Community Partnership: Local Skills Development Program",
    excerpt:
      "Crown Prince launches community initiative to develop local technical skills and support workforce development in the construction and electrical trades.",
    content:
      "Crown Prince Incorporated is proud to launch our Community Skills Development Program, partnering with local educational institutions to provide hands-on training in electrical, construction, and logistics skills. This initiative reflects our commitment to community development and workforce enhancement. The program offers apprenticeships, technical training workshops, and mentorship opportunities for local youth and professionals. We're providing practical training in electrical installation, construction techniques, project management, and logistics operations. This investment in human capital development supports both community growth and our industry's future by creating a skilled local workforce.",
    category: "company",
    author: "Pedro Howard",
    authorRole: "Chief Operations Officer",
    publishedAt: "2024-11-20",
    readTime: "4 min read",
    views: 672,
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Community", "Education", "Skills Development", "Partnership"],
    featured: false,
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const allArticles = [featuredNews, ...newsArticles];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const categoryObj = newsCategories.find((cat) => cat.id === category);
    return categoryObj?.color || "bg-gray-100 text-gray-800";
  };

  const getRelativeTime = (dateString: string) => {
    const now = new Date();
    const publishedDate = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - publishedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return formatDate(dateString);
  };

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
                  <Newspaper className="h-12 w-12 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <Badge className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 text-sm px-6 py-2">
              📰 Stay Updated
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Latest News &
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay informed about Crown Prince's latest projects, company
              updates, and industry insights from our expert team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search news articles..."
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
            {newsCategories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400"
                    : "border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600"
                }`}
              >
                {category.name}
                <Badge className="ml-2 bg-white/20">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "all" && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-100 text-yellow-800 mb-4">
                🌟 Featured Story
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                Spotlight Article
              </h2>
            </div>

            <Card className="max-w-6xl mx-auto border-2 border-yellow-200 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className={getCategoryColor(featuredNews.category)}>
                      {featuredNews.category.charAt(0).toUpperCase() +
                        featuredNews.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredNews.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredNews.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredNews.title}
                      </h1>
                      <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        {featuredNews.excerpt}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {featuredNews.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {featuredNews.authorRole}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {featuredNews.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-yellow-600 text-yellow-700"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={() => setSelectedArticle(featuredNews)}
                      className="w-full lg:w-auto bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 font-semibold px-8 py-3"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {selectedCategory === "all"
                    ? "All Articles"
                    : `${
                        newsCategories.find(
                          (cat) => cat.id === selectedCategory
                        )?.name
                      }`}
                </h2>
                <p className="text-xl text-gray-600">
                  {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles
                  .filter(
                    (article) => !article.featured || selectedCategory !== "all"
                  )
                  .map((article) => (
                    <Card
                      key={article.id}
                      className="group border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category.charAt(0).toUpperCase() +
                              article.category.slice(1)}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {getRelativeTime(article.publishedAt)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{article.views}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors line-clamp-2">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>

                          {/* Author */}
                          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900 text-sm">
                                {article.author}
                              </p>
                              <p className="text-xs text-gray-600">
                                {article.authorRole}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-yellow-600 hover:text-yellow-700"
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 pt-2">
                            {article.tags.slice(0, 2).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {article.tags.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{article.tags.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </>
          ) : (
            <Card className="text-center py-16 max-w-2xl mx-auto">
              <CardContent>
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse a different
                  category.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400"
                >
                  Reset Search
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stay in the Loop
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates, project
                highlights, and industry insights delivered directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border-yellow-300 focus:border-yellow-500"
                />
                <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, just premium updates. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Crown className="h-16 w-16 text-yellow-500 animate-pulse mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the Crown Prince difference. Let's discuss how we can
              bring premium results to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold text-lg px-10 py-4 shadow-2xl"
              >
                <Building className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black bg-transparent text-lg px-10 py-4"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal/Detail View */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <CardContent className="p-0">
              {/* Header */}
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <Button
                  onClick={() => setSelectedArticle(null)}
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                >
                  ✕
                </Button>
                <div className="absolute bottom-4 left-6">
                  <Badge className={getCategoryColor(selectedArticle.category)}>
                    {selectedArticle.category.charAt(0).toUpperCase() +
                      selectedArticle.category.slice(1)}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(selectedArticle.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{selectedArticle.views.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {selectedArticle.title}
                  </h1>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {selectedArticle.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedArticle.authorRole}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {selectedArticle.excerpt}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedArticle.content}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                    {selectedArticle.tags.map((tag: string, index: number) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-yellow-600 text-yellow-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <Button
                      onClick={() => setSelectedArticle(null)}
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600"
                    >
                      ← Back to News
                    </Button>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
