import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

class UserList extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad();
  }

  static renderChecked(isChecked) {
    return isChecked ? <FontAwesomeIcon icon={faPen} /> : <div />;
  }

  render() {
    const { users } = this.props;

    return (
      <Table>
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
              <td>{this.renderChecked(user.disabled)}</td>
              <td>{this.renderChecked(user.admin)}</td>
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
