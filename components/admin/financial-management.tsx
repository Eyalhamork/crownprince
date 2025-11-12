"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  FileText,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Download,
} from "lucide-react"

export function FinancialManagement() {
  const financialMetrics = [
    {
      title: "Total Revenue",
      value: "$2,847,500",
      change: "+12.5%",
      trend: "up",
      period: "This Year",
    },
    {
      title: "Outstanding Invoices",
      value: "$156,750",
      change: "-8.2%",
      trend: "down",
      period: "Current",
    },
    {
      title: "Monthly Expenses",
      value: "$89,200",
      change: "+3.1%",
      trend: "up",
      period: "January 2024",
    },
    {
      title: "Profit Margin",
      value: "24.8%",
      change: "+1.2%",
      trend: "up",
      period: "This Quarter",
    },
  ]

  const invoices = [
    {
      id: "INV-001",
      client: "Metro Corporation",
      project: "Downtown Office Complex",
      amount: "$45,000",
      dueDate: "2024-02-15",
      status: "Paid",
      paidDate: "2024-02-10",
    },
    {
      id: "INV-002",
      client: "Johnson Family",
      project: "Residential Wiring",
      amount: "$18,750",
      dueDate: "2024-02-20",
      status: "Pending",
      paidDate: null,
    },
    {
      id: "INV-003",
      client: "Supply Chain Inc",
      project: "Warehouse Setup",
      amount: "$67,500",
      dueDate: "2024-01-30",
      status: "Overdue",
      paidDate: null,
    },
  ]

  const expenses = [
    {
      category: "Payroll",
      amount: "$45,600",
      budget: "$50,000",
      percentage: 91.2,
      status: "On Track",
    },
    {
      category: "Materials",
      amount: "$23,400",
      budget: "$25,000",
      percentage: 93.6,
      status: "On Track",
    },
    {
      category: "Equipment",
      amount: "$12,800",
      budget: "$15,000",
      percentage: 85.3,
      status: "Under Budget",
    },
    {
      category: "Operations",
      amount: "$7,400",
      budget: "$8,000",
      percentage: 92.5,
      status: "On Track",
    },
  ]

  const revenueByService = [
    { service: "Construction", revenue: "$1,425,000", percentage: 50.1 },
    { service: "Electrical", revenue: "$854,250", percentage: 30.0 },
    { service: "Logistics", revenue: "$568,250", percentage: 19.9 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getExpenseStatusColor = (status: string) => {
    switch (status) {
      case "On Track":
        return "text-blue-600"
      case "Under Budget":
        return "text-green-600"
      case "Over Budget":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Financial Management Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Management</h2>
          <p className="text-gray-600">Track revenue, expenses, and financial performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-yellow-600 hover:bg-yellow-700">Generate Invoice</Button>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialMetrics.map((metric, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-600" />
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
                <span>{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financial Tabs */}
      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-md">
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Invoices Tab */}
        <TabsContent value="invoices">
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{invoice.id}</h3>
                        <p className="text-gray-600">{invoice.client}</p>
                        <p className="text-sm text-gray-500">{invoice.project}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Due: {invoice.dueDate}</span>
                        </div>
                        {invoice.paidDate && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Paid: {invoice.paidDate}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="text-xl font-bold text-gray-900">{invoice.amount}</div>
                      <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      <FileText className="h-3 w-3 mr-1" />
                      View Invoice
                    </Button>
                    {invoice.status === "Pending" && (
                      <Button size="sm" variant="outline">
                        Send Reminder
                      </Button>
                    )}
                    {invoice.status === "Overdue" && (
                      <Button size="sm" variant="destructive">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Follow Up
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Expenses Tab */}
        <TabsContent value="expenses">
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{expense.category}</h3>
                      <p className={`text-sm ${getExpenseStatusColor(expense.status)}`}>{expense.status}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{expense.amount}</div>
                      <div className="text-sm text-gray-600">of {expense.budget}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Budget Usage</span>
                      <span>{expense.percentage.toFixed(1)}%</span>
                    </div>
                    <Progress value={expense.percentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Revenue Tab */}
        <TabsContent value="revenue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Revenue by Service</CardTitle>
                <CardDescription>Breakdown of revenue by service type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {revenueByService.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{item.service}</span>
                      <span className="font-semibold">{item.revenue}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{item.percentage}% of total</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>Revenue and expense trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-green-900">Revenue Growth</p>
                      <p className="text-sm text-green-700">Compared to last month</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-900">+12.5%</div>
                      <TrendingUp className="h-4 w-4 text-green-600 ml-auto" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-900">Expense Control</p>
                      <p className="text-sm text-blue-700">Under budget this month</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">-3.2%</div>
                      <TrendingDown className="h-4 w-4 text-blue-600 ml-auto" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-yellow-600" />
                  <span>Profit & Loss</span>
                </CardTitle>
                <CardDescription>Monthly P&L statement</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Generate Report</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-yellow-600" />
                  <span>Cash Flow</span>
                </CardTitle>
                <CardDescription>Cash flow analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Generate Report</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                  <span>Revenue Analysis</span>
                </CardTitle>
                <CardDescription>Detailed revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Generate Report</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
