"use client"

import { useState, useMemo } from "react"
import { Calendar, Clock, DollarSign, MapPin, CheckCircle, PlayCircle, Eye, MessageSquare, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProjects } from "@/hooks/use-projects"
import { useDataStore, type Project } from "@/lib/data-store"

interface ProjectDashboardProps {
  user: any
  detailed?: boolean
}

export function ProjectDashboard({ user, detailed = false }: ProjectDashboardProps) {
  const { projects, stats, isLoading } = useProjects()
  const { employees, activities } = useDataStore()
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  // Get team members for a project
  const getTeamMembers = (teamIds: string[]) => {
    return teamIds.map(id => employees.find(emp => emp.id === id)).filter(Boolean)
  }

  // Get project manager
  const getProjectManager = (teamIds: string[]) => {
    const teamMembers = getTeamMembers(teamIds)
    return teamMembers.find(member => member?.role === "Manager") || teamMembers[0]
  }

  // Get project activities/updates
  const getProjectUpdates = (projectId: string) => {
    return activities.filter(activity =>
      activity.description.toLowerCase().includes(projectId.toLowerCase()) ||
      activity.user.toLowerCase().includes("project")
    ).slice(0, 5)
  }

  // Generate milestones based on project progress
  const generateMilestones = (project: Project) => {
    const milestones = [
      {
        id: "m1",
        title: "Project Kickoff",
        completed: project.progress >= 10,
        dueDate: project.startDate,
        description: "Initial project setup and team alignment",
      },
      {
        id: "m2",
        title: "Planning Complete",
        completed: project.progress >= 25,
        dueDate: new Date(new Date(project.startDate).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        description: "Detailed project plan and resource allocation finalized",
      },
      {
        id: "m3",
        title: "Midpoint Review",
        completed: project.progress >= 50,
        dueDate: new Date((new Date(project.startDate).getTime() + new Date(project.endDate).getTime()) / 2).toISOString().split("T")[0],
        description: "Mid-project assessment and adjustment",
      },
      {
        id: "m4",
        title: "Final Testing",
        completed: project.progress >= 90,
        dueDate: new Date(new Date(project.endDate).getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        description: "Quality assurance and final testing phase",
      },
      {
        id: "m5",
        title: "Project Completion",
        completed: project.status === "Completed",
        dueDate: project.endDate,
        description: "Final delivery and project closeout",
      },
    ]
    return milestones
  }

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "On Hold":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: Project["type"]) => {
    switch (type) {
      case "Electrical":
        return "⚡"
      case "Construction":
        return "🔨"
      case "Logistics":
        return "🚛"
      default:
        return "📋"
    }
  }

  // Calculate spent amount based on progress
  const calculateSpent = (project: Project) => {
    return Math.round(project.budget * (project.progress / 100))
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading projects...</div>
      </div>
    )
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
                  <p className="text-2xl font-bold">{stats.active}</p>
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
                  <p className="text-2xl font-bold">{stats.completed}</p>
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
                  <p className="text-2xl font-bold">${stats.totalBudget.toLocaleString()}</p>
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
                  <p className="text-2xl font-bold">{Math.round(stats.averageProgress)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {stats.overdue > 0 && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-medium text-red-800">
                  {stats.overdue} project{stats.overdue > 1 ? "s" : ""} overdue
                </span>
              </div>
            </CardContent>
          </Card>
        )}

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
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{getTypeIcon(project.type)}</div>
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
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
        {projects.map((project) => {
          const manager = getProjectManager(project.team)
          const teamMembers = getTeamMembers(project.team)
          const spent = calculateSpent(project)
          const milestones = generateMilestones(project)

          return (
            <Card key={project.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{getTypeIcon(project.type)}</div>
                    <div>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 mt-1">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.client}</span>
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
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProjectId(selectedProjectId === project.id ? null : project.id)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {selectedProjectId === project.id ? "Hide Details" : "View Details"}
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
                      <p className="text-lg font-semibold">${spent.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Remaining</p>
                      <p className="text-lg font-semibold">${(project.budget - spent).toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Project Manager */}
                  {manager && (
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt={manager.name} />
                        <AvatarFallback>
                          {manager.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{manager.name}</p>
                        <p className="text-sm text-gray-600">Project Manager</p>
                      </div>
                      <div className="ml-auto flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Expanded Details */}
                  {selectedProjectId === project.id && (
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
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-sm text-gray-600">Priority</h5>
                              <Badge variant="outline" className="mt-1">{project.priority}</Badge>
                            </div>
                            <div>
                              <h5 className="font-medium text-sm text-gray-600">Type</h5>
                              <Badge variant="outline" className="mt-1">{project.type}</Badge>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="milestones" className="space-y-4">
                          <div className="space-y-3">
                            {milestones.map((milestone) => (
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
                            {getProjectUpdates(project.id).length > 0 ? (
                              getProjectUpdates(project.id).map((activity) => (
                                <div key={activity.id} className="border-l-4 border-yellow-600 pl-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge variant="outline">{activity.type}</Badge>
                                    <span className="text-sm text-gray-500">
                                      {new Date(activity.timestamp).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-gray-600 text-sm">{activity.description}</p>
                                  <p className="text-xs text-gray-500 mt-1">By {activity.user}</p>
                                </div>
                              ))
                            ) : (
                              <div className="text-center text-gray-500 py-4">
                                No recent updates for this project
                              </div>
                            )}
                          </div>
                        </TabsContent>

                        <TabsContent value="team" className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {teamMembers.map((member) => (
                              member && (
                                <div key={member.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={member.name} />
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
                                    <p className="text-xs text-gray-500">{member.department}</p>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
