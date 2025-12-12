"use client";

import { useState } from "react";
import { Settings, Bell, Monitor, Globe, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePreferences } from "@/components/preferences/preferences-context";
import { Separator } from "@/components/ui/separator";

export function SettingsPanel() {
  const { preferences, updatePreference, resetPreferences } = usePreferences();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-yellow-600">
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your experience with Crown Prince Incorporated
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="display" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="display" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Display
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="regional" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Regional
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy
            </TabsTrigger>
          </TabsList>

          {/* Display Settings */}
          <TabsContent value="display" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the app looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred color theme
                    </p>
                  </div>
                  <Select
                    value={preferences.theme}
                    onValueChange={(value: "light" | "dark" | "system") =>
                      updatePreference("theme", value)
                    }
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="compact">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Reduce spacing and padding
                    </p>
                  </div>
                  <Switch
                    id="compact"
                    checked={preferences.compactMode}
                    onCheckedChange={(checked) => updatePreference("compactMode", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="animations">Animations</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth animations and transitions
                    </p>
                  </div>
                  <Switch
                    id="animations"
                    checked={preferences.showAnimations}
                    onCheckedChange={(checked) => updatePreference("showAnimations", checked)}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dashboard-view">Default Dashboard View</Label>
                    <Select
                      value={preferences.defaultDashboardView}
                      onValueChange={(value: "grid" | "list" | "kanban") =>
                        updatePreference("defaultDashboardView", value)
                      }
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grid">Grid</SelectItem>
                        <SelectItem value="list">List</SelectItem>
                        <SelectItem value="kanban">Kanban</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Items per page: {preferences.itemsPerPage}</Label>
                  <Slider
                    value={[preferences.itemsPerPage]}
                    onValueChange={([value]) => updatePreference("itemsPerPage", value)}
                    min={5}
                    max={50}
                    step={5}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    checked={preferences.emailNotifications}
                    onCheckedChange={(checked) => updatePreference("emailNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Browser push notifications
                    </p>
                  </div>
                  <Switch
                    checked={preferences.pushNotifications}
                    onCheckedChange={(checked) => updatePreference("pushNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Sound Effects</Label>
                    <p className="text-sm text-muted-foreground">
                      Play sounds for notifications
                    </p>
                  </div>
                  <Switch
                    checked={preferences.soundEnabled}
                    onCheckedChange={(checked) => updatePreference("soundEnabled", checked)}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="text-base">Notify me about:</Label>

                  <div className="flex items-center justify-between">
                    <Label className="font-normal">Task due dates</Label>
                    <Switch
                      checked={preferences.notifyOnTaskDue}
                      onCheckedChange={(checked) => updatePreference("notifyOnTaskDue", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="font-normal">Project updates</Label>
                    <Switch
                      checked={preferences.notifyOnProjectUpdate}
                      onCheckedChange={(checked) =>
                        updatePreference("notifyOnProjectUpdate", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="font-normal">New messages</Label>
                    <Switch
                      checked={preferences.notifyOnNewMessage}
                      onCheckedChange={(checked) =>
                        updatePreference("notifyOnNewMessage", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label className="font-normal">Quote status changes</Label>
                    <Switch
                      checked={preferences.notifyOnQuoteStatus}
                      onCheckedChange={(checked) =>
                        updatePreference("notifyOnQuoteStatus", checked)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Regional Settings */}
          <TabsContent value="regional" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Preferences</CardTitle>
                <CardDescription>Set your locale and format preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Date Format</Label>
                    <p className="text-sm text-muted-foreground">
                      How dates are displayed
                    </p>
                  </div>
                  <Select
                    value={preferences.dateFormat}
                    onValueChange={(value: "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD") =>
                      updatePreference("dateFormat", value)
                    }
                  >
                    <SelectTrigger className="w-[160px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Time Format</Label>
                    <p className="text-sm text-muted-foreground">
                      12-hour or 24-hour clock
                    </p>
                  </div>
                  <Select
                    value={preferences.timeFormat}
                    onValueChange={(value: "12h" | "24h") =>
                      updatePreference("timeFormat", value)
                    }
                  >
                    <SelectTrigger className="w-[160px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Currency</Label>
                    <p className="text-sm text-muted-foreground">
                      Display currency symbol
                    </p>
                  </div>
                  <Select
                    value={preferences.currency}
                    onValueChange={(value: "USD" | "EUR" | "GBP" | "CAD") =>
                      updatePreference("currency", value)
                    }
                  >
                    <SelectTrigger className="w-[160px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="CAD">CAD (C$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Language</Label>
                    <p className="text-sm text-muted-foreground">
                      Interface language
                    </p>
                  </div>
                  <Select
                    value={preferences.language}
                    onValueChange={(value: "en" | "es" | "fr") =>
                      updatePreference("language", value)
                    }
                  >
                    <SelectTrigger className="w-[160px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Control your privacy settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Online Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Let others see when you're online
                    </p>
                  </div>
                  <Switch
                    checked={preferences.showOnlineStatus}
                    onCheckedChange={(checked) => updatePreference("showOnlineStatus", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Share Activity Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Share your activity with team members
                    </p>
                  </div>
                  <Switch
                    checked={preferences.shareActivityStatus}
                    onCheckedChange={(checked) =>
                      updatePreference("shareActivityStatus", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={resetPreferences} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset to Defaults
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
