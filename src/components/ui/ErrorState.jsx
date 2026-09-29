import React from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ErrorState = ({ title = "Something went wrong", description, action, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("flex flex-col items-center justify-center text-center p-6 bg-[var(--status-danger-bg)] rounded-[var(--radius-md)] border border-[var(--status-danger)]/20", className)}
    >
      <AlertCircle className="mb-3 h-8 w-8 text-[var(--status-danger)]" />
      <h3 className="mb-2 text-base font-semibold text-[var(--status-danger)]">{title}</h3>
      {description && <p className="mb-4 text-sm text-[var(--status-danger)]/80 max-w-sm">{description}</p>}
      {action}
    </motion.div>
  );
};
