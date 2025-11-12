"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Award,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react"

export function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const employees = [
    {
      id: "EMP-001",
      name: "David Crown",
      position: "CEO & Founder",
      department: "Executive",
      email: "david@crownprince.com",
      phone: "+1 (555) 100-0001",
      address: "123 Executive Ave, Downtown",
      salary: "$150,000",
      startDate: "2020-01-01",
      status: "Active",
      projects: ["PRJ-001", "PRJ-003"],
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
      salary: "$75,000",
      startDate: "2021-03-15",
      status: "Active",
      projects: ["PRJ-001", "PRJ-002"],
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
      salary: "$85,000",
      startDate: "2020-08-20",
      status: "Active",
      projects: ["PRJ-001"],
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
      salary: "$65,000",
      startDate: "2022-01-10",
      status: "Active",
      projects: ["PRJ-002", "PRJ-003"],
      skills: ["Supply Chain", "Inventory Management", "Coordination"],
      performance: 90,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const departments = [
    { name: "Executive", count: 1, budget: "$150,000" },
    { name: "Electrical", count: 8, budget: "$600,000" },
    { name: "Construction", count: 12, budget: "$1,020,000" },
    { name: "Logistics", count: 6, budget: "$390,000" },
  ]

  const timeOffRequests = [
    {
      id: "TO-001",
      employee: "Sarah Mitchell",
      type: "Vacation",
      startDate: "2024-02-15",
      endDate: "2024-02-20",
      days: 5,
      status: "Pending",
      reason: "Family vacation",
    },
    {
      id: "TO-002",
      employee: "Michael Torres",
      type: "Sick Leave",
      startDate: "2024-01-18",
      endDate: "2024-01-19",
      days: 2,
      status: "Approved",
      reason: "Medical appointment",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "On Leave":
        return "bg-yellow-100 text-yellow-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Employee Management Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Employee Management</h2>
          <p className="text-gray-600">Manage staff, departments, and HR operations</p>
        </div>
        <Button className="bg-yellow-600 hover:bg-yellow-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search employees..."
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

      {/* Employee Tabs */}
      <Tabs defaultValue="employees" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white shadow-md">
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="timeoff">Time Off</TabsTrigger>
        </TabsList>

        {/* Employees Tab */}
        <TabsContent value="employees">
          <div className="grid gap-6">
            {employees.map((employee) => (
              <Card key={employee.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <img
                        src={employee.avatar || "/placeholder.svg"}
                        alt={employee.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="space-y-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
                          <p className="text-gray-600">{employee.position}</p>
                          <p className="text-sm text-gray-500">{employee.department}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span>{employee.email}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{employee.phone}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          <span>{employee.address}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>{employee.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Since {employee.startDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="h-3 w-3" />
                          <span>{employee.performance}% Performance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {employee.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Current Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {employee.projects.map((project, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center space-x-2">
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      Edit Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Departments Tab */}
        <TabsContent value="departments">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{dept.name}</span>
                    <Badge variant="secondary">{dept.count} employees</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Budget</span>
                    <span className="font-semibold">{dept.budget}</span>
                  </div>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">View Department</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Time Off Tab */}
        <TabsContent value="timeoff">
          <div className="space-y-4">
            {timeOffRequests.map((request) => (
              <Card key={request.id} className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{request.employee}</h3>
                        <p className="text-gray-600">{request.type}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {request.startDate} to {request.endDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{request.days} days</span>
                        </div>
                        <p className="mt-1">{request.reason}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge
                        variant={request.status === "Approved" ? "default" : "secondary"}
                        className={
                          request.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : ""
                        }
                      >
                        {request.status}
                      </Badge>
                      {request.status === "Pending" && (
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            Deny
                          </Button>
                        </div>
                      )}
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
