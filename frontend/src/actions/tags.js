import { TAGGET, TAGCREATE, TAGDELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getTags = () => async (dispatch) => {
  try {
    const { data } = await api.getTags();
    dispatch({ type: TAGGET, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTag = (tag) => async (dispatch) => {
  try {
    const { data } = await api.createTag(tag);

    dispatch({ type: TAGCREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTag = (id) => async (dispatch) => {
  try {
    await await api.deleteTag(id);

    dispatch({ type: TAGDELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
