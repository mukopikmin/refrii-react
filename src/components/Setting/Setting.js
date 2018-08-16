import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Setting extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
      units, session, addUnit, editUnit,
    } = this.props;
    const { user } = session;

    return (
      <div>
        <h5>ユーザー情報設定</h5>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{session.expiresAt}</p>
        <hr />
        <h5>アプリ設定</h5>
        <h6>ラベル</h6>
        <ul>
          {units.map(unit => (
            <li key={unit.id}>
              {unit.label} &nbsp;&nbsp;
              <FontAwesomeIcon icon={faPen} size="sm" onClick={() => editUnit(unit)} />
            </li>
            ))}
        </ul>
        <Button outline color="primary" onClick={addUnit}>追加</Button>
      </div>
    );
  }
}
