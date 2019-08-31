import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class UserList extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    const { users } = this.props;

    return (
      <Table responsive>
        <thead>
          <tr>
            <td>表示名</td>
            <td>メールアドレス</td>
            <td>無効</td>
            <td>管理者</td>
            <td>認証</td>
            <td>作成日時</td>
            <td>更新日時</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.disabled ? <FontAwesomeIcon icon={faCheck} /> : <div />}
              </td>
              <td>
                {user.admin ? <FontAwesomeIcon icon={faCheck} /> : <div />}
              </td>
              <td>{user.provider}</td>
              <td>{user.createdAt.format("YYYY/MM/DD HH:mm:ss")}</td>
              <td>{user.updatedAt.format("YYYY/MM/DD HH:mm:ss")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default UserList;
