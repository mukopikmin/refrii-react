import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Setting extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    const {
      units, session, addUnit, editUnit,
    } = this.props;
    const { user } = session;

    return (
      <div>
        <Typography variant="headline">
          アカウント情報
        </Typography>
        <Typography variant="body1">
          {user.name}
        </Typography>
        <Typography variant="body1">
          {user.email}
        </Typography>
        <Typography variant="body1">
          {session.expiresAt}
        </Typography>

        <Typography variant="headline">
        アプリ設定
        </Typography>
        {/* <Typography variant="body1">
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
        </Typography> */}

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

export default withStyles(styles)(Setting);
