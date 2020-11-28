import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../components/Auth'
import { fetchUsers } from '../../store/effects/userEffect'
import UserList from '../../components/UserList'
import { useUserLoadingState } from '../../store/selectors/userSelector'
import Loading from '../../components/Loading'

const UsersPage = () => {
  const dispatch = useDispatch()
  const loading = useUserLoadingState()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return (
      <Layout title="Users List | Next.js + TypeScript Example">
        <Loading />
      </Layout>
    )
  }

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <UserList />
    </Layout>
  )
}

export default UsersPage
