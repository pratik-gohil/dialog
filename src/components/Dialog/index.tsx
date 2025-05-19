import React, { useLayoutEffect, useState } from 'react'
import Portal from '../Portal'
import styles from './dialog.module.css'
import type { IDialog } from './types';
import { cn } from '../../utils/cn';
import useScrollLock from '../../hooks/useScrollLock';

function Dialog({ children, open, onClose }: React.PropsWithChildren<IDialog>) {
 useScrollLock(open);
 const [close, setClose] = useState(false);
 useLayoutEffect(() => {
  let closeTimeout: number;
  if (close) {
   closeTimeout = setTimeout(() => { setClose(false); onClose() }, 400);
  }

  return () => {
   if (closeTimeout) {
    clearTimeout(closeTimeout)
   }
  };
 }, [close])

 return (
  <Portal selector='dialog-portal' show={open}>
   <div
    className={cn('fixed inset-0 bg-black/50', [styles.modal], { [styles.out]: close })}
    onClick={function () { setClose(true); }}
   >
    <div onClick={e => e.stopPropagation()} className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
     {children}
    </div>
   </div>
  </Portal>
 )
}

export default Dialog