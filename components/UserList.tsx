import Link from 'next/link'
import React from 'react'
import { useUsersState } from '../store/selectors/userSelector'

const UserList = () => {
  const users = useUsersState()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href="/users/[id]" as={`/users/${user.id}`}>
            <a>{user.email}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UserList
