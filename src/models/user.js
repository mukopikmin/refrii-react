import moment from 'moment';

import Base from './base';

class User extends Base {
  constructor(params) {
    super();

    this.avatarUrl = params.avatar_url;
    this.createdAt = moment(params.created_at);
    this.updatedAt = moment(params.created_at);
    this.email = params.email;
    this.id = params.id;
    this.name = params.name;
    this.provider = params.provider;
    this.admin = params.admin;
    this.disabled = params.disabled;
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
        user: json.user,
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

  static getUsers(jwt) {
    return super.authFetch(`${super.endpoint}/users`, jwt)
      .then(response => response.json())
      .then(users => users.map(user => new User(user)));
  }
}

User.emptyParams = {
  avatar_url: '',
  created_at: null,
  updated_at: null,
  email: '',
  id: 0,
  name: '',
  provider: '',
  admin: false,
  disabled: false,
};

export default User;
