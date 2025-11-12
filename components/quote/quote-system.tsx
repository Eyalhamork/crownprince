"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceQuoteForm } from "./service-quote-form"
import { QuoteSubmissionSuccess } from "./quote-submission-success"
import { Crown } from "lucide-react"

export function QuoteSystem() {
  const [currentStep, setCurrentStep] = useState<"form" | "success">("form")
  const [submittedQuote, setSubmittedQuote] = useState<any>(null)

  const handleQuoteSubmission = (quoteData: any) => {
    setSubmittedQuote(quoteData)
    setCurrentStep("success")
  }

  const handleStartNewQuote = () => {
    setCurrentStep("form")
    setSubmittedQuote(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8 text-black" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Request a Quote</h1>
            <p className="text-xl text-gray-600">
              Get a detailed estimate for your electrical, construction, or logistics project
            </p>
          </div>

          {/* Quote System */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-black to-gray-900 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Crown className="h-6 w-6 mr-2 text-yellow-500" />
                Crown Prince Quote System
              </CardTitle>
              <CardDescription className="text-gray-300">
                Professional estimates with royal-quality service
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {currentStep === "form" ? (
                <ServiceQuoteForm onSubmit={handleQuoteSubmission} />
              ) : (
                <QuoteSubmissionSuccess quote={submittedQuote} onStartNewQuote={handleStartNewQuote} />
              )}
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Licensed</div>
              <div className="text-gray-600">Fully Licensed & Insured</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Guaranteed</div>
              <div className="text-gray-600">Quality Work Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
