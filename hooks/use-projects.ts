"use client";

import { useMemo } from "react";
import { useDataStore } from "@/components/data/data-store-context";
import { useAuth } from "@/components/auth/auth-context";
import type { Project } from "@/lib/mock-data";

interface ProjectStats {
  total: number;
  byStatus: {
    planning: number;
    in_progress: number;
    completed: number;
    on_hold: number;
  };
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
  byService: {
    electrical: number;
    construction: number;
    logistics: number;
  };
  totalBudget: number;
  totalSpent: number;
  averageProgress: number;
}

export function useProjects() {
  const { projects, addProject, updateProject, deleteProject, getProject, getTasksByProject } = useDataStore();
  const { user } = useAuth();

  // Filter projects based on user role
  const filteredProjects = useMemo(() => {
    if (!user) return [];

    switch (user.role) {
      case "admin":
      case "manager":
        return projects;
      case "staff":
        // Staff sees projects they have tasks assigned to
        return projects;
      case "client":
        // Clients see only their own projects
        return projects.filter((p) => p.clientId === user.id);
      default:
        return [];
    }
  }, [projects, user]);

  // Calculate statistics
  const stats = useMemo((): ProjectStats => {
    const projectList = filteredProjects;

    return {
      total: projectList.length,
      byStatus: {
        planning: projectList.filter((p) => p.status === "planning").length,
        in_progress: projectList.filter((p) => p.status === "in_progress").length,
        completed: projectList.filter((p) => p.status === "completed").length,
        on_hold: projectList.filter((p) => p.status === "on_hold").length,
      },
      byPriority: {
        low: projectList.filter((p) => p.priority === "low").length,
        medium: projectList.filter((p) => p.priority === "medium").length,
        high: projectList.filter((p) => p.priority === "high").length,
        urgent: projectList.filter((p) => p.priority === "urgent").length,
      },
      byService: {
        electrical: projectList.filter((p) => p.serviceType === "electrical").length,
        construction: projectList.filter((p) => p.serviceType === "construction").length,
        logistics: projectList.filter((p) => p.serviceType === "logistics").length,
      },
      totalBudget: projectList.reduce((sum, p) => sum + p.budget, 0),
      totalSpent: projectList.reduce((sum, p) => sum + p.spent, 0),
      averageProgress: projectList.length > 0
        ? Math.round(projectList.reduce((sum, p) => sum + p.progress, 0) / projectList.length)
        : 0,
    };
  }, [filteredProjects]);

  // Get active projects (in progress or planning)
  const activeProjects = useMemo(
    () => filteredProjects.filter((p) => p.status === "in_progress" || p.status === "planning"),
    [filteredProjects]
  );

  // Get overdue projects (past end date but not completed)
  const overdueProjects = useMemo(
    () =>
      filteredProjects.filter((p) => {
        if (!p.endDate || p.status === "completed") return false;
        return new Date(p.endDate) < new Date();
      }),
    [filteredProjects]
  );

  // Get projects with high priority
  const urgentProjects = useMemo(
    () => filteredProjects.filter((p) => p.priority === "urgent" || p.priority === "high"),
    [filteredProjects]
  );

  // Search projects
  const searchProjects = (query: string): Project[] => {
    const lowerQuery = query.toLowerCase();
    return filteredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.clientName.toLowerCase().includes(lowerQuery) ||
        p.location.toLowerCase().includes(lowerQuery) ||
        p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Filter projects by various criteria
  const filterProjects = (filters: {
    status?: Project["status"];
    priority?: Project["priority"];
    serviceType?: Project["serviceType"];
    dateRange?: { start: Date; end: Date };
  }): Project[] => {
    return filteredProjects.filter((p) => {
      if (filters.status && p.status !== filters.status) return false;
      if (filters.priority && p.priority !== filters.priority) return false;
      if (filters.serviceType && p.serviceType !== filters.serviceType) return false;
      if (filters.dateRange) {
        const projectDate = new Date(p.startDate);
        if (projectDate < filters.dateRange.start || projectDate > filters.dateRange.end) return false;
      }
      return true;
    });
  };

  return {
    projects: filteredProjects,
    stats,
    activeProjects,
    overdueProjects,
    urgentProjects,
    getProject,
    addProject,
    updateProject,
    deleteProject,
    searchProjects,
    filterProjects,
    getTasksByProject,
  };
}
