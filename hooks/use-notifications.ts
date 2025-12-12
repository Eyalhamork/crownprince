"use client";

import { useMemo } from "react";
import { useDataStore } from "@/components/data/data-store-context";
import { useAuth } from "@/components/auth/auth-context";
import type { Notification } from "@/lib/mock-data";

export function useNotifications() {
  const {
    notifications,
    addNotification,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    getUnreadNotifications,
  } = useDataStore();
  const { user } = useAuth();

  // Get user's notifications
  const userNotifications = useMemo(() => {
    if (!user) return [];
    return notifications
      .filter((n) => n.userId === user.id || n.userId === "all")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [notifications, user]);

  // Unread notifications
  const unreadNotifications = useMemo(
    () => userNotifications.filter((n) => !n.read),
    [userNotifications]
  );

  // Count unread
  const unreadCount = unreadNotifications.length;

  // Get notifications by type
  const getByType = (type: Notification["type"]) =>
    userNotifications.filter((n) => n.type === type);

  // Get notifications by category
  const getByCategory = (category: Notification["category"]) =>
    userNotifications.filter((n) => n.category === category);

  // Mark all as read for current user
  const markAllRead = () => {
    if (user) {
      markAllNotificationsRead(user.id);
    }
  };

  // Add notification helper with common patterns
  const notify = {
    info: (title: string, message: string, actionUrl?: string) =>
      user &&
      addNotification({
        type: "info",
        category: "system",
        title,
        message,
        read: false,
        actionUrl,
        userId: user.id,
      }),
    success: (title: string, message: string, actionUrl?: string) =>
      user &&
      addNotification({
        type: "success",
        category: "system",
        title,
        message,
        read: false,
        actionUrl,
        userId: user.id,
      }),
    warning: (title: string, message: string, actionUrl?: string) =>
      user &&
      addNotification({
        type: "warning",
        category: "system",
        title,
        message,
        read: false,
        actionUrl,
        userId: user.id,
      }),
    error: (title: string, message: string, actionUrl?: string) =>
      user &&
      addNotification({
        type: "error",
        category: "system",
        title,
        message,
        read: false,
        actionUrl,
        userId: user.id,
      }),
    taskDue: (taskTitle: string, daysUntil: number) =>
      user &&
      addNotification({
        type: "warning",
        category: "task",
        title: "Task Due Soon",
        message: `${taskTitle} is due in ${daysUntil} day${daysUntil === 1 ? "" : "s"}`,
        read: false,
        actionUrl: "/admin?tab=tasks",
        userId: user.id,
      }),
    projectUpdate: (projectTitle: string, update: string) =>
      user &&
      addNotification({
        type: "info",
        category: "project",
        title: "Project Update",
        message: `${projectTitle}: ${update}`,
        read: false,
        actionUrl: "/admin?tab=projects",
        userId: user.id,
      }),
    quoteStatus: (quoteRef: string, status: string) =>
      user &&
      addNotification({
        type: status === "approved" ? "success" : status === "rejected" ? "error" : "info",
        category: "quote",
        title: `Quote ${status.charAt(0).toUpperCase() + status.slice(1)}`,
        message: `Quote ${quoteRef} has been ${status}`,
        read: false,
        actionUrl: "/admin?tab=crm",
        userId: user.id,
      }),
  };

  return {
    notifications: userNotifications,
    unreadNotifications,
    unreadCount,
    markNotificationRead,
    markAllRead,
    deleteNotification,
    getByType,
    getByCategory,
    notify,
    addNotification,
  };
}
