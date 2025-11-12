"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { Crown, ArrowLeft, ArrowRight, Zap, Hammer, Truck } from "lucide-react"

interface ServiceQuoteFormProps {
  onSubmit: (data: any) => void
}

export function ServiceQuoteForm({ onSubmit }: ServiceQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    service: "",

    // Step 2: Project Details
    propertyType: "",
    workType: "",
    squareFootage: "",
    timeline: "",
    budget: "",

    // Step 3: Contact Information
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    company: "",
    address: "",

    // Step 4: Additional Details
    additionalDetails: "",
    urgency: "normal",
    preferredContact: "email",
    marketingConsent: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Calculate estimated cost based on service and details
      let estimatedCost = 0

      if (formData.service === "electrical") {
        estimatedCost = Number.parseInt(formData.squareFootage || "0") * 3.5 + 500
      } else if (formData.service === "construction") {
        estimatedCost = Number.parseInt(formData.squareFootage || "0") * 150 + 5000
      } else if (formData.service === "logistics") {
        estimatedCost = 2500 // Base monthly rate
      }

      // Create quote in database
      const { data, error } = await supabase
        .from("quotes")
        .insert({
          service_type: formData.service as "electrical" | "construction" | "logistics",
          client_name: formData.clientName,
          client_email: formData.clientEmail,
          client_phone: formData.clientPhone,
          project_details: {
            propertyType: formData.propertyType,
            workType: formData.workType,
            squareFootage: formData.squareFootage,
            timeline: formData.timeline,
            budget: formData.budget,
            address: formData.address,
            company: formData.company,
            additionalDetails: formData.additionalDetails,
            urgency: formData.urgency,
            preferredContact: formData.preferredContact,
          },
          estimated_cost: estimatedCost,
          valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 30 days from now
        })
        .select()
        .single()

      if (error) {
        console.error("Error creating quote:", error)
        alert("There was an error submitting your quote. Please try again.")
        return
      }

      onSubmit({
        ...data,
        estimatedCost,
      })
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your quote. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== ""
      case 2:
        return formData.propertyType !== "" && formData.workType !== ""
      case 3:
        return formData.clientName !== "" && formData.clientEmail !== "" && formData.clientPhone !== ""
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step 1: Service Selection */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Service</h2>
            <p className="text-gray-600 mb-6">Choose the type of service you need for your project</p>
          </div>

          <RadioGroup value={formData.service} onValueChange={(value) => updateFormData("service", value)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card
                className={`cursor-pointer transition-all ${formData.service === "electrical" ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:shadow-md"}`}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <RadioGroupItem value="electrical" id="electrical" className="sr-only" />
                    <Label htmlFor="electrical" className="cursor-pointer">
                      <Zap className="h-12 w-12 text-yellow-600 mb-2" />
                      <CardTitle className="text-lg">Electrical Services</CardTitle>
                    </Label>
                  </div>
                  <CardDescription>
                    Panel upgrades, wiring, lighting, repairs, and smart home installations
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${formData.service === "construction" ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:shadow-md"}`}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <RadioGroupItem value="construction" id="construction" className="sr-only" />
                    <Label htmlFor="construction" className="cursor-pointer">
                      <Hammer className="h-12 w-12 text-yellow-600 mb-2" />
                      <CardTitle className="text-lg">Construction</CardTitle>
                    </Label>
                  </div>
                  <CardDescription>New builds, renovations, remodeling, and structural improvements</CardDescription>
                </CardHeader>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${formData.service === "logistics" ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:shadow-md"}`}
              >
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <RadioGroupItem value="logistics" id="logistics" className="sr-only" />
                    <Label htmlFor="logistics" className="cursor-pointer">
                      <Truck className="h-12 w-12 text-yellow-600 mb-2" />
                      <CardTitle className="text-lg">Logistics</CardTitle>
                    </Label>
                  </div>
                  <CardDescription>
                    Warehousing, distribution, freight management, and supply chain solutions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Step 2: Project Details */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h2>
            <p className="text-gray-600 mb-6">Tell us more about your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="propertyType">Property Type</Label>
              <Select value={formData.propertyType} onValueChange={(value) => updateFormData("propertyType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="mixed-use">Mixed Use</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="workType">Type of Work</Label>
              <Select value={formData.workType} onValueChange={(value) => updateFormData("workType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select work type" />
                </SelectTrigger>
                <SelectContent>
                  {formData.service === "electrical" && (
                    <>
                      <SelectItem value="panel_upgrade">Panel Upgrade</SelectItem>
                      <SelectItem value="rewiring">Rewiring</SelectItem>
                      <SelectItem value="new_installation">New Installation</SelectItem>
                      <SelectItem value="repair">Repair Work</SelectItem>
                      <SelectItem value="smart_home">Smart Home Integration</SelectItem>
                    </>
                  )}
                  {formData.service === "construction" && (
                    <>
                      <SelectItem value="new_build">New Construction</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="addition">Addition</SelectItem>
                      <SelectItem value="remodel">Remodeling</SelectItem>
                      <SelectItem value="repair">Repair Work</SelectItem>
                    </>
                  )}
                  {formData.service === "logistics" && (
                    <>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="distribution">Distribution</SelectItem>
                      <SelectItem value="freight">Freight Management</SelectItem>
                      <SelectItem value="supply_chain">Supply Chain Optimization</SelectItem>
                      <SelectItem value="consulting">Logistics Consulting</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="squareFootage">Square Footage</Label>
              <Input
                id="squareFootage"
                type="number"
                placeholder="Enter square footage"
                value={formData.squareFootage}
                onChange={(e) => updateFormData("squareFootage", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-2_weeks">1-2 Weeks</SelectItem>
                  <SelectItem value="1_month">Within 1 Month</SelectItem>
                  <SelectItem value="2-3_months">2-3 Months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="budget">Estimated Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under_1k">Under $1,000</SelectItem>
                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                  <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="over_100k">Over $100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Information */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-6">How can we reach you with your quote?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="clientName">Full Name *</Label>
              <Input
                id="clientName"
                type="text"
                placeholder="Enter your full name"
                value={formData.clientName}
                onChange={(e) => updateFormData("clientName", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="clientEmail">Email Address *</Label>
              <Input
                id="clientEmail"
                type="email"
                placeholder="Enter your email"
                value={formData.clientEmail}
                onChange={(e) => updateFormData("clientEmail", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="clientPhone">Phone Number *</Label>
              <Input
                id="clientPhone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.clientPhone}
                onChange={(e) => updateFormData("clientPhone", e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                type="text"
                placeholder="Enter company name"
                value={formData.company}
                onChange={(e) => updateFormData("company", e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="address">Project Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter project address"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Additional Details */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Details</h2>
            <p className="text-gray-600 mb-6">Any additional information to help us provide an accurate quote</p>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="additionalDetails">Project Description</Label>
              <Textarea
                id="additionalDetails"
                placeholder="Please provide any additional details about your project..."
                value={formData.additionalDetails}
                onChange={(e) => updateFormData("additionalDetails", e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <Label>Project Urgency</Label>
              <RadioGroup value={formData.urgency} onValueChange={(value) => updateFormData("urgency", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="normal" />
                  <Label htmlFor="normal">Normal - Standard timeline</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent">Urgent - Need to start ASAP</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="emergency" id="emergency" />
                  <Label htmlFor="emergency">Emergency - Critical situation</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Preferred Contact Method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={(value) => updateFormData("preferredContact", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone">Phone Call</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="text" id="text" />
                  <Label htmlFor="text">Text Message</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketingConsent"
                checked={formData.marketingConsent}
                onCheckedChange={(checked) => updateFormData("marketingConsent", checked)}
              />
              <Label htmlFor="marketingConsent" className="text-sm">
                I would like to receive updates about Crown Prince services and promotions
              </Label>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center bg-transparent"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Crown className="h-4 w-4 text-yellow-600" />
          <span>Royal Quality Service</span>
        </div>

        {currentStep < totalSteps ? (
          <Button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black flex items-center"
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black flex items-center"
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            <Crown className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
