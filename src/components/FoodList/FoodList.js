import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faCalendarCheck,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner";
import styles from "./FoodList.module.css";
import EditFoodModal from "../EditFoodModal";
import EditAmountModal from "../EditAmountModal";

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editModalOpen: false,
      amountModalOpen: false,
      food: null,
      box: null
    };

    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.closeAmountModal = this.closeAmountModal.bind(this);
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

  closeEdit() {
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

  render() {
    const { box, foods } = this.props;
    const { editModalOpen, food, amountModalOpen } = this.state;

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
            open={editModalOpen}
            close={this.closeEdit}
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
            <ListGroup.Item
              action
              onClick={() => this.editAmount(foodInBox)}
              key={foodInBox.id}
            >
              <span>{foodInBox.name}</span>
              <div className={styles.detail}>
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
          open={editModalOpen}
          close={this.closeEdit}
          food={food}
          box={box}
        />
        <EditAmountModal
          open={amountModalOpen}
          edit={this.edit}
          food={food}
          close={this.closeAmountModal}
        />
      </div>
    );
  }
}

export default FoodList;
