"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, ArrowLeft, ArrowRight, Zap, Hammer, Truck, AlertCircle } from "lucide-react"
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations"
import { useDataStore } from "@/lib/data-store"

interface ServiceQuoteFormProps {
  onSubmit: (data: any) => void
}

export function ServiceQuoteForm({ onSubmit }: ServiceQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addQuote, addNotification } = useDataStore()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      service: undefined,
      propertyType: undefined,
      workType: "",
      squareFootage: "",
      timeline: "",
      budget: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      company: "",
      address: "",
      additionalDetails: "",
      urgency: "normal",
      preferredContact: "email",
      marketingConsent: false,
    },
    mode: "onBlur",
  })

  const formData = watch()
  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const validateCurrentStep = async (): Promise<boolean> => {
    switch (currentStep) {
      case 1:
        return await trigger("service")
      case 2:
        return await trigger(["propertyType", "workType"])
      case 3:
        return await trigger(["clientName", "clientEmail", "clientPhone"])
      case 4:
        return true
      default:
        return false
    }
  }

  const nextStep = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onFormSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)

    try {
      // Calculate estimated cost based on service and details
      let estimatedCost = 0

      if (data.service === "electrical") {
        estimatedCost = Number.parseInt(data.squareFootage || "0") * 3.5 + 500
      } else if (data.service === "construction") {
        estimatedCost = Number.parseInt(data.squareFootage || "0") * 150 + 5000
      } else if (data.service === "logistics") {
        estimatedCost = 2500 // Base monthly rate
      }

      // Add to DataStore
      const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

      addQuote({
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        service: data.service === "electrical" ? "Electrical" :
                 data.service === "construction" ? "Construction" : "Logistics",
        description: `${data.workType} - ${data.propertyType} property${data.additionalDetails ? `. ${data.additionalDetails}` : ""}`,
        estimatedValue: estimatedCost,
        status: "Pending",
        validUntil,
      })

      // Add notification
      addNotification({
        type: "info",
        title: "New Quote Request",
        message: `Quote request from ${data.clientName} for ${data.service} services`,
        link: "/admin?tab=quotes",
      })

      onSubmit({
        ...data,
        estimatedCost,
        validUntil,
      })
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting your quote. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStepErrors = () => {
    switch (currentStep) {
      case 1:
        return errors.service?.message
      case 2:
        return errors.propertyType?.message || errors.workType?.message
      case 3:
        return errors.clientName?.message || errors.clientEmail?.message || errors.clientPhone?.message
      default:
        return null
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

      <form onSubmit={handleSubmit(onFormSubmit)}>
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Service</h2>
              <p className="text-gray-600 mb-6">Choose the type of service you need for your project</p>
            </div>

            <RadioGroup
              value={formData.service}
              onValueChange={(value) => setValue("service", value as any, { shouldValidate: true })}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                  className={`cursor-pointer transition-all ${formData.service === "electrical" ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:shadow-md"}`}
                  onClick={() => setValue("service", "electrical", { shouldValidate: true })}
                >
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <RadioGroupItem value="electrical" id="electrical" className="sr-only" />
                      <Label htmlFor="electrical" className="cursor-pointer">
                        <Zap className="h-12 w-12 text-yellow-600 mb-2 mx-auto" />
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
                  onClick={() => setValue("service", "construction", { shouldValidate: true })}
                >
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <RadioGroupItem value="construction" id="construction" className="sr-only" />
                      <Label htmlFor="construction" className="cursor-pointer">
                        <Hammer className="h-12 w-12 text-yellow-600 mb-2 mx-auto" />
                        <CardTitle className="text-lg">Construction</CardTitle>
                      </Label>
                    </div>
                    <CardDescription>New builds, renovations, remodeling, and structural improvements</CardDescription>
                  </CardHeader>
                </Card>

                <Card
                  className={`cursor-pointer transition-all ${formData.service === "logistics" ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:shadow-md"}`}
                  onClick={() => setValue("service", "logistics", { shouldValidate: true })}
                >
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <RadioGroupItem value="logistics" id="logistics" className="sr-only" />
                      <Label htmlFor="logistics" className="cursor-pointer">
                        <Truck className="h-12 w-12 text-yellow-600 mb-2 mx-auto" />
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

            {errors.service && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.service.message}
              </div>
            )}
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
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type *</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => setValue("propertyType", value as any, { shouldValidate: true })}
                >
                  <SelectTrigger className={errors.propertyType ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="mixed-use">Mixed Use</SelectItem>
                  </SelectContent>
                </Select>
                {errors.propertyType && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.propertyType.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="workType">Type of Work *</Label>
                <Select
                  value={formData.workType}
                  onValueChange={(value) => setValue("workType", value, { shouldValidate: true })}
                >
                  <SelectTrigger className={errors.workType ? "border-red-500" : ""}>
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
                {errors.workType && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.workType.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="squareFootage">Square Footage (Optional)</Label>
                <Input
                  id="squareFootage"
                  type="number"
                  placeholder="Enter square footage"
                  {...register("squareFootage")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Desired Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => setValue("timeline", value)}>
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

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="budget">Estimated Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => setValue("budget", value)}>
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
              <div className="space-y-2">
                <Label htmlFor="clientName">Full Name *</Label>
                <Input
                  id="clientName"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("clientName")}
                  className={errors.clientName ? "border-red-500" : ""}
                />
                {errors.clientName && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.clientName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientEmail">Email Address *</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="Enter your email"
                  {...register("clientEmail")}
                  className={errors.clientEmail ? "border-red-500" : ""}
                />
                {errors.clientEmail && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.clientEmail.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientPhone">Phone Number *</Label>
                <Input
                  id="clientPhone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("clientPhone")}
                  className={errors.clientPhone ? "border-red-500" : ""}
                />
                {errors.clientPhone && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.clientPhone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter company name"
                  {...register("company")}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Project Address (Optional)</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter project address"
                  {...register("address")}
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
              <div className="space-y-2">
                <Label htmlFor="additionalDetails">Project Description (Optional)</Label>
                <Textarea
                  id="additionalDetails"
                  placeholder="Please provide any additional details about your project..."
                  {...register("additionalDetails")}
                  rows={4}
                />
                {errors.additionalDetails && (
                  <p className="text-red-600 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.additionalDetails.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Project Urgency</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setValue("urgency", value as any)}
                >
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

              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <RadioGroup
                  value={formData.preferredContact}
                  onValueChange={(value) => setValue("preferredContact", value as any)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone Call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="contact-text" />
                    <Label htmlFor="contact-text">Text Message</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketingConsent"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked) => setValue("marketingConsent", checked as boolean)}
                />
                <Label htmlFor="marketingConsent" className="text-sm">
                  I would like to receive updates about Crown Prince services and promotions
                </Label>
              </div>
            </div>
          </div>
        )}

        {/* Error Summary */}
        {getStepErrors() && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">Please fix the errors above to continue</span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <Button
            type="button"
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
              type="button"
              onClick={nextStep}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black flex items-center"
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              <Crown className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
