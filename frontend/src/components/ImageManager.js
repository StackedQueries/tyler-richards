import Image from './Image'
import { deleteImage, getImages, uploadImages } from '../actions/images'

import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const ImageManager = ({ setImage }) => {
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const dispatch = useDispatch()

  const images = useSelector((state) => state.images)
  const fetchImages = () => dispatch(getImages())
  useEffect(() => {
    fetchImages()
  }, [])

  const onDelete = async (e, imgID) => {
    e.preventDefault()
    await dispatch(deleteImage(imgID))
    fetchImages()
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(uploadImages(selectedFile[0]))
    fetchImages()
  }
  return (
        <div className="page-content">
            {images.map((img, index) =>
                <div key={index}>
                    <input type="radio" id={img.id} name="images" value={img.id} onChange={() => setImage(img)} />
                    <img width="100px" src={process.env.REACT_APP_API_URL + img.url} />
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
