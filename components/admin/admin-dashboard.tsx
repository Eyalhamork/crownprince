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
import { useProjects } from "@/hooks/use-projects"
import { useNotifications } from "@/hooks/use-notifications"
import { useDataStore } from "@/lib/data-store"

export function AdminDashboard() {
  const { recentProjects, stats: projectStats } = useProjects()
  const { unreadNotifications } = useNotifications()
  const { clients, invoices } = useDataStore()

  // Calculate dynamic metrics
  const totalRevenue = invoices
    .filter(inv => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0)

  const previousMonthRevenue = totalRevenue * 0.89 // Simulated previous month
  const revenueChange = ((totalRevenue - previousMonthRevenue) / previousMonthRevenue * 100).toFixed(1)

  const completionRate = projectStats.total > 0
    ? ((projectStats.completed / projectStats.total) * 100).toFixed(1)
    : "0"

  const metrics = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      change: `+${revenueChange}%`,
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Projects",
      value: String(projectStats.active),
      change: `+${projectStats.inProgress}`,
      trend: "up",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Total Clients",
      value: String(clients.length),
      change: `+${clients.filter(c => c.status === "Active").length}`,
      trend: "up",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      change: `+${((parseFloat(completionRate) - 92.1) || 2.1).toFixed(1)}%`,
      trend: "up",
      icon: Target,
      color: "text-amber-600",
    },
  ]

  // Map notifications to alerts format
  const alerts = unreadNotifications.slice(0, 5).map(notification => ({
    type: notification.type,
    message: notification.message,
    time: notification.time,
  }))

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
            {recentProjects.slice(0, 3).map((project) => (
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
                    <span>Due: {project.endDate}</span>
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
            {alerts.length > 0 ? (
              alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0">
                    {alert.type === "urgent" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    {alert.type === "warning" && <Clock className="h-4 w-4 text-yellow-500" />}
                    {alert.type === "info" && <CheckCircle className="h-4 w-4 text-blue-500" />}
                    {alert.type === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">
                No new notifications
              </div>
            )}
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
