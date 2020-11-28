import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../components/Auth'
import { fetchUsers } from '../../store/effects/userEffect'
import UserList from '../../components/UserList'

const UsersPage = () => {
  const dispatch = useDispatch()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [currentUser])

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <UserList />
    </Layout>
  )
}

export default UsersPage
