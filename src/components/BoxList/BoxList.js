import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import Box from '../../models/box';
import styles from './BoxList.module.css';

class BoxList extends Component {
  componentDidMount() {
    const { onLoad } = this.props;

    this.select = this.select.bind(this);
    onLoad();
  }

  select(box) {
    const { select } = this.props;

    select(box);
  }

  getOwnBoxes() {
    const { boxes } = this.props;

    return boxes.filter(box => !box.isInvited);
  }

  getInvitedBoxes() {
    const { boxes } = this.props;

    return boxes.filter(box => box.isInvited);
  }

  render() {
    const { edit, add } = this.props;

    return (
      <div>
        <div className={styles.section}>
          <span>カテゴリ</span>
          <ListGroup>
            {this.getOwnBoxes().map(box => (
              <ListGroup.Item
                action
                key={box.id}
                onClick={() => this.select(box)}
                className={styles.listItem}
              >
                {box.name}
                <FontAwesomeIcon
                  className={styles.editIcon}
                  icon={faPen}
                  onClick={() => edit(box)}
                />
              </ListGroup.Item>
            ))}
            <ListGroup.Item
              onClick={add}
              action
              className={styles.listItem}
            >
              <FontAwesomeIcon icon={faPlus} className={styles.addIcon} />
              <span>新規作成</span>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className={styles.section}>
          <span>共有されたカテゴリ</span>
          <ListGroup>
            {this.getInvitedBoxes().map(box => (
              <ListGroup.Item
                action
                key={box.id}
                onClick={() => this.select(box)}
                className={styles.listItem}
              >
                {box.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

BoxList.propTypes = {
  onLoad: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  edit: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BoxList);
