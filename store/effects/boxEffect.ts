import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'
import { Box } from '../../models/box'
import { User } from '../../models/user'
import camelcaseKeys from 'camelcase-keys'

export const userEntity = new schema.Entity('users')
export const boxEntity = new schema.Entity('boxes', {
  owner: userEntity,
})

export const fetchBoxes = createAsyncThunk('boxes/fetch', async () => {
  const url = 'https://api.mypantry.muko.app/boxes'
  const token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }
  const res = await fetch(url, { headers })

  if (res.ok) {
    const body = camelcaseKeys(await res.json())
    const normalized = normalize<
      any,
      {
        boxes: { [key: number]: Box }
        users: { [key: number]: User }
      }
    >(body, [boxEntity])

    return normalized.entities
  }

  throw new Error('fetch boxes error')
})

export const fetchBox = createAsyncThunk(
  'boxes/fetchOne',
  async (arg: { id: number }) => {
    const url = `https://api.mypantry.muko.app/boxes/${arg.id}`
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }
    const res = await fetch(url, { headers })

    if (res.ok) {
      const body = camelcaseKeys(await res.json())
      const normalized = normalize<
        any,
        {
          boxes: { [key: number]: Box }
          users: { [key: number]: User }
        }
      >([body], [boxEntity])
      console.log(normalized)
      return normalized.entities
    }

    throw new Error('fetch boxes error')
  }
)
