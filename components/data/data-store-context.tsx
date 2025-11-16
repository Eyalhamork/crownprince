"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getStorageItem, setStorageItem, generateId, formatDate } from "@/lib/local-storage";
import {
  Project,
  Task,
  Quote,
  Notification,
  Invoice,
  Message,
  seedProjects,
  seedTasks,
  seedQuotes,
  seedNotifications,
  seedInvoices,
  seedMessages,
} from "@/lib/mock-data";

interface DataStoreContextType {
  // Projects
  projects: Project[];
  getProject: (id: string) => Project | undefined;
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => Project;
  updateProject: (id: string, updates: Partial<Project>) => Project | undefined;
  deleteProject: (id: string) => boolean;

  // Tasks
  tasks: Task[];
  getTask: (id: string) => Task | undefined;
  getTasksByProject: (projectId: string) => Task[];
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => Task;
  updateTask: (id: string, updates: Partial<Task>) => Task | undefined;
  deleteTask: (id: string) => boolean;

  // Quotes
  quotes: Quote[];
  getQuote: (id: string) => Quote | undefined;
  addQuote: (quote: Omit<Quote, "id" | "referenceNumber" | "createdAt" | "updatedAt">) => Quote;
  updateQuote: (id: string, updates: Partial<Quote>) => Quote | undefined;
  deleteQuote: (id: string) => boolean;

  // Notifications
  notifications: Notification[];
  getUnreadNotifications: (userId: string) => Notification[];
  addNotification: (notification: Omit<Notification, "id" | "createdAt">) => Notification;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: (userId: string) => void;
  deleteNotification: (id: string) => boolean;

  // Invoices
  invoices: Invoice[];
  getInvoice: (id: string) => Invoice | undefined;
  getInvoicesByClient: (clientId: string) => Invoice[];
  addInvoice: (invoice: Omit<Invoice, "id" | "invoiceNumber" | "createdAt" | "updatedAt">) => Invoice;
  updateInvoice: (id: string, updates: Partial<Invoice>) => Invoice | undefined;
  deleteInvoice: (id: string) => boolean;

  // Messages
  messages: Message[];
  getMessagesByUser: (userId: string) => Message[];
  getConversation: (conversationId: string) => Message[];
  addMessage: (message: Omit<Message, "id" | "createdAt">) => Message;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => boolean;

  // Utility
  isLoading: boolean;
  resetToSeedData: () => void;
  clearAllData: () => void;
}

const DataStoreContext = createContext<DataStoreContextType | undefined>(undefined);

const STORAGE_KEYS = {
  projects: "data_projects",
  tasks: "data_tasks",
  quotes: "data_quotes",
  notifications: "data_notifications",
  invoices: "data_invoices",
  messages: "data_messages",
  initialized: "data_initialized",
};

export function DataStoreProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize data from localStorage or seed data
  useEffect(() => {
    const initializeData = () => {
      const isInitialized = getStorageItem<boolean>(STORAGE_KEYS.initialized, false);

      if (!isInitialized) {
        // First time - use seed data
        setProjects(seedProjects);
        setTasks(seedTasks);
        setQuotes(seedQuotes);
        setNotifications(seedNotifications);
        setInvoices(seedInvoices);
        setMessages(seedMessages);

        // Save to localStorage
        setStorageItem(STORAGE_KEYS.projects, seedProjects);
        setStorageItem(STORAGE_KEYS.tasks, seedTasks);
        setStorageItem(STORAGE_KEYS.quotes, seedQuotes);
        setStorageItem(STORAGE_KEYS.notifications, seedNotifications);
        setStorageItem(STORAGE_KEYS.invoices, seedInvoices);
        setStorageItem(STORAGE_KEYS.messages, seedMessages);
        setStorageItem(STORAGE_KEYS.initialized, true);
      } else {
        // Load from localStorage
        setProjects(getStorageItem<Project[]>(STORAGE_KEYS.projects, seedProjects));
        setTasks(getStorageItem<Task[]>(STORAGE_KEYS.tasks, seedTasks));
        setQuotes(getStorageItem<Quote[]>(STORAGE_KEYS.quotes, seedQuotes));
        setNotifications(getStorageItem<Notification[]>(STORAGE_KEYS.notifications, seedNotifications));
        setInvoices(getStorageItem<Invoice[]>(STORAGE_KEYS.invoices, seedInvoices));
        setMessages(getStorageItem<Message[]>(STORAGE_KEYS.messages, seedMessages));
      }

      setIsLoading(false);
    };

    initializeData();
  }, []);

  // Persist changes to localStorage
  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.projects, projects);
    }
  }, [projects, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.tasks, tasks);
    }
  }, [tasks, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.quotes, quotes);
    }
  }, [quotes, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.notifications, notifications);
    }
  }, [notifications, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.invoices, invoices);
    }
  }, [invoices, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setStorageItem(STORAGE_KEYS.messages, messages);
    }
  }, [messages, isLoading]);

  // Project operations
  const getProject = useCallback((id: string) => projects.find((p) => p.id === id), [projects]);

  const addProject = useCallback((projectData: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const now = formatDate(new Date());
    const newProject: Project = {
      ...projectData,
      id: generateId("proj"),
      createdAt: now,
      updatedAt: now,
    };
    setProjects((prev) => [...prev, newProject]);
    return newProject;
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    let updatedProject: Project | undefined;
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          updatedProject = { ...p, ...updates, updatedAt: formatDate(new Date()) };
          return updatedProject;
        }
        return p;
      })
    );
    return updatedProject;
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    // Also delete related tasks
    setTasks((prev) => prev.filter((t) => t.projectId !== id));
    return true;
  }, []);

  // Task operations
  const getTask = useCallback((id: string) => tasks.find((t) => t.id === id), [tasks]);

  const getTasksByProject = useCallback((projectId: string) => tasks.filter((t) => t.projectId === projectId), [tasks]);

  const addTask = useCallback((taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const now = formatDate(new Date());
    const newTask: Task = {
      ...taskData,
      id: generateId("task"),
      createdAt: now,
      updatedAt: now,
    };
    setTasks((prev) => [...prev, newTask]);
    return newTask;
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    let updatedTask: Task | undefined;
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          updatedTask = {
            ...t,
            ...updates,
            updatedAt: formatDate(new Date()),
            completedAt: updates.status === "completed" && !t.completedAt ? formatDate(new Date()) : t.completedAt,
          };
          return updatedTask;
        }
        return t;
      })
    );
    return updatedTask;
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    return true;
  }, []);

  // Quote operations
  const getQuote = useCallback((id: string) => quotes.find((q) => q.id === id), [quotes]);

  const addQuote = useCallback((quoteData: Omit<Quote, "id" | "referenceNumber" | "createdAt" | "updatedAt">) => {
    const now = formatDate(new Date());
    const refNum = `QT-${new Date().getFullYear()}-${String(quotes.length + 1).padStart(3, "0")}`;
    const newQuote: Quote = {
      ...quoteData,
      id: generateId("quote"),
      referenceNumber: refNum,
      createdAt: now,
      updatedAt: now,
    };
    setQuotes((prev) => [...prev, newQuote]);
    return newQuote;
  }, [quotes.length]);

  const updateQuote = useCallback((id: string, updates: Partial<Quote>) => {
    let updatedQuote: Quote | undefined;
    setQuotes((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          updatedQuote = { ...q, ...updates, updatedAt: formatDate(new Date()) };
          return updatedQuote;
        }
        return q;
      })
    );
    return updatedQuote;
  }, []);

  const deleteQuote = useCallback((id: string) => {
    setQuotes((prev) => prev.filter((q) => q.id !== id));
    return true;
  }, []);

  // Notification operations
  const getUnreadNotifications = useCallback(
    (userId: string) =>
      notifications.filter((n) => !n.read && (n.userId === userId || n.userId === "all")),
    [notifications]
  );

  const addNotification = useCallback((notifData: Omit<Notification, "id" | "createdAt">) => {
    const newNotification: Notification = {
      ...notifData,
      id: generateId("notif"),
      createdAt: formatDate(new Date()),
    };
    setNotifications((prev) => [newNotification, ...prev]);
    return newNotification;
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const markAllNotificationsRead = useCallback((userId: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.userId === userId || n.userId === "all" ? { ...n, read: true } : n))
    );
  }, []);

  const deleteNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    return true;
  }, []);

  // Invoice operations
  const getInvoice = useCallback((id: string) => invoices.find((i) => i.id === id), [invoices]);

  const getInvoicesByClient = useCallback(
    (clientId: string) => invoices.filter((i) => i.clientId === clientId),
    [invoices]
  );

  const addInvoice = useCallback((invoiceData: Omit<Invoice, "id" | "invoiceNumber" | "createdAt" | "updatedAt">) => {
    const now = formatDate(new Date());
    const invNum = `INV-${new Date().getFullYear()}-${String(invoices.length + 159).padStart(4, "0")}`;
    const newInvoice: Invoice = {
      ...invoiceData,
      id: generateId("inv"),
      invoiceNumber: invNum,
      createdAt: now,
      updatedAt: now,
    };
    setInvoices((prev) => [...prev, newInvoice]);
    return newInvoice;
  }, [invoices.length]);

  const updateInvoice = useCallback((id: string, updates: Partial<Invoice>) => {
    let updatedInvoice: Invoice | undefined;
    setInvoices((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          updatedInvoice = { ...i, ...updates, updatedAt: formatDate(new Date()) };
          return updatedInvoice;
        }
        return i;
      })
    );
    return updatedInvoice;
  }, []);

  const deleteInvoice = useCallback((id: string) => {
    setInvoices((prev) => prev.filter((i) => i.id !== id));
    return true;
  }, []);

  // Message operations
  const getMessagesByUser = useCallback(
    (userId: string) =>
      messages.filter((m) => m.senderId === userId || m.recipientId === userId).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [messages]
  );

  const getConversation = useCallback(
    (conversationId: string) =>
      messages.filter((m) => m.conversationId === conversationId).sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      ),
    [messages]
  );

  const addMessage = useCallback((messageData: Omit<Message, "id" | "createdAt">) => {
    const newMessage: Message = {
      ...messageData,
      id: generateId("msg"),
      createdAt: formatDate(new Date()),
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  }, []);

  const markMessageRead = useCallback((id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  }, []);

  const deleteMessage = useCallback((id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    return true;
  }, []);

  // Utility operations
  const resetToSeedData = useCallback(() => {
    setProjects(seedProjects);
    setTasks(seedTasks);
    setQuotes(seedQuotes);
    setNotifications(seedNotifications);
    setInvoices(seedInvoices);
    setMessages(seedMessages);
  }, []);

  const clearAllData = useCallback(() => {
    setProjects([]);
    setTasks([]);
    setQuotes([]);
    setNotifications([]);
    setInvoices([]);
    setMessages([]);
  }, []);

  const value: DataStoreContextType = {
    // Projects
    projects,
    getProject,
    addProject,
    updateProject,
    deleteProject,

    // Tasks
    tasks,
    getTask,
    getTasksByProject,
    addTask,
    updateTask,
    deleteTask,

    // Quotes
    quotes,
    getQuote,
    addQuote,
    updateQuote,
    deleteQuote,

    // Notifications
    notifications,
    getUnreadNotifications,
    addNotification,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,

    // Invoices
    invoices,
    getInvoice,
    getInvoicesByClient,
    addInvoice,
    updateInvoice,
    deleteInvoice,

    // Messages
    messages,
    getMessagesByUser,
    getConversation,
    addMessage,
    markMessageRead,
    deleteMessage,

    // Utility
    isLoading,
    resetToSeedData,
    clearAllData,
  };

  return <DataStoreContext.Provider value={value}>{children}</DataStoreContext.Provider>;
}

export function useDataStore() {
  const context = useContext(DataStoreContext);
  if (context === undefined) {
    throw new Error("useDataStore must be used within a DataStoreProvider");
  }
  return context;
}
