import React from 'react'
import { useFoodByBoxState } from '../store/selectors/foodSelector'
import { Heading, Box } from '@chakra-ui/react'
import { useBoxState } from '../store/selectors/boxSelector'

const FoodList = (props: { boxId: number }) => {
  const foods = useFoodByBoxState(props.boxId)
  const box = useBoxState(props.boxId)

  return (
    <div>
      <Heading size="lg" mb={3}>
        {box?.name}
      </Heading>

      {foods.map((food) => (
        <Box key={food?.id} borderWidth="1px" padding={3}>
          {food?.name}
        </Box>
      ))}
    </div>
  )
}

export default FoodList
