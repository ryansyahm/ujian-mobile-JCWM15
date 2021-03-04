import axios from 'axios';
import {API_URL} from '../../../helpers';
import {FETCH_LIVE} from '../type';

const url = `${API_URL}/Countries`;

export const FetchFeedAction = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${url}`);
      dispatch({
        type: FETCH_LIVE,
        payload: response.data,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
};
