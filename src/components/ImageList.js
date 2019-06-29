import React from "react";
import "../css/ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const imageArray = props.images.map((image) => {
        return <ImageCard key={image.id} imageIC={image} />
    })
    return (
        <div className="image-list">{imageArray}</div>
    );
};

export default ImageList;