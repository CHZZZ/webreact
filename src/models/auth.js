
import { getLocalStorage, setLocalStorage } from '../services/auth'
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
      const data = getLocalStorage('user')
      if (!data) {
        dispatch({
          type: 'query',
          payload: {},
        });
      } else {
        dispatch({
          type: 'querySuccess',
          payload: {
            user: data,
          },
        });
      }
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    querySuccess(state, action) {
      return { ...state, ...action };
    },
  },

};
