import Image from './Image'
import { uploadImages } from '../actions/images'

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
const ImageManager = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(uploadImages(selectedFile[0]))
    }
    return (
        <div className="page-content">
            <form
                onSubmit={onSubmit}
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="form-group">
                    <input
                        type="file"
                        name="images"
                        id="images"
                        filename="images"
                        onChange={(e) => setSelectedFile(e.target.files)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ImageManager
