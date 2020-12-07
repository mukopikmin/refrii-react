import { Box } from './box'
import { Unit } from './unit'
import { User } from './user'

export interface Food {
  id: number
  name: string
  amount: number
  imageUrl: string
  expirationDate: string
  createdAt: Date
  updatedAt: Date
  box: Box
  unit: Unit
  notices: Notice[]
  createdUser: User
  updatedUser: User
}

export interface Notice {
  id: number
  text: string
  createdUser: User
  updatedUser: User
  createdAt: Date
  updatedAt: Date
}
