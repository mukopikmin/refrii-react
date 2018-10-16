import React, { Component } from 'react';
import GoogleAuth from '../GoogleAuth';
import logo from '../../assets/logo.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="contents">
          <div className="contents-inner">
            <img src={logo} alt="" />
            <h1 className="app-name">Refrii</h1>
            <p id="explain">
              Refriiは冷蔵庫の中身を管理し、家族で共有するためのサービスです。
            </p>
            <GoogleAuth />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
