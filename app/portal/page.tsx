"use client"

import { useState } from "react"
import { Crown, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProjectDashboard } from "@/components/portal/project-dashboard"
import { AccountSettings } from "@/components/portal/account-settings"
import { BillingInvoices } from "@/components/portal/billing-invoices"
import { SupportTickets } from "@/components/portal/support-tickets"
import { DocumentLibrary } from "@/components/portal/document-library"
import { NotificationCenter } from "@/components/portal/notification-center"
import { ProtectedRoute } from "@/components/auth/protected-route"

// Mock user data - in real app this would come from authentication
const mockUser = {
  id: "user-123",
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  company: "Johnson Enterprises",
  phone: "(555) 123-4567",
  memberSince: "2022-03-15",
  accountType: "Premium",
  avatar: "/placeholder.svg?height=100&width=100",
}

export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [user, setUser] = useState(mockUser)

  const handleLogout = () => {
    // In real app, this would handle authentication logout
    console.log("Logging out...")
  }

  return (
    <ProtectedRoute requiredRole="client">
      <div className="min-h-screen bg-slate-50 pt-16">
        {/* Portal Header */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <Crown className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Client Portal</h1>
                  <p className="text-gray-300">Welcome back, {user.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <NotificationCenter />
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-300">{user.company}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-white/10">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 bg-white border-2 border-gray-200">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
                Billing
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
                Support
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black"
              >
                Documents
              </TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
                Account
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <ProjectDashboard user={user} />
            </TabsContent>

            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>Track and manage all your projects with Crown Prince Incorporated</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectDashboard user={user} detailed={true} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing">
              <BillingInvoices user={user} />
            </TabsContent>

            <TabsContent value="support">
              <SupportTickets user={user} />
            </TabsContent>

            <TabsContent value="documents">
              <DocumentLibrary user={user} />
            </TabsContent>

            <TabsContent value="account">
              <AccountSettings user={user} onUserUpdate={setUser} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
