# LEADS ERP Portal vs. Microsoft Office 365

> Comparison of the modules advertised on `/portal` (the custom LEADS ERP,
> hosted separately at `leadsnextgencentre.online`) against the equivalent
> capability already available through Microsoft Office 365 / Microsoft 365,
> which RUAS students and staff have institutional access to.

## Why this matters

The `/portal` page (`app/portal/page.tsx`) markets six "Enterprise Feature
Suite" modules as reasons for LEADS members to log into a bespoke, custom-built
ERP. Each of those modules has a close (often exact) equivalent already
included in an Office 365 / Microsoft 365 education tenant. Before continuing
to invest in and maintain a custom ERP, it's worth weighing what's actually
gained versus what Office 365 already covers out of the box.

## Module-by-module comparison

| ERP Module (this repo) | Office 365 Equivalent | Verdict |
| --- | --- | --- |
| **Events & Task Engine** — task assignments, Kanban board, countdown timers, event logs | **Microsoft Planner** (Kanban boards, buckets, due dates) + **Microsoft Lists** (event logs/metadata) + **Teams** channels for coordination | Office 365 covers this almost 1:1, with native Teams integration and mobile apps already installed for most students. Custom build adds no unique capability here. |
| **Budget & Finance System** — expense tracking, sponsorship invoicing, ledger approvals, audit trails | **Excel** (or **Excel Online** in SharePoint) with shared workbooks, **Power Automate** approval flows, **Forms** for expense submission | Office 365 requires more manual setup (workbook templates, an approval flow) but gives auditable version history for free via SharePoint. Custom ERP wins only if it needs domain-specific ledger logic (e.g., automatic reconciliation against a specific chart of accounts). |
| **Member Directory & RBAC** — multi-tier roles, superuser admin, council directories | **Microsoft Entra ID (Azure AD) groups** + **SharePoint permission levels** + **Teams roles** | Office 365's RBAC is more mature and centrally managed (tied to the university's actual identity provider), whereas a custom ERP means maintaining a second, parallel identity/permission system. This is the strongest case *against* the custom build unless LEADS needs roles that don't map onto university AD groups. |
| **Design & Form Submissions** — creative workflow approvals, asset archive, registration forms, QR verification | **Microsoft Forms** (registration/intake + QR-code-friendly share links) + **SharePoint document libraries** with approval workflows (Power Automate) + **OneDrive** for asset archives | Forms + Power Automate approvals cover the workflow; SharePoint libraries with versioning cover the archive. QR verification for check-in is the one area Forms doesn't natively do as smoothly as a purpose-built check-in tool. |
| **Meeting Minutes & Attendance** — quorum tracking, resolution records, biometric/PIN check-in, voting | **OneNote** (shared minutes notebook) + **Teams meeting attendance reports** + **Forms** (voting/polls) | Attendance and minutes are natively captured by Teams/OneNote with zero extra engineering. Biometric check-in and formal quorum/voting records are the one piece Office 365 doesn't do natively — this is a genuine differentiator for a custom system, if that requirement is real. |
| **System Audit & Analytics** — query logging, security events, backup rotation, health metrics | **Microsoft Purview audit logs** + **Entra ID sign-in logs** + native Microsoft 365 backup/retention policies | Enterprise-grade audit/compliance tooling is already part of Microsoft 365 (especially under an EDU tenant) and would be expensive to replicate credibly in a student-maintained custom ERP. |

## Overall take

- **Where Office 365 wins outright:** identity/RBAC, task/event tracking,
  document/form workflows, meeting records, and audit logging are all
  mature, already-licensed, and already familiar to members — a custom ERP
  duplicates this work and adds a second system for members to log into and
  for LEADS to maintain and secure long after the founding team graduates.
- **Where a custom ERP could still be justified:** anything requiring
  domain-specific logic not modeled by Office 365's generic tools —
  biometric/PIN-based physical check-in, automated ledger reconciliation
  against LEADS' own chart of accounts, or QR-based verification tightly
  coupled to the public website's event pages.
- **Recommendation:** Scope the custom ERP down to only the handful of
  features in the last column above that Office 365 genuinely can't do, and
  use Office 365 (Planner, Forms, SharePoint, OneNote, Power Automate) for
  everything else. This cuts the maintenance burden significantly and keeps
  members inside tools they already have university logins for, rather than
  a second credential set pointed at `leadsnextgencentre.online`.

## Notes / caveats

- This analysis is based on the module list currently advertised in
  `app/portal/page.tsx` and doesn't inspect the actual implementation at
  `leadsnextgencentre.online` (which is a separate, external system not in
  this repository).
- Whether RUAS's Office 365 tenant licensing includes Power Automate premium
  connectors and Purview audit features should be confirmed with campus IT
  before relying on those specific capabilities.
