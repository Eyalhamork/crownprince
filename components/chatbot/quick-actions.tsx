"use client"

import { Button } from "@/components/ui/button"
import type { QuickAction } from "./types"

interface QuickActionsProps {
  actions: QuickAction[]
  onAction: (action: QuickAction) => void
}

export function QuickActions({ actions, onAction }: QuickActionsProps) {
  const handleAction = (action: QuickAction) => {
    if (action.action === "navigate") {
      window.location.href = action.value
    } else if (action.action === "phone") {
      window.location.href = `tel:${action.value}`
    } else {
      onAction(action)
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 font-medium">Quick Actions:</p>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            size="sm"
            onClick={() => handleAction(action)}
            className="text-xs h-8 border-yellow-600/20 hover:bg-yellow-50 hover:border-yellow-600/40"
          >
            {action.icon && <action.icon className="h-3 w-3 mr-1" />}
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
