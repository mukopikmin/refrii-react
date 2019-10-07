import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faCalendarCheck,
  faCommentAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner";
import styles from "./FoodList.module.css";
import EditFoodModal from "../EditFoodModal";
import EditAmountModal from "../EditAmountModal";
import NoticesModal from "../NoticesModal";

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editModalOpen: false,
      amountModalOpen: false,
      noticestModalOpen: false,
      food: null,
      box: null
    };

    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.closeAmountModal = this.closeAmountModal.bind(this);
    this.closeNoticesModal = this.closeNoticesModal.bind(this);
  }

  add() {
    const { box } = this.props;

    this.setState(pre => ({
      ...pre,
      box,
      food: null,
      editModalOpen: true
    }));
  }

  edit(food) {
    this.setState(pre => ({
      ...pre,
      editModalOpen: true,
      amountModalOpen: false,
      food
    }));
  }

  closeEditModal() {
    this.setState(pre => ({
      ...pre,
      editModalOpen: false,
      food: null
    }));
  }

  editAmount(food) {
    this.setState(pre => ({
      ...pre,
      amountModalOpen: true,
      food
    }));
  }

  closeAmountModal() {
    this.setState(pre => ({
      ...pre,
      amountModalOpen: false,
      food: null
    }));
  }

  showNotices(food) {
    this.setState(pre => ({
      ...pre,
      noticesModalOpen: true,
      food
    }));
  }

  closeNoticesModal() {
    this.setState(pre => ({
      ...pre,
      noticesModalOpen: false,
      food: null
    }));
  }

  renderNotices(food) {
    if (food.notices.length > 0) {
      return (
        <span>
          <FontAwesomeIcon
            onClick={() => this.showNotices(food)}
            className={styles.icon}
            icon={faCommentAlt}
          />
          <span>{food.notices.length}</span>
        </span>
      );
    }

    return <div></div>;
  }

  render() {
    const { box, foods, boxes, units } = this.props;
    const {
      editModalOpen,
      food,
      amountModalOpen,
      noticesModalOpen
    } = this.state;

    if (!box) {
      return <Spinner loading />;
    }

    if (box.getFoods(foods).length === 0) {
      return (
        <div>
          <p className={styles.message}>食材は登録されていません</p>
          <p className={styles.message}>
            <Button variant="outlined" color="primary" onClick={this.add}>
              食材を登録する
            </Button>
          </p>

          <EditFoodModal
            units={units}
            boxes={boxes}
            open={editModalOpen}
            close={this.closeEditModal}
            food={food}
            box={box}
          />
        </div>
      );
    }

    return (
      <div>
        <ListGroup>
          {box.getFoods(foods).map(foodInBox => (
            <ListGroup.Item action key={foodInBox.id}>
              <div onClick={() => this.editAmount(foodInBox)}>
                {foodInBox.name}
              </div>
              <div className={styles.detail}>
                {this.renderNotices(foodInBox)}
                <FontAwesomeIcon className={styles.icon} icon={faCubes} />
                <span>{`${foodInBox.amount} ${foodInBox.unit.label}`}</span>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCalendarCheck}
                />
                <span>{foodInBox.expirationDate}</span>
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item action onClick={this.add}>
            <FontAwesomeIcon className={styles.addIcon} icon={faPlus} />
            <span>新規作成</span>
          </ListGroup.Item>
        </ListGroup>

        <EditFoodModal
          units={units}
          open={editModalOpen}
          close={this.closeEditModal}
          food={food}
          box={box}
        />
        <EditAmountModal
          open={amountModalOpen}
          edit={this.edit}
          food={food}
          close={this.closeAmountModal}
        />
        <NoticesModal
          food={food}
          open={noticesModalOpen}
          title={food ? food.name : null}
          notices={food ? food.notices : null}
          close={this.closeNoticesModal}
        />
      </div>
    );
  }
}

export default FoodList;
