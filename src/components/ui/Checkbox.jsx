import React from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Checkbox = React.forwardRef(({ className, checked, onChange, disabled, ...props }, ref) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded-[var(--radius-sm)] border border-[var(--border-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center transition-colors",
        checked ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white" : "bg-transparent",
        className
      )}
      ref={ref}
      {...props}
    >
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
});
Checkbox.displayName = "Checkbox";
