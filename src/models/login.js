import { fetchAuth, setLocalStorage } from '../services/auth'
import {routerRedux} from 'dva/router'
import { message } from 'antd'

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
        try {
          const data = yield call(fetchAuth,payload)
          if(data.data&&data.data.result===1) {
            message.success('登录成功')
            yield put(routerRedux.push('/'))
          }else {
            localStorage.removeItem('users')
          }
        }catch(e){
          localStorage.removeItem('users')
          message.error('登录失败')
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
  