"use client"

import { useMemo } from "react"
import { useDataStore, type Project } from "@/lib/data-store"

export interface ProjectFilters {
  status?: Project["status"] | "all"
  priority?: Project["priority"] | "all"
  type?: Project["type"] | "all"
  clientId?: string
  search?: string
}

export interface ProjectStats {
  total: number
  active: number
  completed: number
  onHold: number
  inProgress: number
  planning: number
  review: number
  totalBudget: number
  totalSpent: number
  averageProgress: number
  onSchedule: number
  overdue: number
  highPriority: number
  byType: {
    Construction: number
    Electrical: number
    Logistics: number
  }
}

export function useProjects(filters: ProjectFilters = {}) {
  const { projects, addProject, updateProject, deleteProject, isLoading } = useDataStore()

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filter by status
      if (filters.status && filters.status !== "all" && project.status !== filters.status) {
        return false
      }

      // Filter by priority
      if (filters.priority && filters.priority !== "all" && project.priority !== filters.priority) {
        return false
      }

      // Filter by type
      if (filters.type && filters.type !== "all" && project.type !== filters.type) {
        return false
      }

      // Filter by client
      if (filters.clientId && project.clientId !== filters.clientId) {
        return false
      }

      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesName = project.name.toLowerCase().includes(searchLower)
        const matchesClient = project.client.toLowerCase().includes(searchLower)
        const matchesDescription = project.description.toLowerCase().includes(searchLower)
        const matchesId = project.id.toLowerCase().includes(searchLower)

        if (!matchesName && !matchesClient && !matchesDescription && !matchesId) {
          return false
        }
      }

      return true
    })
  }, [projects, filters])

  const stats = useMemo((): ProjectStats => {
    const today = new Date()

    const total = projects.length
    const active = projects.filter(p => p.status !== "Completed" && p.status !== "On Hold").length
    const completed = projects.filter(p => p.status === "Completed").length
    const onHold = projects.filter(p => p.status === "On Hold").length
    const inProgress = projects.filter(p => p.status === "In Progress").length
    const planning = projects.filter(p => p.status === "Planning").length
    const review = projects.filter(p => p.status === "Review").length

    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0)
    const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0)
    const averageProgress = projects.length > 0
      ? projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
      : 0

    const onSchedule = projects.filter(p => {
      if (p.status === "Completed") return true
      const endDate = new Date(p.endDate)
      return endDate >= today
    }).length

    const overdue = projects.filter(p => {
      if (p.status === "Completed") return false
      const endDate = new Date(p.endDate)
      return endDate < today
    }).length

    const highPriority = projects.filter(p => p.priority === "High").length

    const byType = {
      Construction: projects.filter(p => p.type === "Construction").length,
      Electrical: projects.filter(p => p.type === "Electrical").length,
      Logistics: projects.filter(p => p.type === "Logistics").length,
    }

    return {
      total,
      active,
      completed,
      onHold,
      inProgress,
      planning,
      review,
      totalBudget,
      totalSpent,
      averageProgress,
      onSchedule,
      overdue,
      highPriority,
      byType,
    }
  }, [projects])

  const recentProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5)
  }, [projects])

  const urgentProjects = useMemo(() => {
    const today = new Date()
    return projects.filter(project => {
      if (project.status === "Completed") return false
      const endDate = new Date(project.endDate)
      const daysUntilDue = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      return daysUntilDue <= 7 && daysUntilDue >= 0
    })
  }, [projects])

  return {
    projects: filteredProjects,
    allProjects: projects,
    stats,
    recentProjects,
    urgentProjects,
    addProject,
    updateProject,
    deleteProject,
    isLoading,
  }
}
