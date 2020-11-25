export interface User {
  id: number
  name: string
  email: string
  provider: string
  disabled: boolean
  admin: boolean
  avatar_url: string
  created_at: Date
  updated_at: Date
}
