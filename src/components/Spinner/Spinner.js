import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import styles from './Spinner.module.css';

class Spinner extends Component {
  render() {
    const { loading } = this.props;

    return (
      <div className={styles.spinner}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
    );
  }
}

Spinner.propTypes = {
  loading: PropTypes.bool,
};

Spinner.defaultProps = {
  loading: false,
};

export default Spinner;
