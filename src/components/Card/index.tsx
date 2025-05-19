import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
 children: React.ReactNode;
 className?: string;
}

function Card({ children, className }: CardProps) {
 return (
  <div className={cn('rounded-md shadow-md hover:shadow-lg bg-white p-6',
   className
  )}>
   {children}
  </div>
 );
};

export default Card;
