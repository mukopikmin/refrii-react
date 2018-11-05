import moment from 'moment';

import Base from './base';

class Unit extends Base {
  constructor(params) {
    super();

    this.createdAt = moment(params.created_at);
    this.id = params.id;
    this.label = params.label;
    this.step = params.step;
    this.updatedAt = moment(params.updated_at);
  }

  static mock() {
    return new Unit(this.emptyParams);
  }

  static getUnits(jwt) {
    return super.authFetch(`${super.endpoint}/units`, jwt)
      .then(response => response.json())
      .then(units => units.map(unit => new Unit(unit)));
  }

  static createUnit(jwt, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        label: body.label,
        step: body.step,
      }),
    };

    return super.authFetch(`${super.endpoint}/units`, jwt, options)
      .then(response => response.json())
      .then(unit => new Unit(unit));
  }

  static updateUnit(jwt, body, id) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        label: body.label,
        step: body.step,
      }),
    };

    return super.authFetch(`${super.endpoint}/units/${id}`, jwt, options)
      .then(response => response.json())
      .then(unit => new Unit(unit));
  }

  static removeUnit(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return super.authFetch(`${super.endpoint}/units/${id}`, jwt, options);
  }

  toJson() {
    return {
      createdAt: this.createdAt,
      id: this.id,
      label: this.label,
      step: this.step,
      updatedAt: this.updatedAt,
    };
  }
}

Unit.emptyParams = {
  created_at: null,
  id: 0,
  label: '',
  step: 0,
  updated_at: null,
};

export default Unit;
