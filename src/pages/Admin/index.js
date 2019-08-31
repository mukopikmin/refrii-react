import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import UserList from "../../components/UserList";
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
