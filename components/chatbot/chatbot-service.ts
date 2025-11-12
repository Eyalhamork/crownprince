import type { Message, FAQItem } from "./types"

class ChatbotService {
  private faqDatabase: FAQItem[] = [
    {
      id: "hours",
      question: "What are your business hours?",
      answer: "We're open Monday-Friday 7AM-7PM and Saturday-Sunday 9AM-5PM. Emergency service is available 24/7!",
      keywords: ["hours", "open", "time", "schedule", "when"],
      category: "general",
    },
    {
      id: "emergency",
      question: "Do you provide emergency services?",
      answer:
        "Yes! We provide 24/7 emergency service for electrical hazards, power outages, and urgent construction issues. Call (555) 123-4567 immediately for emergencies.",
      keywords: ["emergency", "urgent", "24/7", "immediate", "help"],
      category: "emergency",
    },
    {
      id: "quote",
      question: "How can I get a quote?",
      answer:
        "You can get a quote by visiting our quote page at /quote, using our online calculator, or calling us directly. I can also help you get started right here!",
      keywords: ["quote", "estimate", "price", "cost", "how much"],
      category: "pricing",
    },
    {
      id: "services",
      question: "What services do you offer?",
      answer:
        "We offer three main services: Electrical (residential, commercial, industrial), Construction (new builds, renovations, remodeling), and Logistics & Warehousing (storage, transportation, supply chain). You can learn more at /services.",
      keywords: ["services", "what do you do", "offer", "provide"],
      category: "general",
    },
    {
      id: "electrical-residential",
      question: "Do you do residential electrical work?",
      answer:
        "We handle all residential electrical needs including wiring, panel upgrades, outlet installation, lighting design, and smart home integration.",
      keywords: ["residential", "home", "house", "electrical", "wiring"],
      category: "electrical",
    },
    {
      id: "construction-types",
      question: "What types of construction projects do you handle?",
      answer:
        "We handle residential construction, commercial buildings, renovations, remodeling, custom builds, and historic restorations. From small renovations to major construction projects!",
      keywords: ["construction", "building", "renovation", "remodel", "build"],
      category: "construction",
    },
    {
      id: "logistics-warehousing",
      question: "Tell me about your logistics services",
      answer:
        "Our logistics division offers warehousing solutions, transportation services, inventory management, supply chain optimization, and distribution services.",
      keywords: ["logistics", "warehouse", "storage", "transportation", "shipping"],
      category: "logistics",
    },
    {
      id: "licensed-insured",
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed, bonded, and insured. All our technicians are certified professionals with extensive training and experience.",
      keywords: ["licensed", "insured", "certified", "qualified", "bonded"],
      category: "general",
    },
    {
      id: "service-areas",
      question: "What areas do you serve?",
      answer:
        "We serve Los Angeles County, Orange County, Riverside County, San Bernardino County, and Ventura County. Contact us to confirm service in your specific area!",
      keywords: ["area", "location", "serve", "where", "coverage"],
      category: "general",
    },
    {
      id: "warranty",
      question: "Do you provide warranties?",
      answer:
        "Yes! We provide comprehensive warranties on all our work. Warranty terms vary by service type and project scope, with details provided in every quote.",
      keywords: ["warranty", "guarantee", "coverage", "protection"],
      category: "general",
    },
  ]

  private calculateConfidence(userInput: string, faq: FAQItem): number {
    const input = userInput.toLowerCase()
    let score = 0

    // Check for exact keyword matches
    for (const keyword of faq.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += 1
      }
    }

    // Check for partial matches in question
    const questionWords = faq.question.toLowerCase().split(" ")
    const inputWords = input.split(" ")

    for (const inputWord of inputWords) {
      if (inputWord.length > 3) {
        // Only check meaningful words
        for (const questionWord of questionWords) {
          if (questionWord.includes(inputWord) || inputWord.includes(questionWord)) {
            score += 0.5
          }
        }
      }
    }

    return Math.min(score / faq.keywords.length, 1)
  }

  private findBestFAQMatch(userInput: string): { faq: FAQItem; confidence: number } | null {
    let bestMatch: FAQItem | null = null
    let bestConfidence = 0

    for (const faq of this.faqDatabase) {
      const confidence = this.calculateConfidence(userInput, faq)
      if (confidence > bestConfidence && confidence > 0.3) {
        // Minimum confidence threshold
        bestMatch = faq
        bestConfidence = confidence
      }
    }

    return bestMatch ? { faq: bestMatch, confidence: bestConfidence } : null
  }

  private generateQuoteEstimation(userInput: string): Message {
    const input = userInput.toLowerCase()
    let estimatedRange = "$500 - $2,000"
    let service = "general"

    if (input.includes("electrical") || input.includes("wiring") || input.includes("outlet")) {
      service = "electrical"
      estimatedRange = "$150 - $5,000"
    } else if (input.includes("construction") || input.includes("building") || input.includes("renovation")) {
      service = "construction"
      estimatedRange = "$5,000 - $100,000+"
    } else if (input.includes("logistics") || input.includes("warehouse") || input.includes("storage")) {
      service = "logistics"
      estimatedRange = "$200 - $10,000/month"
    }

    return {
      id: Date.now().toString(),
      content: `Based on your inquiry, here's a rough estimate for ${service} services: ${estimatedRange}. For an accurate quote, I'd recommend visiting our quote page at /quote or using our detailed calculator.`,
      sender: "bot",
      timestamp: new Date(),
      type: "calculator_link",
    }
  }

  private handleEmergencyRequest(): Message {
    return {
      id: Date.now().toString(),
      content:
        "🚨 This appears to be an emergency situation. For immediate assistance, please call our 24/7 emergency line at (555) 123-4567. Our technicians can respond within 1 hour for critical issues.",
      sender: "bot",
      timestamp: new Date(),
      type: "emergency_info",
    }
  }

  private handleServiceInquiry(): Message {
    return {
      id: Date.now().toString(),
      content:
        "I'd be happy to tell you about our services! We specialize in three main areas: ⚡ Electrical Services, 🔨 Construction, and 🚛 Logistics & Warehousing. You can learn more about each service at /services or let me know which one interests you most!",
      sender: "bot",
      timestamp: new Date(),
      type: "service_options",
    }
  }

  private handleAppointmentRequest(): Message {
    return {
      id: Date.now().toString(),
      content:
        "I can help you schedule an appointment! You can book online through our contact form at /contact, request a quote at /quote, or call us directly at (555) 123-4567. What type of service are you interested in?",
      sender: "bot",
      timestamp: new Date(),
      type: "appointment_booking",
    }
  }

  private generateFallbackResponse(userInput: string): Message {
    const responses = [
      "I'd be happy to help you with that! Could you provide a bit more detail about what you're looking for?",
      "That's a great question! For the most accurate information, I'd recommend speaking with one of our specialists at /contact. Would you like me to connect you?",
      "I want to make sure I give you the best answer. Could you tell me more about your specific needs?",
      "Let me help you find the right information. Are you interested in our electrical, construction, or logistics services? You can learn more at /services.",
    ]

    return {
      id: Date.now().toString(),
      content: responses[Math.floor(Math.random() * responses.length)],
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    }
  }

  async processMessage(userInput: string, type: "text" | "quick_action" = "text"): Promise<Message> {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const input = userInput.toLowerCase()

    // Handle quick actions with proper navigation
    if (type === "quick_action") {
      switch (userInput) {
        case "Get Quote":
          return {
            id: Date.now().toString(),
            content:
              "I'll help you get a quote! You can visit our comprehensive quote system at /quote where you can select your service type and get a detailed estimate. Would you like me to guide you through the process?",
            sender: "bot",
            timestamp: new Date(),
            type: "calculator_link",
          }
        case "Emergency Service":
          return this.handleEmergencyRequest()
        case "Schedule Appointment":
          return this.handleAppointmentRequest()
        case "Our Services":
          return {
            id: Date.now().toString(),
            content:
              "Here are our main services:\n\n⚡ **Electrical Services** - Residential, commercial, and industrial electrical work\n🔨 **Construction** - New builds, renovations, and remodeling\n🚛 **Logistics & Warehousing** - Storage, transportation, and supply chain solutions\n\nYou can learn more about each service at /services or get a quote at /quote!",
            sender: "bot",
            timestamp: new Date(),
            type: "service_options",
          }
        default:
          break
      }
    }

    // Check for emergency keywords
    const emergencyKeywords = ["emergency", "urgent", "help", "broken", "outage", "hazard", "danger"]
    if (emergencyKeywords.some((keyword) => input.includes(keyword))) {
      return this.handleEmergencyRequest()
    }

    // Check for quote/pricing requests
    const quoteKeywords = ["quote", "estimate", "price", "cost", "how much", "pricing"]
    if (quoteKeywords.some((keyword) => input.includes(keyword))) {
      return this.generateQuoteEstimation(userInput)
    }

    // Check for appointment/scheduling requests
    const appointmentKeywords = ["appointment", "schedule", "book", "meeting", "visit"]
    if (appointmentKeywords.some((keyword) => input.includes(keyword))) {
      return this.handleAppointmentRequest()
    }

    // Check for service inquiries
    const serviceKeywords = ["services", "what do you do", "offer", "provide"]
    if (serviceKeywords.some((keyword) => input.includes(keyword))) {
      return this.handleServiceInquiry()
    }

    // Try to find FAQ match
    const faqMatch = this.findBestFAQMatch(userInput)
    if (faqMatch && faqMatch.confidence > 0.5) {
      return {
        id: Date.now().toString(),
        content: faqMatch.faq.answer,
        sender: "bot",
        timestamp: new Date(),
        type: "text",
      }
    }

    // Fallback response
    return this.generateFallbackResponse(userInput)
  }
}

export const chatbotService = new ChatbotService()
