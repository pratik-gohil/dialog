import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 className?: string;
}

const TextInput: React.FC<InputProps> = ({ className, ...props }) => {
 return (
  <input
   className={cn(
    'w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition',
    className
   )}
   {...props}
  />
 );
};

export default TextInput;
