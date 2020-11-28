import { User } from './user'

export interface Box {
  id: number
  name: string
  notice: string
  imageUrl: string | null
  createdAt: string
  updatedAt: string
  is_invited: boolean
  owner: User
  invitations: Invitation[]
}

export interface Invitation {
  id: number
  createdAt: string
  updatedAt: string
  user: User
}
