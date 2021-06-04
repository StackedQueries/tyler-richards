import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (tags = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tags, action.payload];
    case DELETE:
      return tags.filter((tag) => tag._id !== action.payload);
    default:
      return tags;
  }
};
