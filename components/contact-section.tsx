"use client";

import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Phone,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "standard",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const urgencyOptions = [
    {
      value: "emergency",
      label: "Emergency (24hr)",
      color: "text-red-500",
      icon: Zap,
    },
    {
      value: "urgent",
      label: "Urgent (48hr)",
      color: "text-orange-500",
      icon: Clock,
    },
    {
      value: "standard",
      label: "Standard (1 week)",
      color: "text-green-500",
      icon: CheckCircle,
    },
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Thank you for reaching out. We'll get back to you within 2 hours
              during business hours.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                Need immediate help? Call +1 (555) 123-4567
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              Get Your Project Started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the
            <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Royal Treatment?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us about your project and we'll provide a detailed consultation
            with timeline and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-8">
              {/* Top Row - Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 rounded-xl px-4 py-3 transition-all duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 rounded-xl px-4 py-3 transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Contact & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 rounded-xl px-4 py-3 transition-all duration-200"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-3 block">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      handleInputChange("service", e.target.value)
                    }
                    className="w-full bg-gray-700 border border-gray-600 text-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 rounded-xl px-4 py-3 transition-all duration-200"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="construction">Construction</option>
                    <option value="logistics">Logistics & Warehousing</option>
                    <option value="consultation">General Consultation</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
              </div>

              {/* Priority Selection */}
              <div>
                <label className="text-white text-sm font-medium mb-4 block">
                  Project Priority *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {urgencyOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <label
                        key={option.value}
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          formData.urgency === option.value
                            ? "border-yellow-500 bg-yellow-500/10"
                            : "border-gray-600 bg-gray-700/50 hover:border-gray-500"
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={(e) =>
                            handleInputChange("urgency", e.target.value)
                          }
                          className="sr-only"
                        />
                        <IconComponent
                          className={`h-5 w-5 mr-3 ${option.color}`}
                        />
                        <div>
                          <div className="text-white font-medium text-sm">
                            {option.label.split(" (")[0]}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {option.label.split(" (")[1]?.replace(")", "")}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="text-white text-sm font-medium mb-3 block">
                  Project Details *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 rounded-xl px-4 py-3 transition-all duration-200 min-h-[120px] resize-y"
                  placeholder="Tell us about your project scope, timeline, budget range, and any specific requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center group"
                >
                  Send Project Details
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  className="sm:w-auto w-full border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <Calendar className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Call
                </button>
              </div>

              {/* Footer Note */}
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  We'll review your project details and provide a comprehensive
                  consultation within 2 hours.
                  <br />
                  <span className="text-yellow-400 font-medium">
                    All consultations are completely free with no obligations.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-400 mb-6">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 bg-red-600/20 text-red-400 border border-red-600/30 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3"></div>
              Emergency Hotline
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@crownprinceinc.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              Quick Email
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
