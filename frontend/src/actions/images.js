import { IMAGEDELETE, IMAGEGET, IMAGEUPLOAD } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const uploadImages = images => async dispatch => {
    try {
        const data = await api.uploadImages(images)
        dispatch({ type: IMAGEUPLOAD, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getImages = images => async dispatch => {
    try {
        const { data } = await api.fetchImages()
        dispatch({ type: IMAGEGET, payload: data })
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteImage = id => async dispatch => {
    try {
        const { data } = await api.deleteImage(id)
        dispatch({ type: IMAGEDELETE, payload: data })
    }
    catch (error) {
        console.log(error);
    }
}