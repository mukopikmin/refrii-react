import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchUsers } from '../../store/effects/userEffect'
import UserList from '../../components/UserList'
import { useUserLoadingState } from '../../store/selectors/userSelector'
import Loading from '../../components/Loading'
import { Heading } from '@chakra-ui/react'

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
      <Heading size="lg">Accounts</Heading>
      <UserList />
    </Layout>
  )
}

export default UsersPage
