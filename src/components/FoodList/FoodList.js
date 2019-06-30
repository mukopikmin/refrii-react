import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner';
import styles from './FoodList.module.css';

class FoodList extends Component {
  edit(food) {
    const { edit } = this.props;

    edit({
      ...food,
      unitId: food.unit.id,
    });
  }

  editAmount(food) {
    const { editAmount } = this.props;

    editAmount(food);
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
      <Table responsive>
        <tbody>
          {box.getFoods(foods).map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{`${food.amount} ${food.unit.label}`}</td>
              <td>
                <FontAwesomeIcon icon={faPen} onClick={() => this.editAmount(food)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

FoodList.propTypes = {
  editAmount: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default FoodList;
