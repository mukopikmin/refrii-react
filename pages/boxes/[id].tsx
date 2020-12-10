import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useBoxState } from '../../store/selectors/boxSelector'
import { fetchBoxes } from '../../store/effects/boxEffect'
import { fetchFoodsByBox } from '../../store/effects/foodEffect'
import { Box } from '@chakra-ui/react'
import BoxList from '../../components/BoxList'
import FoodList from '../../components/FoodList'
import { AuthContext } from '../../components/Auth'

const BoxPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const boxId = Number(id)
  const box = useBoxState(boxId)
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (boxId) {
      dispatch(fetchBoxes())
      dispatch(fetchFoodsByBox({ boxId }))
    }
  }, [boxId, currentUser])

  if (box) {
    return (
      <Layout>
        <Box display="flex" height="100vh">
          <Box display="flex" flex="1">
            <Box overflowY="scroll" padding={1} flex="1">
              <BoxList />
            </Box>
            <Box overflowY="scroll" padding={1} flex="2">
              <FoodList boxId={boxId} />
            </Box>
          </Box>
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <Box display="flex" height="100vh">
        <Box display="flex" flex="1">
          <Box overflowY="scroll" padding={1} flex="1">
            <BoxList />
          </Box>
          <Box overflowY="scroll" padding={1} flex="2">
            <p>Box not found.</p>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default BoxPage
