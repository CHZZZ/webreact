import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import { Button,Form,Input} from 'antd'

const FormItem = Form.Item

const Login = ({
  // app,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
  loading
}) => {

  // const {
  //   loginLoading,
  //   loginBoxLoading
  // } = app


  function handleOk() {
    validateFieldsAndScroll((err, value) => {
      if (err) {
        return
      }
      dispatch({
        type: 'login/fetch',
        payload: value
      })
    })
  }

  return (
    <div style={styles.login}>
      <div style={{width: '320px',height: '320px',marginTop:'150px',display:loading.effects['login/fetch']?'block':'no',boxShadow: '0 0 100px rgba(0,0,0,.08)'}}>
        <div style={styles.loginHead}>
          <span style={styles.loginText}>登录首页</span>
        </div>
        <div style={styles.loginBody}>
          <form style={{width:'80%'}}>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    hasFeedback:true
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="请输入密码" />)}
            </FormItem>

              <Button style={styles.loginButton} type="primary" size="large" onClick={handleOk} loading={loading.effects['login/fetch']}>
                登录
              </Button>

          </form>
        </div>

      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  app: PropTypes.object,
  dispatch: PropTypes.func,
}

const styles = {
  login: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHead: {
    width: 320,
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  loginImg: {
    width: 40,
    marginRight: 8,
  },
  loginText: {
    fontSize: 18
  },
  loginBody: {
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%'
  }
}

export default connect(({app,loading})=>{return {app,loading}})(Form.create()(Login))