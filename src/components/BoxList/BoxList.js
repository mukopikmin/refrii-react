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

  render() {
    const { boxes, edit, add } = this.props;

    return (
      <div>
        <ListGroup>
          {boxes.map(box => (
            <ListGroup.Item
              key={box.id}
              onClick={() => this.select(box)}
            >
              {box.name}
              <FontAwesomeIcon icon={faPen} onClick={() => edit(box)} />
            </ListGroup.Item>
          ))}
          <ListGroup.Item onClick={add}><FontAwesomeIcon icon={faPlus} /></ListGroup.Item>
        </ListGroup>
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
