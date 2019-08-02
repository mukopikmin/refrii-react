import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import Header from '../Header';
import EditUnitModal from '../EditUnitModal';
import styles from './Setting.module.css';

class Setting extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    this.state = {
      modalOpen: false,
      unit: null,
    };
    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);
    this.add = this.add.bind(this);

    onLoad();
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

  render() {
    const { units, session } = this.props;
    const { modalOpen, unit } = this.state;
    const { user } = session;

    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Container>
            <Button>ユーザー情報の編集</Button>
            <Table>
              <tbody>
                <tr>
                  <td>ユーザー名</td>
                  <td>{user.name}</td>
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
