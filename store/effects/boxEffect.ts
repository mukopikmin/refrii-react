import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'
import { Box } from '../../models/box'
import { User } from '../../models/user'

export const userEntity = new schema.Entity('users')
export const boxEntity = new schema.Entity('boxes', {
  owner: userEntity,
})

export const fetchBoxes = createAsyncThunk(
  'boxes/fetch',
  async (arg: { token: string }) => {
    const url = 'https://api.mypantry.muko.app/boxes'
    const headers = {
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    }
    const res = await fetch(url, headers)

    if (res.ok) {
      const json = await res.json()
      const normalized = normalize<
        any,
        {
          boxes: { [key: number]: Box }
          users: { [key: number]: User }
        }
      >(json, [boxEntity])

      return normalized.entities
    }

    throw new Error('fetch boxes error')
  }
)
