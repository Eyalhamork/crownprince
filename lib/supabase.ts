import { createClient, SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Only create the client if we have valid credentials
// This allows the app to run without Supabase configured (using local storage instead)
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => Boolean(supabase)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          role: "admin" | "manager" | "staff" | "client"
          phone?: string
          company?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          role?: "admin" | "manager" | "staff" | "client"
          phone?: string
          company?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: "admin" | "manager" | "staff" | "client"
          phone?: string
          company?: string
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          service_type: "electrical" | "construction" | "logistics"
          status: "planning" | "in_progress" | "completed" | "on_hold"
          priority: "low" | "medium" | "high" | "urgent"
          client_id: string
          manager_id?: string
          budget: number
          start_date?: string
          end_date?: string
          progress: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          service_type: "electrical" | "construction" | "logistics"
          status?: "planning" | "in_progress" | "completed" | "on_hold"
          priority?: "low" | "medium" | "high" | "urgent"
          client_id: string
          manager_id?: string
          budget: number
          start_date?: string
          end_date?: string
          progress?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          service_type?: "electrical" | "construction" | "logistics"
          status?: "planning" | "in_progress" | "completed" | "on_hold"
          priority?: "low" | "medium" | "high" | "urgent"
          client_id?: string
          manager_id?: string
          budget?: number
          start_date?: string
          end_date?: string
          progress?: number
          created_at?: string
          updated_at?: string
        }
      }
      quotes: {
        Row: {
          id: string
          reference_number: string
          service_type: "electrical" | "construction" | "logistics"
          status: "pending" | "approved" | "rejected" | "expired"
          client_name: string
          client_email: string
          client_phone: string
          project_details: any
          estimated_cost: number
          valid_until: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          reference_number?: string
          service_type: "electrical" | "construction" | "logistics"
          status?: "pending" | "approved" | "rejected" | "expired"
          client_name: string
          client_email: string
          client_phone: string
          project_details: any
          estimated_cost: number
          valid_until: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          reference_number?: string
          service_type?: "electrical" | "construction" | "logistics"
          status?: "pending" | "approved" | "rejected" | "expired"
          client_name?: string
          client_email?: string
          client_phone?: string
          project_details?: any
          estimated_cost?: number
          valid_until?: string
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          title: string
          description?: string
          project_id: string
          assigned_to?: string
          status: "todo" | "in_progress" | "completed" | "blocked"
          priority: "low" | "medium" | "high" | "urgent"
          due_date?: string
          completed_at?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string
          project_id: string
          assigned_to?: string
          status?: "todo" | "in_progress" | "completed" | "blocked"
          priority?: "low" | "medium" | "high" | "urgent"
          due_date?: string
          completed_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          project_id?: string
          assigned_to?: string
          status?: "todo" | "in_progress" | "completed" | "blocked"
          priority?: "low" | "medium" | "high" | "urgent"
          due_date?: string
          completed_at?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
