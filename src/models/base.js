class Base {
  static handleErrors(response) {
    if (!response.ok) {
      return response.json().then((json) => {
        throw json;
      });
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

Base.endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.refrii.com';

export default Base;
