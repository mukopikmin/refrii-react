import Link from 'next/link'
import React from 'react'
import { useBoxesState } from '../store/selectors/boxSelector'
import { List, ListItem, ListIcon, Heading } from '@chakra-ui/react'
import { MdFolder } from 'react-icons/md'

const BoxList = () => {
  const boxes = useBoxesState()

  return (
    <div>
      <Heading size="md" mb={3}>
        カテゴリ
      </Heading>
      <List spacing={3}>
        {boxes.map((box) => (
          <ListItem key={box.id}>
            <Link href="/boxes/[id]" as={`/boxes/${box.id}`}>
              <a>
                <ListIcon as={MdFolder} color="green.500" />
                {box.name}
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default BoxList
