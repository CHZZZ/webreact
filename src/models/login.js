import { fetchAuth, setLocalStorage } from '../services/auth'
import {routerRedux} from 'dva/router'

export default {

    namespace: 'login',
  
    state: {
        values:{}
    },
  
    subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //     console.log(dispatch, history, 88)
    //   },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) { 
        console.log(payload, 555)
          const data = yield call(fetchAuth,payload) // eslint-disable-line
        yield put({ type: 'save', data });
        yield put(routerRedux.push('/'))
      },
    },
  
    reducers: {
      save(state, action) {
        setLocalStorage('user',{...action.data})
        return { ...state, values:{...action.data} };
      },
    },
  
  };
  