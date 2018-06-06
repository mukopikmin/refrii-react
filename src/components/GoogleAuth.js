import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleAuth extends Component {
  render() {
    const { onGoogleAuthorized } = this.props;

    return (
      <GoogleLogin
        clientId="943106981480-6sr30j1mfs9hcj64kc6sp9c9cc32rhb6.apps.googleusercontent.com"
        onSuccess={onGoogleAuthorized}
        onFailure={onGoogleAuthorized}
      />
    );
  }
}

export default GoogleAuth;
