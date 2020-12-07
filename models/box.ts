import { Invitation } from './invitation'
import { User } from './user'

export interface Box {
  id: number
  name: string
  notice: string
  imageUrl: string | null
  createdAt: string
  updatedAt: string
  isInvited: boolean
  owner: User
  invitations: Invitation[]
}
