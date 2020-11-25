import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize } from 'normalizr'
import { User } from '../../models/user'
import { userEntity } from './boxEffect'

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (arg: { token: string }) => {
    const url = 'https://api.mypantry.muko.app/users'
    const headers = {
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    }
    const res = await fetch(url, headers)

    if (res.ok) {
      const json = (await res.json()) as User[]
      const normalized = normalize<
        any,
        {
          users: { [key: number]: User }
        }
      >(json, [userEntity])

      return normalized.entities
    }

    throw new Error('fetch count error')
  }
)
