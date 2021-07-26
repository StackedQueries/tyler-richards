import * as actionType from '../constants/actionTypes'
const imageReducer = (images = [], action) => {
  switch (action.type) {
    case actionType.IMAGEUPLOAD:
      return images.map((image) => (image._id === action.payload._id ? action.payload : image))

    case actionType.IMAGEGET:
      return action.payload
    case actionType.IMAGEDELETE:
      return images.filter((image) => image._id !== action.payload)

    default:
      return images
  }
}

export default imageReducer
