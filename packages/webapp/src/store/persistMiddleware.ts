/* eslint-disable space-before-function-paren */
import { REHYDRATE } from 'redux-persist/lib/constants';
import { Middleware } from 'redux';

/* store */
const persistMiddleware: Middleware = () => (dispatch) => async (action) => {
  if (action.type === REHYDRATE && action.key === 'root') {
    dispatch(action);
  } else {
    dispatch(action);
  }
};

export default persistMiddleware;
