import axios from 'axios';
import { get } from 'lodash';
// import { toast } from 'react-toastify';
import { IUserState, IUser, IProfile, ISocialConnection } from './types';

/**
 * Sets the user object in the redux.
 * @param {IUser} user - The user object to be set.
 * @returns {void} This function does not return anything.
 */
export function setUser(user: IUser) {
  const paymentInfo: any = get(user, 'userMeta.paymentInfo', {});
  const userData = {
    _id: user._id,
    email: user.email,
    profile: user.profile,
    ...(paymentInfo && {
      userMeta: {
        paymentInfo: {
          status: paymentInfo.status,
          subscriptionStart: paymentInfo.subscriptionStart,
          subscriptionEnd: paymentInfo.subscriptionEnd,
          subscriptionPrice: paymentInfo.subscriptionPrice
        }
      }
    })
  };
  return {
    type: 'SET_USER',
    payload: userData
  };
}

/**
 * Save current history id
 * @param {string} id - The current history id to be set.
 * @returns {void} This function does not return anything.
 */
export function setCurrentHistoryId(id: string) {
  return {
    type: 'SET_CURRENT_HISTORY_ID',
    payload: id
  };
}

/**
 * Save current history id
 * @param {boolean} isDone - Is feedback done to be set.
 * @returns {void} This function does not return anything.
 */
export function setIsFeedbackDone(isDone: boolean) {
  return {
    type: 'SET_IS_FEEDBACK_DONE',
    payload: isDone
  };
}

/**
 * Get user profile info
 * @param {any} data - redirect to stripe
 * @returns {any} - paymentInfo
 */
export const getUser = () => (dispatch: any, getState: any) => {
  return axios({
    url: `${process.env.ImApiUrl}/v1/user/detail`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getState().auth.token}`
    },
    method: 'get',
    responseType: 'json'
  })
    .then((response) => {
      const user = get(response, 'data.data', {});
      dispatch(setUser(user));
      return user;
    })
    .catch((error: any) => {
      return error;
    });
};

/**
 * Modify user object according to application need.
 * @param {IProfile} profile - The user profile object to be set.
 * @returns {any} This function return API response.
 */
export const updateUserProfile =
  (profile: IProfile) => (dispatch: any, getState: any) => {
    return axios({
      url: `${process.env.ImApiUrl}/v2/user/profile`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().auth.token}`
      },
      data: { profile },
      method: 'patch',
      responseType: 'json'
    })
      .then((response: any) => {
        dispatch(setUser(get(response, 'data.data', {})));
        return response;
      })
      .catch(() => {
        return false;
      });
  };

/**
 * Add social login record in user object
 * @param {IProfile} profile - The user profile object to be set.
 * @returns {any} This function return API response.
 */
export const updateUserSocialConnection =
  (socialConnection: ISocialConnection) => (dispatch: any, getState: any) => {
    return axios({
      url: `${process.env.ImApiUrl}/v1/user/social/connection`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().auth.token}`
      },
      data: socialConnection,
      method: 'patch',
      responseType: 'json'
    })
      .then((response: any) => {
        return response;
      })
      .catch(() => {
        return false;
      });
  };

// Initialize default state value
const initialState: IUserState = {
  user: {},
  currentHistoryId: '',
  isFeedbackDone: false
};

/**
 * To set user object in redux
 * @param {any} state - Redux state
 * @param {any} action - Redux action
 * @returns {any} This function return redux user state.
 */
const user = (state = initialState, action: any): IUserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default user;
