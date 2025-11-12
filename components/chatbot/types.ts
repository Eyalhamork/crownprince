import type React from "react"

export interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  type: "text" | "calculator_link" | "emergency_info" | "service_options" | "appointment_booking"
  quickActions?: QuickAction[]
}

export interface QuickAction {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  action: "navigate" | "message" | "phone"
  value: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  keywords: string[]
  category: string
}

export interface ChatbotResponse {
  message: Message
  confidence: number
  followUpActions?: QuickAction[]
}
