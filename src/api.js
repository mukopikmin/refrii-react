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
