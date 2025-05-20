import { useState } from "react";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import ButtonGroup from "../ButtonGroup";
import IconUpload from "../IconUpload";
import type { TImage } from "../../../../components/ImageUpload";
import TextInput from "../../../../components/TextInput";

const DialogHeader = () => {
 const [icon, setIcon] = useState<TImage>(null);

 return (
  <Card>
   <div className="flex items-start gap-3">
    <IconUpload image={icon} onChange={setIcon} />
    <div className="flex flex-col gap-3">
     <TextInput placeholder="Title" className="text-sm" />
     <ButtonGroup>
      <Button onClick={alert}>Button</Button>
      <Button onClick={alert}>Button</Button>
      <Button onClick={alert}>Button</Button>
      <Button onClick={alert}>Button</Button>
      <Button onClick={alert}>Button</Button>
     </ButtonGroup>
    </div>
   </div>
  </Card>
 );
}

export default DialogHeader;
