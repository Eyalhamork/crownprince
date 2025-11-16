"use client"

import { useMemo } from "react"
import { useDataStore, type Notification } from "@/lib/data-store"

export interface NotificationFilters {
  type?: Notification["type"] | "all"
  read?: boolean | "all"
}

export interface NotificationStats {
  total: number
  unread: number
  urgent: number
  warning: number
  info: number
  success: number
}

export function useNotifications(filters: NotificationFilters = {}) {
  const {
    notifications,
    addNotification,
    markNotificationRead,
    clearNotifications,
    isLoading,
  } = useDataStore()

  const filteredNotifications = useMemo(() => {
    return notifications.filter(notification => {
      // Filter by type
      if (filters.type && filters.type !== "all" && notification.type !== filters.type) {
        return false
      }

      // Filter by read status
      if (filters.read !== undefined && filters.read !== "all") {
        if (notification.read !== filters.read) {
          return false
        }
      }

      return true
    })
  }, [notifications, filters])

  const stats = useMemo((): NotificationStats => {
    const total = notifications.length
    const unread = notifications.filter(n => !n.read).length
    const urgent = notifications.filter(n => n.type === "urgent").length
    const warning = notifications.filter(n => n.type === "warning").length
    const info = notifications.filter(n => n.type === "info").length
    const success = notifications.filter(n => n.type === "success").length

    return {
      total,
      unread,
      urgent,
      warning,
      info,
      success,
    }
  }, [notifications])

  const unreadNotifications = useMemo(() => {
    return notifications.filter(n => !n.read)
  }, [notifications])

  const urgentNotifications = useMemo(() => {
    return notifications.filter(n => n.type === "urgent" && !n.read)
  }, [notifications])

  const hasUnread = unreadNotifications.length > 0

  return {
    notifications: filteredNotifications,
    allNotifications: notifications,
    stats,
    unreadNotifications,
    urgentNotifications,
    hasUnread,
    addNotification,
    markNotificationRead,
    clearNotifications,
    isLoading,
  }
}
