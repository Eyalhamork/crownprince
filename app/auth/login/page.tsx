"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Crown, Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth/auth-context"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "client" as "admin" | "manager" | "staff" | "client",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await login(formData.email, formData.password, formData.role)

      // Redirect based on role
      switch (formData.role) {
        case "admin":
          router.push("/admin")
          break
        case "manager":
          router.push("/manager")
          break
        case "staff":
          router.push("/staff")
          break
        case "client":
          router.push("/portal")
          break
        default:
          router.push("/")
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const demoCredentials = {
    admin: { email: "admin@crownprince.com", password: "admin123" },
    manager: { email: "manager@crownprince.com", password: "manager123" },
    staff: { email: "staff@crownprince.com", password: "staff123" },
    client: { email: "client@example.com", password: "client123" },
  }

  const fillDemoCredentials = () => {
    const creds = demoCredentials[formData.role]
    setFormData((prev) => ({
      ...prev,
      email: creds.email,
      password: creds.password,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Crown className="h-16 w-16 text-yellow-600" />
              <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Crown Prince</h1>
            <p className="text-yellow-600 font-medium">INCORPORATED</p>
            <p className="text-gray-400 text-sm mt-2">Sign in to your account</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="bg-white/10 backdrop-blur-md border-yellow-600/20">
          <CardHeader>
            <CardTitle className="text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert className="bg-red-500/10 border-red-500/20">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-white">
                  Account Type
                </Label>
                <Select
                  value={formData.role}
                  onValueChange={(value: any) => setFormData((prev) => ({ ...prev, role: value }))}
                >
                  <SelectTrigger className="bg-white/10 border-yellow-600/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Client Portal</SelectItem>
                    <SelectItem value="staff">Staff Member</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="pl-10 bg-white/10 border-yellow-600/20 text-white placeholder:text-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="pl-10 pr-10 bg-white/10 border-yellow-600/20 text-white placeholder:text-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Demo Credentials Button */}
              <Button
                type="button"
                variant="outline"
                onClick={fillDemoCredentials}
                className="w-full bg-transparent border-yellow-600/40 text-yellow-600 hover:bg-yellow-600/10"
              >
                Use Demo Credentials ({formData.role})
              </Button>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Additional Links */}
            <div className="space-y-4 text-center">
              <Link href="/auth/forgot-password" className="text-yellow-600 hover:text-yellow-500 text-sm">
                Forgot your password?
              </Link>

              <div className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-yellow-600 hover:text-yellow-500">
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Information */}
        <Card className="bg-white/5 backdrop-blur-md border-yellow-600/10">
          <CardContent className="pt-6">
            <h3 className="text-white font-medium mb-3">Demo Accounts</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">
                <span className="text-yellow-600">Admin:</span> admin@crownprince.com / admin123
              </div>
              <div className="text-gray-300">
                <span className="text-yellow-600">Manager:</span> manager@crownprince.com / manager123
              </div>
              <div className="text-gray-300">
                <span className="text-yellow-600">Staff:</span> staff@crownprince.com / staff123
              </div>
              <div className="text-gray-300">
                <span className="text-yellow-600">Client:</span> client@example.com / client123
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
