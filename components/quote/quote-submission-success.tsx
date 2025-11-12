"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, CheckCircle, Phone, Mail, Calendar, FileText, ArrowRight } from "lucide-react"

interface QuoteSubmissionSuccessProps {
  quote: any
  onStartNewQuote: () => void
}

export function QuoteSubmissionSuccess({ quote, onStartNewQuote }: QuoteSubmissionSuccessProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="p-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h2>
        <p className="text-lg text-gray-600">
          Thank you for choosing Crown Prince Incorporated. Your quote request has been received and is being processed.
        </p>
      </div>

      {/* Quote Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-yellow-600" />
              Quote Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Reference Number:</span>
              <span className="text-yellow-600 font-bold">{quote.reference_number}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Service Type:</span>
              <span className="capitalize">{quote.service_type}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Estimated Cost:</span>
              <span className="text-green-600 font-bold">{formatCurrency(quote.estimated_cost)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Valid Until:</span>
              <span>{formatDate(quote.valid_until)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Status:</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm capitalize">
                {quote.status}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-yellow-600" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-medium">Review & Processing</p>
                <p className="text-sm text-gray-600">Our team will review your request within 2-4 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-medium">Detailed Quote</p>
                <p className="text-sm text-gray-600">Receive your detailed quote via email</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-medium">Consultation</p>
                <p className="text-sm text-gray-600">Schedule a consultation to discuss your project</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Need Immediate Assistance?</CardTitle>
          <CardDescription>Our team is ready to help you with any questions about your quote</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-yellow-600 font-bold">(555) 123-4567</p>
                <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-yellow-600 font-bold">quotes@crownprince.com</p>
                <p className="text-sm text-gray-600">Response within 2 hours</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onStartNewQuote} variant="outline" className="flex items-center bg-transparent">
          <Crown className="h-4 w-4 mr-2" />
          Request Another Quote
        </Button>
        <Button
          onClick={() => (window.location.href = "/services")}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black flex items-center"
        >
          View Our Services
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-black to-gray-900 text-white rounded-lg">
        <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
        <p className="text-lg font-medium mb-1">Thank you for choosing Crown Prince Incorporated</p>
        <p className="text-gray-300">Royal quality service, every time.</p>
      </div>
    </div>
  )
}
