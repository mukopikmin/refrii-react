import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "react-sidebar";
import BoxInfo from "../../components/BoxInfo";
import BoxList from "../../components/BoxList";
import FoodList from "../../components/FoodList";
import Header from "../../components/Header";
import styles from "./Main.module.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(pre => ({
      ...pre,
      sidebarOpen: !pre.sidebarOpen
    }));
  }

  renderBoxInfo() {
    const { box } = this.props;

    if (box) {
      return <BoxInfo box={box} />;
    }
    return <div />;
  }

  render() {
    const { sidebarOpen } = this.state;
    const sidebarStyles = {
      sidebar: {
        background: "white"
      }
    };

    return (
      <div>
        <div className={styles.sidebar}>
          <Sidebar
            sidebar={
              <div className={styles.sidebarContent}>
                <BoxList />
              </div>
            }
            styles={sidebarStyles}
            open={sidebarOpen}
            onSetOpen={this.toggleSidebar}
          >
            <div />
          </Sidebar>
        </div>

        <div>
          <Header toggleSidebar={this.toggleSidebar} />
        </div>
        <div className={styles.content}>
          <Container>
            <div sm={4} className={styles.left}>
              <BoxList />
            </div>
            <div sm={8} className={styles.right}>
              {this.renderBoxInfo()}
              <div className={styles.list}>
                <FoodList />
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Main;
