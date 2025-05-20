import ImageUpload, { type TImage, type IImageUpload } from "../../../../components/ImageUpload";

const IconPreview = ({ image }: { image: TImage }) => {
 return (
  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm cursor-pointer">
   {image ? (
    <img src={image} alt="icon" className="object-cover w-full h-full" />
   ) : (
    <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 text-sm">
     No image
    </div>
   )}
  </div>
 )
}

const IconUpload = (props: Omit<IImageUpload, "preview">) => {
 return (
  <ImageUpload preview={IconPreview} {...props} />
 );
}

export default IconUpload;
