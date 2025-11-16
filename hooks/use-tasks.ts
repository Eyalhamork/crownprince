"use client"

import { useMemo } from "react"
import { useDataStore, type Task } from "@/lib/data-store"

export interface TaskFilters {
  status?: Task["status"] | "all"
  priority?: Task["priority"] | "all"
  assigneeId?: string
  projectId?: string
  search?: string
  tags?: string[]
}

export interface TaskStats {
  total: number
  pending: number
  inProgress: number
  scheduled: number
  completed: number
  cancelled: number
  overdue: number
  highPriority: number
  totalEstimatedHours: number
  totalActualHours: number
  completionRate: number
  averageCompletionTime: number
}

export function useTasks(filters: TaskFilters = {}) {
  const { tasks, addTask, updateTask, deleteTask, isLoading } = useDataStore()

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Filter by status
      if (filters.status && filters.status !== "all" && task.status !== filters.status) {
        return false
      }

      // Filter by priority
      if (filters.priority && filters.priority !== "all" && task.priority !== filters.priority) {
        return false
      }

      // Filter by assignee
      if (filters.assigneeId && task.assigneeId !== filters.assigneeId) {
        return false
      }

      // Filter by project
      if (filters.projectId && task.projectId !== filters.projectId) {
        return false
      }

      // Filter by tags
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => task.tags.includes(tag))
        if (!hasMatchingTag) {
          return false
        }
      }

      // Filter by search term
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesTitle = task.title.toLowerCase().includes(searchLower)
        const matchesDescription = task.description.toLowerCase().includes(searchLower)
        const matchesAssignee = task.assignee.toLowerCase().includes(searchLower)
        const matchesId = task.id.toLowerCase().includes(searchLower)
        const matchesTags = task.tags.some(tag => tag.toLowerCase().includes(searchLower))

        if (!matchesTitle && !matchesDescription && !matchesAssignee && !matchesId && !matchesTags) {
          return false
        }
      }

      return true
    })
  }, [tasks, filters])

  const stats = useMemo((): TaskStats => {
    const today = new Date()

    const total = tasks.length
    const pending = tasks.filter(t => t.status === "Pending").length
    const inProgress = tasks.filter(t => t.status === "In Progress").length
    const scheduled = tasks.filter(t => t.status === "Scheduled").length
    const completed = tasks.filter(t => t.status === "Completed").length
    const cancelled = tasks.filter(t => t.status === "Cancelled").length

    const overdue = tasks.filter(t => {
      if (t.status === "Completed" || t.status === "Cancelled") return false
      const dueDate = new Date(t.dueDate)
      return dueDate < today
    }).length

    const highPriority = tasks.filter(t => t.priority === "High").length

    const totalEstimatedHours = tasks.reduce((sum, t) => sum + t.estimatedHours, 0)
    const totalActualHours = tasks.reduce((sum, t) => sum + t.actualHours, 0)

    const completionRate = total > 0 ? (completed / total) * 100 : 0

    const completedTasks = tasks.filter(t => t.status === "Completed")
    const averageCompletionTime = completedTasks.length > 0
      ? completedTasks.reduce((sum, t) => sum + t.actualHours, 0) / completedTasks.length
      : 0

    return {
      total,
      pending,
      inProgress,
      scheduled,
      completed,
      cancelled,
      overdue,
      highPriority,
      totalEstimatedHours,
      totalActualHours,
      completionRate,
      averageCompletionTime,
    }
  }, [tasks])

  const tasksByProject = useMemo(() => {
    const grouped: Record<string, Task[]> = {}
    tasks.forEach(task => {
      if (!grouped[task.projectId]) {
        grouped[task.projectId] = []
      }
      grouped[task.projectId].push(task)
    })
    return grouped
  }, [tasks])

  const tasksByAssignee = useMemo(() => {
    const grouped: Record<string, Task[]> = {}
    tasks.forEach(task => {
      if (!grouped[task.assigneeId]) {
        grouped[task.assigneeId] = []
      }
      grouped[task.assigneeId].push(task)
    })
    return grouped
  }, [tasks])

  const upcomingTasks = useMemo(() => {
    const today = new Date()
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

    return tasks
      .filter(task => {
        if (task.status === "Completed" || task.status === "Cancelled") return false
        const dueDate = new Date(task.dueDate)
        return dueDate >= today && dueDate <= nextWeek
      })
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
  }, [tasks])

  const overdueTasks = useMemo(() => {
    const today = new Date()
    return tasks
      .filter(task => {
        if (task.status === "Completed" || task.status === "Cancelled") return false
        const dueDate = new Date(task.dueDate)
        return dueDate < today
      })
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
  }, [tasks])

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    stats,
    tasksByProject,
    tasksByAssignee,
    upcomingTasks,
    overdueTasks,
    addTask,
    updateTask,
    deleteTask,
    isLoading,
  }
}
