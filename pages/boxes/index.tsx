import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../../components/Auth'
import Layout from '../../components/Layout'
import { fetchBoxes } from '../../store/effects/boxEffect'
import BoxList from '../../components/BoxList'
import React from 'react'

const BoxesPage = () => {
  const dispatch = useDispatch()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    dispatch(fetchBoxes())
  }, [currentUser])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <BoxList />
    </Layout>
  )
}

export default BoxesPage
