import moment from 'moment';

import Base from './base';

class User extends Base {
  constructor(params) {
    super();

    this.avatarUrl = params.avatar_url;
    this.createdAt = moment(params.created_at);
    this.email = params.email;
    this.id = params.id;
    this.name = params.name;
    this.provider = params.provider;
  }

  static mock() {
    return new User(this.emptyParams);
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

  toJson() {
    return {
      avatarUrl: this.avatarUrl,
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      name: this.name,
      provider: this.provider,
    };
  }
}

User.emptyParams = {
  avatar_url: '',
  created_at: null,
  email: '',
  id: 0,
  name: '',
  provider: '',
};

export default User;
