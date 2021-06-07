import Image from './Image'
import { deleteImage, getImages, uploadImages } from '../actions/images'

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const ImageManager = ({ setImage }) => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();

    const images = useSelector((state) => state.images);
    useEffect(() => {
        dispatch(getImages())
    }, [])

    const onDelete = async (e, imgID) => {
        e.preventDefault()
        dispatch(deleteImage(imgID))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(uploadImages(selectedFile[0]))
    }
    return (
        <div className="page-content">
            {images.map((img) =>
                <div>
                    <input type="radio" id={img.id} name="images" value={img.id} onChange={() => setImage(img)} />
                    <img width="100px" src={"http://localhost:5000/" + img.url} />
                    <button onClick={(e) => onDelete(e, img.id)}>Delete</button>

                </div>)}

            <form
                onSubmit={onSubmit}
                method="POST"
                encType="multipart/form-data"
            >
                <div className="form-group">
                    <input
                        type="file"
                        name="images"
                        id="images"
                        filename="images"
                        onChange={(e) => setSelectedFile(e.target.files)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ImageManager
