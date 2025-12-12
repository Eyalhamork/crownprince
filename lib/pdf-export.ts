// PDF Export utilities using browser's print functionality
// This provides a lightweight PDF export without external dependencies

export interface PDFExportOptions {
  title?: string;
  filename?: string;
  orientation?: "portrait" | "landscape";
  margins?: string;
  header?: string;
  footer?: string;
  includeDate?: boolean;
}

// Generate PDF from HTML content
export function exportToPDF(
  content: string,
  options: PDFExportOptions = {}
): void {
  const {
    title = "Document",
    filename = "export",
    orientation = "portrait",
    margins = "20mm",
    header = "",
    footer = "",
    includeDate = true,
  } = options;

  // Create a new window for printing
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow pop-ups to export PDF");
    return;
  }

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <style>
        @page {
          size: ${orientation};
          margin: ${margins};
        }

        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }

        .pdf-header {
          border-bottom: 2px solid #ca8a04;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        .pdf-title {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
          margin: 0;
        }

        .pdf-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin: 5px 0 0;
        }

        .pdf-date {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 5px;
        }

        .pdf-content {
          margin-bottom: 30px;
        }

        .pdf-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 10px;
          color: #9ca3af;
          padding: 10px;
          border-top: 1px solid #e5e7eb;
        }

        /* Table styles */
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        th {
          background: #f9fafb;
          font-weight: 600;
          color: #374151;
        }

        tr:nth-child(even) {
          background: #fafafa;
        }

        /* Badge styles */
        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }

        .badge-success { background: #dcfce7; color: #166534; }
        .badge-warning { background: #fef3c7; color: #92400e; }
        .badge-danger { background: #fee2e2; color: #991b1b; }
        .badge-info { background: #dbeafe; color: #1e40af; }
        .badge-neutral { background: #f3f4f6; color: #374151; }

        /* Utility classes */
        .text-right { text-align: right; }
        .text-center { text-align: center; }
        .font-bold { font-weight: bold; }
        .mt-4 { margin-top: 16px; }
        .mb-4 { margin-bottom: 16px; }

        /* Section styles */
        .section {
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 10px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 5px;
        }

        /* Summary box */
        .summary-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 15px;
          margin: 15px 0;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
        }

        .summary-total {
          border-top: 2px solid #374151;
          font-weight: bold;
          font-size: 16px;
          margin-top: 10px;
          padding-top: 10px;
        }

        @media print {
          body { -webkit-print-color-adjust: exact; }
        }
      </style>
    </head>
    <body>
      <div class="pdf-header">
        <h1 class="pdf-title">${title}</h1>
        ${header ? `<div class="pdf-subtitle">${header}</div>` : ""}
        ${includeDate ? `<div class="pdf-date">Generated on ${date}</div>` : ""}
      </div>

      <div class="pdf-content">
        ${content}
      </div>

      ${footer ? `<div class="pdf-footer">${footer}</div>` : ""}

      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
            window.close();
          }, 500);
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}

// Helper to generate invoice PDF
export interface InvoiceData {
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  projectTitle: string;
  status: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  amount: number;
  tax: number;
  total: number;
  dueDate: string;
  createdAt: string;
}

export function exportInvoiceToPDF(invoice: InvoiceData): void {
  const statusBadge = {
    draft: "badge-neutral",
    sent: "badge-info",
    paid: "badge-success",
    overdue: "badge-danger",
    cancelled: "badge-neutral",
  }[invoice.status] || "badge-neutral";

  const content = `
    <div class="section">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="margin: 0; color: #ca8a04;">Crown Prince Incorporated</h2>
          <p style="margin: 5px 0 0; color: #6b7280;">Premium Multi-Service Solutions</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 20px; font-weight: bold;">${invoice.invoiceNumber}</div>
          <span class="badge ${statusBadge}">${invoice.status.toUpperCase()}</span>
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <div>
        <strong>Bill To:</strong><br>
        ${invoice.clientName}<br>
        ${invoice.clientEmail}
      </div>
      <div style="text-align: right;">
        <strong>Invoice Date:</strong> ${new Date(invoice.createdAt).toLocaleDateString()}<br>
        <strong>Due Date:</strong> ${new Date(invoice.dueDate).toLocaleDateString()}<br>
        <strong>Project:</strong> ${invoice.projectTitle}
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th class="text-center">Qty</th>
          <th class="text-right">Unit Price</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        ${invoice.items
          .map(
            (item) => `
          <tr>
            <td>${item.description}</td>
            <td class="text-center">${item.quantity}</td>
            <td class="text-right">$${item.unitPrice.toLocaleString()}</td>
            <td class="text-right">$${item.total.toLocaleString()}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>

    <div class="summary-box" style="max-width: 300px; margin-left: auto;">
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>$${invoice.amount.toLocaleString()}</span>
      </div>
      <div class="summary-row">
        <span>Tax:</span>
        <span>$${invoice.tax.toLocaleString()}</span>
      </div>
      <div class="summary-row summary-total">
        <span>Total:</span>
        <span>$${invoice.total.toLocaleString()}</span>
      </div>
    </div>

    <div class="section" style="margin-top: 40px;">
      <p style="color: #6b7280; font-size: 12px;">
        Payment is due within 30 days. Please include the invoice number with your payment.
        <br><br>
        Thank you for choosing Crown Prince Incorporated!
      </p>
    </div>
  `;

  exportToPDF(content, {
    title: `Invoice ${invoice.invoiceNumber}`,
    filename: `invoice-${invoice.invoiceNumber}`,
    header: "INVOICE",
    footer: "Crown Prince Incorporated | contact@crownprince.com | (555) 123-4567",
  });
}

// Helper to generate project report PDF
export interface ProjectReportData {
  title: string;
  status: string;
  priority: string;
  serviceType: string;
  clientName: string;
  managerName: string;
  budget: number;
  spent: number;
  progress: number;
  location: string;
  startDate: string;
  endDate?: string;
  tasks: {
    title: string;
    status: string;
    priority: string;
    dueDate?: string;
    assignedTo?: string;
  }[];
}

export function exportProjectReportToPDF(project: ProjectReportData): void {
  const statusBadge = {
    planning: "badge-info",
    in_progress: "badge-warning",
    completed: "badge-success",
    on_hold: "badge-neutral",
  }[project.status] || "badge-neutral";

  const priorityBadge = {
    low: "badge-neutral",
    medium: "badge-info",
    high: "badge-warning",
    urgent: "badge-danger",
  }[project.priority] || "badge-neutral";

  const content = `
    <div class="section">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 style="margin: 0;">${project.title}</h2>
        <div>
          <span class="badge ${statusBadge}">${project.status.replace("_", " ").toUpperCase()}</span>
          <span class="badge ${priorityBadge}">${project.priority.toUpperCase()}</span>
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div class="summary-box">
        <h3 style="margin-top: 0;">Project Details</h3>
        <p><strong>Service Type:</strong> ${project.serviceType}</p>
        <p><strong>Client:</strong> ${project.clientName}</p>
        <p><strong>Manager:</strong> ${project.managerName || "Unassigned"}</p>
        <p><strong>Location:</strong> ${project.location}</p>
        <p><strong>Start Date:</strong> ${new Date(project.startDate).toLocaleDateString()}</p>
        ${project.endDate ? `<p><strong>End Date:</strong> ${new Date(project.endDate).toLocaleDateString()}</p>` : ""}
      </div>

      <div class="summary-box">
        <h3 style="margin-top: 0;">Financial Summary</h3>
        <div class="summary-row">
          <span>Budget:</span>
          <span>$${project.budget.toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span>Spent:</span>
          <span>$${project.spent.toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span>Remaining:</span>
          <span>$${(project.budget - project.spent).toLocaleString()}</span>
        </div>
        <div class="summary-row" style="margin-top: 10px;">
          <span><strong>Progress:</strong></span>
          <span><strong>${project.progress}%</strong></span>
        </div>
        <div style="background: #e5e7eb; border-radius: 4px; height: 8px; margin-top: 5px;">
          <div style="background: #ca8a04; border-radius: 4px; height: 100%; width: ${project.progress}%;"></div>
        </div>
      </div>
    </div>

    ${
      project.tasks.length > 0
        ? `
    <div class="section">
      <h3 class="section-title">Tasks (${project.tasks.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          ${project.tasks
            .map(
              (task) => `
            <tr>
              <td>${task.title}</td>
              <td><span class="badge badge-info">${task.status.replace("_", " ")}</span></td>
              <td><span class="badge badge-neutral">${task.priority}</span></td>
              <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}</td>
              <td>${task.assignedTo || "Unassigned"}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>
    `
        : ""
    }
  `;

  exportToPDF(content, {
    title: `Project Report: ${project.title}`,
    filename: `project-report-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
    header: "PROJECT STATUS REPORT",
    footer: "Crown Prince Incorporated | Confidential",
  });
}
