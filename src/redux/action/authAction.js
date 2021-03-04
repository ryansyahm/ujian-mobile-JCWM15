import {API_URL} from '../../../helpers';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_LOGIN, AUTH_START} from '../type';
const url = `${API_URL}`;

export const loginAction = (username) => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_LOGIN, payload: username});
      AsyncStorage.setItem('token', username);
    } catch (err) {
      console.log(err);
    }
  };
};

export const keepLoginAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      const asyncToken = await AsyncStorage.getItem('token');
      await axios.post(
        `${url}/keep-login`,
        {},
        {
          headers: {
            Authorization: `Bearer ${asyncToken}`,
          },
        },
      );
      dispatch({
        type: AUTH_SUCCESS,
        payload: {username},
      });
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.response.data.error});
    }
  };
};
