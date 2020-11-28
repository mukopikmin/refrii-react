import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useUserState } from '../../store/selectors/userSelector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../store/effects/userEffect'
import { AuthContext } from '../../components/Auth'
import UserDetail from '../../components/UserDetail'

const UserPage = () => {
  const dispatch = useDispatch()
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const user = useUserState(Number(id))

  useEffect(() => {
    dispatch(fetchUsers())
  }, [currentUser])

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