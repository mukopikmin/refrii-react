import { User } from './user'

export interface Box {
  id: number
  name: string
  notice: string
  image_url: string | null
  created_at: Date
  updated_at: Date
  is_invited: boolean
  owner: User
  invitations: Invitation[]
}

export interface Invitation {
  id: number
  created_at: Date
  updated_at: Date
  user: User
}
