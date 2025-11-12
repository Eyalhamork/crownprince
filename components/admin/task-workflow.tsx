"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckSquare,
  Clock,
  User,
  Calendar,
  Plus,
  Search,
  Filter,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
} from "lucide-react"

export function TaskWorkflow() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewTask, setShowNewTask] = useState(false)

  const tasks = [
    {
      id: "TSK-001",
      title: "Complete electrical inspection for PRJ-001",
      description: "Conduct final electrical inspection for Downtown Office Complex",
      assignee: "Sarah Mitchell",
      project: "PRJ-001",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-15",
      createdDate: "2024-01-10",
      estimatedHours: 4,
      actualHours: 2.5,
      tags: ["Inspection", "Electrical", "Safety"],
    },
    {
      id: "TSK-002",
      title: "Order materials for residential project",
      description: "Purchase electrical components for Johnson Family home upgrade",
      assignee: "Lisa Park",
      project: "PRJ-002",
      priority: "Medium",
      status: "Pending",
      dueDate: "2024-02-10",
      createdDate: "2024-01-08",
      estimatedHours: 2,
      actualHours: 0,
      tags: ["Procurement", "Materials", "Residential"],
    },
    {
      id: "TSK-003",
      title: "Client meeting for warehouse setup",
      description: "Final walkthrough and sign-off meeting with Supply Chain Inc",
      assignee: "Michael Torres",
      project: "PRJ-003",
      priority: "High",
      status: "Scheduled",
      dueDate: "2024-02-08",
      createdDate: "2024-01-05",
      estimatedHours: 3,
      actualHours: 0,
      tags: ["Meeting", "Client", "Logistics"],
    },
    {
      id: "TSK-004",
      title: "Update project documentation",
      description: "Complete project files and documentation for completed projects",
      assignee: "Alex Chen",
      project: "Multiple",
      priority: "Low",
      status: "Completed",
      dueDate: "2024-02-05",
      createdDate: "2024-01-15",
      estimatedHours: 6,
      actualHours: 5.5,
      tags: ["Documentation", "Admin", "Compliance"],
    },
  ]

  const workflows = [
    {
      name: "Project Initiation",
      steps: ["Client Consultation", "Site Assessment", "Proposal Creation", "Contract Signing"],
      activeStep: 2,
      totalSteps: 4,
    },
    {
      name: "Construction Process",
      steps: ["Permits & Approvals", "Material Procurement", "Construction Phase", "Quality Inspection"],
      activeStep: 3,
      totalSteps: 4,
    },
    {
      name: "Project Completion",
      steps: ["Final Inspection", "Client Walkthrough", "Documentation", "Invoice & Payment"],
      activeStep: 1,
      totalSteps: 4,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Scheduled":
        return "bg-purple-100 text-purple-800"
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
      {/* Task & Workflow Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Task & Workflow Management</h2>
          <p className="text-gray-600">Manage tasks, workflows, and team productivity</p>
        </div>
        <Button onClick={() => setShowNewTask(true)} className="bg-yellow-600 hover:bg-yellow-700">
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Task Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <CheckSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">14</p>
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
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Tasks</h3>
          {tasks.map((task) => (
            <Card key={task.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{task.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{task.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {task.actualHours}h / {task.estimatedHours}h
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                    <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </div>
                  <Badge variant="outline">{task.project}</Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {task.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                    Update Status
                  </Button>
                  <Button size="sm" variant="outline">
                    Add Comment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflows */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Workflows</h3>
          {workflows.map((workflow, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{workflow.name}</CardTitle>
                <CardDescription>
                  Step {workflow.activeStep} of {workflow.totalSteps}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          stepIndex < workflow.activeStep
                            ? "bg-green-100 text-green-800"
                            : stepIndex === workflow.activeStep
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {stepIndex < workflow.activeStep ? <CheckCircle className="h-3 w-3" /> : stepIndex + 1}
                      </div>
                      <span
                        className={`text-sm ${
                          stepIndex === workflow.activeStep ? "font-medium text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Advance Workflow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* New Task Modal */}
      {showNewTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md bg-white">
            <CardHeader>
              <CardTitle>Create New Task</CardTitle>
              <CardDescription>Add a new task to the workflow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Task Title</label>
                <Input placeholder="Enter task title..." />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <Textarea placeholder="Enter task description..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Assignee</label>
                  <Input placeholder="Select assignee..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Due Date</label>
                  <Input type="date" />
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Button className="flex-1 bg-yellow-600 hover:bg-yellow-700">Create Task</Button>
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowNewTask(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
