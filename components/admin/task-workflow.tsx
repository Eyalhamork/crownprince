"use client"

import { useState, useMemo } from "react"
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
import { useTasks } from "@/hooks/use-tasks"
import { useDataStore } from "@/lib/data-store"

export function TaskWorkflow() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewTask, setShowNewTask] = useState(false)
  const [newTaskData, setNewTaskData] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    priority: "Medium" as "High" | "Medium" | "Low",
  })

  const { tasks, stats, updateTask, addTask } = useTasks({
    search: searchTerm,
  })

  const { employees, projects } = useDataStore()

  const workflows = useMemo(() => {
    // Group tasks by project to create workflow views
    const projectWorkflows = projects.slice(0, 3).map(project => {
      const projectTasks = tasks.filter(t => t.projectId === project.id)
      const completedCount = projectTasks.filter(t => t.status === "Completed").length
      const totalCount = projectTasks.length || 1

      return {
        name: project.name,
        projectId: project.id,
        steps: ["Planning", "In Progress", "Review", "Completed"],
        activeStep: project.status === "Completed" ? 4 :
                   project.status === "Review" ? 3 :
                   project.status === "In Progress" ? 2 : 1,
        totalSteps: 4,
        completedTasks: completedCount,
        totalTasks: projectTasks.length,
      }
    })

    return projectWorkflows
  }, [projects, tasks])

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

  const handleUpdateTaskStatus = (taskId: string, newStatus: string) => {
    updateTask(taskId, { status: newStatus as any })
  }

  const handleCreateTask = () => {
    if (!newTaskData.title || !newTaskData.assignee || !newTaskData.dueDate) {
      return
    }

    const assigneeEmployee = employees.find(e => e.name === newTaskData.assignee)

    addTask({
      title: newTaskData.title,
      description: newTaskData.description,
      assignee: newTaskData.assignee,
      assigneeId: assigneeEmployee?.id || "EMP-001",
      projectId: "PRJ-001", // Default to first project
      priority: newTaskData.priority,
      status: "Pending",
      dueDate: newTaskData.dueDate,
      createdDate: new Date().toISOString().split("T")[0],
      estimatedHours: 4,
      actualHours: 0,
      tags: ["New"],
    })

    setNewTaskData({
      title: "",
      description: "",
      assignee: "",
      dueDate: "",
      priority: "Medium",
    })
    setShowNewTask(false)
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
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
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
                <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
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
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
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
                <p className="text-2xl font-bold text-gray-900">{stats.overdue}</p>
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
          {tasks.length === 0 ? (
            <Card className="bg-white shadow-md">
              <CardContent className="pt-6 text-center text-gray-500">
                No tasks found matching your search.
              </CardContent>
            </Card>
          ) : (
            tasks.filter(t => t.status !== "Completed").slice(0, 5).map((task) => (
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
                    <Badge variant="outline">{task.projectId}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {task.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <select
                      className="border rounded-md px-2 py-1 text-sm flex-1"
                      value={task.status}
                      onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <Button size="sm" variant="outline">
                      Add Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Workflows */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Workflows</h3>
          {workflows.map((workflow, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{workflow.name}</CardTitle>
                <CardDescription>
                  Step {workflow.activeStep} of {workflow.totalSteps} • {workflow.completedTasks}/{workflow.totalTasks} tasks completed
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
                  View Project Details
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
                <Input
                  placeholder="Enter task title..."
                  value={newTaskData.title}
                  onChange={(e) => setNewTaskData({ ...newTaskData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <Textarea
                  placeholder="Enter task description..."
                  value={newTaskData.description}
                  onChange={(e) => setNewTaskData({ ...newTaskData, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Assignee</label>
                  <select
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    value={newTaskData.assignee}
                    onChange={(e) => setNewTaskData({ ...newTaskData, assignee: e.target.value })}
                  >
                    <option value="">Select assignee...</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.name}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Due Date</label>
                  <Input
                    type="date"
                    value={newTaskData.dueDate}
                    onChange={(e) => setNewTaskData({ ...newTaskData, dueDate: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Priority</label>
                <select
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  value={newTaskData.priority}
                  onChange={(e) => setNewTaskData({ ...newTaskData, priority: e.target.value as any })}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Button
                  className="flex-1 bg-yellow-600 hover:bg-yellow-700"
                  onClick={handleCreateTask}
                >
                  Create Task
                </Button>
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
