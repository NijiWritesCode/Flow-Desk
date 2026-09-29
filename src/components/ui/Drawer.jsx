import React from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Drawer = ({ isOpen, onClose, children, className, position = 'right', title }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const slideVariants = {
    right: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' }
    },
    left: {
      initial: { x: '-100%' },
      animate: { x: 0 },
      exit: { x: '-100%' }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={slideVariants[position].initial}
            animate={slideVariants[position].animate}
            exit={slideVariants[position].exit}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              "fixed top-0 bottom-0 z-[var(--z-modal)] flex flex-col bg-[var(--bg-secondary)] shadow-[var(--shadow-xl)] border-[var(--border-primary)]",
              position === 'right' ? "right-0 border-l" : "left-0 border-r",
              "w-full max-w-sm",
              className
            )}
          >
            {(title || onClose) && (
              <div className="flex items-center justify-between p-4 border-b border-[var(--border-primary)]">
                {title && <h2 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h2>}
                {onClose && (
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            )}
            <div className="flex-1 overflow-y-auto p-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
