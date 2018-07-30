import React, { Component } from 'react';
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

export default Spinner;
