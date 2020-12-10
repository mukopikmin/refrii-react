import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import { fetchBoxes } from '../../store/effects/boxEffect'
import React from 'react'
import {
  useBoxesState,
  useBoxLoadingState,
} from '../../store/selectors/boxSelector'
import Loading from '../../components/Loading'
import { useRouter } from 'next/router'
import { AuthContext } from '../../components/Auth'

const BoxesPage = () => {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const dispatch = useDispatch()
  const loading = useBoxLoadingState()
  const boxes = useBoxesState()

  useEffect(() => {
    dispatch(fetchBoxes())
  }, [currentUser])

  if (!loading && boxes.length > 0) {
    router.push(`/boxes/${boxes[0].id}`)
  }

  return (
    <Layout>
      <Loading visible={loading} />
    </Layout>
  )
}

export default BoxesPage
