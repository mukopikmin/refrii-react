import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import { fetchBoxes } from '../../store/effects/boxEffect'
import BoxList from '../../components/BoxList'
import React from 'react'
import { useBoxLoadingState } from '../../store/selectors/boxSelector'
import Loading from '../../components/Loading'

const BoxesPage = () => {
  const dispatch = useDispatch()
  const loading = useBoxLoadingState()

  useEffect(() => {
    dispatch(fetchBoxes())
  }, [])

  if (loading) {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <Loading />
      </Layout>
    )
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <BoxList />
    </Layout>
  )
}

export default BoxesPage
