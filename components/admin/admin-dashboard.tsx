"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"

export function AdminDashboard() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$2,847,500",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+3",
      trend: "up",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Total Clients",
      value: "156",
      change: "+8",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Completion Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      color: "text-amber-600",
    },
  ]

  const recentProjects = [
    {
      id: "PRJ-001",
      name: "Downtown Office Complex",
      client: "Metro Corp",
      status: "In Progress",
      progress: 75,
      deadline: "2024-03-15",
      priority: "High",
    },
    {
      id: "PRJ-002",
      name: "Residential Wiring",
      client: "Johnson Family",
      status: "Planning",
      progress: 25,
      deadline: "2024-02-28",
      priority: "Medium",
    },
    {
      id: "PRJ-003",
      name: "Warehouse Logistics Setup",
      client: "Supply Chain Inc",
      status: "Review",
      progress: 90,
      deadline: "2024-02-10",
      priority: "High",
    },
  ]

  const alerts = [
    {
      type: "urgent",
      message: "Project PRJ-003 requires immediate attention",
      time: "2h ago",
    },
    {
      type: "warning",
      message: "Payment overdue from Metro Corp - $45,000",
      time: "4h ago",
    },
    {
      type: "info",
      message: "New client inquiry for electrical services",
      time: "6h ago",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs text-gray-600">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>{metric.change}</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-yellow-600" />
              <span>Recent Projects</span>
            </CardTitle>
            <CardDescription>Latest project updates and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <Badge variant={project.priority === "High" ? "destructive" : "secondary"}>{project.priority}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Due: {project.deadline}</span>
                  </span>
                  <Badge variant="outline">{project.status}</Badge>
                </div>
              </div>
            ))}
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700">View All Projects</Button>
          </CardContent>
        </Card>

        {/* Alerts & Notifications */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span>Alerts & Notifications</span>
            </CardTitle>
            <CardDescription>Important updates requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="flex-shrink-0">
                  {alert.type === "urgent" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                  {alert.type === "warning" && <Clock className="h-4 w-4 text-yellow-500" />}
                  {alert.type === "info" && <CheckCircle className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="bg-yellow-600 hover:bg-yellow-700">New Project</Button>
            <Button variant="outline">Add Client</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="outline">Schedule Meeting</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
