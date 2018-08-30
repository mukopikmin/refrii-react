import moment from 'moment';

import Base from './base';

export default class User extends Base {
  constructor(params) {
    super();

    this.avatarUrl = params.avatar_url;
    this.createdAt = moment(params.created_at);
    this.email = params.email;
    this.id = params.id;
    this.name = params.name;
    this.provider = params.provider;
  }

  static authWithGoogle(token) {
    return fetch(`${super.endpoint}/auth/google/token?token=${token}`)
      .then(super.handleErrors)
      .then(response => response.json())
      .then(json => ({
        expiresAt: json.expires_at,
        jwt: json.jwt,
        user: {
          email: json.user.email,
          id: json.user.id,
          name: json.user.name,
          provider: json.user.provider,
        },
      }));
  }
}
