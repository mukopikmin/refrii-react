import React, { Component } from 'react';

export default class Setting extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const {units, session}=this.props
    const {user}=session 

    return (
      <div>
        <h5>ユーザー情報設定</h5>
        <h5>アプリ設定</h5>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{session.expiresAt}</p>
        <h6>ラベル</h6>
        <ul>
          {units.map(unit => {
            return <li key={unit.id}>{unit.label}</li>
          })}
        </ul>
      </div>
    );
  }
}
