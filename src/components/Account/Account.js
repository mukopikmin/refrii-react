import React, { Component } from "react";
import { Table, Button, Form } from "react-bootstrap";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      name: this.props.session.user.name
    };

    this.updateUser = this.updateUser.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    const { session } = this.props;

    fetch(session.user.avatarUrl)
      .then(response => response.blob())
      .then(blob => this.generateBase64(blob));
  }

  updateUser() {
    const { session, updateUser } = this.props;
    const { user } = session;
    const { name, avatar } = this.state;

    updateUser(user.id, name, avatar);
  }

  onAvatarChange(e) {
    const file = e.target.files[0];

    this.generateBase64(file);
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState(pre => ({
      ...pre,
      name
    }));
  }

  generateBase64(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState(pre => ({
        ...pre,
        avatar: reader.result
      }));
    };
    reader.onerror = error => console.log(error);
  }

  render() {
    const { session } = this.props;
    const { user } = session;
    const { name } = this.state;

    return (
      <div>
        <Table>
          <tbody>
            <tr>
              <td>アイコン</td>
              <td>
                <img src={user.avatarUrl} alt="" width="100px" />
                <Form.Control type="file" onChange={this.onAvatarChange} />
              </td>
            </tr>
            <tr>
              <td>ユーザー名</td>
              <td>
                <Form.Control
                  type="text"
                  onChange={this.onNameChange}
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <td>メールアドレス</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>認証サービス</td>
              <td>{user.provider}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" onClick={this.updateUser}>
          更新
        </Button>
      </div>
    );
  }
}

export default Account;
