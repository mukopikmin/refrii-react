import moment from 'moment';

import Food from './food';
import User from './user';

export default class Box {
  constructor(params) {
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
}
