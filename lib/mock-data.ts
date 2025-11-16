// Comprehensive mock/seed data for the application
import { generateId } from "./local-storage";

export interface Project {
  id: string;
  title: string;
  description: string;
  serviceType: "electrical" | "construction" | "logistics";
  status: "planning" | "in_progress" | "completed" | "on_hold";
  priority: "low" | "medium" | "high" | "urgent";
  clientId: string;
  clientName: string;
  managerId?: string;
  managerName?: string;
  budget: number;
  spent: number;
  startDate: string;
  endDate?: string;
  progress: number;
  location: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  projectId: string;
  projectTitle: string;
  assignedTo?: string;
  assignedToName?: string;
  status: "todo" | "in_progress" | "completed" | "blocked";
  priority: "low" | "medium" | "high" | "urgent";
  dueDate?: string;
  completedAt?: string;
  estimatedHours: number;
  actualHours: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Quote {
  id: string;
  referenceNumber: string;
  serviceType: "electrical" | "construction" | "logistics";
  status: "pending" | "approved" | "rejected" | "expired";
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany?: string;
  projectDetails: {
    title: string;
    description: string;
    location: string;
    timeline: string;
    requirements: string[];
  };
  estimatedCost: number;
  laborCost: number;
  materialCost: number;
  validUntil: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  category: "project" | "task" | "quote" | "system" | "message";
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  userId: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  projectId: string;
  projectTitle: string;
  clientId: string;
  clientName: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  amount: number;
  tax: number;
  total: number;
  dueDate: string;
  paidDate?: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  recipientId: string;
  recipientName: string;
  subject: string;
  content: string;
  read: boolean;
  attachments: string[];
  createdAt: string;
}

// Seed data generators
function getDateDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

function getDateDaysFromNow(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

export const seedProjects: Project[] = [
  {
    id: "proj_001",
    title: "Downtown Office Complex Electrical Upgrade",
    description: "Complete electrical system overhaul for a 15-story office building including LED lighting, smart building integration, and EV charging stations.",
    serviceType: "electrical",
    status: "in_progress",
    priority: "high",
    clientId: "client-1",
    clientName: "Jane Client",
    managerId: "manager-1",
    managerName: "Sarah Manager",
    budget: 450000,
    spent: 287500,
    startDate: getDateDaysAgo(45),
    endDate: getDateDaysFromNow(30),
    progress: 64,
    location: "123 Main Street, Downtown",
    tags: ["commercial", "electrical", "smart-building"],
    createdAt: getDateDaysAgo(60),
    updatedAt: getDateDaysAgo(1),
  },
  {
    id: "proj_002",
    title: "Residential Complex Construction",
    description: "New construction of 48-unit residential apartment complex with underground parking and amenity spaces.",
    serviceType: "construction",
    status: "planning",
    priority: "medium",
    clientId: "client-2",
    clientName: "Robert Holdings LLC",
    managerId: "manager-1",
    managerName: "Sarah Manager",
    budget: 2800000,
    spent: 125000,
    startDate: getDateDaysFromNow(14),
    endDate: getDateDaysFromNow(365),
    progress: 5,
    location: "456 Oak Avenue, Suburbs",
    tags: ["residential", "new-construction", "multi-unit"],
    createdAt: getDateDaysAgo(30),
    updatedAt: getDateDaysAgo(2),
  },
  {
    id: "proj_003",
    title: "Warehouse Logistics Optimization",
    description: "Supply chain optimization and warehouse management system implementation for regional distribution center.",
    serviceType: "logistics",
    status: "in_progress",
    priority: "urgent",
    clientId: "client-1",
    clientName: "Jane Client",
    managerId: "manager-1",
    managerName: "Sarah Manager",
    budget: 175000,
    spent: 98000,
    startDate: getDateDaysAgo(21),
    endDate: getDateDaysFromNow(14),
    progress: 56,
    location: "789 Industrial Blvd",
    tags: ["logistics", "automation", "optimization"],
    createdAt: getDateDaysAgo(35),
    updatedAt: getDateDaysAgo(0),
  },
  {
    id: "proj_004",
    title: "Hospital Emergency Power System",
    description: "Installation of backup generator systems and UPS for critical hospital infrastructure.",
    serviceType: "electrical",
    status: "completed",
    priority: "urgent",
    clientId: "client-3",
    clientName: "City General Hospital",
    managerId: "manager-1",
    managerName: "Sarah Manager",
    budget: 325000,
    spent: 318750,
    startDate: getDateDaysAgo(90),
    endDate: getDateDaysAgo(15),
    progress: 100,
    location: "100 Hospital Drive",
    tags: ["healthcare", "emergency-power", "critical-infrastructure"],
    createdAt: getDateDaysAgo(120),
    updatedAt: getDateDaysAgo(15),
  },
  {
    id: "proj_005",
    title: "Retail Store Renovation",
    description: "Complete interior renovation of flagship retail location including new fixtures, lighting, and HVAC.",
    serviceType: "construction",
    status: "on_hold",
    priority: "low",
    clientId: "client-4",
    clientName: "Fashion Forward Inc",
    managerId: "manager-1",
    managerName: "Sarah Manager",
    budget: 85000,
    spent: 12000,
    startDate: getDateDaysAgo(10),
    endDate: getDateDaysFromNow(60),
    progress: 14,
    location: "555 Shopping Center Dr",
    tags: ["retail", "renovation", "interior"],
    createdAt: getDateDaysAgo(25),
    updatedAt: getDateDaysAgo(3),
  },
];

export const seedTasks: Task[] = [
  {
    id: "task_001",
    title: "Install main electrical panel on Floor 10",
    description: "Replace outdated panel with new 400A service panel. Coordinate with building management for power shutdown.",
    projectId: "proj_001",
    projectTitle: "Downtown Office Complex Electrical Upgrade",
    assignedTo: "staff-1",
    assignedToName: "Mike Worker",
    status: "in_progress",
    priority: "high",
    dueDate: getDateDaysFromNow(3),
    estimatedHours: 16,
    actualHours: 10,
    tags: ["electrical", "panel", "floor-10"],
    createdAt: getDateDaysAgo(7),
    updatedAt: getDateDaysAgo(0),
  },
  {
    id: "task_002",
    title: "Complete LED lighting retrofit for Floors 1-5",
    description: "Replace all fluorescent fixtures with energy-efficient LED panels. Update dimming controls.",
    projectId: "proj_001",
    projectTitle: "Downtown Office Complex Electrical Upgrade",
    assignedTo: "staff-1",
    assignedToName: "Mike Worker",
    status: "completed",
    priority: "medium",
    dueDate: getDateDaysAgo(5),
    completedAt: getDateDaysAgo(6),
    estimatedHours: 40,
    actualHours: 38,
    tags: ["led", "lighting", "energy-efficiency"],
    createdAt: getDateDaysAgo(20),
    updatedAt: getDateDaysAgo(6),
  },
  {
    id: "task_003",
    title: "Survey warehouse floor layout",
    description: "Document current rack placement, traffic patterns, and identify optimization opportunities.",
    projectId: "proj_003",
    projectTitle: "Warehouse Logistics Optimization",
    assignedTo: "staff-1",
    assignedToName: "Mike Worker",
    status: "completed",
    priority: "high",
    dueDate: getDateDaysAgo(10),
    completedAt: getDateDaysAgo(11),
    estimatedHours: 8,
    actualHours: 6,
    tags: ["survey", "planning", "layout"],
    createdAt: getDateDaysAgo(21),
    updatedAt: getDateDaysAgo(11),
  },
  {
    id: "task_004",
    title: "Install EV charging stations in parking garage",
    description: "Install 20 Level 2 EV chargers with payment processing system.",
    projectId: "proj_001",
    projectTitle: "Downtown Office Complex Electrical Upgrade",
    assignedTo: "staff-1",
    assignedToName: "Mike Worker",
    status: "todo",
    priority: "medium",
    dueDate: getDateDaysFromNow(14),
    estimatedHours: 32,
    actualHours: 0,
    tags: ["ev-charging", "parking", "sustainability"],
    createdAt: getDateDaysAgo(3),
    updatedAt: getDateDaysAgo(3),
  },
  {
    id: "task_005",
    title: "Configure WMS software",
    description: "Set up warehouse management system with inventory tracking and automated reordering.",
    projectId: "proj_003",
    projectTitle: "Warehouse Logistics Optimization",
    assignedTo: "staff-1",
    assignedToName: "Mike Worker",
    status: "blocked",
    priority: "urgent",
    dueDate: getDateDaysFromNow(7),
    estimatedHours: 24,
    actualHours: 8,
    tags: ["software", "wms", "configuration"],
    createdAt: getDateDaysAgo(14),
    updatedAt: getDateDaysAgo(1),
  },
  {
    id: "task_006",
    title: "Obtain building permits",
    description: "Submit permit applications for residential construction. Include architectural plans and environmental impact assessment.",
    projectId: "proj_002",
    projectTitle: "Residential Complex Construction",
    assignedTo: "manager-1",
    assignedToName: "Sarah Manager",
    status: "in_progress",
    priority: "high",
    dueDate: getDateDaysFromNow(10),
    estimatedHours: 12,
    actualHours: 6,
    tags: ["permits", "compliance", "planning"],
    createdAt: getDateDaysAgo(15),
    updatedAt: getDateDaysAgo(2),
  },
  {
    id: "task_007",
    title: "Final inspection and sign-off",
    description: "Complete final walkthrough with client, address punch list items, obtain sign-off.",
    projectId: "proj_004",
    projectTitle: "Hospital Emergency Power System",
    assignedTo: "manager-1",
    assignedToName: "Sarah Manager",
    status: "completed",
    priority: "urgent",
    dueDate: getDateDaysAgo(15),
    completedAt: getDateDaysAgo(15),
    estimatedHours: 4,
    actualHours: 5,
    tags: ["inspection", "completion", "sign-off"],
    createdAt: getDateDaysAgo(20),
    updatedAt: getDateDaysAgo(15),
  },
];

export const seedQuotes: Quote[] = [
  {
    id: "quote_001",
    referenceNumber: "QT-2024-001",
    serviceType: "electrical",
    status: "pending",
    clientName: "Tech Startup Inc",
    clientEmail: "cto@techstartup.com",
    clientPhone: "(555) 987-6543",
    clientCompany: "Tech Startup Inc",
    projectDetails: {
      title: "Office Electrical Installation",
      description: "Complete electrical installation for new 5000 sq ft office space including network infrastructure.",
      location: "200 Innovation Way",
      timeline: "4-6 weeks",
      requirements: ["100A service panel", "Cat6 networking", "Smart lighting", "Security system wiring"],
    },
    estimatedCost: 45000,
    laborCost: 18000,
    materialCost: 27000,
    validUntil: getDateDaysFromNow(30),
    notes: "Client prefers eco-friendly materials. May expand scope to include solar panel prep.",
    createdAt: getDateDaysAgo(3),
    updatedAt: getDateDaysAgo(3),
  },
  {
    id: "quote_002",
    referenceNumber: "QT-2024-002",
    serviceType: "construction",
    status: "approved",
    clientName: "Sarah Johnson",
    clientEmail: "sarah.j@email.com",
    clientPhone: "(555) 234-5678",
    projectDetails: {
      title: "Home Addition",
      description: "Two-story addition including master bedroom, bathroom, and home office.",
      location: "789 Maple Street",
      timeline: "3-4 months",
      requirements: ["Foundation work", "Framing", "Roofing", "Interior finishing", "HVAC extension"],
    },
    estimatedCost: 125000,
    laborCost: 65000,
    materialCost: 60000,
    validUntil: getDateDaysFromNow(45),
    notes: "Permit process started. Client approved design phase.",
    createdAt: getDateDaysAgo(14),
    updatedAt: getDateDaysAgo(7),
  },
  {
    id: "quote_003",
    referenceNumber: "QT-2024-003",
    serviceType: "logistics",
    status: "rejected",
    clientName: "Global Imports Co",
    clientEmail: "ops@globalimports.com",
    clientPhone: "(555) 876-5432",
    clientCompany: "Global Imports Co",
    projectDetails: {
      title: "Supply Chain Audit",
      description: "Comprehensive audit of current supply chain with optimization recommendations.",
      location: "Multiple warehouses",
      timeline: "2 weeks",
      requirements: ["Inventory analysis", "Route optimization", "Vendor assessment", "Cost reduction plan"],
    },
    estimatedCost: 28000,
    laborCost: 24000,
    materialCost: 4000,
    validUntil: getDateDaysAgo(5),
    notes: "Client went with competitor. Follow up in 6 months.",
    createdAt: getDateDaysAgo(45),
    updatedAt: getDateDaysAgo(30),
  },
  {
    id: "quote_004",
    referenceNumber: "QT-2024-004",
    serviceType: "electrical",
    status: "expired",
    clientName: "Restaurant Group LLC",
    clientEmail: "facilities@restgroup.com",
    clientPhone: "(555) 345-6789",
    clientCompany: "Restaurant Group LLC",
    projectDetails: {
      title: "Commercial Kitchen Electrical",
      description: "Electrical upgrades for three restaurant locations.",
      location: "Multiple sites",
      timeline: "6-8 weeks",
      requirements: ["Heavy duty circuits", "Ventilation wiring", "POS system power", "Emergency lighting"],
    },
    estimatedCost: 67500,
    laborCost: 35000,
    materialCost: 32500,
    validUntil: getDateDaysAgo(10),
    createdAt: getDateDaysAgo(60),
    updatedAt: getDateDaysAgo(60),
  },
];

export const seedNotifications: Notification[] = [
  {
    id: "notif_001",
    type: "warning",
    category: "task",
    title: "Task Due Soon",
    message: "Install main electrical panel on Floor 10 is due in 3 days",
    read: false,
    actionUrl: "/admin?tab=tasks",
    userId: "staff-1",
    createdAt: getDateDaysAgo(0),
  },
  {
    id: "notif_002",
    type: "success",
    category: "project",
    title: "Project Milestone Reached",
    message: "Downtown Office Complex project has reached 64% completion",
    read: false,
    actionUrl: "/admin?tab=projects",
    userId: "manager-1",
    createdAt: getDateDaysAgo(1),
  },
  {
    id: "notif_003",
    type: "info",
    category: "quote",
    title: "New Quote Request",
    message: "Tech Startup Inc has requested a quote for electrical installation",
    read: true,
    actionUrl: "/admin?tab=crm",
    userId: "admin-1",
    createdAt: getDateDaysAgo(3),
  },
  {
    id: "notif_004",
    type: "error",
    category: "task",
    title: "Task Blocked",
    message: "WMS configuration task is blocked - awaiting vendor credentials",
    read: false,
    actionUrl: "/admin?tab=tasks",
    userId: "staff-1",
    createdAt: getDateDaysAgo(1),
  },
  {
    id: "notif_005",
    type: "success",
    category: "quote",
    title: "Quote Approved",
    message: "Home Addition quote has been approved by Sarah Johnson",
    read: true,
    actionUrl: "/admin?tab=crm",
    userId: "admin-1",
    createdAt: getDateDaysAgo(7),
  },
  {
    id: "notif_006",
    type: "info",
    category: "system",
    title: "System Update",
    message: "New features available: Enhanced reporting and analytics dashboard",
    read: false,
    userId: "all",
    createdAt: getDateDaysAgo(2),
  },
];

export const seedInvoices: Invoice[] = [
  {
    id: "inv_001",
    invoiceNumber: "INV-2024-0156",
    projectId: "proj_004",
    projectTitle: "Hospital Emergency Power System",
    clientId: "client-3",
    clientName: "City General Hospital",
    status: "paid",
    amount: 318750,
    tax: 25500,
    total: 344250,
    dueDate: getDateDaysAgo(0),
    paidDate: getDateDaysAgo(2),
    items: [
      { description: "Generator System Installation", quantity: 1, unitPrice: 185000, total: 185000 },
      { description: "UPS Systems", quantity: 4, unitPrice: 22500, total: 90000 },
      { description: "Transfer Switch Installation", quantity: 2, unitPrice: 12500, total: 25000 },
      { description: "Testing & Commissioning", quantity: 1, unitPrice: 18750, total: 18750 },
    ],
    createdAt: getDateDaysAgo(20),
    updatedAt: getDateDaysAgo(2),
  },
  {
    id: "inv_002",
    invoiceNumber: "INV-2024-0157",
    projectId: "proj_001",
    projectTitle: "Downtown Office Complex Electrical Upgrade",
    clientId: "client-1",
    clientName: "Jane Client",
    status: "sent",
    amount: 150000,
    tax: 12000,
    total: 162000,
    dueDate: getDateDaysFromNow(15),
    items: [
      { description: "LED Lighting Retrofit (Floors 1-5)", quantity: 5, unitPrice: 15000, total: 75000 },
      { description: "Panel Upgrades", quantity: 5, unitPrice: 12000, total: 60000 },
      { description: "Labor & Installation", quantity: 1, unitPrice: 15000, total: 15000 },
    ],
    createdAt: getDateDaysAgo(5),
    updatedAt: getDateDaysAgo(5),
  },
  {
    id: "inv_003",
    invoiceNumber: "INV-2024-0158",
    projectId: "proj_003",
    projectTitle: "Warehouse Logistics Optimization",
    clientId: "client-1",
    clientName: "Jane Client",
    status: "overdue",
    amount: 45000,
    tax: 3600,
    total: 48600,
    dueDate: getDateDaysAgo(10),
    items: [
      { description: "Initial Assessment & Planning", quantity: 1, unitPrice: 25000, total: 25000 },
      { description: "Software Licensing", quantity: 1, unitPrice: 15000, total: 15000 },
      { description: "Training Sessions", quantity: 2, unitPrice: 2500, total: 5000 },
    ],
    createdAt: getDateDaysAgo(30),
    updatedAt: getDateDaysAgo(10),
  },
];

export const seedMessages: Message[] = [
  {
    id: "msg_001",
    conversationId: "conv_001",
    senderId: "client-1",
    senderName: "Jane Client",
    senderRole: "client",
    recipientId: "manager-1",
    recipientName: "Sarah Manager",
    subject: "Project Update Request",
    content: "Hi Sarah, could you provide an update on the Downtown Office Complex project? We have a board meeting next week and I need to present the current status. Thanks!",
    read: true,
    attachments: [],
    createdAt: getDateDaysAgo(2),
  },
  {
    id: "msg_002",
    conversationId: "conv_001",
    senderId: "manager-1",
    senderName: "Sarah Manager",
    senderRole: "manager",
    recipientId: "client-1",
    recipientName: "Jane Client",
    subject: "Re: Project Update Request",
    content: "Hi Jane, of course! The project is currently at 64% completion. We've finished the LED lighting retrofit for floors 1-5 and are now working on the main panel installation for floor 10. I'll send you a detailed report by end of day tomorrow.",
    read: false,
    attachments: [],
    createdAt: getDateDaysAgo(1),
  },
  {
    id: "msg_003",
    conversationId: "conv_002",
    senderId: "admin-1",
    senderName: "John Administrator",
    senderRole: "admin",
    recipientId: "staff-1",
    recipientName: "Mike Worker",
    subject: "Safety Training Reminder",
    content: "Mike, just a reminder that your annual safety certification expires next month. Please schedule your renewal training session.",
    read: false,
    attachments: [],
    createdAt: getDateDaysAgo(3),
  },
];
