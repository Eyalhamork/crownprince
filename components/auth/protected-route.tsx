"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth, type UserRole } from "./auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole | UserRole[]
  requiredPermission?: string
  fallbackPath?: string
}

export function ProtectedRoute({
  children,
  requiredRole,
  requiredPermission,
  fallbackPath = "/unauthorized",
}: ProtectedRouteProps) {
  const { user, isLoading, isAuthenticated, hasRole, hasPermission } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/auth/login")
        return
      }

      // Check role requirements
      if (requiredRole && !hasRole(requiredRole)) {
        router.push(fallbackPath)
        return
      }

      // Check permission requirements
      if (requiredPermission && !hasPermission(requiredPermission)) {
        router.push(fallbackPath)
        return
      }
    }
  }, [isLoading, isAuthenticated, user, requiredRole, requiredPermission, hasRole, hasPermission, router, fallbackPath])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center">
        <Card className="w-full max-w-md bg-white shadow-lg">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="flex justify-center">
              <Crown className="h-12 w-12 text-yellow-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <Loader2 className="h-6 w-6 animate-spin mx-auto text-yellow-600" />
              <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
              <p className="text-gray-600">Verifying your access permissions</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Don't render children if not authenticated or authorized
  if (!isAuthenticated) {
    return null
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return null
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return null
  }

  return <>{children}</>
}
