"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Pause,
  Target,
  Star,
  Award,
} from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  image: string;
  services: string[];
  stats: {
    projects: string;
    satisfaction: string;
    awards: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  color: string;
}

const slides: Slide[] = [
  {
    title: "Excellence in",
    subtitle: "Every Project",
    highlight: "Premium Services",
    description:
      "Premium electrical, construction, and logistics services delivered with royal precision and unmatched expertise that transforms visions into reality.",
    image: "/cp-cover.png",
    services: [
      "Electrical Services",
      "Construction",
      "Logistics & Warehousing",
    ],
    stats: {
      projects: "1250+",
      satisfaction: "99%",
      awards: "25+",
    },
    cta: {
      primary: "Start Your Project",
      secondary: "View Portfolio",
    },
    color: "yellow",
  },
  {
    title: "Building the",
    subtitle: "Future Today",
    highlight: "Innovation",
    description:
      "Cutting-edge construction solutions that transform visions into reality with precision engineering and quality craftsmanship using the latest technologies.",
    image: "/cp-cover.png",
    services: ["Modern Construction", "Smart Buildings", "Sustainable Design"],
    stats: {
      projects: "500+",
      satisfaction: "98%",
      awards: "15+",
    },
    cta: {
      primary: "Explore Construction",
      secondary: "Smart Solutions",
    },
    color: "orange",
  },
  {
    title: "Powering Your",
    subtitle: "Success",
    highlight: "Electrical Excellence",
    description:
      "Complete electrical solutions from residential wiring to industrial power systems, ensuring safety and efficiency in every project with 24/7 support.",
    image: "/cp-cover.png",
    services: ["Electrical Installation", "Power Systems", "Smart Automation"],
    stats: {
      projects: "1000+",
      satisfaction: "99%",
      awards: "20+",
    },
    cta: {
      primary: "Get Electrical Quote",
      secondary: "Emergency Service",
    },
    color: "blue",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced auto-play with progress tracking
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / 60;
      });
    }, 100);

    intervalRef.current = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length, 1);
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentSlide, isAutoPlaying, isTransitioning]);

  const handleSlideChange = (newSlide: number, newDirection: number) => {
    if (isTransitioning || newSlide === currentSlide) return;

    setIsTransitioning(true);
    setDirection(newDirection);
    setProgress(0);

    setTimeout(() => {
      setCurrentSlide(newSlide);
    }, 50);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    handleSlideChange(next, 1);
    pauseAutoPlay();
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    handleSlideChange(prev, -1);
    pauseAutoPlay();
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    const newDirection = index > currentSlide ? 1 : -1;
    handleSlideChange(index, newDirection);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];
  const getColorClasses = (color: string) => {
    const colors = {
      yellow: {
        primary: "from-yellow-600 to-amber-500",
        secondary: "from-yellow-600/20 to-amber-500/20",
        border: "border-yellow-600/30",
        text: "text-yellow-400",
        hover: "hover:border-yellow-600/60",
        shadow: "shadow-yellow-500/50",
      },
      orange: {
        primary: "from-orange-600 to-red-500",
        secondary: "from-orange-600/20 to-red-500/20",
        border: "border-orange-600/30",
        text: "text-orange-400",
        hover: "hover:border-orange-600/60",
        shadow: "shadow-orange-500/50",
      },
      blue: {
        primary: "from-blue-600 to-cyan-500",
        secondary: "from-blue-600/20 to-cyan-500/20",
        border: "border-blue-600/30",
        text: "text-blue-400",
        hover: "hover:border-blue-600/60",
        shadow: "shadow-blue-500/50",
      },
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  const colorClasses = getColorClasses(currentSlideData.color);

  return (
    <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? "opacity-15 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${index === currentSlide ? 1.1 : 1})`,
            }}
          />
        ))}

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClasses.secondary} transition-all duration-1000`}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60" />
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`group p-4 rounded-2xl bg-black/40 backdrop-blur-md border ${colorClasses.border} ${colorClasses.text} hover:bg-opacity-60 ${colorClasses.hover} transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`group p-4 rounded-2xl bg-black/40 backdrop-blur-md border ${colorClasses.border} ${colorClasses.text} hover:bg-opacity-60 ${colorClasses.hover} transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Auto-play Control */}
      <div className="absolute top-20 right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-3 rounded-xl bg-black/40 backdrop-blur-md border ${colorClasses.border} ${colorClasses.text} hover:bg-opacity-60 transition-all duration-300 hover:scale-105`}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Main Content with Enhanced Animations */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Headline with Slide Animation - More Space Given */}
          <div className="mb-6 overflow-hidden">
            <div
              key={currentSlide}
              className={`transform transition-all duration-800 ${
                isTransitioning
                  ? `${
                      direction > 0 ? "-translate-x-full" : "translate-x-full"
                    } opacity-0`
                  : "translate-x-0 opacity-100"
              }`}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
                <span
                  className="inline-block opacity-0 animate-pulse"
                  style={{
                    animation: "slideUp 0.8s ease-out 0.2s forwards",
                  }}
                >
                  {currentSlideData.title}
                </span>
                <span
                  className={`block bg-gradient-to-r ${colorClasses.primary} bg-clip-text text-transparent opacity-0`}
                  style={{
                    animation: "slideUp 0.8s ease-out 0.4s forwards",
                  }}
                >
                  {currentSlideData.subtitle}
                </span>
              </h1>

              {/* Highlight Badge - Larger */}
              <div
                className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${colorClasses.secondary} border ${colorClasses.border} backdrop-blur-sm mb-4 opacity-0`}
                style={{
                  animation: "slideUp 0.8s ease-out 0.6s forwards",
                }}
              >
                <Sparkles
                  className={`w-6 h-6 ${colorClasses.text} mr-3 animate-pulse`}
                />
                <span className={`${colorClasses.text} font-bold text-xl`}>
                  {currentSlideData.highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Description - Larger Text */}
          <div
            className="opacity-0 mb-6"
            style={{ animation: "slideUp 0.8s ease-out 0.8s forwards" }}
          >
            <p className="text-2xl  text-gray-300 mb-6 max-w-5xl mx-auto leading-relaxed">
              {currentSlideData.description}
            </p>
          </div>

          {/* Enhanced Stats Display - Larger */}
          <div
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-6 opacity-0"
            style={{ animation: "slideUp 0.8s ease-out 1s forwards" }}
          >
            <div className="text-center group">
              <div
                className={`bg-black/40 backdrop-blur-md rounded-2xl p-6 border ${colorClasses.border} group-hover:${colorClasses.hover} transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Target className={`w-6 h-6 ${colorClasses.text} mr-2`} />
                  <div className={`text-3xl font-black ${colorClasses.text}`}>
                    {currentSlideData.stats.projects}
                  </div>
                </div>
                <div className="text-base text-gray-400 font-semibold">
                  Projects
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-green-600/20 group-hover:border-green-600/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-green-500 mr-2" />
                  <div className="text-3xl font-black text-green-500">
                    {currentSlideData.stats.satisfaction}
                  </div>
                </div>
                <div className="text-base text-gray-400 font-semibold">
                  Satisfaction
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-purple-600/20 group-hover:border-purple-600/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-purple-500 mr-2" />
                  <div className="text-3xl font-black text-purple-500">
                    {currentSlideData.stats.awards}
                  </div>
                </div>
                <div className="text-base text-gray-400 font-semibold">
                  Awards
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons - Larger */}
          <div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 opacity-0"
            style={{ animation: "slideUp 0.8s ease-out 1.6s forwards" }}
          >
            <button
              className={`group relative overflow-hidden bg-gradient-to-r ${colorClasses.primary} hover:from-yellow-500 hover:to-amber-400 text-black font-bold px-12 py-5 text-xl rounded-2xl shadow-2xl ${colorClasses.shadow} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <span className="relative z-10 flex items-center">
                {currentSlideData.cta.primary}
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              className={`group relative bg-transparent border-2 ${colorClasses.border} ${colorClasses.text} hover:bg-opacity-10 ${colorClasses.hover} px-12 py-5 text-xl rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105`}
            >
              <span className="flex items-center">
                <Play className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                {currentSlideData.cta.secondary}
              </span>
            </button>
          </div>

          {/* Enhanced Progress Indicators */}
          <div
            className="flex justify-center items-center space-x-4 opacity-0"
            style={{ animation: "slideUp 0.8s ease-out 1.8s forwards" }}
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden group ${
                  index === currentSlide
                    ? `w-16 bg-gradient-to-r ${colorClasses.primary} shadow-lg ${colorClasses.shadow}`
                    : `w-3 bg-gray-600/30 hover:bg-gray-500/50 hover:w-6`
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                      style={{
                        width: `${progress}%`,
                        transition: "width 0.1s linear",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </>
                )}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${colorClasses.secondary} rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300`}
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div
            className="mt-8 opacity-0"
            style={{ animation: "slideUp 0.8s ease-out 2s forwards" }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-gray-600/30">
              <span className="text-gray-400 text-base font-medium">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative group">
          <div
            className={`w-8 h-12 border-2 ${colorClasses.border} rounded-full flex justify-center backdrop-blur-sm group-hover:${colorClasses.hover} transition-colors duration-300`}
          >
            <div
              className={`w-1.5 h-4 bg-gradient-to-b ${colorClasses.primary} rounded-full mt-2`}
              style={{
                animation: "scroll 2s ease-in-out infinite",
              }}
            />
          </div>
          <div
            className={`absolute -inset-2 bg-gradient-to-r ${colorClasses.secondary} rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
