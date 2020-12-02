// import _state from '../states';
import { GET_PAGE_DATA } from '../types';

export default (state = {}, action) => {
  // console.log(state);
  switch (action.type) {
    case GET_PAGE_DATA:
      return { ...action.payload };
    default:
      return state;
  }
  // return {
  //   ...state,
  //   ...action.payload,
  // };
};
