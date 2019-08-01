import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import Box from '../../models/box';
import styles from './BoxList.module.css';
import EditBoxModal from '../EditBoxModal';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.select = this.select.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    const { onLoad } = this.props;

    onLoad();
  }

  getOwnBoxes() {
    const { boxes } = this.props;

    return boxes.filter(box => !box.isInvited);
  }

  getInvitedBoxes() {
    const { boxes } = this.props;

    return boxes.filter(box => box.isInvited);
  }

  select(box) {
    const { select } = this.props;

    select(box);
  }

  add() {
    this.setState({
      modalOpen: true,
      box: null,
    });
  }

  edit(box) {
    this.setState({
      modalOpen: true,
      box,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      box: null,
    });
  }

  render() {
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
                  onClick={() => this.edit(box)}
                />
              </ListGroup.Item>
            ))}
            <ListGroup.Item
              onClick={this.add}
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

        <EditBoxModal open={this.state.modalOpen} close={this.closeModal} box={this.state.box} />
      </div>
    );
  }
}

BoxList.propTypes = {
  onLoad: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  boxes: PropTypes.arrayOf(PropTypes.instanceOf(Box)).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BoxList);
