"use client"

import { useState, useMemo } from "react"
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
import { useDataStore } from "@/lib/data-store"

export function CRMSystem() {
  const [searchTerm, setSearchTerm] = useState("")
  const { clients, leads, activities, convertLeadToClient, addActivity } = useDataStore()

  // Filter clients based on search
  const filteredClients = useMemo(() => {
    if (!searchTerm) return clients
    const search = searchTerm.toLowerCase()
    return clients.filter(client =>
      client.name.toLowerCase().includes(search) ||
      client.contact.toLowerCase().includes(search) ||
      client.email.toLowerCase().includes(search) ||
      client.type.toLowerCase().includes(search)
    )
  }, [clients, searchTerm])

  // Filter leads based on search
  const filteredLeads = useMemo(() => {
    if (!searchTerm) return leads
    const search = searchTerm.toLowerCase()
    return leads.filter(lead =>
      lead.name.toLowerCase().includes(search) ||
      lead.contact.toLowerCase().includes(search) ||
      lead.email.toLowerCase().includes(search) ||
      lead.service.toLowerCase().includes(search)
    )
  }, [leads, searchTerm])

  // Filter activities based on search
  const filteredActivities = useMemo(() => {
    if (!searchTerm) return activities
    const search = searchTerm.toLowerCase()
    return activities.filter(activity =>
      activity.clientName.toLowerCase().includes(search) ||
      activity.description.toLowerCase().includes(search) ||
      activity.type.toLowerCase().includes(search)
    )
  }, [activities, searchTerm])

  const handleConvertLead = (leadId: string) => {
    convertLeadToClient(leadId)
  }

  const handleLogCall = (clientId: string, clientName: string) => {
    addActivity({
      type: "Call",
      clientId,
      clientName,
      description: "Outbound call - follow up",
      date: new Date().toISOString().split("T")[0],
      staffId: "EMP-001",
      staffName: "Current User",
    })
  }

  const handleSendEmail = (clientId: string, clientName: string) => {
    addActivity({
      type: "Email",
      clientId,
      clientName,
      description: "Email sent",
      date: new Date().toISOString().split("T")[0],
      staffId: "EMP-001",
      staffName: "Current User",
    })
  }

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
          <TabsTrigger value="clients">Clients ({filteredClients.length})</TabsTrigger>
          <TabsTrigger value="leads">Leads ({filteredLeads.length})</TabsTrigger>
          <TabsTrigger value="activities">Activities ({filteredActivities.length})</TabsTrigger>
        </TabsList>

        {/* Clients Tab */}
        <TabsContent value="clients">
          <div className="grid gap-6">
            {filteredClients.length === 0 ? (
              <Card className="bg-white shadow-md">
                <CardContent className="pt-6 text-center text-gray-500">
                  No clients found matching your search.
                </CardContent>
              </Card>
            ) : (
              filteredClients.map((client) => (
                <Card key={client.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                          {client.type === "Corporate" || client.type === "Industrial" ? (
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
                          <div className="flex items-center space-x-1 justify-end">
                            <DollarSign className="h-3 w-3" />
                            <span>${client.totalValue.toLocaleString()}</span>
                          </div>
                          <div>{client.projectCount} projects</div>
                          <div>Last contact: {client.lastContact}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline">{client.type}</Badge>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleLogCall(client.id, client.name)}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSendEmail(client.id, client.name)}
                        >
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
              ))
            )}
          </div>
        </TabsContent>

        {/* Leads Tab */}
        <TabsContent value="leads">
          <div className="grid gap-6">
            {filteredLeads.length === 0 ? (
              <Card className="bg-white shadow-md">
                <CardContent className="pt-6 text-center text-gray-500">
                  No leads found matching your search.
                </CardContent>
              </Card>
            ) : (
              filteredLeads.map((lead) => (
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
                        {lead.notes && (
                          <p className="text-sm text-gray-500 italic">{lead.notes}</p>
                        )}
                      </div>
                      <div className="text-right space-y-2">
                        <Badge
                          variant={lead.status === "New" ? "destructive" : "default"}
                          className={
                            lead.status === "Qualified"
                              ? "bg-blue-100 text-blue-800"
                              : lead.status === "Converted"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {lead.status}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center space-x-1 justify-end">
                            <DollarSign className="h-3 w-3" />
                            <span>${lead.estimatedValue.toLocaleString()}</span>
                          </div>
                          <div>Created: {lead.createdAt.split("T")[0]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-2">
                      {lead.status !== "Converted" && lead.status !== "Lost" && (
                        <Button
                          size="sm"
                          className="bg-yellow-600 hover:bg-yellow-700"
                          onClick={() => handleConvertLead(lead.id)}
                        >
                          Convert to Client
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        Schedule Call
                      </Button>
                      <Button size="sm" variant="outline">
                        Send Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities">
          <div className="space-y-4">
            {filteredActivities.length === 0 ? (
              <Card className="bg-white shadow-md">
                <CardContent className="pt-6 text-center text-gray-500">
                  No activities found matching your search.
                </CardContent>
              </Card>
            ) : (
              filteredActivities.map((activity) => (
                <Card key={activity.id} className="bg-white shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        {activity.type === "Call" && <Phone className="h-4 w-4 text-yellow-600" />}
                        {activity.type === "Email" && <Mail className="h-4 w-4 text-yellow-600" />}
                        {activity.type === "Meeting" && <Calendar className="h-4 w-4 text-yellow-600" />}
                        {activity.type === "Note" && <MoreHorizontal className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {activity.type} - {activity.clientName}
                            </h4>
                            <p className="text-gray-600 mt-1">{activity.description}</p>
                          </div>
                          <div className="text-right text-sm text-gray-600">
                            <div>{activity.date}</div>
                            <div>{activity.staffName}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
