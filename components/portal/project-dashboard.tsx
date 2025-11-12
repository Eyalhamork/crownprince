"use client"

import { useState } from "react"
import { Calendar, Clock, DollarSign, MapPin, CheckCircle, PlayCircle, Eye, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Project {
  id: string
  title: string
  type: "electrical" | "construction" | "logistics"
  status: "planning" | "in-progress" | "on-hold" | "completed" | "cancelled"
  progress: number
  startDate: string
  endDate: string
  budget: number
  spent: number
  location: string
  manager: {
    name: string
    avatar: string
    phone: string
    email: string
  }
  description: string
  milestones: Array<{
    id: string
    title: string
    completed: boolean
    dueDate: string
    description: string
  }>
  updates: Array<{
    id: string
    date: string
    title: string
    description: string
    author: string
    type: "update" | "milestone" | "issue" | "photo"
    attachments?: string[]
  }>
  team: Array<{
    name: string
    role: string
    avatar: string
  }>
}

const mockProjects: Project[] = [
  {
    id: "proj-001",
    title: "Office Electrical Upgrade",
    type: "electrical",
    status: "in-progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    budget: 45000,
    spent: 29250,
    location: "123 Business Ave, Los Angeles, CA",
    manager: {
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=50&width=50",
      phone: "(555) 234-5678",
      email: "mike.rodriguez@crownprinceinc.com",
    },
    description: "Complete electrical system upgrade including new panels, LED lighting, and smart controls.",
    milestones: [
      {
        id: "m1",
        title: "Electrical Assessment",
        completed: true,
        dueDate: "2024-01-20",
        description: "Complete electrical system assessment and planning",
      },
      {
        id: "m2",
        title: "Panel Installation",
        completed: true,
        dueDate: "2024-02-05",
        description: "Install new electrical panels and distribution",
      },
      {
        id: "m3",
        title: "LED Lighting Installation",
        completed: false,
        dueDate: "2024-02-25",
        description: "Install LED lighting throughout the facility",
      },
      {
        id: "m4",
        title: "Smart Controls Setup",
        completed: false,
        dueDate: "2024-03-10",
        description: "Configure smart lighting and HVAC controls",
      },
    ],
    updates: [
      {
        id: "u1",
        date: "2024-02-20",
        title: "LED Installation Progress",
        description: "Completed LED installation in main office areas. Moving to conference rooms next week.",
        author: "Mike Rodriguez",
        type: "update",
      },
      {
        id: "u2",
        date: "2024-02-15",
        title: "Panel Installation Complete",
        description: "All electrical panels have been successfully installed and tested.",
        author: "Mike Rodriguez",
        type: "milestone",
      },
    ],
    team: [
      { name: "Mike Rodriguez", role: "Project Manager", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Carlos Martinez", role: "Lead Electrician", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Jennifer Kim", role: "Safety Inspector", avatar: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: "proj-002",
    title: "Warehouse Renovation",
    type: "construction",
    status: "planning",
    progress: 15,
    startDate: "2024-03-01",
    endDate: "2024-08-15",
    budget: 180000,
    spent: 27000,
    location: "456 Industrial Blvd, Long Beach, CA",
    manager: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=50&width=50",
      phone: "(555) 345-6789",
      email: "sarah.chen@crownprinceinc.com",
    },
    description: "Complete warehouse renovation including structural improvements and modern facilities.",
    milestones: [
      {
        id: "m1",
        title: "Permits and Planning",
        completed: true,
        dueDate: "2024-03-15",
        description: "Obtain all necessary permits and finalize construction plans",
      },
      {
        id: "m2",
        title: "Structural Assessment",
        completed: false,
        dueDate: "2024-04-01",
        description: "Complete structural engineering assessment",
      },
      {
        id: "m3",
        title: "Foundation Work",
        completed: false,
        dueDate: "2024-05-15",
        description: "Foundation repairs and improvements",
      },
    ],
    updates: [
      {
        id: "u1",
        date: "2024-02-28",
        title: "Project Kickoff",
        description: "Project officially started. Permits have been submitted and initial planning is underway.",
        author: "Sarah Chen",
        type: "update",
      },
    ],
    team: [
      { name: "Sarah Chen", role: "Project Manager", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "David Thompson", role: "Construction Supervisor", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Lisa Park", role: "Architect", avatar: "/placeholder.svg?height=40&width=40" },
    ],
  },
]

interface ProjectDashboardProps {
  user: any
  detailed?: boolean
}

export function ProjectDashboard({ user, detailed = false }: ProjectDashboardProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projects, setProjects] = useState(mockProjects)

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "on-hold":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: Project["type"]) => {
    switch (type) {
      case "electrical":
        return "⚡"
      case "construction":
        return "🔨"
      case "logistics":
        return "🚛"
      default:
        return "📋"
    }
  }

  if (!detailed) {
    return (
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <PlayCircle className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Projects</p>
                  <p className="text-2xl font-bold">
                    {projects.filter((p) => p.status === "in-progress" || p.status === "planning").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold">{projects.filter((p) => p.status === "completed").length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Investment</p>
                  <p className="text-2xl font-bold">
                    ${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                  <p className="text-2xl font-bold">
                    {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your latest projects and their current status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{getTypeIcon(project.type)}</div>
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <Badge className={getStatusColor(project.status)}>{project.status.replace("-", " ")}</Badge>
                      <p className="text-sm text-gray-600 mt-1">{project.progress}% complete</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Project List */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{getTypeIcon(project.type)}</div>
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-1">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(project.startDate).toLocaleDateString()} -{" "}
                          {new Date(project.endDate).toLocaleDateString()}
                        </span>
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(project.status)}>{project.status.replace("-", " ")}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {selectedProject?.id === project.id ? "Hide Details" : "View Details"}
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Budget Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="text-lg font-semibold">${project.budget.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Spent</p>
                    <p className="text-lg font-semibold">${project.spent.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Remaining</p>
                    <p className="text-lg font-semibold">${(project.budget - project.spent).toLocaleString()}</p>
                  </div>
                </div>

                {/* Project Manager */}
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={project.manager.avatar || "/placeholder.svg"} alt={project.manager.name} />
                    <AvatarFallback>
                      {project.manager.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{project.manager.name}</p>
                    <p className="text-sm text-gray-600">Project Manager</p>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedProject?.id === project.id && (
                  <div className="border-t pt-6 mt-6">
                    <Tabs defaultValue="overview" className="space-y-4">
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="milestones">Milestones</TabsTrigger>
                        <TabsTrigger value="updates">Updates</TabsTrigger>
                        <TabsTrigger value="team">Team</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Project Description</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                      </TabsContent>

                      <TabsContent value="milestones" className="space-y-4">
                        <div className="space-y-3">
                          {project.milestones.map((milestone) => (
                            <div
                              key={milestone.id}
                              className={`flex items-start space-x-3 p-3 rounded-lg ${
                                milestone.completed ? "bg-green-50" : "bg-gray-50"
                              }`}
                            >
                              <div className="mt-1">
                                {milestone.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                ) : (
                                  <Clock className="h-5 w-5 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium">{milestone.title}</h5>
                                <p className="text-sm text-gray-600">{milestone.description}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Due: {new Date(milestone.dueDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="updates" className="space-y-4">
                        <div className="space-y-4">
                          {project.updates.map((update) => (
                            <div key={update.id} className="border-l-4 border-yellow-600 pl-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge variant="outline">{update.type}</Badge>
                                <span className="text-sm text-gray-500">
                                  {new Date(update.date).toLocaleDateString()}
                                </span>
                              </div>
                              <h5 className="font-medium">{update.title}</h5>
                              <p className="text-gray-600 text-sm">{update.description}</p>
                              <p className="text-xs text-gray-500 mt-1">By {update.author}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="team" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.team.map((member, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                <AvatarFallback>
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{member.name}</p>
                                <p className="text-sm text-gray-600">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
