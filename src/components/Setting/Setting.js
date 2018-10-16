import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

class Setting extends Component {
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
              {unit.label}
              {' '}
&nbsp;&nbsp;
              <FontAwesomeIcon icon={faPen} size="sm" onClick={() => editUnit(unit)} />
            </li>
          ))}
        </ul>
        <Button outline color="primary" onClick={addUnit}>
          <FontAwesomeIcon icon={faPlus} size="sm" />
          {' '}
追加
        </Button>
      </div>
    );
  }
}

Setting.propTypes = {
  onLoad: PropTypes.func.isRequired,
  units: PropTypes.arrayOf(PropTypes.any).isRequired,
  session: PropTypes.shape({
    expiresAt: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  addUnit: PropTypes.func.isRequired,
  editUnit: PropTypes.func.isRequired,
};

export default Setting;
