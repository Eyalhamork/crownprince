import { z } from "zod"

// Phone number validation regex
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

// ============================================================================
// Quote Request Form Schemas
// ============================================================================

export const serviceSelectionSchema = z.object({
  service: z.enum(["electrical", "construction", "logistics"], {
    errorMap: () => ({ message: "Please select a service type" }),
  }),
})

export const projectDetailsSchema = z.object({
  propertyType: z.enum(["residential", "commercial", "industrial", "mixed-use"], {
    errorMap: () => ({ message: "Please select a property type" }),
  }),
  workType: z.string().min(1, "Please select a work type"),
  squareFootage: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
})

export const contactInfoSchema = z.object({
  clientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  clientEmail: z
    .string()
    .email("Please enter a valid email address"),
  clientPhone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number"),
  company: z.string().optional(),
  address: z.string().optional(),
})

export const additionalDetailsSchema = z.object({
  additionalDetails: z.string().max(2000, "Description too long").optional(),
  urgency: z.enum(["normal", "urgent", "emergency"]),
  preferredContact: z.enum(["email", "phone", "text"]),
  marketingConsent: z.boolean(),
})

// Complete quote form schema
export const quoteFormSchema = z.object({
  ...serviceSelectionSchema.shape,
  ...projectDetailsSchema.shape,
  ...contactInfoSchema.shape,
  ...additionalDetailsSchema.shape,
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

// ============================================================================
// Contact Form Schemas
// ============================================================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  location: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  priority: z.enum(["normal", "urgent", "emergency"]),
  projectType: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "text"]),
  newsletter: z.boolean(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Emergency contact form (stricter validation)
export const emergencyContactSchema = contactFormSchema.extend({
  service: z.string().min(1, "Please select an emergency type"),
  message: z
    .string()
    .min(20, "Please provide more details about the emergency (at least 20 characters)")
    .max(2000, "Description too long"),
})

export type EmergencyContactData = z.infer<typeof emergencyContactSchema>

// ============================================================================
// Project inquiry schemas
// ============================================================================

export const projectInquirySchema = contactFormSchema.extend({
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
})

export type ProjectInquiryData = z.infer<typeof projectInquirySchema>

// ============================================================================
// Client Portal Forms
// ============================================================================

export const supportTicketSchema = z.object({
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  category: z.enum(["technical", "billing", "project", "general", "complaint"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description must be less than 5000 characters"),
  attachments: z.array(z.string()).optional(),
})

export type SupportTicketData = z.infer<typeof supportTicketSchema>

export const clientMessageSchema = z.object({
  recipientId: z.string().min(1, "Please select a recipient"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
  projectId: z.string().optional(),
})

export type ClientMessageData = z.infer<typeof clientMessageSchema>

// ============================================================================
// Admin Forms
// ============================================================================

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description must be less than 2000 characters"),
  assigneeId: z.string().min(1, "Please select an assignee"),
  projectId: z.string().min(1, "Please select a project"),
  priority: z.enum(["High", "Medium", "Low"]),
  dueDate: z
    .string()
    .min(1, "Please select a due date")
    .refine((date) => new Date(date) >= new Date(), {
      message: "Due date must be in the future",
    }),
  estimatedHours: z
    .number()
    .min(0.5, "Estimated hours must be at least 0.5")
    .max(1000, "Estimated hours must be less than 1000"),
  tags: z.array(z.string()).optional(),
})

export type CreateTaskData = z.infer<typeof createTaskSchema>

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be at least 3 characters")
    .max(200, "Project name must be less than 200 characters"),
  clientId: z.string().min(1, "Please select a client"),
  type: z.enum(["Construction", "Electrical", "Logistics"]),
  priority: z.enum(["High", "Medium", "Low"]),
  budget: z
    .number()
    .min(100, "Budget must be at least $100")
    .max(100000000, "Budget exceeds maximum"),
  startDate: z.string().min(1, "Please select a start date"),
  endDate: z
    .string()
    .min(1, "Please select an end date"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description must be less than 5000 characters"),
  team: z
    .array(z.string())
    .min(1, "Please assign at least one team member"),
}).refine((data) => new Date(data.endDate) > new Date(data.startDate), {
  message: "End date must be after start date",
  path: ["endDate"],
})

export type CreateProjectData = z.infer<typeof createProjectSchema>

export const createClientSchema = z.object({
  name: z
    .string()
    .min(2, "Client name must be at least 2 characters")
    .max(200, "Client name must be less than 200 characters"),
  contact: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(100, "Contact name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number"),
  address: z
    .string()
    .min(10, "Please enter a complete address")
    .max(500, "Address too long"),
  type: z.enum(["Corporate", "Residential", "Industrial"]),
  status: z.enum(["Active", "Prospect", "Inactive"]),
})

export type CreateClientData = z.infer<typeof createClientSchema>

export const createLeadSchema = z.object({
  name: z
    .string()
    .min(2, "Company/Lead name must be at least 2 characters")
    .max(200, "Name must be less than 200 characters"),
  contact: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(100, "Contact name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number"),
  source: z.enum(["Website", "Referral", "Social Media", "Cold Call", "Other"]),
  estimatedValue: z
    .number()
    .min(0, "Estimated value must be positive")
    .max(100000000, "Value exceeds maximum"),
  service: z.enum(["Construction", "Electrical", "Logistics"]),
  notes: z.string().max(2000, "Notes too long").optional(),
})

export type CreateLeadData = z.infer<typeof createLeadSchema>

export const createInvoiceSchema = z.object({
  clientId: z.string().min(1, "Please select a client"),
  projectId: z.string().min(1, "Please select a project"),
  amount: z
    .number()
    .min(1, "Amount must be at least $1")
    .max(100000000, "Amount exceeds maximum"),
  dueDate: z
    .string()
    .min(1, "Please select a due date")
    .refine((date) => new Date(date) >= new Date(), {
      message: "Due date must be in the future",
    }),
  description: z.string().max(500, "Description too long").optional(),
})

export type CreateInvoiceData = z.infer<typeof createInvoiceSchema>
