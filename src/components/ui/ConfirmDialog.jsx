import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

export const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", isDestructive = false }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="py-4">
        <p className="text-sm text-[var(--text-secondary)]">{message}</p>
      </div>
      <div className="flex justify-end space-x-3 pt-4 border-t border-[var(--border-primary)]">
        <Button variant="ghost" onClick={onClose}>{cancelText}</Button>
        <Button variant={isDestructive ? "danger" : "primary"} onClick={() => {
          onConfirm();
          onClose();
        }}>
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};
