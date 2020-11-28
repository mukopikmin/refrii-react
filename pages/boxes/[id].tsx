import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../../components/Auth'
import BoxDetail from '../../components/BoxDetail'
import { useBoxState } from '../../store/selectors/boxSelector'
import { fetchBoxes } from '../../store/effects/boxEffect'

const BoxPage = () => {
  const dispatch = useDispatch()
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const { id } = router.query
  const box = useBoxState(Number(id))

  useEffect(() => {
    dispatch(fetchBoxes())
  }, [currentUser])

  if (box) {
    return (
      <Layout title="Users Detail | Next.js + TypeScript Example">
        <BoxDetail box={box} />
      </Layout>
    )
  }

  return (
    <Layout title="Users Detail | Next.js + TypeScript Example">
      <p>User not found.</p>
    </Layout>
  )
}

export default BoxPage
