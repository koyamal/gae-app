import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  setImage64: React.Dispatch<React.SetStateAction<string>>;
}
const ImageUploader: React.FC<Props> = (props) => {
  const { setImage, setImage64 } = props;
  const [images, setImages] = useState([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    console.log(images);
    setImages(imageList as never[]);
    if(imageList.length > 0 && imageList[0].file) {
      setImage(imageList[0].file);
      setImage64(imageList[0].dataURL || "");
    }
  };

  return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageRemove(index)}>x</button>
                </div>
                <img src={image.dataURL} alt="" width="200" />
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUploader;