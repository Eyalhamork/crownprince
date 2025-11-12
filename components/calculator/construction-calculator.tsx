"use client"

import { useState, useEffect } from "react"
import { Calculator, Download, Mail, Save, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MaterialSelection } from "./material-selection"
import { DimensionInput } from "./dimension-input"
import { CostBreakdown } from "./cost-breakdown"
import { QuoteGeneration } from "./quote-generation"

export interface MaterialItem {
  id: string
  name: string
  category: string
  basePrice: number
  unit: string
  image: string
  description: string
}

export interface QualityGrade {
  id: string
  name: string
  multiplier: number
  description: string
}

export interface CalculatorData {
  materials: Array<{
    material: MaterialItem
    quantity: number
    quality: QualityGrade
  }>
  dimensions: {
    length: number
    width: number
    height: number
    squareFootage: number
    volume: number
  }
  laborComplexity: number
  location: string
}

const qualityGrades: QualityGrade[] = [
  { id: "standard", name: "Standard", multiplier: 1.0, description: "Basic quality materials" },
  { id: "premium", name: "Premium", multiplier: 1.5, description: "High-quality materials with enhanced durability" },
  { id: "luxury", name: "Luxury", multiplier: 2.2, description: "Top-tier materials with premium finishes" },
]

export function ConstructionCalculator() {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    materials: [],
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
      squareFootage: 0,
      volume: 0,
    },
    laborComplexity: 1,
    location: "",
  })

  const [totalCost, setTotalCost] = useState(0)
  const [showQuoteGeneration, setShowQuoteGeneration] = useState(false)

  // Calculate total cost whenever data changes
  useEffect(() => {
    calculateTotalCost()
  }, [calculatorData])

  const calculateTotalCost = () => {
    const materialsCost = calculatorData.materials.reduce((total, item) => {
      return total + item.material.basePrice * item.quantity * item.quality.multiplier
    }, 0)

    const laborCost = materialsCost * 0.4 * calculatorData.laborComplexity
    const deliveryFee = materialsCost > 5000 ? 0 : 150
    const taxRate = 0.08
    const subtotal = materialsCost + laborCost + deliveryFee
    const tax = subtotal * taxRate
    const total = subtotal + tax

    setTotalCost(total)
  }

  const updateMaterials = (materials: CalculatorData["materials"]) => {
    setCalculatorData((prev) => ({ ...prev, materials }))
  }

  const updateDimensions = (dimensions: CalculatorData["dimensions"]) => {
    setCalculatorData((prev) => ({ ...prev, dimensions }))
  }

  const updateLaborComplexity = (complexity: number) => {
    setCalculatorData((prev) => ({ ...prev, laborComplexity: complexity }))
  }

  const updateLocation = (location: string) => {
    setCalculatorData((prev) => ({ ...prev, location }))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Crown className="h-16 w-16 text-yellow-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-shimmer" />
          </div>
        </div>
        <Badge className="bg-yellow-600/10 text-yellow-700 border-yellow-600/20 mb-4">
          <Calculator className="w-4 h-4 mr-2" />
          Construction Calculator
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Royal Project
          <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            Cost Calculator
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get an accurate estimate for your construction project with our comprehensive calculator. Select materials,
          input dimensions, and receive a detailed cost breakdown.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Inputs */}
        <div className="lg:col-span-2 space-y-8">
          {/* Material Selection */}
          <MaterialSelection
            selectedMaterials={calculatorData.materials}
            onMaterialsChange={updateMaterials}
            qualityGrades={qualityGrades}
          />

          {/* Dimension Input */}
          <DimensionInput dimensions={calculatorData.dimensions} onDimensionsChange={updateDimensions} />
        </div>

        {/* Right Column - Cost Breakdown */}
        <div className="space-y-6">
          <CostBreakdown
            calculatorData={calculatorData}
            totalCost={totalCost}
            onLaborComplexityChange={updateLaborComplexity}
            onLocationChange={updateLocation}
          />

          {/* Quote Generation */}
          <Card className="border-2 border-yellow-600/20">
            <CardHeader>
              <CardTitle className="text-yellow-700">Generate Quote</CardTitle>
              <CardDescription>Save or share your project estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
                onClick={() => setShowQuoteGeneration(true)}
              >
                <Save className="w-4 h-4 mr-2" />
                Save & Get Official Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quote Generation Modal */}
      {showQuoteGeneration && (
        <QuoteGeneration
          calculatorData={calculatorData}
          totalCost={totalCost}
          onClose={() => setShowQuoteGeneration(false)}
        />
      )}
    </div>
  )
}
