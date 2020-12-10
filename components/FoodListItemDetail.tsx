import { Food } from '../models/food'
import { IconButton, Button, ButtonGroup, Text, Icon } from '@chakra-ui/react'
import {
  MdAdd,
  MdRemove,
  MdToday,
  MdAccessTime,
  MdUpdate,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { updateFood } from '../store/effects/foodEffect'

const FoodListItemDetail = (props: { food: Food }) => {
  const dispatch = useDispatch()
  const incrementFood = () => {
    dispatch(
      updateFood({
        id: props.food.id,
        amount: props.food.amount + props.food.unit.step,
      })
    )
  }
  const decrementFood = () => {
    dispatch(
      updateFood({
        id: props.food.id,
        amount: props.food.amount - props.food.unit.step,
      })
    )
  }

  return (
    <div>
      <Button
        verticalAlign="top"
        size="sm"
        leftIcon={<MdToday />}
        variant="outline"
        marginRight={1}
      >
        期限 {props.food?.expirationDate}
      </Button>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton
          aria-label="Add to food"
          icon={<MdRemove />}
          onClick={decrementFood}
        />
        <Button disabled>
          {props.food?.amount} {props.food?.unit?.label}
        </Button>
        <IconButton
          aria-label="Add to food"
          icon={<MdAdd />}
          onClick={incrementFood}
        />
      </ButtonGroup>

      <Text fontSize="sm" marginTop={1}>
        <Icon as={MdAccessTime} marginRight={1} />
        {props.food.createdAt}
      </Text>
      <Text fontSize="sm">
        <Icon as={MdUpdate} marginRight={1} />
        {props.food.updatedAt}
      </Text>
    </div>
  )
}

export default FoodListItemDetail
