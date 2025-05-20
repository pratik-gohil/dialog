import { useState } from "react";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import ButtonGroup from "../ButtonGroup";
import IconUpload from "../IconUpload";
import type { TImage } from "../../../../components/ImageUpload";

const DialogHeader = () => {
 const [icon, setIcon] = useState<TImage>(null);

 return (
  <Card>
   <div>
    <IconUpload image={icon} onChange={setIcon} />
   </div>
   <ButtonGroup>
    <Button onClick={alert}>Button</Button>
    <Button onClick={alert}>Button</Button>
    <Button onClick={alert}>Button</Button>
    <Button onClick={alert}>Button</Button>
    <Button onClick={alert}>Button</Button>
   </ButtonGroup>
  </Card>
 );
}

export default DialogHeader;
