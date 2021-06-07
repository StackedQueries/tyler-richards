import { TAGGET, TAGCREATE, UPDATE, TAGDELETE, LIKE } from '../constants/actionTypes';

export default (tags = [], action) => {
  switch (action.type) {
    case TAGGET:
      return action.payload;
    case TAGCREATE:
      return [...tags, action.payload];
    case TAGDELETE:
      return tags.filter((tag) => tag._id !== action.payload);
    default:
      return tags;
  }
};
