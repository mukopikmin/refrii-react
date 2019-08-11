import React, { Component } from 'react';
import {
  Container, Table, Button, Form,
} from 'react-bootstrap';

import Header from '../Header';
import EditUnitModal from '../EditUnitModal';
import styles from './Setting.module.css';

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      unit: null,
      avatar: null,
      name: this.props.session.user.name,
    };
    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);
    this.add = this.add.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.onAvatarChange = this.onAvatarChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    const { fetchUnits, session } = this.props;

    fetchUnits();
    fetch(session.user.avatarUrl)
      .then(response => response.blob())
      .then(blob => this.generateBase64(blob));
  }

  edit(unit) {
    this.setState(pre => ({
      ...pre,
      modalOpen: true,
      unit,
    }));
  }

  close() {
    this.setState(pre => ({
      ...pre,
      modalOpen: false,
      unit: null,
    }));
  }

  add() {
    this.setState(pre => ({
      ...pre,
      modalOpen: true,
      unit: null,
    }));
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
      name,
    }));
  }

  generateBase64(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState(pre => ({
        ...pre,
        avatar: reader.result,
      }));
    };
    reader.onerror = error => console.log(error);
  }

  render() {
    const { units, session } = this.props;
    const { modalOpen, unit } = this.state;
    const { user } = session;
    const { name } = this.state;

    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Container>
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
                    <Form.Control type="text" onChange={this.onNameChange} value={name} />
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

            <Button onClick={this.add}>単位の作成</Button>
            <Table responsive>
              <thead>
                <tr>
                  <td>ラベル</td>
                  <td />
                  <td>作成日時</td>
                  <td>更新日時</td>
                </tr>
              </thead>
              <tbody>
                {units.map(ownUnit => (
                  <tr key={ownUnit.id} onClick={() => this.edit(ownUnit)}>
                    <td>{ownUnit.label}</td>
                    <td>{ownUnit.step}</td>
                    <td>{ownUnit.createdAt.format('YYYY/MM/DD hh:mm')}</td>
                    <td>{ownUnit.updatedAt.format('YYYY/MM/DD hh:mm')}</td>
                    <td />
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>

        <EditUnitModal
          open={modalOpen}
          close={this.close}
          unit={unit}
        />
      </div>
    );
  }
}

export default Setting;
