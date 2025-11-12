"use client"

import { useState } from "react"
import { X, Download, Mail, Save } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import type { CalculatorData } from "./construction-calculator"

interface QuoteGenerationProps {
  calculatorData: CalculatorData
  totalCost: number
  onClose: () => void
}

export function QuoteGeneration({ calculatorData, totalCost, onClose }: QuoteGenerationProps) {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (action: "save" | "email" | "pdf") => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Quote generated:", { action, clientInfo, calculatorData, totalCost })

    setIsSubmitting(false)
    onClose()
  }

  const materialsCost = calculatorData.materials.reduce((total, item) => {
    return total + item.material.basePrice * item.quantity * item.quality.multiplier
  }, 0)

  const laborCost = materialsCost * 0.4 * calculatorData.laborComplexity
  const deliveryFee = materialsCost > 5000 ? 0 : 150
  const taxRate = 0.08
  const subtotal = materialsCost + laborCost + deliveryFee
  const tax = subtotal * taxRate

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Generate Official Quote</CardTitle>
            <CardDescription>Provide your details to receive a professional quote</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Client Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Client Information</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Project Address</Label>
                <Input
                  id="address"
                  value={clientInfo.address}
                  onChange={(e) => setClientInfo((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="123 Main St, City, State 12345"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={clientInfo.notes}
                  onChange={(e) => setClientInfo((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any specific requirements or questions..."
                  className="mt-1"
                  rows={4}
                />
              </div>
            </div>

            {/* Quote Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quote Summary</h3>

              <Card className="bg-gray-50">
                <CardContent className="p-4 space-y-3">
                  {/* Project Details */}
                  <div>
                    <h4 className="font-medium mb-2">Project Dimensions</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Length: {calculatorData.dimensions.length} ft</p>
                      <p>Width: {calculatorData.dimensions.width} ft</p>
                      <p>Height: {calculatorData.dimensions.height} ft</p>
                      <p>Square Footage: {calculatorData.dimensions.squareFootage.toLocaleString()} sq ft</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Materials */}
                  <div>
                    <h4 className="font-medium mb-2">Materials ({calculatorData.materials.length})</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      {calculatorData.materials.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span>
                            {item.material.name} ({item.quality.name})
                          </span>
                          <span>
                            {item.quantity} {item.material.unit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Cost Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Materials:</span>
                      <span>${materialsCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Labor:</span>
                      <span>${laborCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery:</span>
                      <span>${deliveryFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax:</span>
                      <span>${tax.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-yellow-600">${totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quote Validity */}
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-sm font-medium text-yellow-800">Quote Validity</p>
                <p className="text-xs text-yellow-700 mt-1">
                  This quote is valid for 30 days from the date of generation. Final pricing may vary based on site
                  inspection and material availability.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button
              onClick={() => handleSubmit("pdf")}
              disabled={isSubmitting || !clientInfo.name || !clientInfo.email || !clientInfo.phone}
              variant="outline"
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              {isSubmitting ? "Generating..." : "Download PDF"}
            </Button>

            <Button
              onClick={() => handleSubmit("email")}
              disabled={isSubmitting || !clientInfo.name || !clientInfo.email || !clientInfo.phone}
              variant="outline"
              className="flex-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Email Quote"}
            </Button>

            <Button
              onClick={() => handleSubmit("save")}
              disabled={isSubmitting || !clientInfo.name || !clientInfo.email || !clientInfo.phone}
              className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? "Saving..." : "Save & Contact Me"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
