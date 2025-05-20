import { useState } from 'react';
import VarInput from '../../../../components/VarInput';
import Button from '../../../../components/Button';
import { cn } from '../../../../utils/cn';
import { stringReplaceUtil } from '../../../../stringReplacement';

const state = {
 name: "Patik Gohil",
 email: "pr.tikgohil@gmail.com",
 phone: "810492214",
 age: "23"
}

const DialogContent = () => {
 const [template, setTemplate] = useState<string>("");
 const [showPreview, setShowPreview] = useState(false);

 return (
  <div>
   <div>
    <Button className={cn('rounded-none', {
     "bg-white": showPreview
    })} onClick={() => setShowPreview(false)}>Template</Button>
    <Button className={cn('rounded-none', {
     "bg-white": !showPreview
    })} onClick={() => setShowPreview(true)}>Preview</Button>
   </div>
   {
    showPreview ? <div className='h-40 focus:outline-none border-2 border-blue-300 transition p-2'>
     {stringReplaceUtil(template, state)}
    </div> : <VarInput className='rounded-tl-none' value={template} vars={['name', 'email', 'phone', 'age']} onChange={(template) => setTemplate(template)} placeholder="Type with {variable} support..." />
   }
  </div>
 );
}

export default DialogContent;
