import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = (props: { visible: boolean }) => {
  if (props.visible) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spinner />
      </div>
    )
  }

  return <div></div>
}

export default Loading
