import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Spinner as Bspinner } from "react-bootstrap";
import styles from "./Spinner.module.css";

class Spinner extends Component {
  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div className={styles.spinner}>
          <Bspinner animation="border" />
        </div>
      );
    }

    return <div />;
  }
}

Spinner.propTypes = {
  loading: PropTypes.bool
};

Spinner.defaultProps = {
  loading: false
};

export default Spinner;
