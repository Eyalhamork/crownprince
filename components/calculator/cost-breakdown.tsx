"use client"

import { DollarSign, Wrench, Truck, Receipt } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import type { CalculatorData } from "./construction-calculator"

interface CostBreakdownProps {
  calculatorData: CalculatorData
  totalCost: number
  onLaborComplexityChange: (complexity: number) => void
  onLocationChange: (location: string) => void
}

export function CostBreakdown({
  calculatorData,
  totalCost,
  onLaborComplexityChange,
  onLocationChange,
}: CostBreakdownProps) {
  const materialsCost = calculatorData.materials.reduce((total, item) => {
    return total + item.material.basePrice * item.quantity * item.quality.multiplier
  }, 0)

  const laborCost = materialsCost * 0.4 * calculatorData.laborComplexity
  const deliveryFee = materialsCost > 5000 ? 0 : 150
  const taxRate = 0.08
  const subtotal = materialsCost + laborCost + deliveryFee
  const tax = subtotal * taxRate

  const complexityOptions = [
    { value: 0.8, label: "Simple", description: "Basic installation, minimal complexity" },
    { value: 1.0, label: "Standard", description: "Average complexity project" },
    { value: 1.3, label: "Complex", description: "High complexity, custom work required" },
    { value: 1.6, label: "Expert", description: "Specialized expertise required" },
  ]

  return (
    <Card className="border-2 border-yellow-600/20 sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <DollarSign className="w-6 h-6 mr-3 text-yellow-600" />
          Cost Breakdown
        </CardTitle>
        <CardDescription>Detailed project cost analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Project Settings */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="complexity" className="text-sm font-medium text-gray-700">
              Labor Complexity
            </Label>
            <Select
              value={calculatorData.laborComplexity.toString()}
              onValueChange={(value) => onLaborComplexityChange(Number.parseFloat(value))}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {complexityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-xs text-gray-500">{option.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Project Location
            </Label>
            <Input
              id="location"
              value={calculatorData.location}
              onChange={(e) => onLocationChange(e.target.value)}
              placeholder="Enter city, state"
              className="mt-1"
            />
          </div>
        </div>

        <Separator />

        {/* Cost Items */}
        <div className="space-y-4">
          {/* Materials */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Receipt className="w-4 h-4 text-gray-500" />
              <span className="font-medium">Materials</span>
            </div>
            <span className="font-semibold">${materialsCost.toLocaleString()}</span>
          </div>

          {/* Material Details */}
          {calculatorData.materials.length > 0 && (
            <div className="ml-6 space-y-2">
              {calculatorData.materials.map((item, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-600">
                  <span>
                    {item.material.name} ({item.quality.name})
                  </span>
                  <span>${(item.material.basePrice * item.quantity * item.quality.multiplier).toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}

          {/* Labor */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="w-4 h-4 text-gray-500" />
              <span className="font-medium">Labor</span>
              <span className="text-xs text-gray-500">(40% × {calculatorData.laborComplexity}x complexity)</span>
            </div>
            <span className="font-semibold">${laborCost.toLocaleString()}</span>
          </div>

          {/* Delivery */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-gray-500" />
              <span className="font-medium">Delivery</span>
              {materialsCost > 5000 && <span className="text-xs text-green-600">(Free over $5,000)</span>}
            </div>
            <span className="font-semibold">${deliveryFee.toLocaleString()}</span>
          </div>

          <Separator />

          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">${subtotal.toLocaleString()}</span>
          </div>

          {/* Tax */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Tax ({(taxRate * 100).toFixed(0)}%)</span>
            <span className="font-semibold">${tax.toLocaleString()}</span>
          </div>

          <Separator />

          {/* Total */}
          <div className="flex items-center justify-between text-xl">
            <span className="font-bold">Total</span>
            <span className="font-bold text-yellow-600">${totalCost.toLocaleString()}</span>
          </div>

          {/* Confidence Range */}
          <div className="bg-yellow-50 rounded-lg p-3">
            <p className="text-sm font-medium text-yellow-800 mb-1">Estimate Range</p>
            <p className="text-xs text-yellow-700">
              ${(totalCost * 0.9).toLocaleString()} - ${(totalCost * 1.1).toLocaleString()}
            </p>
            <p className="text-xs text-yellow-600 mt-1">
              Final costs may vary based on site conditions and material availability
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
