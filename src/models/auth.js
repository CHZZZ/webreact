
import { getLocalStorage } from '../services/auth'
import { routerRedux } from 'dva/router'

export default {

  namespace: 'auth',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
      history.listen((location)=>{
        const data = getLocalStorage('user')
        if(location.pathname.indexOf('/login')){
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
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *query ({},{call, put}){
      console.log('12313121111111111111')
      yield put(routerRedux.push('/login'))
      // const data = yield call(getAuth,{})
      //  yield put ({type:'querySuccess',payload: {user: data}})
      // console.log(pull,call, 999)
    }
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
