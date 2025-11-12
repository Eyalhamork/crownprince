"use client"

import { useState } from "react"
import { Plus, Minus, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { MaterialItem, QualityGrade, CalculatorData } from "./construction-calculator"

const materials: MaterialItem[] = [
  {
    id: "concrete",
    name: "Concrete",
    category: "Foundation",
    basePrice: 120,
    unit: "cubic yard",
    image: "/placeholder.svg?height=100&width=100",
    description: "High-strength concrete for foundations and structures",
  },
  {
    id: "steel-rebar",
    name: "Steel Rebar",
    category: "Reinforcement",
    basePrice: 0.85,
    unit: "linear foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "Grade 60 steel reinforcement bars",
  },
  {
    id: "lumber-2x4",
    name: "Lumber 2x4",
    category: "Framing",
    basePrice: 8.5,
    unit: "linear foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "Pressure-treated lumber for framing",
  },
  {
    id: "lumber-2x6",
    name: "Lumber 2x6",
    category: "Framing",
    basePrice: 12.75,
    unit: "linear foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "Pressure-treated lumber for heavy framing",
  },
  {
    id: "drywall",
    name: "Drywall",
    category: "Interior",
    basePrice: 1.25,
    unit: "square foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "1/2 inch standard drywall sheets",
  },
  {
    id: "insulation",
    name: "Insulation",
    category: "Interior",
    basePrice: 1.85,
    unit: "square foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "R-15 fiberglass batt insulation",
  },
  {
    id: "roofing-shingles",
    name: "Roofing Shingles",
    category: "Roofing",
    basePrice: 3.5,
    unit: "square foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "Architectural asphalt shingles",
  },
  {
    id: "flooring-hardwood",
    name: "Hardwood Flooring",
    category: "Flooring",
    basePrice: 8.25,
    unit: "square foot",
    image: "/placeholder.svg?height=100&width=100",
    description: "Oak hardwood flooring planks",
  },
]

interface MaterialSelectionProps {
  selectedMaterials: CalculatorData["materials"]
  onMaterialsChange: (materials: CalculatorData["materials"]) => void
  qualityGrades: QualityGrade[]
}

export function MaterialSelection({ selectedMaterials, onMaterialsChange, qualityGrades }: MaterialSelectionProps) {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("")

  const addMaterial = () => {
    if (!selectedMaterialId) return

    const material = materials.find((m) => m.id === selectedMaterialId)
    if (!material) return

    const newMaterial = {
      material,
      quantity: 1,
      quality: qualityGrades[0],
    }

    onMaterialsChange([...selectedMaterials, newMaterial])
    setSelectedMaterialId("")
  }

  const removeMaterial = (index: number) => {
    const updated = selectedMaterials.filter((_, i) => i !== index)
    onMaterialsChange(updated)
  }

  const updateQuantity = (index: number, quantity: number) => {
    const updated = selectedMaterials.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(0, quantity) } : item,
    )
    onMaterialsChange(updated)
  }

  const updateQuality = (index: number, qualityId: string) => {
    const quality = qualityGrades.find((q) => q.id === qualityId)
    if (!quality) return

    const updated = selectedMaterials.map((item, i) => (i === index ? { ...item, quality } : item))
    onMaterialsChange(updated)
  }

  const categories = [...new Set(materials.map((m) => m.category))]

  return (
    <Card className="border-2 border-gray-200 hover:border-yellow-600/30 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Package className="w-6 h-6 mr-3 text-yellow-600" />
          Material Selection
        </CardTitle>
        <CardDescription>Choose materials and specify quantities for your project</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add Material */}
        <div className="flex gap-4">
          <Select value={selectedMaterialId} onValueChange={setSelectedMaterialId}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Select a material" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <div key={category}>
                  <div className="px-2 py-1 text-sm font-semibold text-gray-500">{category}</div>
                  {materials
                    .filter((m) => m.category === category)
                    .map((material) => (
                      <SelectItem key={material.id} value={material.id}>
                        <div className="flex items-center space-x-2">
                          <span>{material.name}</span>
                          <Badge variant="outline" className="text-xs">
                            ${material.basePrice}/{material.unit}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                </div>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={addMaterial}
            disabled={!selectedMaterialId}
            className="bg-yellow-600 hover:bg-yellow-500 text-black"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>

        {/* Selected Materials */}
        <div className="space-y-4">
          {selectedMaterials.map((item, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Material Image */}
                  <img
                    src={item.material.image || "/placeholder.svg"}
                    alt={item.material.name}
                    className="w-16 h-16 rounded-lg object-cover border"
                  />

                  {/* Material Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">{item.material.name}</h4>
                      <p className="text-sm text-gray-600">{item.material.description}</p>
                      <Badge variant="outline" className="mt-1">
                        {item.material.category}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Quantity */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Quantity</label>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(index, Number.parseInt(e.target.value) || 0)}
                            className="w-20 text-center"
                            min="1"
                          />
                          <Button variant="outline" size="sm" onClick={() => updateQuantity(index, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <span className="text-xs text-gray-500">{item.material.unit}</span>
                      </div>

                      {/* Quality Grade */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Quality Grade</label>
                        <Select value={item.quality.id} onValueChange={(value) => updateQuality(index, value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {qualityGrades.map((grade) => (
                              <SelectItem key={grade.id} value={grade.id}>
                                <div>
                                  <div className="font-medium">{grade.name}</div>
                                  <div className="text-xs text-gray-500">{grade.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Cost */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Total Cost</label>
                        <div className="text-2xl font-bold text-yellow-600">
                          ${(item.material.basePrice * item.quantity * item.quality.multiplier).toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          ${item.material.basePrice} × {item.quantity} × {item.quality.multiplier}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <Button variant="outline" size="sm" onClick={() => removeMaterial(index)} className="text-red-600">
                    <Minus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {selectedMaterials.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No materials selected yet. Add materials to get started.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
