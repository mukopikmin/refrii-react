import * as React from 'react'
import { User } from '../models/user'

type Props = {
  user: User
}

const UserDetail = ({ user }: Props) => (
  <div>
    <img src={user.avatarUrl} alt="" />
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.createdAt}</p>
  </div>
)

export default UserDetail
