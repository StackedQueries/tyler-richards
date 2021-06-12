import * as actionType from '../constants/actionTypes';

export default (tags = [], action) => {
  switch (action.type) {
    case actionType.TAGGET:
      return action.payload;
    case actionType.TAGCREATE:
      return [...tags, action.payload];
    case actionType.TAGDELETE:
      return tags.filter((tag) => tag._id !== action.payload);
    default:
      return tags;
  }
};
