"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export function BusinessAnalytics() {
  const kpis = [
    {
      title: "Customer Satisfaction",
      value: "4.8/5.0",
      change: "+0.2",
      trend: "up",
      target: "4.5",
      status: "Exceeding",
    },
    {
      title: "Project Success Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      target: "90%",
      status: "Exceeding",
    },
    {
      title: "Employee Productivity",
      value: "87.5%",
      change: "-1.3%",
      trend: "down",
      target: "85%",
      status: "On Target",
    },
    {
      title: "Revenue Growth",
      value: "12.5%",
      change: "+3.2%",
      trend: "up",
      target: "10%",
      status: "Exceeding",
    },
  ]

  const performanceMetrics = [
    {
      department: "Construction",
      projects: 12,
      completed: 11,
      onTime: 9,
      revenue: "$1,425,000",
      efficiency: 91.7,
    },
    {
      department: "Electrical",
      projects: 8,
      completed: 7,
      onTime: 6,
      revenue: "$854,250",
      efficiency: 87.5,
    },
    {
      department: "Logistics",
      projects: 4,
      completed: 4,
      onTime: 4,
      revenue: "$568,250",
      efficiency: 100.0,
    },
  ]

  const clientAnalytics = [
    {
      segment: "Corporate",
      clients: 45,
      revenue: "$1,850,000",
      avgProject: "$41,111",
      retention: 95.6,
    },
    {
      segment: "Residential",
      clients: 89,
      revenue: "$667,500",
      avgProject: "$7,500",
      retention: 88.8,
    },
    {
      segment: "Industrial",
      clients: 22,
      revenue: "$330,000",
      avgProject: "$15,000",
      retention: 90.9,
    },
  ]

  const trends = [
    {
      metric: "Monthly Revenue",
      current: "$237,292",
      previous: "$211,458",
      change: "+12.2%",
      trend: "up",
    },
    {
      metric: "New Clients",
      current: "8",
      previous: "6",
      change: "+33.3%",
      trend: "up",
    },
    {
      metric: "Project Completion Time",
      current: "18.5 days",
      previous: "21.2 days",
      change: "-12.7%",
      trend: "up",
    },
    {
      metric: "Customer Complaints",
      current: "2",
      previous: "5",
      change: "-60.0%",
      trend: "up",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Exceeding":
        return "bg-green-100 text-green-800"
      case "On Target":
        return "bg-blue-100 text-blue-800"
      case "Below Target":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Business Analytics Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Business Analytics</h2>
          <p className="text-gray-600">Performance insights and business intelligence</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Analytics
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
              <Target className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-1 text-xs">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={kpi.trend === "up" ? "text-green-600" : "text-red-600"}>{kpi.change}</span>
                </div>
                <Badge className={getStatusColor(kpi.status)} variant="secondary">
                  {kpi.status}
                </Badge>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: {kpi.target}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span>Department Performance</span>
            </CardTitle>
            <CardDescription>Efficiency and output by department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceMetrics.map((dept, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{dept.department}</h4>
                  <Badge variant="outline">{dept.efficiency}% Efficiency</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Projects</p>
                    <p className="font-semibold">{dept.projects}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Completed</p>
                    <p className="font-semibold">{dept.completed}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">On Time</p>
                    <p className="font-semibold">{dept.onTime}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="font-semibold">{dept.revenue}</span>
                </div>
                <Progress value={dept.efficiency} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Client Analytics */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-yellow-600" />
              <span>Client Analytics</span>
            </CardTitle>
            <CardDescription>Client segmentation and performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {clientAnalytics.map((segment, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
                  <Badge variant="outline">{segment.retention}% Retention</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Clients</p>
                    <p className="font-semibold">{segment.clients}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenue</p>
                    <p className="font-semibold">{segment.revenue}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Avg Project Value</span>
                  <span className="font-semibold">{segment.avgProject}</span>
                </div>
                <Progress value={segment.retention} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Trends Analysis */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-yellow-600" />
            <span>Performance Trends</span>
          </CardTitle>
          <CardDescription>Month-over-month performance comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trends.map((trend, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{trend.metric}</h4>
                  {trend.trend === "up" ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-gray-900">{trend.current}</div>
                  <div className="flex items-center space-x-1 text-sm">
                    {trend.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={trend.trend === "up" ? "text-green-600" : "text-red-600"}>{trend.change}</span>
                  </div>
                  <div className="text-xs text-gray-500">vs {trend.previous}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Business Insights</CardTitle>
          <CardDescription>AI-powered recommendations and insights</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-900">Strong Performance</h4>
              <p className="text-sm text-green-700">
                Logistics department is performing exceptionally well with 100% efficiency and on-time delivery.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900">Opportunity</h4>
              <p className="text-sm text-yellow-700">
                Consider expanding electrical services marketing to residential segment for growth potential.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">Growth Trend</h4>
              <p className="text-sm text-blue-700">
                Corporate client segment shows highest revenue per project and retention rates.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
