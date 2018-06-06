import React, {Component} from 'react'

export default class FoodList extends Component {
  render() {
    const {box}=this.props

    if (box) {
    return (
      <div>
        <ul>
          {box.foods.map(food => (
            <li>{food.name}</li>
          ))}
        </ul>
      </div>
    )
  } else {
    return <div></div>
  }
  }
}
