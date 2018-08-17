import moment from 'moment';

import User from './user';

export default class Session {
  constructor(params) {
    this.expiresAt = moment(params.expires_at);
    this.googleToken = params.google_token;
    this.jwt = params.jwt;
    this.user = new User({
      ...params.user,
      avatar_url: null,
    });
  }
}
