import React, { Component } from 'react';
import GoogleAuth from '../GoogleAuth';
import logo from '../../assets/logo.png';
import styles from './Landing.module.css';

class Landing extends Component {
  render() {
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
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
