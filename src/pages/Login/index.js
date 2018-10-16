import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'
import styles from './index.less';

function Login() {
  return (
    <div className={styles.normal}>
      <Button type="primary">这是登录页面</Button>
    </div>
  );
}

// Login.propTypes = {
// };

export default connect()(Login);
