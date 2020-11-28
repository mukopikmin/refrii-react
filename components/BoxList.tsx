import Link from 'next/link'
import React from 'react'
import { useBoxesState } from '../store/selectors/boxSelector'

const BoxList = () => {
  const boxes = useBoxesState()

  return (
    <ul>
      {boxes.map((box) => (
        <li key={box.id}>
          <Link href="/boxes/[id]" as={`/boxes/${box.id}`}>
            <a>{box.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BoxList
