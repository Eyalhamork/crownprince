"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Calendar,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Filter,
  MoreHorizontal,
} from "lucide-react"

export function ProjectManagement() {
  const [viewMode, setViewMode] = useState("grid")

  const projects = [
    {
      id: "PRJ-001",
      name: "Downtown Office Complex",
      client: "Metro Corporation",
      type: "Construction",
      status: "In Progress",
      priority: "High",
      progress: 75,
      budget: 450000,
      spent: 337500,
      startDate: "2023-12-01",
      endDate: "2024-03-15",
      team: ["David Crown", "Sarah Mitchell", "Michael Torres"],
      description: "Complete electrical and construction work for new office complex",
      milestones: [
        { name: "Foundation", completed: true, date: "2023-12-15" },
        { name: "Electrical Rough-in", completed: true, date: "2024-01-10" },
        { name: "Interior Work", completed: false, date: "2024-02-15" },
        { name: "Final Inspection", completed: false, date: "2024-03-10" },
      ],
    },
    {
      id: "PRJ-002",
      name: "Residential Wiring Upgrade",
      client: "Johnson Family",
      type: "Electrical",
      status: "Planning",
      priority: "Medium",
      progress: 25,
      budget: 75000,
      spent: 18750,
      startDate: "2024-01-15",
      endDate: "2024-02-28",
      team: ["Lisa Park", "James Wilson"],
      description: "Complete home electrical system upgrade and smart home integration",
      milestones: [
        { name: "Assessment", completed: true, date: "2024-01-15" },
        { name: "Permits", completed: false, date: "2024-01-25" },
        { name: "Installation", completed: false, date: "2024-02-10" },
        { name: "Testing", completed: false, date: "2024-02-25" },
      ],
    },
    {
      id: "PRJ-003",
      name: "Warehouse Logistics Setup",
      client: "Supply Chain Inc",
      type: "Logistics",
      status: "Review",
      priority: "High",
      progress: 90,
      budget: 200000,
      spent: 180000,
      startDate: "2023-11-01",
      endDate: "2024-02-10",
      team: ["Alex Chen", "Maria Rodriguez"],
      description: "Complete warehouse automation and logistics system implementation",
      milestones: [
        { name: "System Design", completed: true, date: "2023-11-15" },
        { name: "Equipment Install", completed: true, date: "2023-12-20" },
        { name: "Testing Phase", completed: true, date: "2024-01-15" },
        { name: "Go Live", completed: false, date: "2024-02-05" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Planning":
        return "bg-yellow-100 text-yellow-800"
      case "Review":
        return "bg-purple-100 text-purple-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      case "On Hold":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Project Management Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
          <p className="text-gray-600">Track and manage all active projects</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-2xl font-bold text-gray-900">$2.8M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On Schedule</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    {project.client} • {project.type}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{project.description}</p>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Timeline</span>
                  </div>
                  <div>
                    <div>Start: {project.startDate}</div>
                    <div>End: {project.endDate}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <DollarSign className="h-4 w-4" />
                    <span>Budget</span>
                  </div>
                  <div>
                    <div>Budget: ${project.budget.toLocaleString()}</div>
                    <div>Spent: ${project.spent.toLocaleString()}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Team</span>
                  </div>
                  <div>
                    {project.team.slice(0, 2).map((member, index) => (
                      <div key={index}>{member}</div>
                    ))}
                    {project.team.length > 2 && <div className="text-gray-500">+{project.team.length - 2} more</div>}
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Milestones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      {milestone.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-gray-400" />
                      )}
                      <span className={milestone.completed ? "text-green-700" : "text-gray-600"}>{milestone.name}</span>
                      <span className="text-gray-500">({milestone.date})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 pt-2 border-t">
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Update Status
                </Button>
                <Button size="sm" variant="outline">
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
