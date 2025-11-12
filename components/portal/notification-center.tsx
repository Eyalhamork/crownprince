"use client"

import { useState } from "react"
import { Bell, Check, X, AlertCircle, Info, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  timestamp: string
  read: boolean
  actionUrl?: string
  actionLabel?: string
}

const mockNotifications: Notification[] = [
  {
    id: "notif-001",
    title: "Project Milestone Completed",
    message: "LED lighting installation has been completed for your Office Electrical Upgrade project.",
    type: "success",
    timestamp: "2024-02-21T14:30:00Z",
    read: false,
    actionUrl: "/portal?tab=projects",
    actionLabel: "View Project",
  },
  {
    id: "notif-002",
    title: "Invoice Payment Due",
    message: "Invoice INV-2024-002 is due in 3 days. Please review and process payment.",
    type: "warning",
    timestamp: "2024-02-20T09:00:00Z",
    read: false,
    actionUrl: "/portal?tab=billing",
    actionLabel: "Pay Invoice",
  },
  {
    id: "notif-003",
    title: "Support Ticket Updated",
    message: "Your support ticket #001 has been updated with a response from Mike Rodriguez.",
    type: "info",
    timestamp: "2024-02-19T16:45:00Z",
    read: true,
    actionUrl: "/portal?tab=support",
    actionLabel: "View Ticket",
  },
  {
    id: "notif-004",
    title: "New Document Available",
    message: "Safety inspection certificate has been uploaded to your document library.",
    type: "info",
    timestamp: "2024-02-18T11:20:00Z",
    read: true,
    actionUrl: "/portal?tab=documents",
    actionLabel: "View Document",
  },
  {
    id: "notif-005",
    title: "Project Schedule Update",
    message: "The timeline for your Warehouse Renovation project has been updated.",
    type: "info",
    timestamp: "2024-02-17T13:15:00Z",
    read: true,
    actionUrl: "/portal?tab=projects",
    actionLabel: "View Schedule",
  },
]

export function NotificationCenter() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Info className="h-4 w-4 text-blue-600" />
    }
  }

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "border-l-green-500"
      case "warning":
        return "border-l-yellow-500"
      case "error":
        return "border-l-red-500"
      default:
        return "border-l-blue-500"
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  const unreadNotifications = notifications.filter((n) => !n.read)
  const readNotifications = notifications.filter((n) => n.read)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative text-white hover:bg-white/10">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
                  Mark all read
                </Button>
              )}
            </div>
            {unreadCount > 0 && <CardDescription>You have {unreadCount} unread notifications</CardDescription>}
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mx-4 mb-4">
                <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No notifications yet</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-l-4 ${getNotificationColor(notification.type)} ${
                            !notification.read ? "bg-blue-50" : "bg-white"
                          } hover:bg-gray-50 transition-colors`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-medium text-sm">{notification.title}</h4>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatTimestamp(notification.timestamp)}</span>
                                  </span>
                                  {notification.actionUrl && (
                                    <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                                      {notification.actionLabel}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 ml-2">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                  className="h-6 w-6 p-0"
                                >
                                  <Check className="h-3 w-3" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteNotification(notification.id)}
                                className="h-6 w-6 p-0 text-gray-400 hover:text-red-600"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="unread" className="mt-0">
                <div className="max-h-96 overflow-y-auto">
                  {unreadNotifications.length === 0 ? (
                    <div className="p-8 text-center">
                      <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-600">All caught up!</p>
                      <p className="text-sm text-gray-500">No unread notifications</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {unreadNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-l-4 ${getNotificationColor(notification.type)} bg-blue-50 hover:bg-gray-50 transition-colors`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3 flex-1">
                              <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-medium text-sm">{notification.title}</h4>
                                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatTimestamp(notification.timestamp)}</span>
                                  </span>
                                  {notification.actionUrl && (
                                    <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                                      {notification.actionLabel}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 ml-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-6 w-6 p-0"
                              >
                                <Check className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteNotification(notification.id)}
                                className="h-6 w-6 p-0 text-gray-400 hover:text-red-600"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
