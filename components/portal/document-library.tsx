"use client"

import { useState } from "react"
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
  User,
  Folder,
  ImageIcon,
  FileSpreadsheet,
  File,
  Upload,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Document {
  id: string
  name: string
  type: "contract" | "invoice" | "report" | "photo" | "plan" | "certificate" | "other"
  size: string
  uploadedAt: string
  uploadedBy: string
  project?: string
  category: string
  url: string
  description?: string
}

const mockDocuments: Document[] = [
  {
    id: "doc-001",
    name: "Electrical Upgrade Contract.pdf",
    type: "contract",
    size: "2.4 MB",
    uploadedAt: "2024-01-15T10:00:00Z",
    uploadedBy: "Mike Rodriguez",
    project: "Office Electrical Upgrade",
    category: "Contracts",
    url: "/placeholder.pdf",
    description: "Main contract for electrical upgrade project",
  },
  {
    id: "doc-002",
    name: "Progress Photos - Week 3.zip",
    type: "photo",
    size: "15.7 MB",
    uploadedAt: "2024-02-05T14:30:00Z",
    uploadedBy: "Carlos Martinez",
    project: "Office Electrical Upgrade",
    category: "Progress Photos",
    url: "/placeholder.zip",
    description: "Weekly progress photos from electrical installation",
  },
  {
    id: "doc-003",
    name: "Invoice INV-2024-001.pdf",
    type: "invoice",
    size: "156 KB",
    uploadedAt: "2024-02-15T09:15:00Z",
    uploadedBy: "Billing Department",
    project: "Office Electrical Upgrade",
    category: "Invoices",
    url: "/placeholder.pdf",
    description: "Invoice for electrical panel installation",
  },
  {
    id: "doc-004",
    name: "Electrical Plans - Revised.dwg",
    type: "plan",
    size: "3.2 MB",
    uploadedAt: "2024-01-20T11:45:00Z",
    uploadedBy: "Jennifer Kim",
    project: "Office Electrical Upgrade",
    category: "Technical Drawings",
    url: "/placeholder.dwg",
    description: "Revised electrical plans with updated specifications",
  },
  {
    id: "doc-005",
    name: "Safety Inspection Certificate.pdf",
    type: "certificate",
    size: "890 KB",
    uploadedAt: "2024-02-10T16:20:00Z",
    uploadedBy: "Safety Inspector",
    project: "Office Electrical Upgrade",
    category: "Certificates",
    url: "/placeholder.pdf",
    description: "Safety inspection certificate for completed work",
  },
  {
    id: "doc-006",
    name: "Project Status Report - February.xlsx",
    type: "report",
    size: "1.1 MB",
    uploadedAt: "2024-02-28T17:00:00Z",
    uploadedBy: "Mike Rodriguez",
    project: "Office Electrical Upgrade",
    category: "Reports",
    url: "/placeholder.xlsx",
    description: "Monthly project status and progress report",
  },
]

interface DocumentLibraryProps {
  user: any
}

export function DocumentLibrary({ user }: DocumentLibraryProps) {
  const [documents, setDocuments] = useState(mockDocuments)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterProject, setFilterProject] = useState<string>("all")

  const getFileIcon = (type: Document["type"]) => {
    switch (type) {
      case "contract":
      case "certificate":
        return <FileText className="h-5 w-5 text-blue-600" />
      case "invoice":
        return <FileText className="h-5 w-5 text-green-600" />
      case "report":
        return <FileSpreadsheet className="h-5 w-5 text-orange-600" />
      case "photo":
        return <ImageIcon className="h-5 w-5 text-purple-600" />
      case "plan":
        return <File className="h-5 w-5 text-red-600" />
      default:
        return <File className="h-5 w-5 text-gray-600" />
    }
  }

  const getTypeColor = (type: Document["type"]) => {
    switch (type) {
      case "contract":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "invoice":
        return "bg-green-100 text-green-800 border-green-200"
      case "report":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "photo":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "plan":
        return "bg-red-100 text-red-800 border-red-200"
      case "certificate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      searchTerm === "" ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || doc.type === filterType
    const matchesProject = filterProject === "all" || doc.project === filterProject
    return matchesSearch && matchesType && matchesProject
  })

  const projects = [...new Set(documents.map((doc) => doc.project).filter(Boolean))]
  const categories = [...new Set(documents.map((doc) => doc.category))]

  const documentsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = filteredDocuments.filter((doc) => doc.category === category)
      return acc
    },
    {} as Record<string, Document[]>,
  )

  return (
    <div className="space-y-6">
      {/* Document Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Documents</p>
                <p className="text-2xl font-bold">{documents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Folder className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-bold">{categories.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <ImageIcon className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Photos</p>
                <p className="text-2xl font-bold">{documents.filter((d) => d.type === "photo").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <FileSpreadsheet className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Reports</p>
                <p className="text-2xl font-bold">{documents.filter((d) => d.type === "report").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-yellow-600 transition-colors">
        <CardContent className="p-8 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Documents</h3>
          <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
          <Button className="bg-yellow-600 hover:bg-yellow-700">Choose Files</Button>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="contract">Contracts</SelectItem>
                  <SelectItem value="invoice">Invoices</SelectItem>
                  <SelectItem value="report">Reports</SelectItem>
                  <SelectItem value="photo">Photos</SelectItem>
                  <SelectItem value="plan">Plans</SelectItem>
                  <SelectItem value="certificate">Certificates</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select value={filterProject} onValueChange={setFilterProject}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                {projects.map((project) => (
                  <SelectItem key={project} value={project!}>
                    {project}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((document) => (
              <Card key={document.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {getFileIcon(document.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{document.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{document.size}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={getTypeColor(document.type)}>{document.type}</Badge>
                        {document.project && <Badge variant="outline">{document.project}</Badge>}
                      </div>
                      {document.description && <p className="text-xs text-gray-500 mb-3">{document.description}</p>}
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(document.uploadedAt).toLocaleDateString()}</span>
                        <User className="h-3 w-3 ml-2" />
                        <span>{document.uploadedBy}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          {filteredDocuments.map((document) => (
            <Card key={document.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      {getFileIcon(document.type)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{document.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{document.size}</span>
                        <span>{new Date(document.uploadedAt).toLocaleDateString()}</span>
                        <span>{document.uploadedBy}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getTypeColor(document.type)}>{document.type}</Badge>
                    {document.project && <Badge variant="outline">{document.project}</Badge>}
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="category" className="space-y-6">
          {Object.entries(documentsByCategory).map(([category, docs]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Folder className="h-5 w-5 text-yellow-600" />
                  <span>{category}</span>
                  <Badge variant="outline">{docs.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map((document) => (
                    <div
                      key={document.id}
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        {getFileIcon(document.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{document.name}</p>
                        <p className="text-xs text-gray-500">{document.size}</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
