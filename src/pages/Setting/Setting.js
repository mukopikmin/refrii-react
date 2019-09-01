import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header";
import UnitList from "../../components/UnitList";
import Account from "../../components/Account";
import styles from "./Setting.module.css";

class Setting extends Component {
  componentDidMount() {
    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Container>
            <Account />
            <UnitList />
          </Container>
        </div>
      </div>
    );
  }
}

export default Setting;
