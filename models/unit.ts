import { User } from './user'

export interface Unit {
  id: number
  label: string
  step: number
  createdAt: Date
  updatedAt: Date
  user: User
}
