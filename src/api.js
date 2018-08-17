import Box from './models/box';
import Food from './models/food';
import Unit from './models/unit';

const endpoint = 'https://api.refrii.com';
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

  static getBoxes(jwt) {
    return authFetch(`${endpoint}/boxes`, jwt)
      .then(response => response.json())
      .then(boxes => boxes.map(param => new Box(param)))
      .then(boxes => boxes.sort((a, b) => {
        const timeA = new Date(a.updatedAt).getTime();
        const timeB = new Date(b.updatedAt).getTime();

        return timeB - timeA;
      }))
      .then(boxes => boxes.map((_box) => {
        const box = _box;
        const foods = box.foods.sort((a, b) => {
          const timeA = new Date(a.updatedAt).getTime();
          const timeB = new Date(b.updatedAt).getTime();

          return timeB - timeA;
        });
        box.foods = foods;
        return box;
      }));
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
      .then(box => new Box(box));
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
      .then(box => new Box(box));
  }

  static removeBox(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/boxes/${id}`, jwt, options);
  }

  static getFoodsInBox(jwt, boxId) {
    return authFetch(`${endpoint}/boxes/${boxId}/foods`, jwt)
      .then(handleErrors)
      .then(response => response.json())
      .then(foods => foods.map(food => new Food(food)));
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
      .then(food => new Food(food));
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
      .then(food => new Food(food));
  }

  static removeFood(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/foods/${id}`, jwt, options);
  }

  static getUnits(jwt) {
    return authFetch(`${endpoint}/units`, jwt)
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

    return authFetch(`${endpoint}/units`, jwt, options)
      .then(response => response.json())
      .then(unit => new Unit(unit));
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
      .then(unit => new Unit(unit));
  }

  static removeUnit(jwt, id) {
    const options = {
      method: 'DELETE',
    };

    return authFetch(`${endpoint}/units/${id}`, jwt, options);
  }
}
