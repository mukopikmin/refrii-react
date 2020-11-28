import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize } from 'normalizr'
import { User } from '../../models/user'
import { userEntity } from './boxEffect'
import camelcaseKeys from 'camelcase-keys'

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const url = 'https://api.mypantry.muko.app/users'
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const res = await fetch(url, headers)

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

  throw new Error('fetch count error')
})
