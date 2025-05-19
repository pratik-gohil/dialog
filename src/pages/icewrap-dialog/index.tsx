import { useState } from "react";
import IceWrapDialog from "./components/IceWrapDialog";

const IceWrapDialogPage = () => {
 const [showDialog, setShowDialog] = useState(false);
 function handleShowDialog(show: boolean) {
  setShowDialog(show);
 }

 return (
  <div className='flex justify-center items-center w-screen h-screen'>
   <button className="text-3xl text-white font-bold border-2 py-3 px-6 cursor-pointer" onClick={() => handleShowDialog(true)}>
    IceWrap Dialog
   </button>

   <IceWrapDialog open={showDialog} onClose={() => handleShowDialog(false)} />
  </div>
 );
}

export default IceWrapDialogPage;
