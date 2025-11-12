"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth/auth-context"
import { Users, Building2, Calendar, CheckSquare, TrendingUp, Target, MessageSquare, Settings } from "lucide-react"
import Image from "next/image"

export function ManagerDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  const teamMetrics = [
    {
      title: "Team Members",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Projects",
      value: "8",
      change: "+1",
      trend: "up",
      icon: Building2,
      color: "text-green-600",
    },
    {
      title: "Tasks Completed",
      value: "47",
      change: "+12",
      trend: "up",
      icon: CheckSquare,
      color: "text-purple-600",
    },
    {
      title: "Team Efficiency",
      value: "92%",
      change: "+5%",
      trend: "up",
      icon: Target,
      color: "text-amber-600",
    },
  ]

  const activeProjects = [
    {
      id: "PRJ-001",
      name: "Downtown Office Complex",
      client: "Metro Corp",
      progress: 75,
      status: "On Track",
      team: ["John D.", "Sarah M.", "Mike R."],
      deadline: "2024-03-15",
      budget: "$125,000",
      priority: "High",
    },
    {
      id: "PRJ-002",
      name: "Residential Wiring",
      client: "Johnson Family",
      progress: 45,
      status: "In Progress",
      team: ["Alex K.", "Lisa P."],
      deadline: "2024-02-28",
      budget: "$35,000",
      priority: "Medium",
    },
    {
      id: "PRJ-003",
      name: "Warehouse Setup",
      client: "Supply Chain Inc",
      progress: 90,
      status: "Review",
      team: ["Tom W.", "Emma S.", "David L."],
      deadline: "2024-02-10",
      budget: "$85,000",
      priority: "High",
    },
  ]

  const teamMembers = [
    {
      id: "EMP-001",
      name: "John Davis",
      role: "Senior Electrician",
      status: "Available",
      currentProject: "Downtown Office Complex",
      efficiency: 95,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "EMP-002",
      name: "Sarah Miller",
      role: "Project Coordinator",
      status: "Busy",
      currentProject: "Downtown Office Complex",
      efficiency: 88,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "EMP-003",
      name: "Mike Rodriguez",
      role: "Construction Lead",
      status: "Available",
      currentProject: "Warehouse Setup",
      efficiency: 92,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "EMP-004",
      name: "Alex Kim",
      role: "Electrician",
      status: "On Leave",
      currentProject: "Residential Wiring",
      efficiency: 85,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const upcomingTasks = [
    {
      id: "TASK-001",
      title: "Review project proposals",
      project: "Downtown Office Complex",
      assignee: "Sarah Miller",
      dueDate: "Today",
      priority: "High",
    },
    {
      id: "TASK-002",
      title: "Client meeting preparation",
      project: "Warehouse Setup",
      assignee: "Mike Rodriguez",
      dueDate: "Tomorrow",
      priority: "Medium",
    },
    {
      id: "TASK-003",
      title: "Budget review and approval",
      project: "Residential Wiring",
      assignee: "John Davis",
      dueDate: "Feb 8",
      priority: "High",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Manager Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/crown-logo.png"
                  alt="Crown Prince Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Manager Dashboard</h1>
                <p className="text-blue-200">Welcome back, {user?.firstName}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-md">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center space-x-2">
              <CheckSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Tasks</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMetrics.map((metric, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-green-600">{metric.change}</span>
                      <span>from last week</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span>Project Status Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeProjects.slice(0, 3).map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                        <Badge variant={project.priority === "High" ? "destructive" : "secondary"}>
                          {project.priority}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Team Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamMembers.slice(0, 4).map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            member.status === "Available"
                              ? "default"
                              : member.status === "Busy"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {member.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{member.efficiency}% efficiency</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Manage and monitor all ongoing projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                        <p className="text-gray-600">{project.client}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={project.priority === "High" ? "destructive" : "secondary"}>
                          {project.priority}
                        </Badge>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Progress</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-semibold text-gray-900">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Deadline</p>
                        <p className="font-semibold text-gray-900">{project.deadline}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Team Members</p>
                      <div className="flex flex-wrap gap-2">
                        {project.team.map((member, idx) => (
                          <Badge key={idx} variant="outline">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>Monitor team performance and availability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          member.status === "Available"
                            ? "default"
                            : member.status === "Busy"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {member.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Current Project</p>
                        <p className="font-medium text-gray-900">{member.currentProject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Efficiency Rating</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={member.efficiency} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{member.efficiency}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Assign Task
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Task Management</CardTitle>
                <CardDescription>Upcoming tasks and assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{task.title}</h4>
                      <Badge variant={task.priority === "High" ? "destructive" : "secondary"}>{task.priority}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Project</p>
                        <p className="font-medium">{task.project}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Assigned to</p>
                        <p className="font-medium">{task.assignee}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Due Date</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {task.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Complete
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
