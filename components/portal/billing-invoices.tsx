"use client"

import { useState } from "react"
import { DollarSign, Download, Eye, CreditCard, CheckCircle, AlertCircle, Clock, FileText, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Invoice {
  id: string
  number: string
  date: string
  dueDate: string
  amount: number
  status: "paid" | "pending" | "overdue" | "draft"
  project: string
  description: string
  items: Array<{
    description: string
    quantity: number
    rate: number
    amount: number
  }>
}

interface PaymentMethod {
  id: string
  type: "card" | "bank"
  last4: string
  brand?: string
  isDefault: boolean
  expiryDate?: string
}

const mockInvoices: Invoice[] = [
  {
    id: "inv-001",
    number: "INV-2024-001",
    date: "2024-02-15",
    dueDate: "2024-03-15",
    amount: 15750,
    status: "paid",
    project: "Office Electrical Upgrade",
    description: "Electrical panel installation and LED lighting",
    items: [
      { description: "Electrical Panel Installation", quantity: 2, rate: 2500, amount: 5000 },
      { description: "LED Lighting Installation", quantity: 50, rate: 125, amount: 6250 },
      { description: "Labor and Materials", quantity: 1, rate: 4500, amount: 4500 },
    ],
  },
  {
    id: "inv-002",
    number: "INV-2024-002",
    date: "2024-02-28",
    dueDate: "2024-03-30",
    amount: 8500,
    status: "pending",
    project: "Warehouse Renovation",
    description: "Initial planning and permit fees",
    items: [
      { description: "Architectural Planning", quantity: 1, rate: 5000, amount: 5000 },
      { description: "Permit Applications", quantity: 1, rate: 2500, amount: 2500 },
      { description: "Site Assessment", quantity: 1, rate: 1000, amount: 1000 },
    ],
  },
  {
    id: "inv-003",
    number: "INV-2024-003",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    amount: 3200,
    status: "overdue",
    project: "Emergency Electrical Repair",
    description: "Emergency electrical repair services",
    items: [
      { description: "Emergency Service Call", quantity: 1, rate: 500, amount: 500 },
      { description: "Electrical Repairs", quantity: 4, rate: 675, amount: 2700 },
    ],
  },
]

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "pm-001",
    type: "card",
    last4: "4242",
    brand: "Visa",
    isDefault: true,
    expiryDate: "12/26",
  },
  {
    id: "pm-002",
    type: "bank",
    last4: "1234",
    isDefault: false,
  },
]

interface BillingInvoicesProps {
  user: any
}

export function BillingInvoices({ user }: BillingInvoicesProps) {
  const [invoices, setInvoices] = useState(mockInvoices)
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods)
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200"
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: Invoice["status"]) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "overdue":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesStatus = filterStatus === "all" || invoice.status === filterStatus
    const matchesSearch =
      searchTerm === "" ||
      invoice.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.project.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const paidAmount = invoices.filter((inv) => inv.status === "paid").reduce((sum, invoice) => sum + invoice.amount, 0)
  const pendingAmount = invoices
    .filter((inv) => inv.status === "pending" || inv.status === "overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="space-y-6">
      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Billed</p>
                <p className="text-2xl font-bold">${totalAmount.toLocaleString()}</p>
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
                <p className="text-sm font-medium text-gray-600">Paid</p>
                <p className="text-2xl font-bold">${paidAmount.toLocaleString()}</p>
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
                <p className="text-sm font-medium text-gray-600">Outstanding</p>
                <p className="text-2xl font-bold">${pendingAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  placeholder="Search invoices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Invoices List */}
          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <Card key={invoice.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{invoice.number}</h4>
                        <p className="text-sm text-gray-600">{invoice.project}</p>
                        <p className="text-xs text-gray-500">
                          Issued: {new Date(invoice.date).toLocaleDateString()} • Due:{" "}
                          {new Date(invoice.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold">${invoice.amount.toLocaleString()}</p>
                        <Badge className={`${getStatusColor(invoice.status)} flex items-center space-x-1`}>
                          {getStatusIcon(invoice.status)}
                          <span>{invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</span>
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedInvoice(selectedInvoice?.id === invoice.id ? null : invoice)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        {invoice.status === "pending" && (
                          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Invoice Details */}
                  {selectedInvoice?.id === invoice.id && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2">Invoice Details</h5>
                          <p className="text-gray-600">{invoice.description}</p>
                        </div>

                        <div>
                          <h5 className="font-medium mb-3">Line Items</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-2">Description</th>
                                  <th className="text-right py-2">Qty</th>
                                  <th className="text-right py-2">Rate</th>
                                  <th className="text-right py-2">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {invoice.items.map((item, index) => (
                                  <tr key={index} className="border-b">
                                    <td className="py-2">{item.description}</td>
                                    <td className="text-right py-2">{item.quantity}</td>
                                    <td className="text-right py-2">${item.rate.toLocaleString()}</td>
                                    <td className="text-right py-2">${item.amount.toLocaleString()}</td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot>
                                <tr className="font-semibold">
                                  <td colSpan={3} className="text-right py-2">
                                    Total:
                                  </td>
                                  <td className="text-right py-2">${invoice.amount.toLocaleString()}</td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods for automatic billing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {method.type === "card" ? method.brand : "Bank Account"} ending in {method.last4}
                      </p>
                      {method.expiryDate && <p className="text-sm text-gray-600">Expires {method.expiryDate}</p>}
                      {method.isDefault && <Badge className="bg-yellow-100 text-yellow-800">Default</Badge>}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Add Payment Method</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your past payments and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices
                  .filter((inv) => inv.status === "paid")
                  .map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{invoice.number}</p>
                          <p className="text-sm text-gray-600">Paid on {new Date(invoice.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${invoice.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Visa •••• 4242</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
