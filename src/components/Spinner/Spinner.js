import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import './Spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <ScaleLoader
          color="#123abc"
          loading={this.props.loading}
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
