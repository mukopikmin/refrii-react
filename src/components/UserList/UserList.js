import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

const columns = [
  {
    name: '表示名',
    options: {
      filter: false,
      sort: true,
    },
  }, {
    name: 'メールアドレス',
    options: {
      filter: false,
      sort: true,
    },
  }, {
    name: '状態',
    options: {
      filter: true,
      sort: true,
      customBodyRender: value => (value ? '有効' : '無効'),
    },
  }, {
    name: '管理者',
    options: {
      filter: true,
      sort: true,
      customBodyRender: value => (value ? '管理者' : '一般ユーザー'),
    },
  }, {
    name: 'プロバイダー',
    options: {
      filter: true,
      sort: true,
    },
  }, {
    name: '作成日',
    options: {
      filter: false,
      sort: true,
    },
  }, {
    name: '更新日',
    options: {
      filter: false,
      sort: true,
    },
  },
];
const options = {
  responsive: 'scroll',
  filterType: 'checkbox',
  resizableColumns: true,
  print: false,
  download: false,
  selectableRows: false,
};

class UserList extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    this.getTableData = this.getTableData.bind(this);
    onLoad();
  }

  getTableData() {
    const { users } = this.props;

    return users.map(user => ([
      user.name,
      user.email,
      user.disabled,
      user.admin,
      user.provider,
      user.createdAt.format('YYYY/MM/DD HH:mm:ss'),
      user.updatedAt.format('YYYY/MM/DD HH:mm:ss'),
    ]));
  }

  render() {
    return (
      <MUIDataTable
        title="ユーザー一覧"
        data={this.getTableData()}
        columns={columns}
        options={options}
      />
    );
  }
}

export default UserList;
