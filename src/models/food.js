import moment from 'moment';

import Base from './base';
import Unit from './unit';
import User from './user';

export default class Food extends Base {
  constructor(params) {
    super();

    this.amount = params.amount;
    this.changeSets = params.change_sets;
    this.createdAt = moment(params.created_at);
    this.createdUser = new User(params.created_user);
    this.expirationDate = params.expiration_date;
    this.id = params.id;
    this.imageUrl = params.image_url;
    this.name = params.name;
    this.needsAdding = params.needs_adding;
    this.notice = params.notice;
    this.unit = new Unit(params.unit);
    this.updatedAt = moment(params.updated_at);
    this.boxId = params.box.id;
  }

  static getFoods(jwt) {
    return super.authFetch(`${super.endpoint}/foods`, jwt)
      .then(response => response.json())
      .then(foods => foods.map(food => new Food(food)));
  }

  static updateFood(jwt, body) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        amount: body.amount,
        expiration_date: body.expirationDate,
        needs_adding: body.needsAdding,
        notice: body.notice,
        unit_id: body.unitId,
      }),
    };

    return super.authFetch(`${super.endpoint}/foods/${body.id}`, jwt, options)
      .then(response => response.json())
      .then(food => new Food(food));
  }

  static createFood(jwt, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        notice: body.notice,
        amount: body.amount,
        expiration_date: body.expirationDate,
        image_url: body.imageUrl,
        box_id: body.boxId,
        unit_id: body.unitId,
      }),
    };

    return super.authFetch(`${super.endpoint}/foods/`, jwt, options)
      .then(response => response.json())
      .then(food => new Food(food));
  }

  static removeFood(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return super.authFetch(`${super.endpoint}/foods/${id}`, jwt, options);
  }
}
