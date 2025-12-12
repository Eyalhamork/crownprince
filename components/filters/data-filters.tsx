"use client";

import { useState } from "react";
import { Filter, SortAsc, SortDesc, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  multiple?: boolean;
}

export interface SortOption {
  id: string;
  label: string;
  value: string;
}

interface DataFiltersProps {
  filterGroups?: FilterGroup[];
  sortOptions?: SortOption[];
  onFilterChange?: (filters: Record<string, string[]>) => void;
  onSortChange?: (sortBy: string, sortOrder: "asc" | "desc") => void;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
  className?: string;
}

export function DataFilters({
  filterGroups = [],
  sortOptions = [],
  onFilterChange,
  onSortChange,
  onSearchChange,
  showSearch = true,
  searchPlaceholder = "Search...",
  className,
}: DataFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState<string>(sortOptions[0]?.value || "");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterToggle = (groupId: string, optionValue: string, isMultiple: boolean) => {
    setActiveFilters((prev) => {
      const current = prev[groupId] || [];
      let updated: string[];

      if (isMultiple) {
        updated = current.includes(optionValue)
          ? current.filter((v) => v !== optionValue)
          : [...current, optionValue];
      } else {
        updated = current.includes(optionValue) ? [] : [optionValue];
      }

      const newFilters = {
        ...prev,
        [groupId]: updated,
      };

      // Clean up empty arrays
      if (updated.length === 0) {
        delete newFilters[groupId];
      }

      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onSortChange?.(value, sortOrder);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSortChange?.(sortBy, newOrder);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setSearchQuery("");
    onFilterChange?.({});
    onSearchChange?.("");
  };

  const clearFilter = (groupId: string, optionValue: string) => {
    handleFilterToggle(
      groupId,
      optionValue,
      filterGroups.find((g) => g.id === groupId)?.multiple || false
    );
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-center gap-3">
        {/* Search Input */}
        {showSearch && (
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Input
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pr-8"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => handleSearchChange("")}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        )}

        {/* Filter Dropdowns */}
        {filterGroups.map((group) => (
          <DropdownMenu key={group.id}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                {group.label}
                {activeFilters[group.id]?.length > 0 && (
                  <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                    {activeFilters[group.id].length}
                  </Badge>
                )}
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {group.options.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option.id}
                  checked={activeFilters[group.id]?.includes(option.value) || false}
                  onCheckedChange={() =>
                    handleFilterToggle(group.id, option.value, group.multiple || false)
                  }
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        {/* Sort Controls */}
        {sortOptions.length > 0 && (
          <div className="flex items-center gap-1">
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSortOrder}
              title={sortOrder === "asc" ? "Ascending" : "Descending"}
            >
              {sortOrder === "asc" ? (
                <SortAsc className="h-4 w-4" />
              ) : (
                <SortDesc className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}

        {/* Clear All */}
        {(activeFilterCount > 0 || searchQuery) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground"
          >
            <X className="h-3 w-3 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([groupId, values]) => {
            const group = filterGroups.find((g) => g.id === groupId);
            return values.map((value) => {
              const option = group?.options.find((o) => o.value === value);
              return (
                <Badge
                  key={`${groupId}-${value}`}
                  variant="secondary"
                  className="gap-1 pr-1"
                >
                  {group?.label}: {option?.label || value}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => clearFilter(groupId, value)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            });
          })}
        </div>
      )}
    </div>
  );
}

// Preset filter configurations for common use cases
export const projectFilterGroups: FilterGroup[] = [
  {
    id: "status",
    label: "Status",
    multiple: true,
    options: [
      { id: "planning", label: "Planning", value: "planning" },
      { id: "in_progress", label: "In Progress", value: "in_progress" },
      { id: "completed", label: "Completed", value: "completed" },
      { id: "on_hold", label: "On Hold", value: "on_hold" },
    ],
  },
  {
    id: "priority",
    label: "Priority",
    multiple: true,
    options: [
      { id: "urgent", label: "Urgent", value: "urgent" },
      { id: "high", label: "High", value: "high" },
      { id: "medium", label: "Medium", value: "medium" },
      { id: "low", label: "Low", value: "low" },
    ],
  },
  {
    id: "serviceType",
    label: "Service",
    multiple: true,
    options: [
      { id: "electrical", label: "Electrical", value: "electrical" },
      { id: "construction", label: "Construction", value: "construction" },
      { id: "logistics", label: "Logistics", value: "logistics" },
    ],
  },
];

export const projectSortOptions: SortOption[] = [
  { id: "date", label: "Date", value: "createdAt" },
  { id: "title", label: "Title", value: "title" },
  { id: "budget", label: "Budget", value: "budget" },
  { id: "progress", label: "Progress", value: "progress" },
  { id: "priority", label: "Priority", value: "priority" },
];

export const taskFilterGroups: FilterGroup[] = [
  {
    id: "status",
    label: "Status",
    multiple: true,
    options: [
      { id: "todo", label: "To Do", value: "todo" },
      { id: "in_progress", label: "In Progress", value: "in_progress" },
      { id: "completed", label: "Completed", value: "completed" },
      { id: "blocked", label: "Blocked", value: "blocked" },
    ],
  },
  {
    id: "priority",
    label: "Priority",
    multiple: true,
    options: [
      { id: "urgent", label: "Urgent", value: "urgent" },
      { id: "high", label: "High", value: "high" },
      { id: "medium", label: "Medium", value: "medium" },
      { id: "low", label: "Low", value: "low" },
    ],
  },
];

export const taskSortOptions: SortOption[] = [
  { id: "dueDate", label: "Due Date", value: "dueDate" },
  { id: "priority", label: "Priority", value: "priority" },
  { id: "title", label: "Title", value: "title" },
  { id: "created", label: "Created", value: "createdAt" },
];
