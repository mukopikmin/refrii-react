import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faCalendarCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner';
import styles from './FoodList.module.css';
import EditFoodModal from '../EditFoodModal';
import EditAmountModal from '../EditAmountModal';

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editModalOpen: false,
      amountModalOpen: false,
      food: null,
    };

    this.closeAmountModal = this.closeAmountModal.bind(this);
  }

  edit(food) {
    // const { edit } = this.props;

    // edit({
    //   ...food,
    //   unitId: food.unit.id,
    // });

    this.setState({
      editModalOpen: true,
      food,
    });
  }

  closeEdit() {
    this.setState({
      editModalOpen: false,
      food: null,
    });
  }

  editAmount(food) {
    this.setState(pre => ({
      ...pre,
      amountModalOpen: true,
      food,
    }));
  }

  closeAmountModal() {
    this.setState(pre => ({
      ...pre,
      amountModalOpen: false,
      food: null,
    }));
  }

  render() {
    const { box, foods, add } = this.props;

    if (!box) {
      return <Spinner loading />;
    }

    if (box.getFoods(foods).length === 0) {
      return (
        <div>
          <p className={styles.message}>
            食材は登録されていません
          </p>
          <p className={styles.message}>
            <Button variant="outlined" color="primary" onClick={add}>
              食材を登録する
            </Button>
          </p>
        </div>
      );
    }

    return (
      <div>
        <ListGroup>
          {box.getFoods(foods).map(food => (
            <ListGroup.Item
              action
              onClick={() => this.editAmount(food)}
              key={food.id}
            >
              <span>{food.name}</span>
              <div className={styles.detail}>
                <FontAwesomeIcon className={styles.icon} icon={faCubes} />
                <span>{`${food.amount} ${food.unit.label}`}</span>
                <FontAwesomeIcon className={styles.icon} icon={faCalendarCheck} />
                <span>{food.expirationDate}</span>
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            action
            onClick={add}
          >
            <FontAwesomeIcon className={styles.addIcon} icon={faPlus} />
            <span>新規作成</span>
          </ListGroup.Item>
        </ListGroup>

        <EditFoodModal
          open={this.state.editModalOpen}
          close={this.close}
          food={this.state.food}
          box={this.props.box} />
        <EditAmountModal
          open={this.state.amountModalOpen}
          food={this.state.food}
          close={this.closeAmountModal} />
      </div>
    );
  }
}

export default FoodList;
