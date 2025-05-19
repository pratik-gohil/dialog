import Card from "../../../../components/Card";
import Dialog from "../../../../components/Dialog";
import type { IDialog } from "../../../../components/Dialog/types";
import DialogHeader from "./DialogHeader";

interface IIceWrapDialog extends IDialog { }

const IceWrapDialog = ({ open, onClose }: IIceWrapDialog) => {
 return (
  <Dialog open={open} onClose={onClose}>
   <Card>
    <DialogHeader />
    <DialogHeader />
    <DialogHeader />
   </Card>
  </Dialog>
 );
}

export default IceWrapDialog;
