import axios from 'axios';
import { GET_PAGE_DATA } from '../types';

export const getCachePageData = (path) => (dispatch) => {
  console.log('fetching');
  axios({
    method: 'GET',
    url: `/cache${path}`,
  }).then((res) => {
    console.log(res);
    dispatch({
      type: GET_PAGE_DATA,
      payload: res.data,
    });
  });
};
