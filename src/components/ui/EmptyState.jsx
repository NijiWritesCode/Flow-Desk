import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const EmptyState = ({ icon: Icon, title, description, action, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex flex-col items-center justify-center text-center p-8 bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] border border-dashed border-[var(--border-primary)]", className)}
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-hover)]">
          <Icon className="h-6 w-6 text-[var(--text-secondary)]" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
      <p className="mb-6 text-sm text-[var(--text-secondary)] max-w-sm">{description}</p>
      {action}
    </motion.div>
  );
};
