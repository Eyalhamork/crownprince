"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  User,
  Building,
  Filter,
  MoreHorizontal,
} from "lucide-react"

export function CRMSystem() {
  const [searchTerm, setSearchTerm] = useState("")

  const clients = [
    {
      id: "CL-001",
      name: "Metro Corporation",
      contact: "John Smith",
      email: "john@metro.com",
      phone: "+1 (555) 123-4567",
      address: "123 Business Ave, Downtown",
      status: "Active",
      value: "$450,000",
      projects: 3,
      lastContact: "2024-01-15",
      type: "Corporate",
    },
    {
      id: "CL-002",
      name: "Johnson Family",
      contact: "Sarah Johnson",
      email: "sarah@email.com",
      phone: "+1 (555) 987-6543",
      address: "456 Residential St, Suburbs",
      status: "Active",
      value: "$75,000",
      projects: 1,
      lastContact: "2024-01-12",
      type: "Residential",
    },
    {
      id: "CL-003",
      name: "Supply Chain Inc",
      contact: "Mike Wilson",
      email: "mike@supply.com",
      phone: "+1 (555) 456-7890",
      address: "789 Industrial Blvd, Warehouse District",
      status: "Prospect",
      value: "$200,000",
      projects: 0,
      lastContact: "2024-01-10",
      type: "Industrial",
    },
  ]

  const leads = [
    {
      id: "LD-001",
      name: "Tech Startup Hub",
      contact: "Alex Chen",
      email: "alex@techstartup.com",
      phone: "+1 (555) 111-2222",
      source: "Website",
      status: "New",
      value: "$125,000",
      service: "Electrical",
      created: "2024-01-16",
    },
    {
      id: "LD-002",
      name: "Green Energy Co",
      contact: "Lisa Park",
      email: "lisa@greenenergy.com",
      phone: "+1 (555) 333-4444",
      source: "Referral",
      status: "Qualified",
      value: "$300,000",
      service: "Construction",
      created: "2024-01-14",
    },
  ]

  const activities = [
    {
      id: "ACT-001",
      type: "Call",
      client: "Metro Corporation",
      description: "Discussed project timeline and budget adjustments",
      date: "2024-01-15",
      staff: "David Crown",
    },
    {
      id: "ACT-002",
      type: "Email",
      client: "Johnson Family",
      description: "Sent project completion photos and final invoice",
      date: "2024-01-12",
      staff: "Sarah Mitchell",
    },
    {
      id: "ACT-003",
      type: "Meeting",
      client: "Supply Chain Inc",
      description: "Site visit and requirements assessment",
      date: "2024-01-10",
      staff: "Michael Torres",
    },
  ]

  return (
    <div className="space-y-6">
      {/* CRM Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Relationship Management</h2>
          <p className="text-gray-600">Manage clients, leads, and customer interactions</p>
        </div>
        <Button className="bg-yellow-600 hover:bg-yellow-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search clients, leads, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* CRM Tabs */}
      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-md">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        {/* Clients Tab */}
        <TabsContent value="clients">
          <div className="grid gap-6">
            {clients.map((client) => (
              <Card key={client.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        {client.type === "Corporate" ? (
                          <Building className="h-6 w-6 text-yellow-600" />
                        ) : (
                          <User className="h-6 w-6 text-yellow-600" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                          <p className="text-gray-600">{client.contact}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span>{client.email}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{client.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          <span>{client.address}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge
                        variant={client.status === "Active" ? "default" : "secondary"}
                        className={client.status === "Active" ? "bg-green-100 text-green-800" : ""}
                      >
                        {client.status}
                      </Badge>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>{client.value}</span>
                        </div>
                        <div>{client.projects} projects</div>
                        <div>Last contact: {client.lastContact}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="outline">{client.type}</Badge>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Leads Tab */}
        <TabsContent value="leads">
          <div className="grid gap-6">
            {leads.map((lead) => (
              <Card key={lead.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                        <p className="text-gray-600">{lead.contact}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{lead.phone}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge variant="outline">Source: {lead.source}</Badge>
                        <Badge variant="outline">Service: {lead.service}</Badge>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge
                        variant={lead.status === "New" ? "destructive" : "default"}
                        className={lead.status === "Qualified" ? "bg-blue-100 text-blue-800" : ""}
                      >
                        {lead.status}
                      </Badge>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>{lead.value}</span>
                        </div>
                        <div>Created: {lead.created}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      Convert to Client
                    </Button>
                    <Button size="sm" variant="outline">
                      Schedule Call
                    </Button>
                    <Button size="sm" variant="outline">
                      Send Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities">
          <div className="space-y-4">
            {activities.map((activity) => (
              <Card key={activity.id} className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      {activity.type === "Call" && <Phone className="h-4 w-4 text-yellow-600" />}
                      {activity.type === "Email" && <Mail className="h-4 w-4 text-yellow-600" />}
                      {activity.type === "Meeting" && <Calendar className="h-4 w-4 text-yellow-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {activity.type} - {activity.client}
                          </h4>
                          <p className="text-gray-600 mt-1">{activity.description}</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <div>{activity.date}</div>
                          <div>{activity.staff}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
