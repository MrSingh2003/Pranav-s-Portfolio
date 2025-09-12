"use client";

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export function CodeProtection() {
  const { toast } = useToast();

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      toast({
        title: "Function Disabled",
        description: "Source code is protected.",
        variant: "destructive"
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        toast({
          title: "Function Disabled",
          description: "Source code is protected.",
          variant: "destructive"
        });
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toast]);

  return null;
}
