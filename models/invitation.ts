import { User } from './user'

export interface Invitation {
  id: number
  createdAt: string
  updatedAt: string
  user: User
}
