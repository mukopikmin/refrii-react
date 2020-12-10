import React from 'react'
import {
  useFoodByBoxState,
  useFoodLoadingState,
} from '../store/selectors/foodSelector'
import {
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react'
import { useBoxState } from '../store/selectors/boxSelector'
import Loading from './Loading'
import FoodListItemDetail from './FoodListItemDetail'

const FoodList = (props: { boxId: number }) => {
  const foods = useFoodByBoxState(props.boxId)
  const box = useBoxState(props.boxId)
  const loading = useFoodLoadingState() && foods.length === 0

  return (
    <div>
      <Heading size="lg" mb={3}>
        {box?.name}
      </Heading>

      <Loading visible={loading} />

      <Accordion allowToggle>
        {foods.map((food) => (
          <AccordionItem key={food?.id} borderWidth="1px" padding={1}>
            <AccordionButton>
              <Flex justify="space-between" flex={1} textAlign="left">
                <Box>{food?.name}</Box>
                <Box marginRight={4}>
                  {food?.amount} {food?.unit?.label}
                </Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FoodListItemDetail food={food} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FoodList
