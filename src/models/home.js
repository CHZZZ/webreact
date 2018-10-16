
export default {

    namespace: 'home',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        console.log(dispatch, history, 88)
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
    },
  
  };
  