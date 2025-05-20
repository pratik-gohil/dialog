import type { ReactElement, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface IButton extends Partial<Omit<HTMLButtonElement, "children">> {
 children: ReactNode,
 onClick?: () => void;
}

function Button({ children, onClick, className }: IButton): ReactElement<IButton> {
 const baseStyle = 'px-4 py-2 rounded text-sm bg-black/10 hover:bg-black/20 cursor-pointer';

 return (
  <button onClick={onClick} className={cn(baseStyle, className)}>
   {children}
  </button>
 );
};

export default Button;