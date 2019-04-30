import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import styles from './Landing.module.css';

class Landing extends Component {
  componentDidMount() {
    const { watchAuthState } = this.props;

    watchAuthState();
  }

  render() {
    const { signin } = this.props;
    return (
      <div>
        <div className={styles.background}>
          <div className={styles.contents}>
            <div className={styles.contentsInner}>
              <img src={logo} alt="" />
              <h1 className={styles.appName}>Refrii</h1>
              <p className={styles.explain}>
              Refriiは冷蔵庫の中身を管理し、家族で共有するためのサービスです。
              </p>
              <button type="button" onClick={signin}>Google Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
