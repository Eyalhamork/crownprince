"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { ManagerDashboard } from "@/components/manager/manager-dashboard"

export default function ManagerPage() {
  return (
    <ProtectedRoute requiredRole="manager">
      <ManagerDashboard />
    </ProtectedRoute>
  )
}
