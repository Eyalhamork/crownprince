"use client";

import { useState, useEffect } from "react";
import {
  Star,
  Users,
  Briefcase,
  Award,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Briefcase,
    label: "Projects Completed",
    value: 1250,
    suffix: "+",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: 850,
    suffix: "+",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Clock,
    label: "Years Experience",
    value: 15,
    suffix: "",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Award,
    label: "Industry Awards",
    value: 25,
    suffix: "+",
    color: "from-orange-500 to-orange-600",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "Johnson Enterprises",
    rating: 5,
    text: "Crown Prince Incorporated transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process seamless. The team's dedication to excellence is truly remarkable.",
    image: "/placeholder.svg?height=80&width=80",
    industry: "Enterprise Solutions",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Tech Solutions Inc.",
    rating: 5,
    text: "The electrical work they completed for our data center was flawless. Their team worked efficiently and delivered on time, every time. I wouldn't trust anyone else with our critical infrastructure.",
    image: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Director",
    company: "Rodriguez Manufacturing",
    rating: 5,
    text: "Their logistics and warehousing solutions helped us streamline our operations significantly. Truly a royal treatment for our business needs. The ROI has been exceptional.",
    image: "/placeholder.svg?height=80&width=80",
    industry: "Manufacturing",
  },
  {
    name: "David Thompson",
    position: "Project Manager",
    company: "Thompson Construction",
    rating: 5,
    text: "Working with Crown Prince on our commercial renovation was a game-changer. Their expertise and professionalism set them apart from the competition. Highly recommended.",
    image: "/placeholder.svg?height=80&width=80",
    industry: "Construction",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const steps = 80;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function TrustIndicators() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-600 to-amber-500 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 mb-6">
              <Award className="w-4 h-4 text-yellow-600 mr-2" />
              <span className="text-sm font-semibold text-yellow-800">
                Trusted by Industry Leaders
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Numbers That
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Speak Volumes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record of excellence spans over a decade of delivering
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="relative group border-0 bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm"></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="relative p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-gray-700 font-semibold mt-3 text-lg">
                      {stat.label}
                    </p>

                    {/* Animated progress bar */}
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-300`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <Quote className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Stories of
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Success & Trust
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear directly from our clients about their experiences working with
            Crown Prince
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm"></div>

            <CardContent className="relative p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div className="space-y-8">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <div key={i} className="relative">
                          <Star className="h-7 w-7 text-yellow-400 fill-current transform hover:scale-110 transition-transform" />
                          <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Industry Badge */}
                  <div className="flex justify-center lg:justify-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200">
                      {testimonials[currentTestimonial].industry}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium text-center lg:text-left">
                    <Quote className="inline-block w-8 h-8 text-yellow-500 mr-2 -mt-2" />
                    {testimonials[currentTestimonial].text}
                  </blockquote>

                  {/* Navigation */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="rounded-full border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentTestimonial(index);
                            setIsAutoPlaying(false);
                            setTimeout(() => setIsAutoPlaying(true), 10000);
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? "bg-gradient-to-r from-yellow-500 to-amber-500 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      className="rounded-full border-gray-300 hover:border-yellow-500 hover:bg-yellow-50 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <img
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-2xl object-cover shadow-2xl border-4 border-white mx-auto lg:mx-0"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl opacity-20 blur-lg"></div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-lg font-semibold text-yellow-600">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-gray-600 font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
