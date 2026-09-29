# Website Build Brief: FlowDesk — v2.0 (Enhanced)

## 1. Role & Quality Bar

You are an elite product designer and senior frontend developer creating a complete, production-quality UI for a modern SaaS application. You must build the COMPLETE application interface in one pass with realistic, well-structured mock data and persuasive microcopy—never lorem ipsum, never generic placeholders, never unfinished sections. Where this brief gives specifics, follow them exactly; where it is silent, make bold, tasteful decisions consistent with the established design system and the feel of a premium, modern productivity tool.

## 2. The Business

FlowDesk is a modern project, client, task, and invoice management platform for freelancers and small creative teams. It provides an all-in-one workspace to manage business operations, helping independent professionals stay organized and keep their work moving forward efficiently.

- **Target audience:** Freelancers, designers, developers, photographers, and consultants who are overwhelmed by juggling multiple tools. They worry about missing deadlines, letting client communication slip, and not having a clear view of their revenue. They are convinced by clean, fast, and intuitive interfaces that reduce administrative overhead and let them focus on their creative work.
- **Unique value proposition:** FlowDesk empowers freelancers and small creative teams to effortlessly manage every aspect of their business—from projects and tasks to clients and invoices—all within a single, intuitive platform.
- **Geography:** This is a global SaaS product; do not include location-specific copy.

---

## 3. Site Structure & Conversion Goal

This is an authenticated web application, not a marketing site. The structure is a persistent left sidebar and top header with a main content area that displays different pages.

**Application Views (Navigation Order):**

1. **Overview** — The main dashboard after login.
2. **Projects** — A view to manage all projects (list/grid), with a drill-down Project Details page.
3. **Tasks** — A Kanban board for all tasks.
4. **Clients** — A CRM-style view for all clients, with a drill-down Client Details page.
5. **Invoices** — A view for tracking all invoices.
6. **Reports** — An analytics and reporting dashboard.
7. **Help & Support** — (Secondary Nav) A self-serve help center.
8. **Settings** — (Secondary Nav) Application and account settings.

The primary user action is creating new items. The most prominent Call-to-Action (CTA) on relevant pages will be a primary button like "+ New Project" or "+ Create Invoice".

**Navigation Behavior:**
- Clicking a sidebar item navigates to the corresponding page view.
- Clicking a row in the Projects or Clients table navigates to the respective detail page.
- Active sidebar items are visually highlighted (see Sidebar spec).
- The browser URL updates for each view using React Router (e.g., `/projects`, `/projects/website-redesign`, `/clients/kora-interiors`).

---

## 4. Design System

This design should feel modern, professional, calm, and structured, like a premium and efficient productivity tool.

### 4.1 Color Tokens

```css
:root {
  /* Palette — Light Mode */
  --bg-primary: #F8FAFC;        /* Main content area background */
  --bg-secondary: #FFFFFF;      /* Cards, modals, popovers */
  --bg-sidebar: #0F172A;        /* Dark sidebar background */
  --bg-sidebar-hover: #1E293B;  /* Sidebar item hover */
  --bg-sidebar-active: rgba(79, 70, 229, 0.15); /* Sidebar active state bg */
  --bg-hover: #F1F5F9;          /* Table row hover, list item hover */
  --text-primary: #0F172A;      /* Primary text on light bg */
  --text-secondary: #64748B;    /* Subheadings, metadata, helper text */
  --text-tertiary: #94A3B8;     /* Timestamps, disabled text */
  --text-on-dark: #E2E8F0;      /* Text on the dark sidebar */
  --text-on-dark-muted: #94A3B8; /* Muted text on dark sidebar */
  --border-primary: #E2E8F0;    /* Borders, dividers */
  --border-focus: #4F46E5;      /* Focus ring color */
  --accent-primary: #4F46E5;    /* Primary buttons, links, active states */
  --accent-hover: #4338CA;      /* Hover state for primary accent */
  --accent-light: #EEF2FF;      /* Light accent for badges, highlights */
  --status-success: #16A34A;    /* Success indicators, badges */
  --status-success-bg: #F0FDF4; /* Success background */
  --status-warning: #D97706;    /* Warning indicators (e.g., At Risk) */
  --status-warning-bg: #FFFBEB; /* Warning background */
  --status-danger: #DC2626;     /* Danger, errors, overdue */
  --status-danger-bg: #FEF2F2;  /* Danger background */
  --status-info: #2563EB;       /* Informational alerts */
  --status-info-bg: #EFF6FF;    /* Info background */
  --skeleton-base: #E2E8F0;     /* Skeleton loader base */
  --skeleton-shine: #F1F5F9;    /* Skeleton loader shimmer */

  /* Palette — Dark Mode (toggled via Settings) */
  --dark-bg-primary: #0F172A;
  --dark-bg-secondary: #1E293B;
  --dark-bg-hover: #334155;
  --dark-text-primary: #F1F5F9;
  --dark-text-secondary: #94A3B8;
  --dark-text-tertiary: #64748B;
  --dark-border-primary: #334155;

  /* Radii */
  --radius-sm: 4px;
  --radius: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* Z-Index Scale */
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-overlay: 30;
  --z-modal: 40;
  --z-popover: 50;
  --z-toast: 60;
}
```

### 4.2 Typography

- **Font Family:** `'Inter', system-ui, -apple-system, sans-serif` — used for ALL UI text.
- **Type Scale:**
  - `text-xs`: 0.75rem / 1rem — Badges, timestamps
  - `text-sm`: 0.875rem / 1.25rem — Helper text, table cells, metadata
  - `text-base`: 1rem / 1.5rem — Body text, form inputs
  - `text-lg`: 1.125rem / 1.75rem — Card headings, section labels
  - `text-xl`: 1.25rem / 1.75rem — Page subheadings
  - `text-2xl`: 1.5rem / 2rem — Page titles (H1)
  - `text-3xl`: 1.875rem / 2.25rem — Dashboard greeting
  - `text-4xl`: 2.25rem / 2.5rem — Hero metrics
- **Font Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold).
- **Line Length:** Body text max-width ≤ 70ch.

### 4.3 Layout Rules

- Desktop-first layout with a fixed dark sidebar (`--bg-sidebar`), a light sticky top header, and a light scrollable main content area (`--bg-primary`).
- Use `--accent-primary` sparingly for primary interactive elements only.
- **All** colors, radii, and shadows must reference design tokens — never hardcode.
- Generous padding: 24px minimum within sections, 32px page-level padding.
- Consistent 16px / 24px spacing between elements using Tailwind's spacing scale.

---

## 5. Animation & Transition Specifications

All animations use the **Framer Motion** library. Every transition should feel snappy and intentional — never slow or decorative.

### 5.1 Global Transition Defaults

```js
const transition = {
  default: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },   // General UI
  spring:  { type: 'spring', stiffness: 300, damping: 25 },   // Bouncy elements
  slow:    { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },   // Modals, drawers
};
```

### 5.2 Specific Animations

| Element | Animation | Duration |
|---|---|---|
| **Page transitions** | Fade in + slide up 8px (`opacity: 0→1, y: 8→0`) | 200ms |
| **Modal open** | Overlay fades in; modal scales up from 0.95→1 + fades in | 250ms ease-out |
| **Modal close** | Reverse of open | 200ms ease-in |
| **Notification drawer** | Slide in from right (`x: 100%→0`) | 300ms ease-out |
| **Notification drawer close** | Slide out to right | 250ms ease-in |
| **Sidebar (mobile)** | Slide in from left (`x: -100%→0`) + overlay fade | 300ms ease-out |
| **Dropdown/Popover** | Scale from 0.95→1 + fade in, transform origin top | 150ms |
| **Toast enter** | Slide in from right + fade in | 300ms spring |
| **Toast exit** | Fade out + slide right | 200ms |
| **Skeleton shimmer** | Infinite left-to-right gradient sweep | 1.5s linear loop |
| **Progress bars** | Width animates from 0 to value on mount | 600ms ease-out |
| **Summary card numbers** | Count up from 0 to value on mount | 500ms |
| **Kanban card drag** | Slight scale up (1.03) + shadow increase while dragging | spring |
| **Kanban card drop** | Scale back to 1 + shadow normalize | spring |
| **Table row hover** | Background color transition | 150ms |
| **Button hover** | Background color + subtle translateY(-1px) | 150ms |
| **Sidebar nav item hover** | Background color transition | 150ms |
| **Checkbox check** | Scale from 0→1 with spring | spring |
| **Badge pulse (notification dot)** | Gentle pulse animation | 2s infinite |
| **Focus ring** | `outline: 2px solid var(--border-focus)` with `outline-offset: 2px`, transition | 150ms |

### 5.3 Reduced Motion

Respect `prefers-reduced-motion: reduce`. When active, disable all animations and use instant transitions.

---

## 6. Page-by-Page Content Brief

### 6.1 Global Components

#### Left Sidebar (Dark — Fixed, 256px wide on desktop)

- **Logo:** FlowDesk logo at the top — use a clean wordmark or an "F" logomark + "FlowDesk" text in white. Clicking navigates to Overview.
- **Main Navigation:**
  - (LayoutDashboard icon) Overview
  - (FolderKanban icon) Projects
  - (CheckSquare icon) Tasks
  - (Users icon) Clients
  - (FileText icon) Invoices
  - (BarChart3 icon) Reports
  - *Active state uses `--bg-sidebar-active` background with a 3px solid `--accent-primary` left border. Active text is white. Inactive text is `--text-on-dark`. Hover uses `--bg-sidebar-hover`.*
- **Secondary Navigation (Bottom of sidebar, separated by a subtle divider):**
  - (HelpCircle icon) Help & Support
  - (Settings icon) Settings
- **User Profile Area (Bottom of sidebar, below secondary nav):**
  - Avatar: Circle with initials "AJ" on `--accent-primary` background
  - Name: **Alex Johnson**
  - Email: alex@flowdesk.com (in `--text-on-dark-muted`)
  - Chevron icon indicating expandable
  - *Clicking this opens a small popover menu (animates in, see §5.2) positioned above the profile area with:*
    - (User icon) My Account — navigates to Settings > Profile
    - (Moon icon) Dark Mode — toggle switch inline
    - Divider
    - (LogOut icon) Log Out — triggers a confirmation dialog: "Are you sure you want to log out?" with "Cancel" and "Log Out" buttons.

#### Top Header (Light — Sticky, full width minus sidebar)

- **Left Side:** Page Title (e.g., **Overview**) displayed as H1. On detail pages, render breadcrumbs (e.g., `Projects / Website Redesign`) where parent items are clickable links.
- **Right Side (flex row, items centered, gap-16px):**
  - **Search Input:** `w-72` input with Search (Lucide) icon prefix. Placeholder: "Search projects, clients, invoices..." — On focus, the input expands slightly. Typing opens a dropdown results panel below the input showing categorized results (Projects, Clients, Invoices) with keyboard navigation. Press `Escape` to close. Press `Enter` on a result to navigate.
  - **Keyboard Shortcut Trigger:** Pressing `Ctrl+K` (or `Cmd+K` on Mac) focuses the search input and opens the search dropdown.
  - **Notification Bell:** Bell (Lucide) icon button. Shows a red dot indicator (pulsing, see §5.2) when there are unread notifications. Clicking opens the Notification Drawer (see §8.2).
  - **User Avatar:** Small (32px) circle with initials "AJ" — clicking opens the same popover as the sidebar profile area.

---

### 6.2 Overview Dashboard

**Route:** `/`

- **H1:** Good morning, Alex.
- **Subhead:** Here's what's happening with your work today. `Monday, September 28, 2026`
- **Summary Cards (4-up responsive grid — 4 columns on desktop, 2 on tablet, 1 on mobile):**
  1. **Total Revenue** — Icon: DollarSign — Value: `$12,845` — Badge: `+18.4% vs last month` (green, with TrendingUp icon) — Subtext: "All time earnings"
  2. **Active Projects** — Icon: FolderKanban — Value: `12` — Badge: `+3 this month` (green) — Subtext: "Currently in progress"
  3. **Pending Tasks** — Icon: CheckSquare — Value: `27` — Badge: `8 due this week` (amber) — Subtext: "Across all projects"
  4. **Outstanding Invoices** — Icon: FileText — Value: `$4,200` — Badge: `4 invoices` (blue) — Subtext: "Awaiting payment"

  *Cards animate in with staggered fade+slide (50ms delay between each). Numbers count up on mount.*

- **Revenue Analytics Section (card with white bg, shadow, border-radius):**
  - **Heading:** Revenue Overview
  - **Controls (right-aligned):** Segmented button group: `[7 Days]` `[30 Days]` (active/selected) `[90 Days]` `[12 Months]`
  - **Primary Metric:** `$8,921` in large bold text
  - **Secondary Metric:** `+12% vs previous 30 days` with a green TrendingUp icon
  - **Chart:** A clean, filled area chart (Recharts `<AreaChart>`) showing revenue trend over the selected period. The area fill uses `--accent-primary` at 10% opacity, the line stroke uses `--accent-primary`. The chart has:
    - X-axis: date labels
    - Y-axis: dollar amounts
    - Grid lines: subtle dashed horizontal lines
    - **Tooltip on hover:** Shows date and amount in a styled tooltip card
    - **Responsive:** Chart resizes with container

- **Two-Column Layout Below Chart (desktop: 60/40 split, stacks on mobile):**

  **Left Column — Active Projects Section (card):**
  - **Heading:** Active Projects
  - **Link (right-aligned):** "View all projects →" — navigates to `/projects`
  - **Table:**
    - **Columns:** Project | Client | Progress | Deadline | Status
    - **Row 1:** Website Redesign | Kora Interiors | `[Progress Bar 72%]` | Oct 04 | `[Badge: In Progress]` (blue)
    - **Row 2:** Mobile App UI | Nova Health | `[Progress Bar 45%]` | Oct 08 | `[Badge: In Progress]` (blue)
    - **Row 3:** Brand Identity | Maison Studio | `[Progress Bar 100%]` | Sep 28 | `[Badge: Completed]` (green)
    - **Row 4:** Q4 Marketing Campaign | Zenith Corp | `[Progress Bar 15%]` | Oct 22 | `[Badge: At Risk]` (amber)
    - *Rows are clickable — navigate to the project detail page. Hover uses `--bg-hover`.*

  **Right Column — Upcoming Tasks Section (card):**
  - **Heading:** Upcoming Tasks
  - **List (no table — use a clean stacked list):**
    - `[Checkbox]` **Finalize homepage animations** — Website Redesign — Due: **Today** `[Priority: High]` (red dot)
    - `[Checkbox]` **Send invoice to Kora Interiors** — Billing — Due: **Tomorrow** `[Priority: Medium]` (amber dot)
    - `[Checkbox]` **Prepare app icon assets** — Mobile App UI — Due: **Sep 30** `[Priority: Medium]` (amber dot)
    - `[Checkbox]` **Draft project proposal for Zenith** — Client Outreach — Due: **Oct 02** `[Priority: Low]` (green dot)
    - *Checking a checkbox triggers a strikethrough animation + the item fades out after 1 second. A success toast appears: "Task completed."*

- **Recent Activity Section (card, full width below the two-column layout):**
  - **Heading:** Recent Activity
  - **Timeline (vertical line on the left with dot markers):**
    - (CheckCircle icon, green) **Alex Johnson** completed task **Homepage responsive layout**. `2 minutes ago`
    - (ThumbsUp icon, blue) **Nova Health** approved the mobile app wireframes. `1 hour ago`
    - (Send icon, accent) Invoice **#FD-1048** was sent to **Kora Interiors**. `Yesterday`
    - (UserPlus icon, accent) New client added: **Maison Studio**. `2 days ago`

---

### 6.3 Projects Page

**Route:** `/projects`

- **H1:** Projects
- **Subhead:** Manage your work and keep every project on track.
- **Primary CTA Button:** `+ New Project` (opens the Create Project Modal — see §8.1)
- **Controls Row:**
  - Search input: "Search projects..."
  - Dropdown: "Filter by Status" (All, In Progress, Completed, At Risk, On Hold)
  - Dropdown: "Sort by" (Deadline, Name, Client, Progress)
  - View toggle: Grid icon / List icon — List is active by default

- **Project Table (List View — default):**
  - **Columns:** Project | Client | Progress | Deadline | Status | Actions
  - **Row 1:** Website Redesign | Kora Interiors | `[72%]` | Oct 04, 2026 | `In Progress` | `[...]`
  - **Row 2:** Mobile App UI | Nova Health | `[45%]` | Oct 08, 2026 | `In Progress` | `[...]`
  - **Row 3:** Brand Identity | Maison Studio | `[100%]` | Sep 28, 2026 | `Completed` | `[...]`
  - **Row 4:** Q4 Marketing Campaign | Zenith Corp | `[15%]` | Oct 22, 2026 | `At Risk` | `[...]`
  - **Row 5:** E-commerce Platform | Bright Foods | `[60%]` | Nov 01, 2026 | `In Progress` | `[...]`
  - **Row 6:** Social Media Kit | Pulse Agency | `[30%]` | Oct 15, 2026 | `On Hold` | `[...]`
  - **Row 7:** Annual Report Design | Civic Trust | `[88%]` | Sep 30, 2026 | `In Progress` | `[...]`
  - **Row 8:** Landing Page Redesign | Apex Digital | `[0%]` | Nov 10, 2026 | `Not Started` | `[...]`
  - *Actions "..." opens a dropdown menu: View, Edit, Archive. Archive triggers a confirmation dialog.*
  - *Clicking anywhere on a row (except Actions) navigates to the Project Detail page.*
  - *Pagination below the table: "Showing 1–8 of 12 projects" with Previous/Next buttons and page numbers.*

- **Project Cards (Grid View):**
  - Each card shows: Project name (bold), Client name, a progress bar, deadline, status badge, and a small avatar stack of team members.
  - Cards have `--shadow-sm` on rest, `--shadow-md` on hover with a subtle translateY(-2px).
  - 3-column grid on desktop, 2 on tablet, 1 on mobile.

---

### 6.4 Project Details Page

**Route:** `/projects/:slug` (e.g., `/projects/website-redesign`)

- **Breadcrumb:** `Projects / Website Redesign` — "Projects" is a link back to `/projects`
- **H1:** Website Redesign `[Status Badge: In Progress]`
- **Metadata Row:** Client: **Kora Interiors** (linked to client detail) | Deadline: **October 4, 2026** | Created: **August 15, 2026**
- **Actions (right-aligned):** `[Edit Project]` (secondary button) `[...]` (dropdown: Duplicate, Archive, Delete — Delete triggers a confirmation dialog)
- **Tabs:** `[Overview]` (active) `[Tasks]` `[Files]` `[Activity]`

#### Overview Tab

- **Project Description (card):**
  - **Heading:** About this Project
  - **Text:** Complete redesign of the Kora Interiors marketing website, focusing on a modern aesthetic, improved user experience, and higher conversion rates. The project includes a full design phase, responsive development, CMS integration, and performance optimization.
- **Key Metrics (3-column grid within a card):**
  - **Progress:** `[Animated Progress Bar 72%]` — "18 of 25 tasks completed"
  - **Budget:** `$6,500` — "$4,680 spent" with a mini progress bar
  - **Timeline:** "51 days elapsed" — "7 days remaining" with a mini timeline bar
- **Team Members (card):**
  - **Heading:** Team
  - [Avatar: AJ] **Alex Johnson** — Lead Designer
  - [Avatar: SW] **Sarah Williams** — Frontend Developer
  - [Avatar: DC] **David Chen** — UX Researcher
- **Milestones (card with vertical stepper):**
  - `(✓ green checkmark)` **Discovery & Strategy** — Completed Sep 1
  - `(✓ green checkmark)` **UI/UX Design** — Completed Sep 18
  - `(● blue dot, active)` **Development** — In Progress (Due Oct 1)
  - `(○ gray circle)` **Launch & Handover** — Pending (Due Oct 4)

#### Tasks Tab

- Displays a filtered view of tasks belonging to this project only.
- Uses the same Kanban layout as the main Tasks page (§6.5), but scoped to this project.
- CTA: `+ Add Task` — opens a simplified task creation form (inline or modal).

#### Files Tab

- **Heading:** Project Files
- **Upload Area:** A dashed-border drag-and-drop zone: "Drag files here or click to browse" with an Upload icon. Accepts images, PDFs, and documents.
- **File List (table or grid):**
  - **Columns:** File Name | Type | Size | Uploaded By | Date | Actions
  - **Row 1:** homepage-mockup-v3.fig | Figma | 4.2 MB | Alex Johnson | Sep 20 | (Download, Delete)
  - **Row 2:** brand-guidelines.pdf | PDF | 1.8 MB | Sarah Williams | Sep 15 | (Download, Delete)
  - **Row 3:** hero-image-final.png | Image | 2.1 MB | David Chen | Sep 22 | (Download, Delete)
  - **Row 4:** content-structure.docx | Document | 340 KB | Alex Johnson | Sep 12 | (Download, Delete)
  - *Image files show a small thumbnail preview.*
  - *Delete triggers a confirmation dialog: "This can't be undone."*

#### Activity Tab

- **Heading:** Project Activity
- **Filter:** Dropdown — "All Activity", "Tasks", "Comments", "Files", "Status Changes"
- **Timeline (similar style to Overview dashboard activity but project-scoped):**
  - (CheckCircle) **Alex Johnson** completed **Homepage responsive layout**. — 2 minutes ago
  - (MessageSquare) **Sarah Williams** commented: "The header animations look great, just need to adjust the timing on mobile." — 45 minutes ago
  - (Upload) **David Chen** uploaded **hero-image-final.png**. — 3 hours ago
  - (CheckCircle) **Alex Johnson** completed **Footer component**. — Yesterday
  - (GitBranch) **Sarah Williams** moved **Implement responsive layout** from Backlog to In Progress. — Yesterday
  - (AlertCircle) Project deadline was updated from Oct 10 to **Oct 4**. — 3 days ago
  - (UserPlus) **David Chen** was added to the project. — 1 week ago

---

### 6.5 Tasks Page

**Route:** `/tasks`

- **H1:** Tasks
- **Subhead:** Stay on top of everything that needs to get done.
- **Primary CTA Button:** `+ New Task` (opens a task creation modal)
- **Controls Row:**
  - Search input: "Search tasks..."
  - Dropdown: "Filter by Project" (All Projects, Website Redesign, Mobile App UI, etc.)
  - Dropdown: "Assignee" (All, Alex Johnson, Sarah Williams, David Chen)
  - Dropdown: "Priority" (All, High, Medium, Low)

- **Kanban Board (horizontal scrollable on mobile):**
  - Uses `@dnd-kit` for drag-and-drop between columns and reordering within columns.

  - **Column 1: Backlog** (count badge: 3)
    - **Card 1:** Create navigation component — Website Redesign — `[Priority: High]` (red) — Due: Oct 01 — [Avatar: SW]
    - **Card 2:** Setup staging server — Website Redesign — `[Priority: Medium]` (amber) — Due: Oct 03 — [Avatar: AJ]
    - **Card 3:** Research competitor pricing — Q4 Marketing Campaign — `[Priority: Low]` (green) — Due: Oct 10 — [Avatar: DC]

  - **Column 2: In Progress** (count badge: 2)
    - **Card 1:** Implement responsive layout — Website Redesign — `[Priority: High]` (red) — Due: Today — [Avatar: SW]
    - **Card 2:** Design onboarding screens — Mobile App UI — `[Priority: Medium]` (amber) — Due: Oct 02 — [Avatar: AJ]

  - **Column 3: In Review** (count badge: 2)
    - **Card 1:** Finalize hero images — Website Redesign — `[Priority: Medium]` (amber) — Due: Sep 29 — [Avatar: DC]
    - **Card 2:** Write API documentation — Mobile App UI — `[Priority: Low]` (green) — Due: Oct 05 — [Avatar: SW]

  - **Column 4: Completed** (count badge: 4)
    - **Card 1:** Create homepage wireframe — Website Redesign — ~~Strikethrough text~~ — Completed Sep 25
    - **Card 2:** Setup project repository — Website Redesign — ~~Strikethrough text~~ — Completed Sep 20
    - **Card 3:** Client kickoff meeting — Brand Identity — ~~Strikethrough text~~ — Completed Sep 18
    - **Card 4:** Design system tokens — Website Redesign — ~~Strikethrough text~~ — Completed Sep 15

  - *Each column has an "+ Add task" text button at the bottom.*
  - *Dragging a card shows a ghost preview, the card scales up slightly (1.03) and shadow increases. Dropping snaps the card into place with a spring animation.*
  - *Moving a card to "Completed" auto-strikes the text and shows a success toast.*

- **Task Card Details (clicking a card opens a slide-over panel from the right or a modal):**
  - Task title (editable inline)
  - Status dropdown (Backlog, In Progress, In Review, Completed)
  - Priority dropdown (High, Medium, Low)
  - Assignee (avatar + name, clickable to reassign)
  - Project (linked)
  - Due date (date picker)
  - Description (rich text area)
  - Subtasks (checklist with add capability)
  - Comments section (with text input and send button)

---

### 6.6 Clients Page

**Route:** `/clients`

- **H1:** Clients
- **Subhead:** Build stronger relationships and keep your client work organized.
- **Primary CTA Button:** `+ Add Client` (opens the Add Client Modal — see §8.3)
- **Controls Row:**
  - Search input: "Search clients..."
  - Dropdown: "Filter by Status" (All, Active, Inactive)
  - Dropdown: "Sort by" (Name, Revenue, Last Activity)

- **Client Cards (Grid View — 3 columns desktop, 2 tablet, 1 mobile):**

  Each card (white bg, `--shadow-sm`, `--radius-md`, hover: `--shadow-md` + translateY(-2px)):

  - **Card 1:**
    - Avatar: Circle with "KI" on a teal background
    - **Kora Interiors** — `[Badge: Active]` (green)
    - Contact: Emma Lawson
    - Email: emma@korainteriors.com
    - Projects: 2 active | Revenue: **$8,500**
    - Last Activity: Today
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  - **Card 2:**
    - Avatar: Circle with "NH" on a blue background
    - **Nova Health** — `[Badge: Active]` (green)
    - Contact: Dr. James Okafor
    - Email: james@novahealth.io
    - Projects: 1 active | Revenue: **$12,400**
    - Last Activity: 1 hour ago
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  - **Card 3:**
    - Avatar: Circle with "MS" on a purple background
    - **Maison Studio** — `[Badge: Active]` (green)
    - Contact: Claire Dubois
    - Email: claire@maisonstudio.co
    - Projects: 1 active | Revenue: **$6,000**
    - Last Activity: 2 days ago
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  - **Card 4:**
    - Avatar: Circle with "ZC" on an amber background
    - **Zenith Corp** — `[Badge: Active]` (green)
    - Contact: Mark Stevens
    - Email: mark@zenithcorp.com
    - Projects: 1 active | Revenue: **$3,200**
    - Last Activity: 3 days ago
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  - **Card 5:**
    - Avatar: Circle with "BF" on a green background
    - **Bright Foods** — `[Badge: Active]` (green)
    - Contact: Lisa Nakamura
    - Email: lisa@brightfoods.com
    - Projects: 1 active | Revenue: **$7,800**
    - Last Activity: 1 week ago
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  - **Card 6:**
    - Avatar: Circle with "PA" on a rose background
    - **Pulse Agency** — `[Badge: Inactive]` (gray)
    - Contact: Tom Rivera
    - Email: tom@pulseagency.co
    - Projects: 0 active | Revenue: **$4,500**
    - Last Activity: 3 weeks ago
    - Quick Actions: (Mail icon) (Phone icon) (MoreHorizontal icon)

  *Clicking a card navigates to the Client Details page.*

---

### 6.7 Client Details Page

**Route:** `/clients/:slug` (e.g., `/clients/kora-interiors`)

- **Breadcrumb:** `Clients / Kora Interiors`
- **Header:**
  - Avatar: Large circle (64px) with "KI"
  - **H1:** Kora Interiors `[Badge: Active]`
  - Contact: Emma Lawson — emma@korainteriors.com — +1 (555) 012-3456
  - Actions: `[Edit Client]` (secondary) `[...]` (dropdown: Send Email, Archive, Delete)
- **Tabs:** `[Overview]` (active) `[Projects]` `[Invoices]` `[Notes]`

#### Overview Tab

- **Summary Cards (3-up grid):**
  - **Total Revenue:** $8,500
  - **Active Projects:** 2
  - **Outstanding Balance:** $2,500

- **Client Details Card:**
  - **Company:** Kora Interiors
  - **Industry:** Interior Design
  - **Website:** www.korainteriors.com
  - **Address:** 1234 Design Ave, Suite 200
  - **Relationship Since:** June 2026
  - **Notes:** "Prefers communication via email. Very detail-oriented, appreciates mockups before development begins."

- **Recent Activity (timeline, same style as project activity):**
  - Invoice **#FD-1048** sent for $2,500. — Yesterday
  - **Alex Johnson** completed **Homepage responsive layout** for Website Redesign. — 2 days ago
  - New project **Brand Refresh** was created. — 1 week ago

#### Projects Tab

- Table listing all projects for this client.
  - **Columns:** Project | Progress | Deadline | Status
  - **Row 1:** Website Redesign | 72% | Oct 04, 2026 | In Progress
  - **Row 2:** Brand Refresh | 35% | Nov 15, 2026 | In Progress
  - *Clickable rows → navigate to project detail.*

#### Invoices Tab

- Table listing all invoices for this client.
  - **Columns:** Invoice # | Amount | Issue Date | Due Date | Status
  - **Row 1:** #FD-1048 | $2,500 | Sep 15, 2026 | Sep 30, 2026 | Pending
  - **Row 2:** #FD-1035 | $3,000 | Aug 10, 2026 | Aug 25, 2026 | Paid
  - **Row 3:** #FD-1022 | $3,000 | Jul 05, 2026 | Jul 20, 2026 | Paid

#### Notes Tab

- **Heading:** Client Notes
- **Add Note Button:** `+ Add Note`
- **Notes List (reverse chronological, card-style):**
  - **Note 1:** "Discussed Q4 priorities. They want to focus on the brand refresh and a holiday campaign landing page. Budget approved for both." — Alex Johnson — Sep 25, 2026
  - **Note 2:** "Kickoff call went well. Emma prefers Figma links over PDF exports. Set up shared workspace." — Alex Johnson — Jun 12, 2026
- *Each note has an Edit and Delete action (on hover). Delete triggers confirmation.*

---

### 6.8 Invoices Page

**Route:** `/invoices`

- **H1:** Invoices
- **Subhead:** Track billing and payments in one place.
- **Primary CTA Button:** `+ Create Invoice` (opens the Create Invoice Modal — see §8.4)

- **Summary Cards (4-up grid):**
  - **Total Invoiced:** $21,500 (Icon: FileText)
  - **Paid:** $17,300 (Icon: CheckCircle, green)
  - **Pending:** $4,200 (Icon: Clock, amber)
  - **Overdue:** $0 (Icon: AlertTriangle, green — "All clear!")

- **Invoice Table:**
  - **Columns:** Invoice # | Client | Amount | Issue Date | Due Date | Status | Actions
  - **Row 1:** #FD-1048 | Kora Interiors | $2,500 | Sep 15, 2026 | Sep 30, 2026 | `[Badge: Pending]` (amber) | `[...]`
  - **Row 2:** #FD-1047 | Nova Health | $4,800 | Sep 12, 2026 | Sep 27, 2026 | `[Badge: Paid]` (green) | `[...]`
  - **Row 3:** #FD-1046 | Maison Studio | $6,000 | Sep 01, 2026 | Sep 16, 2026 | `[Badge: Paid]` (green) | `[...]`
  - **Row 4:** #FD-1045 | Zenith Corp | $1,700 | Aug 28, 2026 | Sep 12, 2026 | `[Badge: Paid]` (green) | `[...]`
  - **Row 5:** #FD-1044 | Bright Foods | $3,200 | Aug 20, 2026 | Sep 04, 2026 | `[Badge: Paid]` (green) | `[...]`
  - **Row 6:** #FD-1043 | Pulse Agency | $1,600 | Aug 15, 2026 | Aug 30, 2026 | `[Badge: Paid]` (green) | `[...]`
  - **Row 7:** #FD-1042 | Kora Interiors | $1,700 | Aug 05, 2026 | Aug 20, 2026 | `[Badge: Paid]` (green) | `[...]`
  - *Actions "..." dropdown: View, Download PDF, Send Reminder (only for Pending/Overdue), Mark as Paid (only for Pending/Overdue), Duplicate, Delete.*
  - *"Mark as Paid" shows a confirmation, then updates the badge to Paid with a green flash animation and shows a success toast.*
  - *Pagination: "Showing 1–7 of 7 invoices"*

---

### 6.9 Reports Page

**Route:** `/reports`

- **H1:** Reports
- **Subhead:** Gain insights into your business performance with clear, actionable data.
- **Controls Row:**
  - **Date Range Picker:** A combined input showing "Sep 1, 2026 — Sep 28, 2026" with a calendar dropdown. Preset options: "Last 7 days", "Last 30 days", "This quarter", "This year", "Custom range".
  - **Export Button:** (Download icon) "Export Report" — secondary button. Dropdown: Export as PDF, Export as CSV.

- **Summary Cards (4-up grid, same style as other pages):**
  - **Total Revenue:** $21,500 — `+24% vs previous period`
  - **Projects Completed:** 8 — `+2 vs previous period`
  - **Average Project Value:** $2,687 — `+$340 vs previous period`
  - **Invoice Collection Rate:** 80% — `Avg. 12 days to payment`

- **Revenue Breakdown Chart (card, takes 60% width on desktop):**
  - **Heading:** Revenue by Month
  - **Chart:** Recharts `<BarChart>` showing monthly revenue for the past 6 months.
    - Bars use `--accent-primary`
    - X-axis: Month names (Apr, May, Jun, Jul, Aug, Sep)
    - Y-axis: Dollar amounts
    - Values: $2,100 | $2,800 | $3,400 | $3,100 | $4,200 | $5,900
    - Hover tooltip with exact value
  - **Insight text below chart:** "September is your highest-earning month so far. Revenue has grown 42% since April."

- **Revenue by Client Chart (card, takes 40% width on desktop, side by side with revenue breakdown):**
  - **Heading:** Revenue by Client
  - **Chart:** Recharts `<PieChart>` (donut style) showing revenue distribution.
    - Nova Health: $12,400 (37%) — Blue
    - Kora Interiors: $8,500 (25%) — Indigo
    - Bright Foods: $7,800 (23%) — Teal
    - Maison Studio: $6,000 (10%) — Purple
    - Others: $1,700 (5%) — Gray
  - **Legend:** Below the chart, showing client name, amount, and percentage.

- **Project Status Distribution (card, full width):**
  - **Heading:** Project Status Overview
  - **Chart:** Horizontal stacked bar or Recharts `<BarChart>` (horizontal) showing:
    - Completed: 8 projects (green)
    - In Progress: 5 projects (blue)
    - At Risk: 1 project (amber)
    - On Hold: 1 project (gray)
    - Not Started: 1 project (light gray)
  - Below: a table listing each project with its status, deadline, and progress percentage.

- **Task Completion Rate (card, 50% width):**
  - **Heading:** Task Completion
  - **Primary Metric:** 73% completion rate
  - **Chart:** Recharts `<LineChart>` showing weekly task completion rate over the past 8 weeks.
  - **Subtext:** "You completed 42 tasks this month, up from 35 last month."

- **Invoice Aging Report (card, 50% width, beside Task Completion):**
  - **Heading:** Invoice Aging
  - **Table:**
    - Current (0–15 days): $2,500 — 1 invoice
    - 16–30 days: $0 — 0 invoices
    - 31–60 days: $0 — 0 invoices
    - 60+ days: $0 — 0 invoices
  - **Insight text:** "All invoices are within 15 days. Your collection performance is excellent."

---

### 6.10 Help & Support Page

**Route:** `/help`

- **H1:** Help & Support
- **Subhead:** Find answers, learn how to use FlowDesk, or reach out to our team.

- **Search Bar (prominent, centered, wider than normal):**
  - Placeholder: "Search for help articles, guides, and FAQs..."
  - Icon: Search (Lucide)
  - *On type, shows live-filtered results below.*

- **Quick Links Section (3-column grid of clickable cards):**
  - **(BookOpen icon) Getting Started** — "Learn the basics of setting up and using FlowDesk." → Expands an accordion/section below or navigates to a sub-page.
  - **(FolderKanban icon) Managing Projects** — "Create, organize, and track your projects effectively."
  - **(CheckSquare icon) Working with Tasks** — "Use the Kanban board, set priorities, and meet your deadlines."
  - **(Users icon) Client Management** — "Add clients, track relationships, and manage contact details."
  - **(FileText icon) Invoicing & Payments** — "Create invoices, track payments, and manage your revenue."
  - **(BarChart3 icon) Reports & Analytics** — "Understand your business performance with detailed reports."

- **FAQ Section (accordion):**
  - **Heading:** Frequently Asked Questions
  - **Q1:** How do I create my first project?
    - **A:** Navigate to the Projects page from the sidebar, then click the "+ New Project" button. Fill in the project details — including the client, deadline, and budget — and click "Create Project." Your new project will appear in both the Projects list and the Overview dashboard.
  - **Q2:** Can I invite team members to collaborate?
    - **A:** Yes. When creating or editing a project, use the "Team Members" field to add collaborators. Each team member will be able to see and update tasks assigned to them. Team management settings are available under Settings > Team.
  - **Q3:** How do invoices work in FlowDesk?
    - **A:** Go to the Invoices page and click "+ Create Invoice." Select a client, add line items with descriptions and amounts, set payment terms, and send the invoice directly. You can track payment status and send reminders from the invoice actions menu.
  - **Q4:** What do the project status badges mean?
    - **A:** **In Progress** means work is actively underway. **At Risk** means the project may miss its deadline based on current progress. **On Hold** means work has been paused. **Completed** means all tasks are done and the project has been delivered.
  - **Q5:** How can I export my data?
    - **A:** Visit the Reports page and click the "Export Report" button. You can download your data as a PDF summary or a CSV spreadsheet for use in other tools.
  - **Q6:** Is my data secure?
    - **A:** Absolutely. FlowDesk uses industry-standard encryption for data in transit and at rest. We perform regular security audits and never share your data with third parties. You can review our full security practices in our Privacy Policy.

- **Contact Support Section (card, centered below FAQ):**
  - **Heading:** Still need help?
  - **Text:** Our support team typically responds within 2 hours during business days.
  - **Form Fields:**
    - Subject (text input)
    - Category (dropdown: Bug Report, Feature Request, Billing, General Question)
    - Message (textarea, min 3 rows)
    - Attachments (file upload, optional)
  - **CTA:** `Send Message` (primary button)
  - *On submit: loading spinner, then success toast: "Your message has been sent. We'll get back to you within 2 hours."*

- **Keyboard Shortcuts Section (collapsible card at the bottom):**
  - **Heading:** (Keyboard icon) Keyboard Shortcuts
  - **Table (2 columns: Shortcut | Action):**
    - `Ctrl + K` / `Cmd + K` | Open search
    - `N` | Create new item (context-aware)
    - `P` | Go to Projects
    - `T` | Go to Tasks
    - `I` | Go to Invoices
    - `Esc` | Close modal / drawer / popover
    - `?` | Show keyboard shortcuts
  - *Shortcuts are only active when no input is focused.*

---

### 6.11 Settings Page

**Route:** `/settings` (with sub-routes for each section)

- **H1:** Settings
- **Subhead:** Manage your account, preferences, and workspace configuration.

- **Layout:** Left-side vertical tab navigation (within the settings page content area) + right-side content panel. On mobile, tabs become a stacked accordion or dropdown.

#### Tab: Profile (`/settings/profile`) — Default active

- **Heading:** Profile Information
- **Avatar Section:**
  - Large avatar (80px) with "AJ" initials
  - "Change Avatar" link below — opens a file picker (accepts image files)
  - "Remove" link (appears only if custom avatar is set)
- **Form Fields:**
  - First Name: `Alex` (text input)
  - Last Name: `Johnson` (text input)
  - Email: `alex@flowdesk.com` (text input, email type)
  - Phone: `+1 (555) 987-6543` (text input)
  - Job Title: `Lead Designer & Developer` (text input)
  - Bio: `Freelance designer and developer specializing in web and mobile experiences for creative brands.` (textarea)
  - Timezone: Dropdown (default: "UTC-05:00 Eastern Time")
- **Save Button:** `Save Changes` (primary) — shows spinner on submit, then success toast: "Profile updated successfully."

#### Tab: Notifications (`/settings/notifications`)

- **Heading:** Notification Preferences
- **Subhead:** Choose how and when you'd like to be notified.
- **Toggle Groups (card with switch toggles):**
  - **Email Notifications:**
    - Task assigned to me — `[Toggle: ON]`
    - Task due date approaching (24h before) — `[Toggle: ON]`
    - Project status changed — `[Toggle: ON]`
    - Invoice paid — `[Toggle: ON]`
    - Invoice overdue — `[Toggle: ON]`
    - Weekly summary digest — `[Toggle: OFF]`
  - **In-App Notifications:**
    - Task comments and mentions — `[Toggle: ON]`
    - Project updates — `[Toggle: ON]`
    - Client activity — `[Toggle: OFF]`
    - System announcements — `[Toggle: ON]`
- **Save Button:** `Save Preferences`

#### Tab: Appearance (`/settings/appearance`)

- **Heading:** Appearance
- **Theme Selection (radio card group — 3 cards side by side):**
  - **(Sun icon) Light** — "A clean, bright interface." — `[Selected]`
  - **(Moon icon) Dark** — "Easy on the eyes in low-light environments."
  - **(Monitor icon) System** — "Automatically match your device settings."
  - *Selecting a theme applies it immediately (no save button needed). The transition between themes is a smooth 300ms cross-fade.*
- **Sidebar Density:**
  - Comfortable (default) / Compact — radio toggle
- **Date Format:**
  - Dropdown: "MMM DD, YYYY" (default), "DD/MM/YYYY", "YYYY-MM-DD"
- **Currency Display:**
  - Dropdown: "USD ($)" (default), "EUR (€)", "GBP (£)" — *Note: this only affects display formatting, not actual currency conversion.*

#### Tab: Team (`/settings/team`)

- **Heading:** Team Members
- **Subhead:** Manage who has access to your workspace.
- **CTA:** `+ Invite Member` (primary button — opens a modal with Email input and Role dropdown: Admin, Member, Viewer)
- **Team List (table):**
  - **Columns:** Member | Email | Role | Status | Actions
  - **Row 1:** [AJ] Alex Johnson | alex@flowdesk.com | Owner | `Active` | —
  - **Row 2:** [SW] Sarah Williams | sarah@flowdesk.com | Admin | `Active` | (Edit Role, Remove)
  - **Row 3:** [DC] David Chen | david@flowdesk.com | Member | `Active` | (Edit Role, Remove)
  - **Row 4:** [—] pending@client.com | pending@client.com | Viewer | `Pending Invite` (amber badge) | (Resend, Revoke)
  - *Remove triggers a confirmation: "Remove Sarah Williams from the workspace? They will lose access immediately."*

#### Tab: Billing (`/settings/billing`)

- **Heading:** Billing & Subscription
- **Current Plan Card:**
  - Plan: **Pro Plan** — $12/month
  - Status: `Active` (green badge)
  - Next billing date: October 28, 2026
  - `[Manage Subscription]` (secondary button)
  - `[View Billing History]` (text link)
- **Payment Method Card:**
  - (CreditCard icon) Visa ending in **4242**
  - Expires: 08/2028
  - `[Update Payment Method]` (secondary button)
- **Billing History (collapsible table):**
  - **Columns:** Date | Description | Amount | Status | Receipt
  - Sep 28, 2026 | Pro Plan — Monthly | $12.00 | Paid | (Download)
  - Aug 28, 2026 | Pro Plan — Monthly | $12.00 | Paid | (Download)
  - Jul 28, 2026 | Pro Plan — Monthly | $12.00 | Paid | (Download)

#### Tab: Integrations (`/settings/integrations`)

- **Heading:** Integrations
- **Subhead:** Connect FlowDesk with the tools you already use.
- **Integration Cards (grid, 2 columns):**
  - **Slack** — "Get FlowDesk notifications directly in Slack channels." — `[Connected]` (green badge) — `[Disconnect]` button
  - **Google Calendar** — "Sync project deadlines and task due dates with your calendar." — `[Connect]` button (primary)
  - **Stripe** — "Automate invoice payments and track revenue in real time." — `[Connect]` button
  - **Zapier** — "Build custom automations with 5,000+ apps." — `[Connect]` button
  - **GitHub** — "Link commits and pull requests to FlowDesk tasks." — `[Connect]` button
  - **Figma** — "Embed Figma files directly in your project files." — `[Connected]` (green badge) — `[Disconnect]` button

#### Tab: Data & Privacy (`/settings/data`)

- **Heading:** Data & Privacy
- **Export Data Section:**
  - Text: "Download a copy of all your FlowDesk data, including projects, clients, tasks, and invoices."
  - `[Export All Data]` (secondary button) — "This may take a few minutes. You'll receive an email when your export is ready."
- **Delete Account Section (danger zone — red border card):**
  - **Heading:** Danger Zone
  - Text: "Permanently delete your FlowDesk account and all associated data. This action cannot be undone."
  - `[Delete Account]` (danger button, red) — triggers a multi-step confirmation:
    1. Dialog: "Are you sure? This will permanently delete your account, all projects, clients, invoices, and files."
    2. Input: "Type DELETE to confirm."
    3. Final button: "Permanently Delete Account"

---

## 7. Signature Sections (Modals, Drawers, Overlays)

### 7.1 Create Project Modal

- **Trigger:** "+ New Project" button on the Projects page.
- **Layout:** A centered modal overlay (max-width: 560px). On mobile, becomes a full-screen sheet sliding up from the bottom.
- **Animation:** See §5.2 — overlay fades in, modal scales up from 0.95.
- **Title:** Create a New Project
- **Fields (stacked, generous spacing):**
  - **Project Name** (text input, required) — Placeholder: "e.g., Website Redesign"
  - **Client** (searchable dropdown, required) — Options from existing clients + "+ Add new client" option at the bottom
  - **Description** (textarea, optional) — Placeholder: "Brief description of the project scope and goals..."
  - **Start Date** (date picker, required) — Default: today
  - **Deadline** (date picker, required) — Must be after start date
  - **Budget** (number input, optional) — Prefixed with "$" — Placeholder: "0.00"
  - **Team Members** (multi-select with avatars, optional) — Shows selectable list of team members with checkboxes
- **Actions:**
  - `Cancel` (secondary/ghost button, left-aligned) — closes modal with close animation, no confirmation needed if form is empty; if form has data, show confirmation: "Discard changes?"
  - `Create Project` (primary button, right-aligned) — **Disabled** until all required fields are valid. On submit: button shows a loading spinner and text changes to "Creating...". On success: modal closes, page refreshes with new project, success toast: "Project created successfully." On error: inline error banner at top of form: "Something went wrong. Please try again."
- **Validation (inline, below each field):**
  - Empty required field on blur: "Project name is required." / "Please select a client." / "Start date is required." / "Deadline is required."
  - Deadline before start date: "Deadline must be after the start date."
  - Budget negative: "Budget must be a positive number."
- **Keyboard:** `Escape` closes the modal. `Tab` moves between fields. `Enter` submits (when button is enabled).

### 7.2 Notification Drawer

- **Trigger:** Clicking the bell icon in the top header.
- **Layout:** A panel (width: 380px) that slides in from the right edge of the viewport, with a semi-transparent overlay covering the rest of the page. On mobile, takes full width.
- **Animation:** See §5.2 — slide from right + overlay fade.
- **Header:**
  - "Notifications" (bold title)
  - "Mark all as read" (text link, right-aligned) — clicking marks all as read, dots disappear, toast: "All notifications marked as read."
  - Close button (X icon, top-right)
- **Content (scrollable list):**
  - **Unread (blue dot left indicator + slightly tinted background):**
    - (DollarSign icon, green bg) **Invoice #FD-1048 has been paid.** — Kora Interiors — 15m ago
    - (MessageSquare icon, blue bg) **Sarah Williams** commented on **Website Redesign**: "The header animations look great!" — 1h ago
  - **Read (no dot, normal background):**
    - (AlertCircle icon, amber bg) Task deadline is tomorrow: **Optimize hero images**. — 1d ago
    - (UserPlus icon, accent bg) New client **Maison Studio** was added. — 2d ago
    - (CheckCircle icon, green bg) Project **Brand Identity** marked as completed. — 3d ago
  - *Each notification is clickable — navigates to the relevant item (invoice, project, task).*
  - *Hover state: subtle background color change.*
- **Empty State:** If no notifications: (Bell icon) "You're all caught up" — "No new notifications right now."
- **Keyboard:** `Escape` closes the drawer.

### 7.3 Add Client Modal

- **Trigger:** "+ Add Client" button on the Clients page.
- **Layout:** Same modal pattern as Create Project (centered, 560px max, full-screen on mobile).
- **Title:** Add a New Client
- **Fields:**
  - **Company Name** (text input, required) — Placeholder: "e.g., Acme Inc."
  - **Contact Name** (text input, required) — Placeholder: "e.g., Jane Smith"
  - **Email** (email input, required) — Placeholder: "e.g., jane@acme.com"
  - **Phone** (tel input, optional) — Placeholder: "+1 (555) 000-0000"
  - **Industry** (dropdown, optional) — Options: Technology, Design, Healthcare, Finance, Retail, Education, Real Estate, Other
  - **Website** (url input, optional) — Placeholder: "https://www.example.com"
  - **Notes** (textarea, optional) — Placeholder: "Any relevant notes about this client..."
- **Actions:** `Cancel` / `Add Client` — same behavior pattern as Create Project.
- **Validation:** Email must be valid format. Duplicate company name shows warning (not blocking): "A client with a similar name already exists."

### 7.4 Create Invoice Modal

- **Trigger:** "+ Create Invoice" button on the Invoices page.
- **Layout:** Larger modal (max-width: 640px) or a full-page slide-over, as invoices require more fields.
- **Title:** Create a New Invoice
- **Auto-generated:** Invoice # (e.g., #FD-1049, auto-incremented, shown but not editable)
- **Fields:**
  - **Client** (searchable dropdown, required)
  - **Project** (dropdown, optional — filtered by selected client)
  - **Issue Date** (date picker, required) — Default: today
  - **Due Date** (date picker, required) — Default: 15 days from today
  - **Line Items (repeatable section):**
    - Description (text input) | Quantity (number, default 1) | Rate ($ number) | Amount (auto-calculated, read-only)
    - `+ Add Line Item` text button below
    - Each line has a trash icon to remove
  - **Subtotal** (auto-calculated, read-only)
  - **Tax %** (number input, optional, default 0) 
  - **Total** (auto-calculated, bold, large text)
  - **Notes** (textarea, optional) — Placeholder: "Payment terms, thank you message, etc."
- **Actions:** `Cancel` / `Create & Send Invoice` (primary) / `Save as Draft` (secondary)
- **Validation:** At least one line item required. Rate must be > 0. Due date must be on or after issue date.

### 7.5 Confirmation Dialog

- **Layout:** Small centered modal (max-width: 400px), with overlay.
- **Structure:**
  - Icon (AlertTriangle for warnings, Trash2 for deletions — colored appropriately)
  - Title (bold): e.g., "Delete this project?"
  - Description: e.g., "This action cannot be undone. All associated tasks, files, and data will be permanently removed."
  - Actions: `Cancel` (secondary) / `Delete` (danger button, red) or `Confirm` (primary)
- **Used for:** Archiving projects, deleting items, removing team members, logging out, discarding unsaved changes.

---

## 8. Interactive Components

### 8.1 Toast Notifications

- **Position:** Top-right corner of the viewport, stacked vertically with 8px gap.
- **Variants:**
  - **Success:** Green left border, CheckCircle icon, green. Example: "Project created successfully."
  - **Error:** Red left border, XCircle icon, red. Example: "Unable to save changes. Please try again."
  - **Info:** Blue left border, Info icon, blue. Example: "Your export is being prepared."
  - **Warning:** Amber left border, AlertTriangle icon, amber. Example: "This project is at risk of missing its deadline."
- **Behavior:** Appear with slide-in animation (see §5.2). Auto-dismiss after 5 seconds. Include a close (X) button for manual dismiss. Hovering pauses the auto-dismiss timer. Max 3 toasts visible at once (oldest dismissed first).
- **Library:** Use `sonner` for React toast management.

### 8.2 Skeleton Loaders

- When navigating to a data-heavy page (Projects, Clients, Invoices, Reports), show shimmering placeholder shapes that match the final layout:
  - **Table skeleton:** Rows of horizontal bars (varying widths for different columns) with the shimmer animation.
  - **Card skeleton:** Rounded rectangles matching card dimensions with internal bar placeholders.
  - **Chart skeleton:** A card-sized rectangle with a wavy line placeholder.
- **Duration:** Show for a simulated 800ms–1200ms delay (use `setTimeout` in mock data loading), then crossfade to real content.
- **Shimmer:** CSS animation — a diagonal gradient sweep from left to right, repeating every 1.5s.

### 8.3 Empty States

When a page has no data (e.g., new user with no projects), display a centered empty state:

- **Layout:** Centered vertically and horizontally in the content area.
- **Structure:**
  - Illustration: A relevant Lucide icon (48px, in `--text-tertiary`)
  - Headline (text-lg, semibold): e.g., "No projects yet"
  - Supporting text (text-sm, `--text-secondary`): e.g., "Create your first project to start tracking your work and deadlines."
  - CTA (primary button): e.g., `+ New Project`

- **Per-page empty states:**
  - **Projects:** (FolderKanban) "No projects yet" / "Create your first project to start tracking your work and deadlines." / `+ New Project`
  - **Tasks:** (CheckSquare) "No tasks yet" / "Add tasks to organize your work and stay on schedule." / `+ New Task`
  - **Clients:** (Users) "No clients yet" / "Add your first client to start managing relationships and projects." / `+ Add Client`
  - **Invoices:** (FileText) "No invoices yet" / "Create your first invoice to start tracking your revenue." / `+ Create Invoice`

### 8.4 Error States

If data fails to load (simulated), replace the content area with:

- **Layout:** Centered in the content area.
- **Structure:**
  - Icon: AlertCircle (48px, `--status-danger`)
  - Headline: "Something went wrong"
  - Supporting text: "We couldn't load this page. Please check your connection and try again."
  - CTA: `Try Again` (primary button) — re-triggers the data fetch.

### 8.5 Global Search Dropdown

- **Trigger:** Clicking the search input in the header or pressing `Ctrl+K` / `Cmd+K`.
- **Layout:** A dropdown panel below the search input (max-width: 480px, max-height: 400px, scrollable).
- **Sections (categorized results):**
  - **Projects** — matching project names
  - **Clients** — matching client/company names
  - **Invoices** — matching invoice numbers
  - **Tasks** — matching task titles
- **Each result:** Icon + title + subtitle (e.g., client name or project name) + type badge.
- **Keyboard navigation:** Arrow keys to move between results, Enter to navigate, Escape to close.
- **No results:** "No results found for '[query]'" with suggestion: "Try a different search term."

---

## 9. State Management Architecture

Use **Zustand** for global state management. Keep state minimal and derive data where possible.

### 9.1 Store Structure

```
stores/
├── useAuthStore.ts        — Current user, login state, theme preference
├── useProjectStore.ts     — Projects CRUD, active project, filters
├── useTaskStore.ts        — Tasks CRUD, Kanban column state, drag state
├── useClientStore.ts      — Clients CRUD, active client, filters
├── useInvoiceStore.ts     — Invoices CRUD, filters, summary calculations
├── useNotificationStore.ts — Notifications list, unread count, mark as read
├── useUIStore.ts          — Sidebar open/closed (mobile), active modal, active drawer, theme, search open
```

### 9.2 Key State Behaviors

- **Optimistic updates:** When creating/updating/deleting items, update the UI immediately, then simulate a server response. On simulated failure, roll back and show error toast.
- **Derived data:** Summary card values (total revenue, active project count, etc.) should be computed from the store data, not stored separately.
- **Persistence:** Use `zustand/middleware` `persist` to save theme preference and sidebar state to `localStorage`.
- **Loading states:** Each data store has an `isLoading` boolean that controls skeleton display.

---

## 10. Technical Requirements

### 10.1 Stack

| Concern | Library | Version |
|---|---|---|
| Framework | React | 18+ |
| Routing | React Router | v6 |
| Styling | Tailwind CSS | v3 |
| State Management | Zustand | v4 |
| Charts | Recharts | v2 |
| Icons | Lucide React | latest |
| Animations | Framer Motion | v10+ |
| Drag & Drop | @dnd-kit/core + @dnd-kit/sortable | latest |
| Forms | React Hook Form | v7 |
| Validation | Zod | v3 |
| Toasts | Sonner | latest |
| Dates | date-fns | v3 |

### 10.2 Project Structure

```
src/
├── main.tsx                    — Entry point, renders <App />
├── App.tsx                     — Router setup, global layout
├── index.css                   — Tailwind imports, CSS custom properties, global styles
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx         — Dark sidebar with nav, user profile, popover
│   │   ├── Header.tsx          — Top header with search, notifications, avatar
│   │   ├── AppLayout.tsx       — Combines Sidebar + Header + <Outlet />
│   │   └── MobileNav.tsx       — Hamburger menu + slide-out drawer for mobile
│   │
│   ├── ui/                     — Reusable, generic UI primitives
│   │   ├── Button.tsx          — Primary, secondary, ghost, danger variants
│   │   ├── Badge.tsx           — Status badges with color variants
│   │   ├── Card.tsx            — Container card with shadow and padding
│   │   ├── Modal.tsx           — Animated modal with overlay
│   │   ├── Drawer.tsx          — Slide-in drawer (right or left)
│   │   ├── Dropdown.tsx        — Dropdown menu with keyboard nav
│   │   ├── Input.tsx           — Text input with label, error, helper text
│   │   ├── Select.tsx          — Styled select/dropdown
│   │   ├── Textarea.tsx        — Textarea with label
│   │   ├── DatePicker.tsx      — Date picker input
│   │   ├── Toggle.tsx          — Switch/toggle component
│   │   ├── Checkbox.tsx        — Animated checkbox
│   │   ├── ProgressBar.tsx     — Animated horizontal progress bar
│   │   ├── Avatar.tsx          — Circle avatar with initials or image
│   │   ├── Tabs.tsx            — Tab bar with animated active indicator
│   │   ├── Table.tsx           — Sortable table with header, rows, pagination
│   │   ├── Skeleton.tsx        — Skeleton loader shapes (line, circle, card, table)
│   │   ├── EmptyState.tsx      — Centered empty state with icon, text, CTA
│   │   ├── ErrorState.tsx      — Centered error state with retry
│   │   ├── ConfirmDialog.tsx   — Confirmation modal
│   │   ├── SearchDropdown.tsx  — Global search results panel
│   │   ├── Popover.tsx         — Small floating panel
│   │   └── Tooltip.tsx         — Hover tooltip
│   │
│   ├── dashboard/              — Overview page components
│   │   ├── SummaryCards.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── ActiveProjectsTable.tsx
│   │   ├── UpcomingTasks.tsx
│   │   └── RecentActivity.tsx
│   │
│   ├── projects/               — Projects page components
│   │   ├── ProjectTable.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilters.tsx
│   │   ├── CreateProjectModal.tsx
│   │   └── ProjectDetail/
│   │       ├── ProjectOverview.tsx
│   │       ├── ProjectTasks.tsx
│   │       ├── ProjectFiles.tsx
│   │       └── ProjectActivity.tsx
│   │
│   ├── tasks/                  — Tasks page components
│   │   ├── KanbanBoard.tsx
│   │   ├── KanbanColumn.tsx
│   │   ├── TaskCard.tsx
│   │   ├── TaskDetailPanel.tsx
│   │   └── CreateTaskModal.tsx
│   │
│   ├── clients/                — Clients page components
│   │   ├── ClientCard.tsx
│   │   ├── ClientGrid.tsx
│   │   ├── ClientFilters.tsx
│   │   ├── AddClientModal.tsx
│   │   └── ClientDetail/
│   │       ├── ClientOverview.tsx
│   │       ├── ClientProjects.tsx
│   │       ├── ClientInvoices.tsx
│   │       └── ClientNotes.tsx
│   │
│   ├── invoices/               — Invoices page components
│   │   ├── InvoiceTable.tsx
│   │   ├── InvoiceSummaryCards.tsx
│   │   └── CreateInvoiceModal.tsx
│   │
│   ├── reports/                — Reports page components
│   │   ├── ReportSummaryCards.tsx
│   │   ├── RevenueByMonthChart.tsx
│   │   ├── RevenueByClientChart.tsx
│   │   ├── ProjectStatusChart.tsx
│   │   ├── TaskCompletionChart.tsx
│   │   └── InvoiceAgingTable.tsx
│   │
│   ├── help/                   — Help & Support components
│   │   ├── HelpSearch.tsx
│   │   ├── QuickLinks.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactForm.tsx
│   │   └── KeyboardShortcuts.tsx
│   │
│   └── settings/               — Settings page components
│       ├── SettingsLayout.tsx   — Sidebar tabs + content area
│       ├── ProfileSettings.tsx
│       ├── NotificationSettings.tsx
│       ├── AppearanceSettings.tsx
│       ├── TeamSettings.tsx
│       ├── BillingSettings.tsx
│       ├── IntegrationSettings.tsx
│       └── DataPrivacySettings.tsx
│
├── pages/                      — Route-level page components
│   ├── OverviewPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── TasksPage.tsx
│   ├── ClientsPage.tsx
│   ├── ClientDetailPage.tsx
│   ├── InvoicesPage.tsx
│   ├── ReportsPage.tsx
│   ├── HelpPage.tsx
│   └── SettingsPage.tsx
│
├── stores/                     — Zustand stores
│   ├── useAuthStore.ts
│   ├── useProjectStore.ts
│   ├── useTaskStore.ts
│   ├── useClientStore.ts
│   ├── useInvoiceStore.ts
│   ├── useNotificationStore.ts
│   └── useUIStore.ts
│
├── data/                       — Mock data files
│   ├── projects.ts
│   ├── tasks.ts
│   ├── clients.ts
│   ├── invoices.ts
│   ├── notifications.ts
│   └── team.ts
│
├── hooks/                      — Custom React hooks
│   ├── useKeyboardShortcuts.ts
│   ├── useMediaQuery.ts
│   ├── useClickOutside.ts
│   └── useDebounce.ts
│
├── lib/                        — Utility functions
│   ├── utils.ts                — cn() helper, formatCurrency, formatDate, etc.
│   └── constants.ts            — App-wide constants
│
└── types/                      — TypeScript type definitions
    ├── project.ts
    ├── task.ts
    ├── client.ts
    ├── invoice.ts
    └── notification.ts
```

### 10.3 Responsiveness

- **Desktop (≥1280px):** Full sidebar (256px) + header + content. All grids at full column count.
- **Tablet (768px–1279px):** Sidebar collapses to icon-only (64px wide) with tooltips on hover. Grids reduce to 2 columns. Tables remain but with horizontal scroll if needed.
- **Mobile (<768px):** Sidebar fully hidden, accessible via hamburger menu in the header that triggers a slide-out drawer. Data tables transform into stacked card lists. Modals become full-screen sheets. Kanban board becomes horizontally scrollable.

### 10.4 Accessibility

- Semantic HTML5: one `<main>`, one `<h1>` per view, proper heading hierarchy.
- All interactive elements have visible focus states: `outline: 2px solid var(--border-focus)` with `outline-offset: 2px`.
- All icon buttons have `aria-label` attributes.
- Modals and drawers trap focus while open and return focus to the trigger element on close.
- Dropdowns and menus support keyboard navigation (Arrow keys, Enter, Escape).
- Color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
- All form fields have associated `<label>` elements (using `htmlFor` or wrapping).
- Status badges use both color AND text/icon to convey meaning (not color alone).
- `aria-live="polite"` for toast notifications.
- `role="dialog"` and `aria-modal="true"` for modals.
- Skip navigation link (visually hidden, visible on focus): "Skip to main content".

### 10.5 Performance

- Lazy-load page components using `React.lazy()` + `<Suspense>` with skeleton fallbacks.
- Memoize expensive computations (derived store data) with `useMemo`.
- Use `React.memo` for list items (table rows, cards, task cards) to prevent unnecessary re-renders.
- Debounce search input (300ms) using the `useDebounce` hook.
- No render-blocking scripts.
- Images (if any) use lazy loading (`loading="lazy"`).

---

## 11. Strict Prohibitions

- No "Lorem ipsum" or placeholder copy anywhere. All data must be realistic.
- No generic openers: "Welcome to", "We are a leading", "Look no further".
- No excessive gradients, glassmorphism, neon colors, or oversized decorative elements.
- No emoji in the UI, especially not as icons. Use Lucide React icons exclusively.
- No fonts beyond the Inter font family.
- No hardcoded colors or styles; everything must reference CSS custom properties or Tailwind theme tokens mapped from the Design System.
- No empty sections, "coming soon" stubs, or unfinished pages.
- No `any` types in TypeScript. Define proper interfaces for all data structures.
- No inline styles. Use Tailwind utility classes or CSS custom properties.
- No unused imports or dead code.

---

## 12. Build Instructions

1. Output a complete, ready-to-run React project using Vite as the build tool.
2. Follow the project structure defined in §10.2 exactly.
3. Every file must be complete — never truncate, elide, or use comments like "// rest of the code...".
4. All mock data should be defined in the `src/data/` directory and imported by the stores.
5. The application must be fully functional on first `npm run dev` — all routing, navigation, modals, drawers, animations, and interactive features must work.
6. If you approach an output limit, stop cleanly at a file boundary and state which files remain. Continue with the next file in your next response.
7. Start with the foundational files (types, data, stores, utilities, UI primitives) before building page-level components.
