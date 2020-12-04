import * as React from 'react'
import { User } from '../models/user'
import { Avatar, Heading, Checkbox, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { updateUser } from '../store/effects/userEffect'
import { useDispatch } from 'react-redux'

type Props = {
  user: User
}

const UserDetail = ({ user }: Props) => {
  const selfEditing = localStorage.getItem('email') === user.email
  const dispatch = useDispatch()
  const [admin, setAdmin] = useState(user.admin)
  const [disabled, setDisabled] = useState(user.disabled)
  const submit = () => {
    dispatch(
      updateUser({
        id: user.id,
        admin,
        disabled,
      })
    )
  }
  const toggleAdmin = () => {
    setAdmin(!admin)
  }
  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <div>
      <Avatar name={user.name} src={user.avatarUrl} marginRight={3} />
      <Heading display="inline-block">{user.name}</Heading>

      <Box
        marginTop={3}
        padding={3}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <p>{user.email}</p>
        <p>{user.createdAt}</p>
        <p>{user.updatedAt}</p>
      </Box>

      <Box
        marginTop={3}
        padding={3}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Checkbox
          isDisabled={selfEditing}
          isChecked={admin}
          onChange={toggleAdmin}
        >
          Admin
        </Checkbox>
        <Checkbox
          isDisabled={selfEditing}
          isChecked={disabled}
          onChange={toggleDisabled}
        >
          Disable
        </Checkbox>

        <div>
          <Button onClick={submit}>Submit</Button>
        </div>
      </Box>
    </div>
  )
}

export default UserDetail
