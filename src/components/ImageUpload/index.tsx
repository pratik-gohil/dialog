import React, { useRef } from 'react';

export type TImage = string | null;

export interface IImageUpload {
  image: TImage,
  onChange: (file: string | null) => void;
  preview?: ({ image }: { image: TImage }) => any
}

function DefaultPreview({ image }: { image: TImage }) {
  return (<div className="w-20 h-20 cursor-pointer">
    {image ? (
      <img src={image} alt="icon" className="object-cover w-full h-full" />
    ) : (
      <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 text-sm">
        No image
      </div>
    )}
  </div>)
}

function ImageUpload({ image, onChange, preview: Preview = DefaultPreview }: IImageUpload) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => onChange(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      alert('please upload a valid image file');
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current)
      fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4" onClick={handleUploadClick}>
      <Preview image={image} />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUpload;
