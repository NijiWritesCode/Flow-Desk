import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("relative overflow-hidden rounded-md bg-[var(--skeleton-base)]", className)}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[var(--skeleton-shine)] to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
};
