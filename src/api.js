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
      .then(response => response.json());
  }

  static getBoxes(jwt) {
    return authFetch(`${endpoint}/boxes`, jwt)
      .then(response => response.json());
  }

  static getFoodsInBox(jwt, boxId) {
    return fetch(`${endpoint}/boxes/${boxId}/foods`, jwt)
      .then(handleErrors);
  }

  static updateFood(jwt, food) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: food.name,
        amount: food.amount,
        expiration_date: food.expiration_date,
        needs_adding: food.needs_adding,
        notice: food.notice,
        unit_id: food.unit.id,
      }),
    };

    return authFetch(`${endpoint}/foods/${food.id}`, jwt, options)
      .then(response => response.json());
  }
}
