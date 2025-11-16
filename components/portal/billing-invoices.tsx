"use client"

import { useState, useMemo } from "react"
import { DollarSign, Download, Eye, CreditCard, CheckCircle, AlertCircle, Clock, FileText, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDataStore, type Invoice } from "@/lib/data-store"

interface PaymentMethod {
  id: string
  type: "card" | "bank"
  last4: string
  brand?: string
  isDefault: boolean
  expiryDate?: string
}

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
  const { invoices, markInvoicePaid, projects, isLoading } = useDataStore()
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods)
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Get project name by ID
  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    return project?.name || "Unknown Project"
  }

  // Generate invoice number
  const getInvoiceNumber = (invoice: Invoice) => {
    const date = new Date(invoice.dueDate)
    const year = date.getFullYear()
    const index = invoices.findIndex(inv => inv.id === invoice.id) + 1
    return `INV-${year}-${String(index).padStart(3, "0")}`
  }

  // Generate line items based on invoice amount
  const generateLineItems = (invoice: Invoice) => {
    const projectName = getProjectName(invoice.projectId)
    const baseAmount = invoice.amount * 0.7
    const laborAmount = invoice.amount * 0.2
    const taxAmount = invoice.amount * 0.1

    return [
      {
        description: `${projectName} - Services`,
        quantity: 1,
        rate: baseAmount,
        amount: baseAmount,
      },
      {
        description: "Labor and Materials",
        quantity: 1,
        rate: laborAmount,
        amount: laborAmount,
      },
      {
        description: "Administrative Fees",
        quantity: 1,
        rate: taxAmount,
        amount: taxAmount,
      },
    ]
  }

  const getStatusColor = (status: Invoice["status"]) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 border-green-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Overdue":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: Invoice["status"]) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4" />
      case "Pending":
        return <Clock className="h-4 w-4" />
      case "Overdue":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesStatus = filterStatus === "all" || invoice.status.toLowerCase() === filterStatus.toLowerCase()
      const projectName = getProjectName(invoice.projectId)
      const invoiceNumber = getInvoiceNumber(invoice)
      const matchesSearch =
        searchTerm === "" ||
        invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        projectName.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesStatus && matchesSearch
    })
  }, [invoices, filterStatus, searchTerm, projects])

  const billingStats = useMemo(() => {
    const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
    const paidAmount = invoices
      .filter((inv) => inv.status === "Paid")
      .reduce((sum, invoice) => sum + invoice.amount, 0)
    const pendingAmount = invoices
      .filter((inv) => inv.status === "Pending" || inv.status === "Overdue")
      .reduce((sum, invoice) => sum + invoice.amount, 0)

    return {
      total: totalAmount,
      paid: paidAmount,
      pending: pendingAmount,
    }
  }, [invoices])

  const handlePayInvoice = (invoiceId: string) => {
    markInvoicePaid(invoiceId)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading invoices...</div>
      </div>
    )
  }

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
                <p className="text-2xl font-bold">${billingStats.total.toLocaleString()}</p>
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
                <p className="text-2xl font-bold">${billingStats.paid.toLocaleString()}</p>
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
                <p className="text-2xl font-bold">${billingStats.pending.toLocaleString()}</p>
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
            {filteredInvoices.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-gray-500">
                  No invoices found matching your criteria
                </CardContent>
              </Card>
            ) : (
              filteredInvoices.map((invoice) => {
                const projectName = getProjectName(invoice.projectId)
                const invoiceNumber = getInvoiceNumber(invoice)
                const lineItems = generateLineItems(invoice)
                const issueDate = new Date(invoice.dueDate)
                issueDate.setDate(issueDate.getDate() - 30)

                return (
                  <Card key={invoice.id} className="border-2 border-gray-200 hover:border-yellow-600/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{invoiceNumber}</h4>
                            <p className="text-sm text-gray-600">{projectName}</p>
                            <p className="text-xs text-gray-500">
                              Issued: {issueDate.toLocaleDateString()} • Due:{" "}
                              {new Date(invoice.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-2xl font-bold">${invoice.amount.toLocaleString()}</p>
                            <Badge className={`${getStatusColor(invoice.status)} flex items-center space-x-1`}>
                              {getStatusIcon(invoice.status)}
                              <span>{invoice.status}</span>
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedInvoiceId(selectedInvoiceId === invoice.id ? null : invoice.id)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            {invoice.status === "Pending" && (
                              <Button
                                size="sm"
                                className="bg-yellow-600 hover:bg-yellow-700"
                                onClick={() => handlePayInvoice(invoice.id)}
                              >
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Invoice Details */}
                      {selectedInvoiceId === invoice.id && (
                        <div className="mt-6 pt-6 border-t">
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium mb-2">Invoice Details</h5>
                              <p className="text-gray-600">
                                Services rendered for {projectName}. {invoice.description || "Standard billing cycle."}
                              </p>
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
                                    {lineItems.map((item, index) => (
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
                )
              })
            )}
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
                  .filter((inv) => inv.status === "Paid")
                  .map((invoice) => {
                    const projectName = getProjectName(invoice.projectId)
                    const invoiceNumber = getInvoiceNumber(invoice)

                    return (
                      <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{invoiceNumber}</p>
                            <p className="text-sm text-gray-600">
                              Paid on {new Date(invoice.dueDate).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-500">{projectName}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${invoice.amount.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">Visa ending 4242</p>
                        </div>
                      </div>
                    )
                  })}
                {invoices.filter((inv) => inv.status === "Paid").length === 0 && (
                  <div className="text-center text-gray-500 py-4">No payment history available</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
