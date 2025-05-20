import type { IButton } from "../../../../components/Button";

interface IButtonGroup {
 children: React.ReactElement<IButton> | React.ReactElement<IButton>[]
}

function ButtonGroup({ children }: IButtonGroup) {
 return (
  <div className="flex gap-2">
   {children}
  </div>
 );
};

export default ButtonGroup;