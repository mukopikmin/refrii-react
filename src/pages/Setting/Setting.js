import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

import Header from "../../components/Header";
import UnitList from "../../components/UnitList";
import Account from "../../components/Account";
import styles from "./Setting.module.css";

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      target: null
    };

    this.renderSettingComponent = this.renderSettingComponent.bind(this);
    this.showAccount = this.showAccount.bind(this);
    this.showUnits = this.showUnits.bind(this);
    this.changeVisiblilty = this.changeVisiblilty.bind(this);
  }

  componentDidMount() {
    const { onLoad } = this.props;

    onLoad();
  }

  renderSettingComponent() {
    const { target } = this.state;

    switch (target) {
      case "account":
        return <Account />;
      case "units":
        return <UnitList />;
      default:
        return <UnitList />;
    }
  }

  showAccount() {
    this.changeVisiblilty("account");
  }

  showUnits() {
    this.changeVisiblilty("units");
  }

  changeVisiblilty(target) {
    this.setState(pre => ({
      ...pre,
      target
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <div className={styles.left}>
            <span>設定</span>
            <ListGroup>
              <ListGroup.Item
                action
                onClick={this.showAccount}
                className={styles.listItem}
              >
                アカウント
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={this.showUnits}
                className={styles.listItem}
              >
                単位
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className={styles.right}>{this.renderSettingComponent()}</div>
        </Container>
      </div>
    );
  }
}

export default Setting;
