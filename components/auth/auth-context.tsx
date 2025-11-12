"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type UserRole = "admin" | "manager" | "staff" | "client";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  company?: string;
  phone?: string;
  avatar?: string;
  permissions: string[];
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: UserRole | UserRole[]) => boolean;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  company?: string;
  role: UserRole;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Role-based permissions
const rolePermissions: Record<UserRole, string[]> = {
  admin: [
    "admin.full_access",
    "users.manage",
    "projects.manage",
    "finances.manage",
    "analytics.view",
    "settings.manage",
    "reports.generate",
    "staff.manage",
    "clients.manage",
  ],
  manager: [
    "projects.manage",
    "staff.view",
    "clients.manage",
    "reports.view",
    "analytics.view",
    "tasks.manage",
    "finances.view",
  ],
  staff: [
    "projects.view",
    "tasks.manage",
    "clients.view",
    "reports.view",
    "profile.edit",
  ],
  client: [
    "portal.access",
    "projects.view_own",
    "invoices.view_own",
    "profile.edit",
    "support.create",
  ],
};

// Mock user database
const mockUsers: Record<string, User> = {
  "admin@crownprince.com": {
    id: "admin-1",
    email: "admin@crownprince.com",
    firstName: "John",
    lastName: "Administrator",
    role: "admin",
    permissions: rolePermissions.admin,
    isActive: true,
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: new Date().toISOString(),
  },
  "manager@crownprince.com": {
    id: "manager-1",
    email: "manager@crownprince.com",
    firstName: "Sarah",
    lastName: "Manager",
    role: "manager",
    permissions: rolePermissions.manager,
    isActive: true,
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: new Date().toISOString(),
  },
  "staff@crownprince.com": {
    id: "staff-1",
    email: "staff@crownprince.com",
    firstName: "Mike",
    lastName: "Worker",
    role: "staff",
    permissions: rolePermissions.staff,
    isActive: true,
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: new Date().toISOString(),
  },
  "client@example.com": {
    id: "client-1",
    email: "client@example.com",
    firstName: "Jane",
    lastName: "Client",
    role: "client",
    company: "Example Corp",
    phone: "(555) 123-4567",
    permissions: rolePermissions.client,
    isActive: true,
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-01T00:00:00Z",
    lastLogin: new Date().toISOString(),
  },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("crown_prince_user");
        const storedToken = localStorage.getItem("crown_prince_token");

        if (storedUser && storedToken) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("crown_prince_user");
        localStorage.removeItem("crown_prince_token");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check mock credentials
      const mockUser = mockUsers[email];
      const validCredentials = {
        "admin@crownprince.com": "admin123",
        "manager@crownprince.com": "manager123",
        "staff@crownprince.com": "staff123",
        "client@example.com": "client123",
      };

      if (
        !mockUser ||
        validCredentials[email as keyof typeof validCredentials] !== password ||
        mockUser.role !== role
      ) {
        throw new Error("Invalid credentials");
      }

      // Update last login
      const updatedUser = {
        ...mockUser,
        lastLogin: new Date().toISOString(),
      };

      // Store in localStorage (in real app, this would be handled by secure tokens)
      localStorage.setItem("crown_prince_user", JSON.stringify(updatedUser));
      localStorage.setItem(
        "crown_prince_token",
        `mock_token_${updatedUser.id}`
      );

      setUser(updatedUser);
    } catch (error) {
      throw new Error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData) => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check if user already exists
      if (mockUsers[userData.email]) {
        throw new Error("User already exists");
      }

      // Create new user
      const newUser: User = {
        id: `${userData.role}-${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: userData.role,
        company: userData.company,
        phone: userData.phone,
        permissions: rolePermissions[userData.role],
        isActive: true,
        createdAt: new Date().toISOString(),
      };

      // In a real app, this would be sent to the server
      console.log("New user created:", newUser);
    } catch (error) {
      throw new Error("Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("crown_prince_user");
    localStorage.removeItem("crown_prince_token");
    setUser(null);
    router.push("/auth/login");
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedUser = { ...user, ...userData };
      localStorage.setItem("crown_prince_user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      throw new Error("Update failed");
    } finally {
      setIsLoading(false);
    }
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    const roleArray = Array.isArray(roles) ? roles : [roles];
    return roleArray.includes(user.role);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateUser,
    hasPermission,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
