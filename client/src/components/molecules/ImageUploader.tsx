import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { createUseStyles } from "react-jss";

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  setImage64: React.Dispatch<React.SetStateAction<string>>;
}
const ImageUploader: React.FC<Props> = (props) => {
  const { setImage, setImage64 } = props;
  const [images, setImages] = useState([]);

  const classes = useStyles();

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

  const styleButton = {
    fontSize: "15px",
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
  }

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
              className={isDragging ? classes.btn: classes.btn}
              onClick={onImageUpload}
              {...dragProps}
            >
              ドラッグ&ドロップ<br></br>
              <div className={classes.btnText}>
                画像を選択
              </div>
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                {/* <div className="image-item__btn-wrapper"> */}
                <div className={classes.imgBox}>
                  <img
                    src={image.dataURL}
                    // className={classes.imgBox}
                    alt=""
                    width="200"
                  />
                  <div className={classes.btnCloseBox}>
                  <button 
                    onClick={() => {
                      onImageRemove(index);
                      setImage64("");
                    }}
                    className={classes.btnClose}
                  >
                    x
                  </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

const styles = {
  btnContainer: {
  },
  btn: {
    fontSize: "15px",
    background: "#EDEEEE",
    border: "solid #EDEEEE",
    borderRadius: "10px",
    height: "100px",
    width: "300px"
  },
  btnDrag: {
    fontSize: "15px",
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
    color: "red"
  },
  btnText: {
    display: 'inline-block',
    background: "#ffffe0",
    borderRadius: "100px",
    padding: "3px 5px 3px 5px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
  },
  btnCloseBox: {
    zIndex: "10",
    position: 'absolute',
    top:"-3px",
    right: "0px",
  },
  btnClose: {
  },
  imgBox: {
    position: 'relative',
    width: '200px',
  },
};
const useStyles = createUseStyles(styles);

export default ImageUploader;