"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { CRMSystem } from "@/components/admin/crm-system"
import { ProjectManagement } from "@/components/admin/project-management"
import { EmployeeManagement } from "@/components/admin/employee-management"
import { FinancialManagement } from "@/components/admin/financial-management"
import { BusinessAnalytics } from "@/components/admin/business-analytics"
import { TaskWorkflow } from "@/components/admin/task-workflow"
import { Crown, Users, Building2, UserCheck, DollarSign, BarChart3, CheckSquare, Bell, Settings } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Crown className="h-8 w-8 text-yellow-200" />
                  <div>
                    <h1 className="text-2xl font-bold">Crown Prince Admin</h1>
                    <p className="text-yellow-200 text-sm">Business Management System</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-yellow-700">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                  <Badge variant="destructive" className="ml-2">
                    3
                  </Badge>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-yellow-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="container mx-auto px-6 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-7 bg-white shadow-md">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="crm" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">CRM</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="employees" className="flex items-center space-x-2">
                <UserCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Staff</span>
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">Finance</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="tasks" className="flex items-center space-x-2">
                <CheckSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Tasks</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <AdminDashboard />
            </TabsContent>

            <TabsContent value="crm">
              <CRMSystem />
            </TabsContent>

            <TabsContent value="projects">
              <ProjectManagement />
            </TabsContent>

            <TabsContent value="employees">
              <EmployeeManagement />
            </TabsContent>

            <TabsContent value="financial">
              <FinancialManagement />
            </TabsContent>

            <TabsContent value="analytics">
              <BusinessAnalytics />
            </TabsContent>

            <TabsContent value="tasks">
              <TaskWorkflow />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
