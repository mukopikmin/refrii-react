import moment from 'moment';

import Unit from './unit';
import User from './user';

export default class Food {
  constructor(params) {
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
  }
}
