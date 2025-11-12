"use client"

import { useEffect } from "react"
import { Ruler, Square, CuboidIcon as Cube } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CalculatorData } from "./construction-calculator"

interface DimensionInputProps {
  dimensions: CalculatorData["dimensions"]
  onDimensionsChange: (dimensions: CalculatorData["dimensions"]) => void
}

export function DimensionInput({ dimensions, onDimensionsChange }: DimensionInputProps) {
  // Auto-calculate square footage and volume when dimensions change
  useEffect(() => {
    const squareFootage = dimensions.length * dimensions.width
    const volume = dimensions.length * dimensions.width * dimensions.height

    if (squareFootage !== dimensions.squareFootage || volume !== dimensions.volume) {
      onDimensionsChange({
        ...dimensions,
        squareFootage,
        volume,
      })
    }
  }, [dimensions]) // Updated to use the entire dimensions object as a dependency

  const updateDimension = (field: keyof CalculatorData["dimensions"], value: number) => {
    onDimensionsChange({
      ...dimensions,
      [field]: Math.max(0, value),
    })
  }

  return (
    <Card className="border-2 border-gray-200 hover:border-yellow-600/30 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Ruler className="w-6 h-6 mr-3 text-yellow-600" />
          Project Dimensions
        </CardTitle>
        <CardDescription>Enter the dimensions of your project space</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="length" className="text-sm font-medium text-gray-700">
              Length (feet)
            </Label>
            <Input
              id="length"
              type="number"
              value={dimensions.length || ""}
              onChange={(e) => updateDimension("length", Number.parseFloat(e.target.value) || 0)}
              placeholder="0"
              className="mt-1"
              min="0"
              step="0.1"
            />
          </div>
          <div>
            <Label htmlFor="width" className="text-sm font-medium text-gray-700">
              Width (feet)
            </Label>
            <Input
              id="width"
              type="number"
              value={dimensions.width || ""}
              onChange={(e) => updateDimension("width", Number.parseFloat(e.target.value) || 0)}
              placeholder="0"
              className="mt-1"
              min="0"
              step="0.1"
            />
          </div>
          <div>
            <Label htmlFor="height" className="text-sm font-medium text-gray-700">
              Height (feet)
            </Label>
            <Input
              id="height"
              type="number"
              value={dimensions.height || ""}
              onChange={(e) => updateDimension("height", Number.parseFloat(e.target.value) || 0)}
              placeholder="0"
              className="mt-1"
              min="0"
              step="0.1"
            />
          </div>
        </div>

        {/* Calculated Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Square Footage</p>
                  <p className="text-2xl font-bold text-yellow-700">
                    {dimensions.squareFootage.toLocaleString()} sq ft
                  </p>
                  <p className="text-xs text-gray-600">
                    {dimensions.length} × {dimensions.width}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Cube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Volume</p>
                  <p className="text-2xl font-bold text-blue-700">{dimensions.volume.toLocaleString()} cu ft</p>
                  <p className="text-xs text-gray-600">
                    {dimensions.length} × {dimensions.width} × {dimensions.height}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Helper */}
        {dimensions.squareFootage > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Helpful Conversions</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Square Yards:</span>
                <span className="font-medium ml-2">{(dimensions.squareFootage / 9).toFixed(1)}</span>
              </div>
              <div>
                <span className="text-gray-600">Acres:</span>
                <span className="font-medium ml-2">{(dimensions.squareFootage / 43560).toFixed(4)}</span>
              </div>
              {dimensions.volume > 0 && (
                <>
                  <div>
                    <span className="text-gray-600">Cubic Yards:</span>
                    <span className="font-medium ml-2">{(dimensions.volume / 27).toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Gallons:</span>
                    <span className="font-medium ml-2">{(dimensions.volume * 7.48).toFixed(0)}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
