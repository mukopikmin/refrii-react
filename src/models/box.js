import moment from 'moment';

import Base from './base';
import Food from './food';
import User from './user';

class Box extends Base {
  constructor(params) {
    super();

    this.changeSets = params.change_sets;
    this.createdAt = moment(params.created_at);
    this.foods = params.foods.map(food => new Food(food));
    this.id = params.id;
    this.imageUrl = params.image_url;
    this.invitedUsers = params.invited_users;
    this.isInvited = params.is_invited;
    this.name = params.name;
    this.notice = params.notice;
    this.owner = new User(params.owner);
    this.updatedAt = moment(params.updated_at);
  }

  static mock() {
    return new Box(this.emptyParams);
  }

  static getBoxes(jwt) {
    return super.authFetch(`${super.endpoint}/boxes`, jwt)
      .then(response => response.json())
      .then(boxes => boxes.map(param => new Box(param)))
      .then(boxes => boxes.sort((a, b) => {
        const timeA = new Date(a.updatedAt).getTime();
        const timeB = new Date(b.updatedAt).getTime();

        return timeB - timeA;
      }))
      .then(boxes => boxes.map((_box) => {
        const box = _box;
        const foods = box.foods.sort((a, b) => {
          const timeA = new Date(a.updatedAt).getTime();
          const timeB = new Date(b.updatedAt).getTime();

          return timeB - timeA;
        });
        box.foods = foods;
        return box;
      }));
  }

  static createBox(jwt, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        notice: body.notice,
      }),
    };

    return super.authFetch(`${super.endpoint}/boxes/`, jwt, options)
      .then(response => response.json())
      .then(box => new Box(box));
  }

  static updateBox(jwt, body) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        notice: body.notice,
      }),
    };

    return super.authFetch(`${super.endpoint}/boxes/${body.id}`, jwt, options)
      .then(response => response.json())
      .then(box => new Box(box));
  }

  static removeBox(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return super.authFetch(`${super.endpoint}/boxes/${id}`, jwt, options);
  }

  static invite(jwt, id, email) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    };

    return super.authFetch(`${super.endpoint}/boxes/${id}/invite`, jwt, options);
  }

  static getFoodsInBox(jwt, boxId) {
    return super.authFetch(`${super.endpoint}/boxes/${boxId}/foods`, jwt)
      .then(response => response.json())
      .then(foods => foods.map(food => new Food(food)));
  }

  getFoods(foods) {
    return foods.filter(food => food.boxId === this.id);
  }

  toJson() {
    return {
      changeSets: this.changeSets,
      createdAt: this.createdAt,
      foods: this.foods,
      id: this.id,
      imageUrl: this.imageUrl,
      invitedUsers: this.invitedUsers,
      isInvited: this.isInvited,
      name: this.name,
      notice: this.notice,
      owner: this.owner,
      updatedAt: this.updatedAt,
    };
  }
}

Box.emptyParams = {
  change_sets: [],
  created_at: null,
  foods: [],
  id: 0,
  image_url: null,
  invited_users: [],
  is_invited: false,
  name: '',
  notice: '',
  owner: User.emptyParams,
  updated_At: null,
};

export default Box;
