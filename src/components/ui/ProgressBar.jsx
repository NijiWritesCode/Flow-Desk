import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const ProgressBar = React.forwardRef(({ className, value = 0, max = 100, color = "var(--accent-primary)", ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-[var(--border-primary)]", className)}
      {...props}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
});
ProgressBar.displayName = "ProgressBar";
