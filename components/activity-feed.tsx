"use client"

import { useState } from "react"
import {
  Activity as ActivityIcon,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  User,
  Users,
  Filter,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useActivities } from "@/hooks/use-activities"
import { type Activity } from "@/lib/data-store"

interface ActivityFeedProps {
  limit?: number
  showFilters?: boolean
  showStats?: boolean
  compact?: boolean
  title?: string
  description?: string
}

export function ActivityFeed({
  limit = 20,
  showFilters = false,
  showStats = false,
  compact = false,
  title = "Activity Feed",
  description = "Recent activity across your organization",
}: ActivityFeedProps) {
  const [typeFilter, setTypeFilter] = useState<Activity["type"] | "all">("all")
  const { activities, stats, addActivity, isLoading } = useActivities({
    type: typeFilter,
    limit,
  })

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "project":
        return <FileText className="h-4 w-4 text-blue-600" />
      case "task":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "client":
        return <User className="h-4 w-4 text-purple-600" />
      case "invoice":
        return <DollarSign className="h-4 w-4 text-yellow-600" />
      case "employee":
        return <Users className="h-4 w-4 text-indigo-600" />
      case "system":
        return <ActivityIcon className="h-4 w-4 text-gray-600" />
      default:
        return <ActivityIcon className="h-4 w-4 text-gray-600" />
    }
  }

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "project":
        return "bg-blue-100 border-blue-200"
      case "task":
        return "bg-green-100 border-green-200"
      case "client":
        return "bg-purple-100 border-purple-200"
      case "invoice":
        return "bg-yellow-100 border-yellow-200"
      case "employee":
        return "bg-indigo-100 border-indigo-200"
      case "system":
        return "bg-gray-100 border-gray-200"
      default:
        return "bg-gray-100 border-gray-200"
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) {
      return "Just now"
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60)
      return `${hours}h ago`
    } else {
      const days = Math.floor(diffInMinutes / 1440)
      if (days === 1) {
        return "Yesterday"
      } else if (days < 7) {
        return `${days}d ago`
      } else {
        return date.toLocaleDateString()
      }
    }
  }

  const simulateNewActivity = () => {
    const types: Activity["type"][] = ["project", "task", "client", "invoice", "employee"]
    const randomType = types[Math.floor(Math.random() * types.length)]
    const descriptions = {
      project: "Project status updated to In Progress",
      task: "Task marked as completed",
      client: "New client added to CRM",
      invoice: "Invoice payment received",
      employee: "Employee performance review scheduled",
    }
    const users = ["Sarah Chen", "Mike Rodriguez", "David Thompson", "Lisa Park", "Carlos Martinez"]

    addActivity({
      type: randomType,
      description: descriptions[randomType],
      user: users[Math.floor(Math.random() * users.length)],
    })
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-32">
            <RefreshCw className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {showFilters && (
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={typeFilter} onValueChange={(value: any) => setTypeFilter(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="project">Projects</SelectItem>
                  <SelectItem value="task">Tasks</SelectItem>
                  <SelectItem value="client">Clients</SelectItem>
                  <SelectItem value="invoice">Invoices</SelectItem>
                  <SelectItem value="employee">Employees</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" onClick={simulateNewActivity}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Simulate
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {showStats && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-semibold">{stats.total}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Today</p>
              <p className="text-xl font-semibold">{stats.today}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">This Week</p>
              <p className="text-xl font-semibold">{stats.thisWeek}</p>
            </div>
          </div>
        )}

        <div className={`space-y-${compact ? "2" : "4"}`}>
          {activities.length === 0 ? (
            <div className="text-center py-8">
              <ActivityIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No recent activity</p>
              <p className="text-sm text-gray-500">Activities will appear here as they occur</p>
            </div>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className={`flex items-start space-x-3 ${compact ? "py-2" : "p-3 border rounded-lg hover:bg-gray-50"}`}
              >
                <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`${compact ? "text-sm" : ""} text-gray-900`}>{activity.description}</p>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="text-xs">
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-600">{activity.user}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimestamp(activity.timestamp)}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {activities.length > 0 && activities.length >= limit && (
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm">
              View All Activity
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
