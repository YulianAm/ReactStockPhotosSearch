import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map( i => {
        return <ImageCard  key={i.id} image={i}/>;
    });
    
    return <div className="image-list"> {images} </div>;
}

export default ImageList;