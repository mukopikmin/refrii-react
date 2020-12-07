import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import {
  useUserLoadingState,
  useUserState,
} from '../../store/selectors/userSelector'
import UserDetail from '../../components/UserDetail'
import Loading from '../../components/Loading'

const UserPage = () => {
  const router = useRouter()
  const { id } = router.query
  const user = useUserState(Number(id))
  const loading = useUserLoadingState()

  if (user) {
    return (
      <Layout title="Users Detail | Next.js + TypeScript Example">
        <UserDetail user={user} />
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout title="Users Detail | Next.js + TypeScript Example">
        <Loading />
      </Layout>
    )
  }

  return (
    <Layout title="Users Detail | Next.js + TypeScript Example">
      <p>User not found.</p>
    </Layout>
  )
}

export default UserPage
