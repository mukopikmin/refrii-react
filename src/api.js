const endpoint = 'https://api.refrii.com';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.json());
  }

  return response;
};

export default class Api {
  static authWithGoogle(token) {
    return fetch(`${endpoint}/auth/google/token?token=${token}`)
      .then(handleErrors)
      .then(response => response.json());
  }

  static getBoxes(jwt) {
    const options = {
      headers: {
        Authorization: `Bearer: ${jwt}`,
      },
    };

    return fetch(`${endpoint}/boxes`, options)
      .then(handleErrors)
      .then(response => response.json());
  }

  static getFoodsInBox(jwt, boxId) {
    const options = {
      headers: {
        Authorization: `Bearer: ${jwt}`,
      },
    };

    return fetch(`${endpoint}/boxes/${boxId}/foods`, options)
      .then(handleErrors)
      .then(response => response.json());
  }
}
