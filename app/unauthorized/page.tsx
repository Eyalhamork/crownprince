"use client"

import Link from "next/link"
import { useAuth } from "@/components/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, Home, LogOut } from "lucide-react"
import Image from "next/image"

export default function UnauthorizedPage() {
  const { user, logout } = useAuth()

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "manager":
        return "bg-blue-100 text-blue-800"
      case "staff":
        return "bg-green-100 text-green-800"
      case "client":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAccessibleRoutes = (role: string) => {
    switch (role) {
      case "admin":
        return [
          { name: "Admin Dashboard", path: "/admin", description: "Full system administration" },
          { name: "Client Portal", path: "/portal", description: "Client management interface" },
        ]
      case "manager":
        return [
          { name: "Manager Dashboard", path: "/manager", description: "Team and project management" },
          { name: "Client Portal", path: "/portal", description: "Client interface access" },
        ]
      case "staff":
        return [{ name: "Staff Dashboard", path: "/staff", description: "Task and schedule management" }]
      case "client":
        return [{ name: "Client Portal", path: "/portal", description: "Your project dashboard" }]
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Image src="/crown-logo.png" alt="Crown Prince Logo" width={64} height={64} className="object-contain" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
            <p className="text-gray-600">You don't have permission to access this resource</p>
          </div>
        </div>

        {/* Main Card */}
        <Card className="bg-white shadow-xl border-red-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-gray-900">Insufficient Permissions</CardTitle>
            <CardDescription className="text-lg">
              Your current account doesn't have the required permissions to access this page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current User Info */}
            {user && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-gray-900">Current Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <Badge className={getRoleColor(user.role)}>{user.role.toUpperCase()}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <Badge variant={user.isActive ? "default" : "destructive"}>
                      {user.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {/* Accessible Routes */}
            {user && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Pages You Can Access</h3>
                <div className="grid gap-3">
                  {getAccessibleRoutes(user.role).map((route) => (
                    <Link key={route.path} href={route.path}>
                      <div className="p-4 border border-gray-200 rounded-lg hover:border-yellow-300 hover:bg-yellow-50 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{route.name}</h4>
                            <p className="text-sm text-gray-600">{route.description}</p>
                          </div>
                          <ArrowLeft className="h-4 w-4 text-gray-400 rotate-180" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/contact">
                  <Shield className="h-4 w-4 mr-2" />
                  Request Access
                </Link>
              </Button>
              <Button onClick={logout} variant="outline" className="flex-1 bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Switch Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-gray-600">
          <p>
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 underline">
              contact support
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}
