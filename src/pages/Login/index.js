import React,{Component} from 'react';
import { Button, Form, Checkbox, Input, Icon } from 'antd'
import styles from './index.less';
import { connect } from 'dva';
const FormItem = Form.Item

class Login extends Component {
  // constructor(props){
  //   super(props)
  // }
  state = {
    name:'',
    password:'',
    checked: false
  };
  handleSubmit = (e) => {
    const { name, password } = this.state
    this.props.dispatch({type:'login/fetch',payload:{name,password}})
  }
  render(){
    return (
      <div className={styles.normal}>
        <Form className={styles['login-form']}>
          <FormItem>
          <Input onChange={(e)=>this.setState({name:e.target.value})} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          </FormItem>
          <FormItem>
          <Input onChange={(e)=>this.setState({password:e.target.value})} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Checkbox onChange={(checked)=>this.setState({checked})}>记住选择</Checkbox>
            <a className={styles['login-form-forgot']} href="">忘记密码</a>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className={styles['login-form-button']}>
              登录
            </Button>
          </FormItem>
          </Form>
      </div>
    );
  }
}

// Login.propTypes = {
// };


export default connect()(Login)
