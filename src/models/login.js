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
          const data = yield call(fetchAuth,payload) // eslint-disable-line
        console.log(payload,data, 555)
        
        yield put({ type: 'save', data });
        if(data){
          const delay=timeout => new Promise(resolve => setTimeout(resolve, timeout));
          yield call(delay,1000)
            yield put(routerRedux.push('/'))
        }else{
          console.log('登录失败')
        }
      },
    },
  
    reducers: {
      save(state, action) {
        setLocalStorage('user',{...action.data})
        return { ...state, values:{...action.data} };
      },
    },
  
  };
  