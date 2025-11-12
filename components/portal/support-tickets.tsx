"use client"

import { useState } from "react"
import {
  MessageSquare,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  Tag,
  Send,
  Paperclip,
  Phone,
  Mail,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface SupportTicket {
  id: string
  title: string
  description: string
  status: "open" | "in-progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "urgent"
  category: "technical" | "billing" | "project" | "general"
  createdAt: string
  updatedAt: string
  assignedTo?: {
    name: string
    avatar: string
    role: string
  }
  messages: Array<{
    id: string
    content: string
    author: string
    timestamp: string
    isStaff: boolean
    attachments?: string[]
  }>
}

const mockTickets: SupportTicket[] = [
  {
    id: "ticket-001",
    title: "Project Timeline Clarification",
    description: "Need clarification on the electrical upgrade project timeline and next milestones.",
    status: "in-progress",
    priority: "medium",
    category: "project",
    createdAt: "2024-02-20T10:00:00Z",
    updatedAt: "2024-02-21T14:30:00Z",
    assignedTo: {
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Project Manager",
    },
    messages: [
      {
        id: "msg-001",
        content:
          "Hi, I wanted to get an update on the electrical upgrade project timeline. The last milestone was completed, but I'm not sure about the next steps.",
        author: "Sarah Johnson",
        timestamp: "2024-02-20T10:00:00Z",
        isStaff: false,
      },
      {
        id: "msg-002",
        content:
          "Hi Sarah! Thanks for reaching out. I'll review the project schedule and get back to you with a detailed timeline for the remaining work. We're currently on track for the LED installation phase.",
        author: "Mike Rodriguez",
        timestamp: "2024-02-21T14:30:00Z",
        isStaff: true,
      },
    ],
  },
  {
    id: "ticket-002",
    title: "Invoice Payment Issue",
    description: "Having trouble processing payment for invoice INV-2024-002",
    status: "open",
    priority: "high",
    category: "billing",
    createdAt: "2024-02-22T09:15:00Z",
    updatedAt: "2024-02-22T09:15:00Z",
    messages: [
      {
        id: "msg-003",
        content: "I'm trying to pay invoice INV-2024-002 but the payment keeps failing. Can you help me resolve this?",
        author: "Sarah Johnson",
        timestamp: "2024-02-22T09:15:00Z",
        isStaff: false,
      },
    ],
  },
  {
    id: "ticket-003",
    title: "Smart Controls Setup Question",
    description: "Questions about the smart lighting controls installation",
    status: "resolved",
    priority: "low",
    category: "technical",
    createdAt: "2024-02-15T16:20:00Z",
    updatedAt: "2024-02-18T11:45:00Z",
    assignedTo: {
      name: "Carlos Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Lead Electrician",
    },
    messages: [
      {
        id: "msg-004",
        content: "Can you explain how the smart lighting controls will work once installed?",
        author: "Sarah Johnson",
        timestamp: "2024-02-15T16:20:00Z",
        isStaff: false,
      },
      {
        id: "msg-005",
        content:
          "The smart controls will allow you to manage lighting through a mobile app, set schedules, and monitor energy usage. I'll send you the user manual and setup guide.",
        author: "Carlos Martinez",
        timestamp: "2024-02-18T11:45:00Z",
        isStaff: true,
      },
    ],
  },
]

interface SupportTicketsProps {
  user: any
}

export function SupportTickets({ user }: SupportTicketsProps) {
  const [tickets, setTickets] = useState(mockTickets)
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)
  const [newMessage, setNewMessage] = useState("")
  const [isCreatingTicket, setIsCreatingTicket] = useState(false)
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    category: "general" as const,
    priority: "medium" as const,
  })

  const getStatusColor = (status: SupportTicket["status"]) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200"
      case "closed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: SupportTicket["priority"]) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: SupportTicket["status"]) => {
    switch (status) {
      case "open":
        return <MessageSquare className="h-4 w-4" />
      case "in-progress":
        return <Clock className="h-4 w-4" />
      case "resolved":
        return <CheckCircle className="h-4 w-4" />
      case "closed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return

    const message = {
      id: `msg-${Date.now()}`,
      content: newMessage,
      author: user.name,
      timestamp: new Date().toISOString(),
      isStaff: false,
    }

    const updatedTicket = {
      ...selectedTicket,
      messages: [...selectedTicket.messages, message],
      updatedAt: new Date().toISOString(),
    }

    setTickets(tickets.map((t) => (t.id === selectedTicket.id ? updatedTicket : t)))
    setSelectedTicket(updatedTicket)
    setNewMessage("")
  }

  const handleCreateTicket = () => {
    if (!newTicket.title.trim() || !newTicket.description.trim()) return

    const ticket: SupportTicket = {
      id: `ticket-${Date.now()}`,
      title: newTicket.title,
      description: newTicket.description,
      status: "open",
      priority: newTicket.priority,
      category: newTicket.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [
        {
          id: `msg-${Date.now()}`,
          content: newTicket.description,
          author: user.name,
          timestamp: new Date().toISOString(),
          isStaff: false,
        },
      ],
    }

    setTickets([ticket, ...tickets])
    setNewTicket({ title: "", description: "", category: "general", priority: "medium" })
    setIsCreatingTicket(false)
  }

  const openTickets = tickets.filter((t) => t.status === "open" || t.status === "in-progress")
  const resolvedTickets = tickets.filter((t) => t.status === "resolved" || t.status === "closed")

  return (
    <div className="space-y-6">
      {/* Support Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold">{tickets.filter((t) => t.status === "open").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">{tickets.filter((t) => t.status === "in-progress").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-bold">{tickets.filter((t) => t.status === "resolved").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">High Priority</p>
                <p className="text-2xl font-bold">{tickets.filter((t) => t.priority === "high").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Contact */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-yellow-800">Need Immediate Help?</h3>
              <p className="text-yellow-700">For urgent issues, contact us directly</p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Support
              </Button>
              <Button
                variant="outline"
                className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black bg-transparent"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Support Tickets</h2>
        <Dialog open={isCreatingTicket} onOpenChange={setIsCreatingTicket}>
          <DialogTrigger asChild>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Plus className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>Describe your issue and we'll help you resolve it quickly.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newTicket.title}
                  onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
                  placeholder="Brief description of your issue"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newTicket.category}
                  onValueChange={(value: any) => setNewTicket({ ...newTicket, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="project">Project</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newTicket.priority}
                  onValueChange={(value: any) => setNewTicket({ ...newTicket, priority: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newTicket.description}
                  onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                  placeholder="Provide detailed information about your issue"
                  rows={4}
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setIsCreatingTicket(false)} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleCreateTicket} className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                  Create Ticket
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Tickets ({openTickets.length})</TabsTrigger>
          <TabsTrigger value="resolved">Resolved ({resolvedTickets.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {openTickets.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Tickets</h3>
                <p className="text-gray-600 mb-4">You don't have any open support tickets at the moment.</p>
                <Button onClick={() => setIsCreatingTicket(true)} className="bg-yellow-600 hover:bg-yellow-700">
                  Create Your First Ticket
                </Button>
              </CardContent>
            </Card>
          ) : (
            openTickets.map((ticket) => (
              <Card key={ticket.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-lg">{ticket.title}</h4>
                        <Badge className={getStatusColor(ticket.status)}>
                          {getStatusIcon(ticket.status)}
                          <span className="ml-1">{ticket.status.replace("-", " ")}</span>
                        </Badge>
                        <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                        <Badge variant="outline">
                          <Tag className="h-3 w-3 mr-1" />
                          {ticket.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{ticket.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Created {new Date(ticket.createdAt).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Updated {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                        </span>
                        {ticket.assignedTo && (
                          <span className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>Assigned to {ticket.assignedTo.name}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedTicket(selectedTicket?.id === ticket.id ? null : ticket)}
                    >
                      {selectedTicket?.id === ticket.id ? "Hide" : "View"} Messages
                    </Button>
                  </div>

                  {/* Ticket Messages */}
                  {selectedTicket?.id === ticket.id && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {ticket.messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isStaff ? "justify-start" : "justify-end"} space-x-3`}
                          >
                            {message.isStaff && (
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.author} />
                                <AvatarFallback>
                                  {message.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div className={`max-w-[70%] ${message.isStaff ? "" : "order-first"}`}>
                              <div
                                className={`rounded-lg px-4 py-2 ${
                                  message.isStaff ? "bg-gray-100 text-gray-900" : "bg-yellow-600 text-black"
                                }`}
                              >
                                <p className="whitespace-pre-wrap">{message.content}</p>
                              </div>
                              <div
                                className={`text-xs text-gray-500 mt-1 ${message.isStaff ? "text-left" : "text-right"}`}
                              >
                                {message.author} • {new Date(message.timestamp).toLocaleString()}
                              </div>
                            </div>
                            {!message.isStaff && (
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex space-x-2">
                          <Textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            rows={3}
                            className="flex-1"
                          />
                          <div className="flex flex-col space-y-2">
                            <Button variant="outline" size="sm">
                              <Paperclip className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={handleSendMessage}
                              disabled={!newMessage.trim()}
                              size="sm"
                              className="bg-yellow-600 hover:bg-yellow-700"
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {resolvedTickets.map((ticket) => (
            <Card key={ticket.id} className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-lg">{ticket.title}</h4>
                      <Badge className={getStatusColor(ticket.status)}>
                        {getStatusIcon(ticket.status)}
                        <span className="ml-1">{ticket.status}</span>
                      </Badge>
                      <Badge variant="outline">
                        <Tag className="h-3 w-3 mr-1" />
                        {ticket.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{ticket.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Resolved {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                      </span>
                      {ticket.assignedTo && (
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Handled by {ticket.assignedTo.name}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
