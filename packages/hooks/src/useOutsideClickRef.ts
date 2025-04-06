import { useCallback, useEffect, useRef } from 'react';

export function useOutsideClickRef<T extends HTMLElement = HTMLElement>(
  callback: () => void
) {
  const containerRef = useRef<T | null>(null);

  const handleDocumentClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (target == null || containerRef.current == null) {
        return;
      }

      if (!containerRef.current.contains(target)) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return containerRef;
}
