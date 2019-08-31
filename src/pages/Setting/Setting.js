import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header";
import UnitList from "../../components/UnitList";
import Account from "../../components/Account";
import styles from "./Setting.module.css";

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      name: this.props.session.user.name
    };

    this.updateUser = this.updateUser.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    const { fetchUnits, session } = this.props;

    fetchUnits();
    fetch(session.user.avatarUrl)
      .then(response => response.blob())
      .then(blob => this.generateBase64(blob));
  }

  updateUser() {
    const { session, updateUser } = this.props;
    const { user } = session;
    const { name, avatar } = this.state;

    updateUser(user.id, name, avatar);
  }

  onAvatarChange(e) {
    const file = e.target.files[0];

    this.generateBase64(file);
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState(pre => ({
      ...pre,
      name
    }));
  }

  generateBase64(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState(pre => ({
        ...pre,
        avatar: reader.result
      }));
    };
    reader.onerror = error => console.log(error);
  }

  render() {
    const { units, session } = this.props;

    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Container>
            <Account session={session} />
            <UnitList units={units} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Setting;
