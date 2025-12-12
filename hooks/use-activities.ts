"use client"

import { useMemo } from "react"
import { useDataStore, type Activity } from "@/lib/data-store"

export interface ActivityFilters {
  type?: Activity["type"] | "all"
  user?: string
  limit?: number
}

export interface ActivityStats {
  total: number
  today: number
  thisWeek: number
  byType: Record<Activity["type"], number>
}

export function useActivities(filters: ActivityFilters = {}) {
  const { activities, addActivity, isLoading } = useDataStore()

  const filteredActivities = useMemo(() => {
    let filtered = [...activities]

    // Filter by type
    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter(activity => activity.type === filters.type)
    }

    // Filter by user
    if (filters.user) {
      filtered = filtered.filter(activity =>
        activity.user.toLowerCase().includes(filters.user!.toLowerCase())
      )
    }

    // Sort by timestamp (newest first)
    filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    // Apply limit
    if (filters.limit) {
      filtered = filtered.slice(0, filters.limit)
    }

    return filtered
  }, [activities, filters])

  const stats = useMemo((): ActivityStats => {
    const now = new Date()
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const weekStart = new Date(todayStart)
    weekStart.setDate(weekStart.getDate() - 7)

    const today = activities.filter(a => new Date(a.timestamp) >= todayStart).length
    const thisWeek = activities.filter(a => new Date(a.timestamp) >= weekStart).length

    const byType = activities.reduce((acc, activity) => {
      acc[activity.type] = (acc[activity.type] || 0) + 1
      return acc
    }, {} as Record<Activity["type"], number>)

    return {
      total: activities.length,
      today,
      thisWeek,
      byType,
    }
  }, [activities])

  const recentActivities = useMemo(() => {
    return [...activities]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10)
  }, [activities])

  const groupedByDate = useMemo(() => {
    const groups: Record<string, Activity[]> = {}

    filteredActivities.forEach(activity => {
      const date = new Date(activity.timestamp).toLocaleDateString()
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(activity)
    })

    return groups
  }, [filteredActivities])

  return {
    activities: filteredActivities,
    allActivities: activities,
    stats,
    recentActivities,
    groupedByDate,
    addActivity,
    isLoading,
  }
}
