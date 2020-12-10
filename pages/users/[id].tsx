import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import {
  useUserLoadingState,
  useUserState,
} from '../../store/selectors/userSelector'
import UserDetail from '../../components/UserDetail'
import Loading from '../../components/Loading'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../store/effects/userEffect'
import { AuthContext } from '../../components/Auth'

const UserPage = () => {
  const { currentUser } = useContext(AuthContext)
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const userId = Number(id)
  const user = useUserState(userId)
  const loading = useUserLoadingState()

  useEffect(() => {
    dispatch(fetchUser({ id: userId }))
  }, [userId, currentUser])

  if (loading) {
    return (
      <Layout title="Users Detail | Next.js + TypeScript Example">
        <Loading visible={loading} />
      </Layout>
    )
  }

  if (user) {
    return (
      <Layout title="Users Detail | Next.js + TypeScript Example">
        <UserDetail user={user} />
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
