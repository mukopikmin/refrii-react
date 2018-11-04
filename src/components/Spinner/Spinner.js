import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import styles from './Spinner.module.css';

class Spinner extends Component {
  render() {
    const { loading } = this.props;

    return (
      <div className={styles.spinner}>
        <ScaleLoader
          color="#123abc"
          loading={loading}
        />
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
