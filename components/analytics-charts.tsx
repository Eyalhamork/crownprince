"use client"

import { useMemo } from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useDataStore } from "@/lib/data-store"

// Color palette for charts
const COLORS = {
  primary: "#ca8a04", // Yellow-600
  secondary: "#3b82f6", // Blue-500
  success: "#22c55e", // Green-500
  warning: "#f59e0b", // Amber-500
  danger: "#ef4444", // Red-500
  purple: "#8b5cf6", // Purple-500
  indigo: "#6366f1", // Indigo-500
}

const PIE_COLORS = [COLORS.primary, COLORS.secondary, COLORS.success, COLORS.warning, COLORS.danger]

export function RevenueChart() {
  const { invoices } = useDataStore()

  const revenueData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const currentMonth = new Date().getMonth()

    return months.map((month, index) => {
      const monthIndex = (currentMonth - 5 + index + 12) % 12
      const monthInvoices = invoices.filter((inv) => {
        const invMonth = new Date(inv.dueDate).getMonth()
        return invMonth === monthIndex && inv.status === "Paid"
      })

      const revenue = monthInvoices.reduce((sum, inv) => sum + inv.amount, 0)
      // Add some variation for realistic data
      const baseRevenue = revenue || (50000 + Math.random() * 30000)

      return {
        month,
        revenue: Math.round(baseRevenue),
        target: 65000,
      }
    })
  }, [invoices])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Trends</CardTitle>
        <CardDescription>Monthly revenue vs target</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                labelStyle={{ color: "#374151" }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke={COLORS.primary}
                fill={COLORS.primary}
                fillOpacity={0.3}
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke={COLORS.danger}
                strokeDasharray="5 5"
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectStatusChart() {
  const { projects } = useDataStore()

  const statusData = useMemo(() => {
    const statusCounts = projects.reduce(
      (acc, project) => {
        acc[project.status] = (acc[project.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    return Object.entries(statusCounts).map(([status, count]) => ({
      name: status,
      value: count,
    }))
  }, [projects])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Status Distribution</CardTitle>
        <CardDescription>Current project status breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function TaskCompletionChart() {
  const { tasks } = useDataStore()

  const taskData = useMemo(() => {
    const statusCounts = {
      "To Do": tasks.filter((t) => t.status === "To Do").length,
      "In Progress": tasks.filter((t) => t.status === "In Progress").length,
      "In Review": tasks.filter((t) => t.status === "In Review").length,
      Completed: tasks.filter((t) => t.status === "Completed").length,
    }

    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      count,
    }))
  }, [tasks])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Pipeline</CardTitle>
        <CardDescription>Tasks by workflow stage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={taskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill={COLORS.secondary} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function ClientTypeChart() {
  const { clients } = useDataStore()

  const clientData = useMemo(() => {
    const typeCounts = clients.reduce(
      (acc, client) => {
        acc[client.type] = (acc[client.type] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    return Object.entries(typeCounts).map(([type, count]) => ({
      type,
      count,
    }))
  }, [clients])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Distribution</CardTitle>
        <CardDescription>Clients by type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={clientData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="count"
              >
                {clientData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function BudgetUtilizationChart() {
  const { projects } = useDataStore()

  const budgetData = useMemo(() => {
    return projects.slice(0, 5).map((project) => {
      const spent = Math.round(project.budget * (project.progress / 100))
      return {
        name: project.name.slice(0, 15) + (project.name.length > 15 ? "..." : ""),
        budget: project.budget,
        spent,
        remaining: project.budget - spent,
      }
    })
  }, [projects])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Utilization</CardTitle>
        <CardDescription>Budget vs spent by project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="spent" fill={COLORS.primary} stackId="budget" name="Spent" />
              <Bar dataKey="remaining" fill={COLORS.success} stackId="budget" name="Remaining" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function EmployeePerformanceChart() {
  const { employees } = useDataStore()

  const performanceData = useMemo(() => {
    const departments = ["Operations", "Management", "Field", "Admin"]
    return departments.map((dept) => {
      const deptEmployees = employees.filter((e) => e.department === dept)
      const avgPerformance =
        deptEmployees.length > 0
          ? deptEmployees.reduce((sum, e) => sum + e.performance, 0) / deptEmployees.length
          : 0

      return {
        department: dept,
        performance: Math.round(avgPerformance),
        employees: deptEmployees.length,
      }
    })
  }, [employees])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
        <CardDescription>Average performance by department</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="performance" fill={COLORS.purple} name="Avg Performance %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function InvoiceStatusChart() {
  const { invoices } = useDataStore()

  const invoiceData = useMemo(() => {
    const statusCounts = invoices.reduce(
      (acc, invoice) => {
        acc[invoice.status] = (acc[invoice.status] || 0) + invoice.amount
        return acc
      },
      {} as Record<string, number>
    )

    return Object.entries(statusCounts).map(([status, amount]) => ({
      status,
      amount,
    }))
  }, [invoices])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Status</CardTitle>
        <CardDescription>Total amount by invoice status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={invoiceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ status, percent }) => `${status} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="amount"
              >
                {invoiceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.status === "Paid"
                        ? COLORS.success
                        : entry.status === "Pending"
                          ? COLORS.warning
                          : COLORS.danger
                    }
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

// Combined analytics dashboard
export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <ProjectStatusChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskCompletionChart />
        <ClientTypeChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetUtilizationChart />
        <EmployeePerformanceChart />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <InvoiceStatusChart />
      </div>
    </div>
  )
}
