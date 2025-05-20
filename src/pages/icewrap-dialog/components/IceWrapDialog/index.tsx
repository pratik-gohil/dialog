import Card from "../../../../components/Card";
import Dialog from "../../../../components/Dialog";
import type { IDialog } from "../../../../components/Dialog/types";
import DialogContent from "./DialogContent";
import DialogFooter from "./DialogFooter";
import DialogHeader from "./DialogHeader";

interface IIceWrapDialog extends IDialog { }

const IceWrapDialog = ({ open, onClose }: IIceWrapDialog) => {
 return (
  <Dialog open={open} onClose={onClose}>
   <Card className="max-h-96 overflow-auto">
    <DialogHeader />
    <br />
    <DialogContent />
    <br />
    <DialogFooter />
   </Card>
  </Dialog>
 );
}

export default IceWrapDialog;
