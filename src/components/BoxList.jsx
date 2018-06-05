import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BoxList extends Component {
  componentDidMount() {
    const { onLoad, credential } = this.props;
    onLoad(credential);
  }

  render() {
    const { boxes } = this.props;

    return (
      <div>
        <ul>
          {boxes.map(box => (
            <li key={box.id}>
              <Link to={`/boxes/${box.id}`}>{box.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
