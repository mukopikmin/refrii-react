import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import UserList from "../UserList";
import styles from "./Admin.module.css";

class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Container>
            <UserList />
          </Container>
        </div>
      </div>
    );
  }
}

export default Admin;
