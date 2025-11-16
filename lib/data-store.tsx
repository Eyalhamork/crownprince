"use client"

import React, { createContext, useContext, useState, useCallback, useMemo } from "react"

// ============================================================================
// Type Definitions
// ============================================================================

export interface Project {
  id: string
  name: string
  client: string
  clientId: string
  type: "Construction" | "Electrical" | "Logistics"
  status: "Planning" | "In Progress" | "Review" | "Completed" | "On Hold"
  priority: "High" | "Medium" | "Low"
  progress: number
  budget: number
  spent: number
  startDate: string
  endDate: string
  team: string[]
  description: string
  milestones: Milestone[]
  createdAt: string
  updatedAt: string
}

export interface Milestone {
  id: string
  name: string
  completed: boolean
  date: string
}

export interface Task {
  id: string
  title: string
  description: string
  assignee: string
  assigneeId: string
  projectId: string
  priority: "High" | "Medium" | "Low"
  status: "Pending" | "In Progress" | "Scheduled" | "Completed" | "Cancelled"
  dueDate: string
  createdDate: string
  estimatedHours: number
  actualHours: number
  tags: string[]
}

export interface Client {
  id: string
  name: string
  contact: string
  email: string
  phone: string
  address: string
  status: "Active" | "Prospect" | "Inactive"
  totalValue: number
  projectCount: number
  lastContact: string
  type: "Corporate" | "Residential" | "Industrial"
  createdAt: string
}

export interface Lead {
  id: string
  name: string
  contact: string
  email: string
  phone: string
  source: "Website" | "Referral" | "Social Media" | "Cold Call" | "Other"
  status: "New" | "Qualified" | "Contacted" | "Converted" | "Lost"
  estimatedValue: number
  service: "Construction" | "Electrical" | "Logistics"
  createdAt: string
  notes: string
}

export interface Activity {
  id: string
  type: "Call" | "Email" | "Meeting" | "Note"
  clientId: string
  clientName: string
  description: string
  date: string
  staffId: string
  staffName: string
}

export interface Invoice {
  id: string
  clientId: string
  clientName: string
  projectId: string
  projectName: string
  amount: number
  dueDate: string
  status: "Paid" | "Pending" | "Overdue" | "Cancelled"
  paidDate: string | null
  createdAt: string
}

export interface Employee {
  id: string
  name: string
  position: string
  department: "Executive" | "Electrical" | "Construction" | "Logistics" | "Admin"
  email: string
  phone: string
  address: string
  salary: number
  startDate: string
  status: "Active" | "On Leave" | "Inactive"
  projectIds: string[]
  skills: string[]
  performance: number
  avatar: string
}

export interface Quote {
  id: string
  clientName: string
  clientEmail: string
  service: "Construction" | "Electrical" | "Logistics"
  description: string
  estimatedValue: number
  status: "Pending" | "Sent" | "Accepted" | "Declined"
  createdAt: string
  validUntil: string
}

export interface Notification {
  id: string
  type: "urgent" | "warning" | "info" | "success"
  title: string
  message: string
  time: string
  read: boolean
  link?: string
}

export interface Expense {
  category: string
  amount: number
  budget: number
  percentage: number
  status: "On Track" | "Under Budget" | "Over Budget"
}

// ============================================================================
// DataStore Context Type
// ============================================================================

interface DataStoreContextType {
  // Data
  projects: Project[]
  tasks: Task[]
  clients: Client[]
  leads: Lead[]
  activities: Activity[]
  invoices: Invoice[]
  employees: Employee[]
  quotes: Quote[]
  notifications: Notification[]
  expenses: Expense[]

  // Loading states
  isLoading: boolean

  // Project actions
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => void
  updateProject: (id: string, updates: Partial<Project>) => void
  deleteProject: (id: string) => void

  // Task actions
  addTask: (task: Omit<Task, "id">) => void
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void

  // Client actions
  addClient: (client: Omit<Client, "id" | "createdAt">) => void
  updateClient: (id: string, updates: Partial<Client>) => void
  deleteClient: (id: string) => void

  // Lead actions
  addLead: (lead: Omit<Lead, "id" | "createdAt">) => void
  updateLead: (id: string, updates: Partial<Lead>) => void
  convertLeadToClient: (leadId: string) => void
  deleteLead: (id: string) => void

  // Activity actions
  addActivity: (activity: Omit<Activity, "id">) => void

  // Invoice actions
  addInvoice: (invoice: Omit<Invoice, "id" | "createdAt">) => void
  updateInvoice: (id: string, updates: Partial<Invoice>) => void
  markInvoicePaid: (id: string) => void

  // Employee actions
  addEmployee: (employee: Omit<Employee, "id">) => void
  updateEmployee: (id: string, updates: Partial<Employee>) => void
  deleteEmployee: (id: string) => void

  // Quote actions
  addQuote: (quote: Omit<Quote, "id" | "createdAt">) => void
  updateQuote: (id: string, updates: Partial<Quote>) => void

  // Notification actions
  addNotification: (notification: Omit<Notification, "id" | "time" | "read">) => void
  markNotificationRead: (id: string) => void
  clearNotifications: () => void

  // Refresh data
  refreshData: () => Promise<void>
}

const DataStoreContext = createContext<DataStoreContextType | undefined>(undefined)

// ============================================================================
// Mock Data
// ============================================================================

const mockProjects: Project[] = [
  {
    id: "PRJ-001",
    name: "Downtown Office Complex",
    client: "Metro Corporation",
    clientId: "CL-001",
    type: "Construction",
    status: "In Progress",
    priority: "High",
    progress: 75,
    budget: 450000,
    spent: 337500,
    startDate: "2023-12-01",
    endDate: "2024-03-15",
    team: ["David Crown", "Sarah Mitchell", "Michael Torres"],
    description: "Complete electrical and construction work for new office complex",
    milestones: [
      { id: "M-001", name: "Foundation", completed: true, date: "2023-12-15" },
      { id: "M-002", name: "Electrical Rough-in", completed: true, date: "2024-01-10" },
      { id: "M-003", name: "Interior Work", completed: false, date: "2024-02-15" },
      { id: "M-004", name: "Final Inspection", completed: false, date: "2024-03-10" },
    ],
    createdAt: "2023-11-15T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "PRJ-002",
    name: "Residential Wiring Upgrade",
    client: "Johnson Family",
    clientId: "CL-002",
    type: "Electrical",
    status: "Planning",
    priority: "Medium",
    progress: 25,
    budget: 75000,
    spent: 18750,
    startDate: "2024-01-15",
    endDate: "2024-02-28",
    team: ["Lisa Park", "James Wilson"],
    description: "Complete home electrical system upgrade and smart home integration",
    milestones: [
      { id: "M-005", name: "Assessment", completed: true, date: "2024-01-15" },
      { id: "M-006", name: "Permits", completed: false, date: "2024-01-25" },
      { id: "M-007", name: "Installation", completed: false, date: "2024-02-10" },
      { id: "M-008", name: "Testing", completed: false, date: "2024-02-25" },
    ],
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-18T00:00:00Z",
  },
  {
    id: "PRJ-003",
    name: "Warehouse Logistics Setup",
    client: "Supply Chain Inc",
    clientId: "CL-003",
    type: "Logistics",
    status: "Review",
    priority: "High",
    progress: 90,
    budget: 200000,
    spent: 180000,
    startDate: "2023-11-01",
    endDate: "2024-02-10",
    team: ["Alex Chen", "Maria Rodriguez"],
    description: "Complete warehouse automation and logistics system implementation",
    milestones: [
      { id: "M-009", name: "System Design", completed: true, date: "2023-11-15" },
      { id: "M-010", name: "Equipment Install", completed: true, date: "2023-12-20" },
      { id: "M-011", name: "Testing Phase", completed: true, date: "2024-01-15" },
      { id: "M-012", name: "Go Live", completed: false, date: "2024-02-05" },
    ],
    createdAt: "2023-10-20T00:00:00Z",
    updatedAt: "2024-01-25T00:00:00Z",
  },
  {
    id: "PRJ-004",
    name: "Shopping Mall Renovation",
    client: "Retail Holdings LLC",
    clientId: "CL-004",
    type: "Construction",
    status: "Completed",
    priority: "High",
    progress: 100,
    budget: 850000,
    spent: 820000,
    startDate: "2023-06-01",
    endDate: "2023-12-15",
    team: ["Michael Torres", "Sarah Mitchell", "David Crown"],
    description: "Complete renovation of shopping mall including electrical systems",
    milestones: [
      { id: "M-013", name: "Planning", completed: true, date: "2023-06-15" },
      { id: "M-014", name: "Demolition", completed: true, date: "2023-07-30" },
      { id: "M-015", name: "Construction", completed: true, date: "2023-11-01" },
      { id: "M-016", name: "Final Touches", completed: true, date: "2023-12-10" },
    ],
    createdAt: "2023-05-15T00:00:00Z",
    updatedAt: "2023-12-15T00:00:00Z",
  },
]

const mockTasks: Task[] = [
  {
    id: "TSK-001",
    title: "Complete electrical inspection for PRJ-001",
    description: "Conduct final electrical inspection for Downtown Office Complex",
    assignee: "Sarah Mitchell",
    assigneeId: "EMP-002",
    projectId: "PRJ-001",
    priority: "High",
    status: "In Progress",
    dueDate: "2024-02-15",
    createdDate: "2024-01-10",
    estimatedHours: 4,
    actualHours: 2.5,
    tags: ["Inspection", "Electrical", "Safety"],
  },
  {
    id: "TSK-002",
    title: "Order materials for residential project",
    description: "Purchase electrical components for Johnson Family home upgrade",
    assignee: "Lisa Park",
    assigneeId: "EMP-004",
    projectId: "PRJ-002",
    priority: "Medium",
    status: "Pending",
    dueDate: "2024-02-10",
    createdDate: "2024-01-08",
    estimatedHours: 2,
    actualHours: 0,
    tags: ["Procurement", "Materials", "Residential"],
  },
  {
    id: "TSK-003",
    title: "Client meeting for warehouse setup",
    description: "Final walkthrough and sign-off meeting with Supply Chain Inc",
    assignee: "Michael Torres",
    assigneeId: "EMP-003",
    projectId: "PRJ-003",
    priority: "High",
    status: "Scheduled",
    dueDate: "2024-02-08",
    createdDate: "2024-01-05",
    estimatedHours: 3,
    actualHours: 0,
    tags: ["Meeting", "Client", "Logistics"],
  },
  {
    id: "TSK-004",
    title: "Update project documentation",
    description: "Complete project files and documentation for completed projects",
    assignee: "Alex Chen",
    assigneeId: "EMP-005",
    projectId: "PRJ-004",
    priority: "Low",
    status: "Completed",
    dueDate: "2024-02-05",
    createdDate: "2024-01-15",
    estimatedHours: 6,
    actualHours: 5.5,
    tags: ["Documentation", "Admin", "Compliance"],
  },
  {
    id: "TSK-005",
    title: "Review safety protocols",
    description: "Quarterly review of safety protocols and procedures",
    assignee: "David Crown",
    assigneeId: "EMP-001",
    projectId: "PRJ-001",
    priority: "Medium",
    status: "Pending",
    dueDate: "2024-02-20",
    createdDate: "2024-01-20",
    estimatedHours: 8,
    actualHours: 0,
    tags: ["Safety", "Compliance", "Review"],
  },
]

const mockClients: Client[] = [
  {
    id: "CL-001",
    name: "Metro Corporation",
    contact: "John Smith",
    email: "john@metro.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Downtown",
    status: "Active",
    totalValue: 450000,
    projectCount: 3,
    lastContact: "2024-01-15",
    type: "Corporate",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "CL-002",
    name: "Johnson Family",
    contact: "Sarah Johnson",
    email: "sarah@email.com",
    phone: "+1 (555) 987-6543",
    address: "456 Residential St, Suburbs",
    status: "Active",
    totalValue: 75000,
    projectCount: 1,
    lastContact: "2024-01-12",
    type: "Residential",
    createdAt: "2023-06-15T00:00:00Z",
  },
  {
    id: "CL-003",
    name: "Supply Chain Inc",
    contact: "Mike Wilson",
    email: "mike@supply.com",
    phone: "+1 (555) 456-7890",
    address: "789 Industrial Blvd, Warehouse District",
    status: "Active",
    totalValue: 200000,
    projectCount: 1,
    lastContact: "2024-01-10",
    type: "Industrial",
    createdAt: "2023-09-01T00:00:00Z",
  },
  {
    id: "CL-004",
    name: "Retail Holdings LLC",
    contact: "Patricia Brown",
    email: "patricia@retailholdings.com",
    phone: "+1 (555) 234-5678",
    address: "500 Commerce Dr, Shopping District",
    status: "Active",
    totalValue: 850000,
    projectCount: 2,
    lastContact: "2024-01-08",
    type: "Corporate",
    createdAt: "2023-04-01T00:00:00Z",
  },
]

const mockLeads: Lead[] = [
  {
    id: "LD-001",
    name: "Tech Startup Hub",
    contact: "Alex Chen",
    email: "alex@techstartup.com",
    phone: "+1 (555) 111-2222",
    source: "Website",
    status: "New",
    estimatedValue: 125000,
    service: "Electrical",
    createdAt: "2024-01-16T00:00:00Z",
    notes: "Interested in smart building solutions",
  },
  {
    id: "LD-002",
    name: "Green Energy Co",
    contact: "Lisa Park",
    email: "lisa@greenenergy.com",
    phone: "+1 (555) 333-4444",
    source: "Referral",
    status: "Qualified",
    estimatedValue: 300000,
    service: "Construction",
    createdAt: "2024-01-14T00:00:00Z",
    notes: "Looking for sustainable construction practices",
  },
  {
    id: "LD-003",
    name: "Logistics Pro Services",
    contact: "Mark Johnson",
    email: "mark@logisticspro.com",
    phone: "+1 (555) 555-6666",
    source: "Social Media",
    status: "Contacted",
    estimatedValue: 180000,
    service: "Logistics",
    createdAt: "2024-01-10T00:00:00Z",
    notes: "Expanding warehouse operations",
  },
]

const mockActivities: Activity[] = [
  {
    id: "ACT-001",
    type: "Call",
    clientId: "CL-001",
    clientName: "Metro Corporation",
    description: "Discussed project timeline and budget adjustments",
    date: "2024-01-15",
    staffId: "EMP-001",
    staffName: "David Crown",
  },
  {
    id: "ACT-002",
    type: "Email",
    clientId: "CL-002",
    clientName: "Johnson Family",
    description: "Sent project completion photos and final invoice",
    date: "2024-01-12",
    staffId: "EMP-002",
    staffName: "Sarah Mitchell",
  },
  {
    id: "ACT-003",
    type: "Meeting",
    clientId: "CL-003",
    clientName: "Supply Chain Inc",
    description: "Site visit and requirements assessment",
    date: "2024-01-10",
    staffId: "EMP-003",
    staffName: "Michael Torres",
  },
]

const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    clientId: "CL-001",
    clientName: "Metro Corporation",
    projectId: "PRJ-001",
    projectName: "Downtown Office Complex",
    amount: 45000,
    dueDate: "2024-02-15",
    status: "Paid",
    paidDate: "2024-02-10",
    createdAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "INV-002",
    clientId: "CL-002",
    clientName: "Johnson Family",
    projectId: "PRJ-002",
    projectName: "Residential Wiring",
    amount: 18750,
    dueDate: "2024-02-20",
    status: "Pending",
    paidDate: null,
    createdAt: "2024-01-22T00:00:00Z",
  },
  {
    id: "INV-003",
    clientId: "CL-003",
    clientName: "Supply Chain Inc",
    projectId: "PRJ-003",
    projectName: "Warehouse Setup",
    amount: 67500,
    dueDate: "2024-01-30",
    status: "Overdue",
    paidDate: null,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "INV-004",
    clientId: "CL-004",
    clientName: "Retail Holdings LLC",
    projectId: "PRJ-004",
    projectName: "Shopping Mall Renovation",
    amount: 125000,
    dueDate: "2024-01-15",
    status: "Paid",
    paidDate: "2024-01-14",
    createdAt: "2024-01-01T00:00:00Z",
  },
]

const mockEmployees: Employee[] = [
  {
    id: "EMP-001",
    name: "David Crown",
    position: "CEO & Founder",
    department: "Executive",
    email: "david@crownprince.com",
    phone: "+1 (555) 100-0001",
    address: "123 Executive Ave, Downtown",
    salary: 150000,
    startDate: "2020-01-01",
    status: "Active",
    projectIds: ["PRJ-001", "PRJ-003"],
    skills: ["Leadership", "Business Strategy", "Project Management"],
    performance: 95,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP-002",
    name: "Sarah Mitchell",
    position: "Senior Electrician",
    department: "Electrical",
    email: "sarah@crownprince.com",
    phone: "+1 (555) 100-0002",
    address: "456 Residential St, Suburbs",
    salary: 75000,
    startDate: "2021-03-15",
    status: "Active",
    projectIds: ["PRJ-001", "PRJ-002"],
    skills: ["Electrical Systems", "Safety Protocols", "Troubleshooting"],
    performance: 92,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP-003",
    name: "Michael Torres",
    position: "Construction Manager",
    department: "Construction",
    email: "michael@crownprince.com",
    phone: "+1 (555) 100-0003",
    address: "789 Industrial Blvd, Construction Zone",
    salary: 85000,
    startDate: "2020-08-20",
    status: "Active",
    projectIds: ["PRJ-001"],
    skills: ["Project Management", "Team Leadership", "Quality Control"],
    performance: 88,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP-004",
    name: "Lisa Park",
    position: "Logistics Coordinator",
    department: "Logistics",
    email: "lisa@crownprince.com",
    phone: "+1 (555) 100-0004",
    address: "321 Logistics Lane, Warehouse District",
    salary: 65000,
    startDate: "2022-01-10",
    status: "Active",
    projectIds: ["PRJ-002", "PRJ-003"],
    skills: ["Supply Chain", "Inventory Management", "Coordination"],
    performance: 90,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP-005",
    name: "Alex Chen",
    position: "Project Coordinator",
    department: "Admin",
    email: "alex@crownprince.com",
    phone: "+1 (555) 100-0005",
    address: "654 Admin Plaza, Business Park",
    salary: 55000,
    startDate: "2023-06-01",
    status: "Active",
    projectIds: ["PRJ-003", "PRJ-004"],
    skills: ["Documentation", "Scheduling", "Client Communication"],
    performance: 85,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const mockQuotes: Quote[] = [
  {
    id: "QT-001",
    clientName: "New Tech Solutions",
    clientEmail: "info@newtechsolutions.com",
    service: "Electrical",
    description: "Server room electrical setup and backup power systems",
    estimatedValue: 95000,
    status: "Sent",
    createdAt: "2024-01-18T00:00:00Z",
    validUntil: "2024-02-18",
  },
  {
    id: "QT-002",
    clientName: "Harbor Construction",
    clientEmail: "projects@harbor.com",
    service: "Construction",
    description: "Commercial building foundation and structural work",
    estimatedValue: 450000,
    status: "Pending",
    createdAt: "2024-01-20T00:00:00Z",
    validUntil: "2024-02-20",
  },
]

const mockNotifications: Notification[] = [
  {
    id: "NOT-001",
    type: "urgent",
    title: "Project Attention Required",
    message: "Project PRJ-003 requires immediate attention",
    time: "2h ago",
    read: false,
    link: "/admin?tab=projects",
  },
  {
    id: "NOT-002",
    type: "warning",
    title: "Payment Overdue",
    message: "Payment overdue from Supply Chain Inc - $67,500",
    time: "4h ago",
    read: false,
    link: "/admin?tab=finances",
  },
  {
    id: "NOT-003",
    type: "info",
    title: "New Client Inquiry",
    message: "New client inquiry for electrical services",
    time: "6h ago",
    read: false,
    link: "/admin?tab=crm",
  },
  {
    id: "NOT-004",
    type: "success",
    title: "Project Completed",
    message: "Shopping Mall Renovation successfully completed",
    time: "1d ago",
    read: true,
    link: "/admin?tab=projects",
  },
]

const mockExpenses: Expense[] = [
  {
    category: "Payroll",
    amount: 45600,
    budget: 50000,
    percentage: 91.2,
    status: "On Track",
  },
  {
    category: "Materials",
    amount: 23400,
    budget: 25000,
    percentage: 93.6,
    status: "On Track",
  },
  {
    category: "Equipment",
    amount: 12800,
    budget: 15000,
    percentage: 85.3,
    status: "Under Budget",
  },
  {
    category: "Operations",
    amount: 7400,
    budget: 8000,
    percentage: 92.5,
    status: "On Track",
  },
]

// ============================================================================
// DataStore Provider Component
// ============================================================================

export function DataStoreProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [clients, setClients] = useState<Client[]>(mockClients)
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [activities, setActivities] = useState<Activity[]>(mockActivities)
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices)
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees)
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes)
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [expenses] = useState<Expense[]>(mockExpenses)
  const [isLoading, setIsLoading] = useState(false)

  // Project actions
  const addProject = useCallback((project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const newProject: Project = {
      ...project,
      id: `PRJ-${String(Date.now()).slice(-6)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setProjects(prev => [...prev, newProject])
  }, [])

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p =>
      p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
    ))
  }, [])

  const deleteProject = useCallback((id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }, [])

  // Task actions
  const addTask = useCallback((task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: `TSK-${String(Date.now()).slice(-6)}`,
    }
    setTasks(prev => [...prev, newTask])
  }, [])

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t))
  }, [])

  const deleteTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [])

  // Client actions
  const addClient = useCallback((client: Omit<Client, "id" | "createdAt">) => {
    const newClient: Client = {
      ...client,
      id: `CL-${String(Date.now()).slice(-6)}`,
      createdAt: new Date().toISOString(),
    }
    setClients(prev => [...prev, newClient])
  }, [])

  const updateClient = useCallback((id: string, updates: Partial<Client>) => {
    setClients(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c))
  }, [])

  const deleteClient = useCallback((id: string) => {
    setClients(prev => prev.filter(c => c.id !== id))
  }, [])

  // Lead actions
  const addLead = useCallback((lead: Omit<Lead, "id" | "createdAt">) => {
    const newLead: Lead = {
      ...lead,
      id: `LD-${String(Date.now()).slice(-6)}`,
      createdAt: new Date().toISOString(),
    }
    setLeads(prev => [...prev, newLead])
  }, [])

  const updateLead = useCallback((id: string, updates: Partial<Lead>) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l))
  }, [])

  const convertLeadToClient = useCallback((leadId: string) => {
    const lead = leads.find(l => l.id === leadId)
    if (lead) {
      const newClient: Client = {
        id: `CL-${String(Date.now()).slice(-6)}`,
        name: lead.name,
        contact: lead.contact,
        email: lead.email,
        phone: lead.phone,
        address: "",
        status: "Active",
        totalValue: lead.estimatedValue,
        projectCount: 0,
        lastContact: new Date().toISOString().split("T")[0],
        type: "Corporate",
        createdAt: new Date().toISOString(),
      }
      setClients(prev => [...prev, newClient])
      setLeads(prev => prev.map(l =>
        l.id === leadId ? { ...l, status: "Converted" as const } : l
      ))
    }
  }, [leads])

  const deleteLead = useCallback((id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id))
  }, [])

  // Activity actions
  const addActivity = useCallback((activity: Omit<Activity, "id">) => {
    const newActivity: Activity = {
      ...activity,
      id: `ACT-${String(Date.now()).slice(-6)}`,
    }
    setActivities(prev => [newActivity, ...prev])
  }, [])

  // Invoice actions
  const addInvoice = useCallback((invoice: Omit<Invoice, "id" | "createdAt">) => {
    const newInvoice: Invoice = {
      ...invoice,
      id: `INV-${String(Date.now()).slice(-6)}`,
      createdAt: new Date().toISOString(),
    }
    setInvoices(prev => [...prev, newInvoice])
  }, [])

  const updateInvoice = useCallback((id: string, updates: Partial<Invoice>) => {
    setInvoices(prev => prev.map(i => i.id === id ? { ...i, ...updates } : i))
  }, [])

  const markInvoicePaid = useCallback((id: string) => {
    setInvoices(prev => prev.map(i =>
      i.id === id ? { ...i, status: "Paid" as const, paidDate: new Date().toISOString().split("T")[0] } : i
    ))
  }, [])

  // Employee actions
  const addEmployee = useCallback((employee: Omit<Employee, "id">) => {
    const newEmployee: Employee = {
      ...employee,
      id: `EMP-${String(Date.now()).slice(-6)}`,
    }
    setEmployees(prev => [...prev, newEmployee])
  }, [])

  const updateEmployee = useCallback((id: string, updates: Partial<Employee>) => {
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, ...updates } : e))
  }, [])

  const deleteEmployee = useCallback((id: string) => {
    setEmployees(prev => prev.filter(e => e.id !== id))
  }, [])

  // Quote actions
  const addQuote = useCallback((quote: Omit<Quote, "id" | "createdAt">) => {
    const newQuote: Quote = {
      ...quote,
      id: `QT-${String(Date.now()).slice(-6)}`,
      createdAt: new Date().toISOString(),
    }
    setQuotes(prev => [...prev, newQuote])
  }, [])

  const updateQuote = useCallback((id: string, updates: Partial<Quote>) => {
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q))
  }, [])

  // Notification actions
  const addNotification = useCallback((notification: Omit<Notification, "id" | "time" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: `NOT-${String(Date.now()).slice(-6)}`,
      time: "Just now",
      read: false,
    }
    setNotifications(prev => [newNotification, ...prev])
  }, [])

  const markNotificationRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }, [])

  const clearNotifications = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }, [])

  // Refresh data (simulates API fetch)
  const refreshData = useCallback(async () => {
    setIsLoading(true)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    // In a real app, this would fetch from an API
    setIsLoading(false)
  }, [])

  const value = useMemo(() => ({
    // Data
    projects,
    tasks,
    clients,
    leads,
    activities,
    invoices,
    employees,
    quotes,
    notifications,
    expenses,
    isLoading,

    // Project actions
    addProject,
    updateProject,
    deleteProject,

    // Task actions
    addTask,
    updateTask,
    deleteTask,

    // Client actions
    addClient,
    updateClient,
    deleteClient,

    // Lead actions
    addLead,
    updateLead,
    convertLeadToClient,
    deleteLead,

    // Activity actions
    addActivity,

    // Invoice actions
    addInvoice,
    updateInvoice,
    markInvoicePaid,

    // Employee actions
    addEmployee,
    updateEmployee,
    deleteEmployee,

    // Quote actions
    addQuote,
    updateQuote,

    // Notification actions
    addNotification,
    markNotificationRead,
    clearNotifications,

    // Refresh
    refreshData,
  }), [
    projects, tasks, clients, leads, activities, invoices, employees, quotes,
    notifications, expenses, isLoading, addProject, updateProject, deleteProject,
    addTask, updateTask, deleteTask, addClient, updateClient, deleteClient,
    addLead, updateLead, convertLeadToClient, deleteLead, addActivity,
    addInvoice, updateInvoice, markInvoicePaid, addEmployee, updateEmployee,
    deleteEmployee, addQuote, updateQuote, addNotification, markNotificationRead,
    clearNotifications, refreshData,
  ])

  return (
    <DataStoreContext.Provider value={value}>
      {children}
    </DataStoreContext.Provider>
  )
}

// ============================================================================
// Hook to use DataStore
// ============================================================================

export function useDataStore() {
  const context = useContext(DataStoreContext)
  if (context === undefined) {
    throw new Error("useDataStore must be used within a DataStoreProvider")
  }
  return context
}
