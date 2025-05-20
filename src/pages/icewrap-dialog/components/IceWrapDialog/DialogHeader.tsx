import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import ButtonGroup from "../ButtonGroup";

const DialogHeader = () => {
 return (
  <Card>
   <div>
    <input type="file" />
    <input type="text" />
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
