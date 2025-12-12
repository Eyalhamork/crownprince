"use client";

import { useMemo } from "react";
import { useDataStore } from "@/components/data/data-store-context";
import { useAuth } from "@/components/auth/auth-context";
import type { Task } from "@/lib/mock-data";

interface TaskStats {
  total: number;
  byStatus: {
    todo: number;
    in_progress: number;
    completed: number;
    blocked: number;
  };
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
  overdue: number;
  dueSoon: number;
  completedThisWeek: number;
  totalEstimatedHours: number;
  totalActualHours: number;
}

export function useTasks() {
  const { tasks, addTask, updateTask, deleteTask, getTask, getTasksByProject } = useDataStore();
  const { user } = useAuth();

  // Filter tasks based on user role
  const filteredTasks = useMemo(() => {
    if (!user) return [];

    switch (user.role) {
      case "admin":
      case "manager":
        return tasks;
      case "staff":
        // Staff sees tasks assigned to them
        return tasks.filter((t) => t.assignedTo === user.id);
      case "client":
        // Clients see tasks for their projects (read-only)
        return tasks; // Further filtering would need project ownership check
      default:
        return [];
    }
  }, [tasks, user]);

  // Calculate statistics
  const stats = useMemo((): TaskStats => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    return {
      total: filteredTasks.length,
      byStatus: {
        todo: filteredTasks.filter((t) => t.status === "todo").length,
        in_progress: filteredTasks.filter((t) => t.status === "in_progress").length,
        completed: filteredTasks.filter((t) => t.status === "completed").length,
        blocked: filteredTasks.filter((t) => t.status === "blocked").length,
      },
      byPriority: {
        low: filteredTasks.filter((t) => t.priority === "low").length,
        medium: filteredTasks.filter((t) => t.priority === "medium").length,
        high: filteredTasks.filter((t) => t.priority === "high").length,
        urgent: filteredTasks.filter((t) => t.priority === "urgent").length,
      },
      overdue: filteredTasks.filter((t) => {
        if (!t.dueDate || t.status === "completed") return false;
        return new Date(t.dueDate) < now;
      }).length,
      dueSoon: filteredTasks.filter((t) => {
        if (!t.dueDate || t.status === "completed") return false;
        const dueDate = new Date(t.dueDate);
        return dueDate >= now && dueDate <= threeDaysFromNow;
      }).length,
      completedThisWeek: filteredTasks.filter((t) => {
        if (!t.completedAt) return false;
        return new Date(t.completedAt) >= weekAgo;
      }).length,
      totalEstimatedHours: filteredTasks.reduce((sum, t) => sum + t.estimatedHours, 0),
      totalActualHours: filteredTasks.reduce((sum, t) => sum + t.actualHours, 0),
    };
  }, [filteredTasks]);

  // Get tasks due today
  const tasksDueToday = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return filteredTasks.filter((t) => {
      if (!t.dueDate || t.status === "completed") return false;
      const dueDate = new Date(t.dueDate);
      return dueDate >= today && dueDate < tomorrow;
    });
  }, [filteredTasks]);

  // Get overdue tasks
  const overdueTasks = useMemo(() => {
    const now = new Date();
    return filteredTasks.filter((t) => {
      if (!t.dueDate || t.status === "completed") return false;
      return new Date(t.dueDate) < now;
    });
  }, [filteredTasks]);

  // Get blocked tasks
  const blockedTasks = useMemo(
    () => filteredTasks.filter((t) => t.status === "blocked"),
    [filteredTasks]
  );

  // Get urgent tasks
  const urgentTasks = useMemo(
    () => filteredTasks.filter((t) => t.priority === "urgent" && t.status !== "completed"),
    [filteredTasks]
  );

  // Get tasks in progress
  const inProgressTasks = useMemo(
    () => filteredTasks.filter((t) => t.status === "in_progress"),
    [filteredTasks]
  );

  // Search tasks
  const searchTasks = (query: string): Task[] => {
    const lowerQuery = query.toLowerCase();
    return filteredTasks.filter(
      (t) =>
        t.title.toLowerCase().includes(lowerQuery) ||
        t.description.toLowerCase().includes(lowerQuery) ||
        t.projectTitle.toLowerCase().includes(lowerQuery) ||
        t.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Filter tasks
  const filterTasks = (filters: {
    status?: Task["status"];
    priority?: Task["priority"];
    projectId?: string;
    assignedTo?: string;
    dueBefore?: Date;
    dueAfter?: Date;
  }): Task[] => {
    return filteredTasks.filter((t) => {
      if (filters.status && t.status !== filters.status) return false;
      if (filters.priority && t.priority !== filters.priority) return false;
      if (filters.projectId && t.projectId !== filters.projectId) return false;
      if (filters.assignedTo && t.assignedTo !== filters.assignedTo) return false;
      if (filters.dueBefore && t.dueDate && new Date(t.dueDate) > filters.dueBefore) return false;
      if (filters.dueAfter && t.dueDate && new Date(t.dueDate) < filters.dueAfter) return false;
      return true;
    });
  };

  // Quick status update
  const markComplete = (taskId: string) => {
    updateTask(taskId, { status: "completed" });
  };

  const startTask = (taskId: string) => {
    updateTask(taskId, { status: "in_progress" });
  };

  const blockTask = (taskId: string) => {
    updateTask(taskId, { status: "blocked" });
  };

  return {
    tasks: filteredTasks,
    stats,
    tasksDueToday,
    overdueTasks,
    blockedTasks,
    urgentTasks,
    inProgressTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask,
    getTasksByProject,
    searchTasks,
    filterTasks,
    markComplete,
    startTask,
    blockTask,
  };
}
