import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodListContainer from '../containers/FoodListContainer'

export default class BoxList extends Component {
  constructor() {
    super()

    this.select= this.select.bind(this)
  }
  componentDidMount() {
    const { onLoad, credential } = this.props;
    onLoad(credential);
  }

  select(box) {
    this.props.select(box)
  }

  render() {
    const { boxes } = this.props;

    return (
      <div>
        <ul>
          {boxes.map(box => (
            <li key={box.id} onClick={() => this.select(box)}>{box.name}</li>
          ))}
        </ul>

        <FoodListContainer />
      </div>
    );
  }
}
