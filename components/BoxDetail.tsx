import * as React from 'react'
import { Box } from '../models/box'

type Props = {
  box: Box
}

const BoxDetail = ({ box }: Props) => (
  <div>
    <h1>{box.name}</h1>
  </div>
)

export default BoxDetail
