import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
      <Button type="primary">Primary</Button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
