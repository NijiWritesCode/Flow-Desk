import { useEffect } from "react";

export function useKeyboardShortcuts(shortcuts) {
  useEffect(() => {
    function handleKeyDown(event) {
      // Ignore if typing in an input or textarea
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.isContentEditable
      ) {
        return;
      }

      for (const shortcut of shortcuts) {
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatch = shortcut.ctrlKey ? event.ctrlKey || event.metaKey : true;
        const shiftMatch = shortcut.shiftKey ? event.shiftKey : true;
        const altMatch = shortcut.altKey ? event.altKey : true;

        // If the shortcut requires a modifier but it isn't pressed, fail match.
        // If it doesn't require it, we strictly want it NOT pressed, except we simplified here.
        // For strict matching:
        const strictCtrlMatch = !!shortcut.ctrlKey === (event.ctrlKey || event.metaKey);
        const strictShiftMatch = !!shortcut.shiftKey === event.shiftKey;
        const strictAltMatch = !!shortcut.altKey === event.altKey;

        if (keyMatch && strictCtrlMatch && strictShiftMatch && strictAltMatch) {
          event.preventDefault();
          shortcut.action(event);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}
