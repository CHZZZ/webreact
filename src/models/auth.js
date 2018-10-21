
import { getLocalStorage, getAuth } from '../services/auth'
import { routerRedux } from 'dva/router'
// import { message } from 'antd'

export default {

  namespace: 'auth',

  state: {
    name: ''
  },

  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
      try{
        const data = getLocalStorage('users')
        if(data){
          dispatch({
            type: 'fetch',
            payload: data
          });
        } else {
          dispatch({
            type: 'query',
            payload: {},
          });
        }
      }catch(e){
        localStorage.removeItem('users')
        dispatch({
          type: 'query',
          payload: {},
        });
      }
      history.listen((location)=>{

      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      try {
        yield call(getAuth,{name:payload[0],pwd:payload[1]})
        yield put({type:'save', payload: payload[0]})
      }catch(e){
        localStorage.removeItem('users')
        yield put(routerRedux.push('/login'))
      }
    },
    *query ({payload}, {put}){
      yield put(routerRedux.push('/login'))
      // const data = yield call(getAuth,{})
      //  yield put ({type:'querySuccess',payload: {user: data}})
      // console.log(pull,call, 999)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, name: action.payload };
    },
    querySuccess(state, action) {
      return { ...state, ...action };
    },
  },

};
