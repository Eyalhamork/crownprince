"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { Database } from "@/lib/supabase"

type Tables = Database["public"]["Tables"]
type Project = Tables["projects"]["Row"]
type Task = Tables["tasks"]["Row"]
type Quote = Tables["quotes"]["Row"]

export function useRealtimeProjects(userRole?: string, userId?: string) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial fetch
    const fetchProjects = async () => {
      let query = supabase.from("projects").select("*")

      // Filter based on user role
      if (userRole === "client" && userId) {
        query = query.eq("client_id", userId)
      } else if (userRole === "manager" && userId) {
        query = query.eq("manager_id", userId)
      }

      const { data, error } = await query.order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching projects:", error)
      } else {
        setProjects(data || [])
      }
      setLoading(false)
    }

    fetchProjects()

    // Set up real-time subscription
    const channel = supabase
      .channel("projects-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "projects",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setProjects((prev) => [payload.new as Project, ...prev])
          } else if (payload.eventType === "UPDATE") {
            setProjects((prev) =>
              prev.map((project) => (project.id === payload.new.id ? (payload.new as Project) : project)),
            )
          } else if (payload.eventType === "DELETE") {
            setProjects((prev) => prev.filter((project) => project.id !== payload.old.id))
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userRole, userId])

  return { projects, loading }
}

export function useRealtimeTasks(projectId?: string, userId?: string) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial fetch
    const fetchTasks = async () => {
      let query = supabase.from("tasks").select("*")

      if (projectId) {
        query = query.eq("project_id", projectId)
      } else if (userId) {
        query = query.eq("assigned_to", userId)
      }

      const { data, error } = await query.order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching tasks:", error)
      } else {
        setTasks(data || [])
      }
      setLoading(false)
    }

    fetchTasks()

    // Set up real-time subscription
    const channel = supabase
      .channel("tasks-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tasks",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setTasks((prev) => [payload.new as Task, ...prev])
          } else if (payload.eventType === "UPDATE") {
            setTasks((prev) => prev.map((task) => (task.id === payload.new.id ? (payload.new as Task) : task)))
          } else if (payload.eventType === "DELETE") {
            setTasks((prev) => prev.filter((task) => task.id !== payload.old.id))
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [projectId, userId])

  return { tasks, loading }
}

export function useRealtimeQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial fetch
    const fetchQuotes = async () => {
      const { data, error } = await supabase.from("quotes").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching quotes:", error)
      } else {
        setQuotes(data || [])
      }
      setLoading(false)
    }

    fetchQuotes()

    // Set up real-time subscription
    const channel = supabase
      .channel("quotes-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "quotes",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setQuotes((prev) => [payload.new as Quote, ...prev])
          } else if (payload.eventType === "UPDATE") {
            setQuotes((prev) => prev.map((quote) => (quote.id === payload.new.id ? (payload.new as Quote) : quote)))
          } else if (payload.eventType === "DELETE") {
            setQuotes((prev) => prev.filter((quote) => quote.id !== payload.old.id))
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { quotes, loading }
}
