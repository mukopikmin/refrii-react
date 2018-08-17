import { camelize } from '@ridi/object-case-converter';

const endpoint = 'https://api.refrii.com';
const format = json => camelize(json, { recursive: true });

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.json());
  }

  return response;
};

const authFetch = (url, jwt, _options = {}) => {
  const options = {
    ..._options,
  };

  if (!_options.headers) {
    options.headers = {};
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer: ${jwt}`,
  };

  return fetch(url, options)
    .then(handleErrors);
};

export default class Api {
  static authWithGoogle(token) {
    return fetch(`${endpoint}/auth/google/token?token=${token}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(format);
  }

  static getBoxes(jwt) {
    return authFetch(`${endpoint}/boxes`, jwt)
      .then(response => response.json())
      .then(boxes => boxes.sort((a, b) => {
        const timeA = new Date(a.updated_at).getTime();
        const timeB = new Date(b.updated_at).getTime();

        return timeB - timeA;
      }))
      .then(boxes => boxes.map((box) => {
        const foods = box.foods.sort((a, b) => {
          const timeA = new Date(a.updated_at).getTime();
          const timeB = new Date(b.updated_at).getTime();

          return timeB - timeA;
        });

        return {
          ...box,
          foods,
        };
      }))
      .then(format);
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

    return authFetch(`${endpoint}/boxes/`, jwt, options)
      .then(response => response.json())
      .then(format);
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

    return authFetch(`${endpoint}/boxes/${body.id}`, jwt, options)
      .then(response => response.json())
      .then(format);
  }

  static removeBox(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/boxes/${id}`, jwt, options);
  }

  static getUnits(jwt) {
    return authFetch(`${endpoint}/units`, jwt)
      .then(response => response.json())
      .then(format);
  }

  static getFoodsInBox(jwt, boxId) {
    return fetch(`${endpoint}/boxes/${boxId}/foods`, jwt)
      .then(handleErrors)
      .then(format);
  }

  static updateFood(jwt, body) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        amount: body.amount,
        expiration_date: body.expirationDate,
        needs_adding: body.needsAdding,
        notice: body.notice,
        unit_id: body.unitId,
      }),
    };

    return authFetch(`${endpoint}/foods/${body.id}`, jwt, options)
      .then(response => response.json())
      .then(format);
  }

  static createFood(jwt, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        notice: body.notice,
        amount: body.amount,
        expiration_date: body.expirationDate,
        image_url: body.imageUrl,
        box_id: body.boxId,
        unit_id: body.unitId,
      }),
    };

    return authFetch(`${endpoint}/foods/`, jwt, options)
      .then(response => response.json())
      .then(format);
  }

  static removeFood(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/foods/${id}`, jwt, options);
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
        // box_id: body.boxId,
      }),
    };

    return authFetch(`${endpoint}/units`, jwt, options)
      .then(response => response.json())
      .then(format);
  }

  static updateUnit(jwt, body) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        notice: body.notice,
        box_id: body.boxId,
      }),
    };

    return authFetch(`${endpoint}/units`, jwt, options)
      .then(response => response.json())
      .then(format);
  }

  static removeUnit(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/units/${id}`, jwt, options);
  }
}
