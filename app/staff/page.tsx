"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { StaffDashboard } from "@/components/staff/staff-dashboard"

export default function StaffPage() {
  return (
    <ProtectedRoute requiredRole="staff">
      <StaffDashboard />
    </ProtectedRoute>
  )
}
