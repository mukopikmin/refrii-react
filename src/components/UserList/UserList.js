import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';

import styles from './UserList.module.css';

class UserList extends Component {
  static isChecked(flag) {
    return flag ? <CheckIcon /> : '';
  }

  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad();
  }

  render() {
    const { users } = this.props;

    return (
      <Paper className={styles.usertable}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>表示名</TableCell>
              <TableCell>メールアドレス</TableCell>
              <TableCell>無効</TableCell>
              <TableCell>管理者</TableCell>
              <TableCell>プロバイダー</TableCell>
              <TableCell>作成日</TableCell>
              <TableCell>更新日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{UserList.isChecked(user.disabled)}</TableCell>
                <TableCell>{UserList.isChecked(user.admin)}</TableCell>
                <TableCell>{user.provider}</TableCell>
                <TableCell>{user.createdAt.format('YYYY/MM/DD HH:mm:ss')}</TableCell>
                <TableCell>{user.updatedAt.format('YYYY/MM/DD HH:mm:ss')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default UserList;
