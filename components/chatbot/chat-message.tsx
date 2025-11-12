"use client"

import { Crown, User, Phone, Calendar, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Message } from "./types"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot"

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const renderMessageContent = () => {
    switch (message.type) {
      case "quote_form":
        return (
          <Card className="border border-yellow-600/20">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3">Quick Quote Request</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Service Type</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>Electrical Services</option>
                    <option>Construction</option>
                    <option>Logistics & Warehousing</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Project Description</label>
                  <textarea
                    className="w-full mt-1 p-2 border rounded"
                    rows={3}
                    placeholder="Describe your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black">
                  Get Instant Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case "service_options":
        return (
          <div className="space-y-3">
            <p>{message.content}</p>
            <div className="grid grid-cols-1 gap-2">
              {[
                { icon: "⚡", name: "Electrical Services", desc: "Wiring, repairs, installations" },
                { icon: "🔨", name: "Construction", desc: "Building, renovation, remodeling" },
                { icon: "🚛", name: "Logistics", desc: "Warehousing, transportation" },
              ].map((service) => (
                <Button
                  key={service.name}
                  variant="outline"
                  className="justify-start h-auto p-3 border-yellow-600/20 hover:border-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{service.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">{service.desc}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )

      case "emergency_info":
        return (
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Phone className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Emergency Service</h4>
              </div>
              <p className="text-red-700 mb-4">{message.content}</p>
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black"
                >
                  <Link href="/contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Online
                  </Link>
                </Button>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Schedule: (555) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case "appointment_booking":
        return (
          <Card className="border border-yellow-600/20">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3">Schedule Appointment</h4>
              <p className="text-gray-600 mb-4">{message.content}</p>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black"
                >
                  <Link href="/contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Online
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call to Schedule: (555) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      case "calculator_link":
        return (
          <div className="space-y-3">
            <p>{message.content}</p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black"
            >
              <Link href="/calculator">
                <Calculator className="h-4 w-4 mr-2" />
                Open Project Calculator
              </Link>
            </Button>
          </div>
        )

      default:
        return <p className="whitespace-pre-wrap">{message.content}</p>
    }
  }

  return (
    <div className={`flex items-start space-x-3 ${isBot ? "" : "flex-row-reverse space-x-reverse"}`}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? "bg-gradient-to-r from-yellow-600 to-yellow-500" : "bg-gradient-to-r from-gray-600 to-gray-500"
        }`}
      >
        {isBot ? <Crown className="h-4 w-4 text-black" /> : <User className="h-4 w-4 text-white" />}
      </div>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isBot ? "bg-gray-100 text-gray-900" : "bg-gradient-to-r from-yellow-600 to-yellow-500 text-black"
        }`}
      >
        {renderMessageContent()}
        <div className={`text-xs mt-1 ${isBot ? "text-gray-500" : "text-black/70"}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  )
}
