import React from 'react'
import { useUsersState } from '../store/selectors/userSelector'
import DataTable from 'react-data-table-component'
import { User } from '../models/user'
import { useRouter } from 'next/router'

const UserList = () => {
  const router = useRouter()
  const users = useUsersState()
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Provider',
      selector: 'provider',
      sortable: true,
    },
    {
      name: 'Disabled',
      selector: 'disabled',
      sortable: true,
      cell: (row: User) => (row.disabled ? 'true' : ''),
    },
    {
      name: 'Admin',
      selector: 'admin',
      sortable: true,
      cell: (row: User) => (row.admin ? 'true' : ''),
    },
    {
      name: 'Created',
      selector: 'createdAt',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Updated',
      selector: 'updatedAt',
      sortable: true,
      grow: 2,
    },
  ]
  const showUser = (user: User) => {
    router.replace(`/users/${user.id}`)
  }

  return (
    <DataTable
      noHeader
      onRowClicked={showUser}
      columns={columns}
      data={users}
    />
  )
}

export default UserList
