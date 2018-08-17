import moment from 'moment';

export default class Unit {
  constructor(params) {
    this.createdAt = moment(params.created_at);
    this.id = params.id;
    this.label = params.label;
    this.step = params.step;
    this.updatedAt = moment(params.updated_at);
  }
}
