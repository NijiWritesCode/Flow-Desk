import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  Settings,
} from "lucide-react";

export const APP_NAME = "FlowDesk";

export const NAV_ITEMS = [
  { label: "Overview", icon: LayoutDashboard, href: "/" },
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Tasks", icon: CheckSquare, href: "/tasks" },
  { label: "Clients", icon: Users, href: "/clients" },
  { label: "Invoices", icon: FileText, href: "/invoices" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
];

export const SECONDARY_NAV_ITEMS = [
  { label: "Help & Support", icon: HelpCircle, href: "/help" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export const STATUS_COLORS = {
  "In Progress": "bg-blue-50 text-blue-700",
  Completed: "bg-green-50 text-green-700",
  "At Risk": "bg-amber-50 text-amber-700",
  "On Hold": "bg-gray-100 text-gray-700",
  "Not Started": "bg-slate-100 text-slate-700",
  Active: "bg-green-50 text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
  Pending: "bg-amber-50 text-amber-700",
  Paid: "bg-green-50 text-green-700",
};
