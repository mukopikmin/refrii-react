import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize } from 'normalizr'
import { User } from '../../models/user'
import { userEntity } from './boxEffect'
import camelcaseKeys from 'camelcase-keys'

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  const url = 'https://api.mypantry.muko.app/users'
  const token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }
  const res = await fetch(url, { headers })

  if (res.ok) {
    const body: User[] = camelcaseKeys(await res.json())
    const normalized = normalize<
      any,
      {
        users: { [key: number]: User }
      }
    >(body, [userEntity])

    return normalized.entities
  }

  throw new Error('fetch users error')
})

export const updateUser = createAsyncThunk(
  'users/updateOne',
  async (arg: { id: number; admin: boolean; disabled: boolean }) => {
    const url = `https://api.mypantry.muko.app/users/${arg.id}`
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }
    const body = JSON.stringify({ ...arg })
    const res = await fetch(url, {
      method: 'PUT',
      headers,
      body,
    })

    if (res.ok) {
      return { ...arg }
    }
    throw new Error('update user error')
  }
)
