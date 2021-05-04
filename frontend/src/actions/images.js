import { IMAGEUPLOAD } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const uploadImages = images => async dispatch => {
    try {
        JSON.stringify(images)
        const data = await api.uploadImages(images)
        dispatch({ type: IMAGEUPLOAD, payload: data });
    } catch (error) {
        console.log(error);
    }
}