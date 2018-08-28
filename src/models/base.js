class Base {
  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.json());
    }

    return response;
  }

  static authFetch(url, jwt, _options = {}) {
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
      .then(Base.handleErrors);
  }
}

Base.endpoint = 'https://api.refrii.com';

export default Base;
