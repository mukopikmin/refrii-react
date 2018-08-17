import moment from 'moment';

export default class User {
  constructor(params) {
    this.avatarUrl = params.avatar_url;
    this.createdAt = moment(params.created_at);
    this.email = params.email;
    this.id = params.id;
    this.name = params.name;
    this.provider = params.provider;
  }
}
