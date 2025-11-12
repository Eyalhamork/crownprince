"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth/auth-context"
import { CheckSquare, Calendar, Clock, User, MapPin, FileText, Camera, MessageSquare, Settings } from "lucide-react"
import Image from "next/image"

export function StaffDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("tasks")

  const todayTasks = [
    {
      id: "TASK-001",
      title: "Install electrical panel - Downtown Office",
      project: "Downtown Office Complex",
      location: "123 Main St, Downtown",
      priority: "High",
      status: "In Progress",
      estimatedTime: "4 hours",
      progress: 60,
      client: "Metro Corp",
      notes: "Bring additional conduit and wire nuts",
    },
    {
      id: "TASK-002",
      title: "Residential outlet installation",
      project: "Johnson Family Home",
      location: "456 Oak Ave, Suburbs",
      priority: "Medium",
      status: "Pending",
      estimatedTime: "2 hours",
      progress: 0,
      client: "Johnson Family",
      notes: "Customer prefers morning appointment",
    },
    {
      id: "TASK-003",
      title: "Safety inspection - Warehouse",
      project: "Supply Chain Warehouse",
      location: "789 Industrial Blvd",
      priority: "High",
      status: "Scheduled",
      estimatedTime: "3 hours",
      progress: 0,
      client: "Supply Chain Inc",
      notes: "Bring safety equipment checklist",
    },
  ]

  const weeklySchedule = [
    {
      day: "Monday",
      date: "Feb 5",
      tasks: [
        { time: "8:00 AM", title: "Team meeting", location: "Office" },
        { time: "10:00 AM", title: "Downtown Office - Panel Install", location: "123 Main St" },
        { time: "2:00 PM", title: "Johnson Home - Outlet Install", location: "456 Oak Ave" },
      ],
    },
    {
      day: "Tuesday",
      date: "Feb 6",
      tasks: [
        { time: "9:00 AM", title: "Warehouse Safety Inspection", location: "789 Industrial Blvd" },
        { time: "1:00 PM", title: "Material pickup", location: "Supply Store" },
        { time: "3:00 PM", title: "Client consultation", location: "Office" },
      ],
    },
    {
      day: "Wednesday",
      date: "Feb 7",
      tasks: [
        { time: "8:30 AM", title: "Residential wiring project", location: "321 Pine St" },
        { time: "12:00 PM", title: "Lunch break", location: "Office" },
        { time: "1:00 PM", title: "Continue residential project", location: "321 Pine St" },
      ],
    },
  ]

  const recentReports = [
    {
      id: "RPT-001",
      title: "Daily Progress Report - Downtown Office",
      date: "Feb 4, 2024",
      status: "Submitted",
      type: "Progress",
    },
    {
      id: "RPT-002",
      title: "Safety Incident Report - Minor",
      date: "Feb 3, 2024",
      status: "Under Review",
      type: "Safety",
    },
    {
      id: "RPT-003",
      title: "Material Request - Conduit & Fittings",
      date: "Feb 2, 2024",
      status: "Approved",
      type: "Material",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Scheduled":
        return "bg-green-100 text-green-800"
      case "Completed":
        return "bg-gray-100 text-gray-800"
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Staff Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg">
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
                <h1 className="text-2xl font-bold">Staff Dashboard</h1>
                <p className="text-green-200">Welcome back, {user?.firstName}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
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
            <TabsTrigger value="tasks" className="flex items-center space-x-2">
              <CheckSquare className="h-4 w-4" />
              <span className="hidden sm:inline">My Tasks</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-6">
            {/* Today's Tasks Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Today's Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{todayTasks.length}</div>
                  <p className="text-sm text-gray-600">Tasks assigned</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">In Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {todayTasks.filter((task) => task.status === "In Progress").length}
                  </div>
                  <p className="text-sm text-gray-600">Active tasks</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">85%</div>
                  <p className="text-sm text-gray-600">This week</p>
                </CardContent>
              </Card>
            </div>

            {/* Task List */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>Your assigned tasks for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                        <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {task.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          Estimated: {task.estimatedTime}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-2" />
                          Client: {task.client}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Progress</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={task.progress} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{task.progress}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Notes</p>
                          <p className="text-sm text-gray-900">{task.notes}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Add Photo
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Report
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        {task.status === "Pending" && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Start Task
                          </Button>
                        )}
                        {task.status === "In Progress" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Update Progress
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your upcoming assignments and appointments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {weeklySchedule.map((day, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {day.day}, {day.date}
                      </h3>
                      <Badge variant="outline">{day.tasks.length} tasks</Badge>
                    </div>
                    <div className="space-y-3">
                      {day.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="text-sm font-medium text-gray-900 min-w-[80px]">{task.time}</div>
                            <div>
                              <p className="font-medium text-gray-900">{task.title}</p>
                              <p className="text-sm text-gray-600 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {task.location}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Reports & Documentation</CardTitle>
                <CardDescription>Submit and track your work reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Recent Reports</h3>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <FileText className="h-4 w-4 mr-2" />
                    New Report
                  </Button>
                </div>

                {recentReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{report.title}</h4>
                      <Badge
                        variant={
                          report.status === "Submitted"
                            ? "default"
                            : report.status === "Under Review"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Date</p>
                        <p className="font-medium">{report.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-medium">{report.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-medium">{report.status}</p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-gray-600">{user?.role}</p>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{user?.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{user?.phone || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Employee ID</p>
                      <p className="font-medium text-gray-900">{user?.id}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Department</p>
                      <p className="font-medium text-gray-900">Field Operations</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Supervisor</p>
                      <p className="font-medium text-gray-900">Sarah Miller</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-medium text-gray-900">January 15, 2023</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <p className="text-sm text-gray-600">Task Completion</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">4.8</div>
                      <p className="text-sm text-gray-600">Client Rating</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">156</div>
                      <p className="text-sm text-gray-600">Tasks Completed</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Edit Profile</Button>
                  <Button className="bg-green-600 hover:bg-green-700">Update Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
