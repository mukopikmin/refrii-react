import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import React, { useContext, useEffect } from 'react'
import { fetchUsers } from '../../store/effects/userEffect'
import UserList from '../../components/UserList'
import { useUserLoadingState } from '../../store/selectors/userSelector'
import Loading from '../../components/Loading'
import { Heading } from '@chakra-ui/react'
import { AuthContext } from '../../components/Auth'

const UsersPage = () => {
  const { currentUser } = useContext(AuthContext)
  const dispatch = useDispatch()
  const loading = useUserLoadingState()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [currentUser])

  if (loading) {
    return (
      <Layout title="Users List | Next.js + TypeScript Example">
        <Loading visible={loading} />
      </Layout>
    )
  }

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <Heading size="lg">Accounts</Heading>
      <UserList />
    </Layout>
  )
}

export default UsersPage
