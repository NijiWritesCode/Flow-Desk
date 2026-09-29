import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How do I create my first project?",
    answer: "Navigate to the Projects page from the sidebar, then click the \"+ New Project\" button. Fill in the project details — including the client, deadline, and budget — and click \"Create Project.\" Your new project will appear in both the Projects list and the Overview dashboard."
  },
  {
    question: "Can I invite team members to collaborate?",
    answer: "Yes. When creating or editing a project, use the \"Team Members\" field to add collaborators. Each team member will be able to see and update tasks assigned to them. Team management settings are available under Settings > Team."
  },
  {
    question: "How do invoices work in FlowDesk?",
    answer: "Go to the Invoices page and click \"+ Create Invoice.\" Select a client, add line items with descriptions and amounts, set payment terms, and send the invoice directly. You can track payment status and send reminders from the invoice actions menu."
  },
  {
    question: "What do the project status badges mean?",
    answer: "In Progress means work is actively underway. At Risk means the project may miss its deadline based on current progress. On Hold means work has been paused. Completed means all tasks are done and the project has been delivered."
  },
  {
    question: "How can I export my data?",
    answer: "Visit the Reports page and click the \"Export Report\" button. You can download your data as a PDF summary or a CSV spreadsheet for use in other tools."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. FlowDesk uses industry-standard encryption for data in transit and at rest. We perform regular security audits and never share your data with third parties. You can review our full security practices in our Privacy Policy."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">Frequently Asked Questions</h3>
      </div>
      <div className="divide-y divide-slate-200">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => toggleOpen(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-900">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
