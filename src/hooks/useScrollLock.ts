import { useLayoutEffect } from 'react';

const useScrollLock = (isLocked: boolean) => {
 useLayoutEffect(() => {
  const originalStyle = window.getComputedStyle(document.body).overflow;

  if (isLocked) {
   document.body.style.overflow = 'hidden';
  } else {
   document.body.style.overflow = originalStyle;
  }

  return () => {
   document.body.style.overflow = originalStyle;
  };
 }, [isLocked]);
};

export default useScrollLock;