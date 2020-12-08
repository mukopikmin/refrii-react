import { createAsyncThunk } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'
import { User } from '../../models/user'
import camelcaseKeys from 'camelcase-keys'
import { Food } from '../../models/food'
import { Unit } from '../../models/unit'

const apiEndpoint = process.env.apiEndpoint

export const boxEntity = new schema.Entity('boxes')
export const userEntity = new schema.Entity('users')
export const unitEntity = new schema.Entity('units')
export const foodEntity = new schema.Entity('foods', {
  createdUser: userEntity,
  updatedUser: userEntity,
  unit: unitEntity,
  box: boxEntity,
})

export const fetchFoodsByBox = createAsyncThunk(
  'foods/fetchByBox',
  async (arg: { boxId: number }) => {
    const url = `${apiEndpoint}/boxes/${arg.boxId}/foods`
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }
    const responseponse = await fetch(url, { headers })

    if (responseponse.ok) {
      const body = camelcaseKeys(await responseponse.json())
      const normalized = normalize<
        any,
        {
          foods: { [key: number]: Food }
          users: { [key: number]: User }
          units: { [key: number]: Unit }
        }
      >(body, [foodEntity])

      return normalized.entities
    }

    throw new Error('fetch boxes error')
  }
)

export const fetchFood = createAsyncThunk(
  'foods/fetchOne',
  async (arg: { id: number }) => {
    const url = `${apiEndpoint}/foods/${arg.id}`
    const token = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${token}` }
    const response = await fetch(url, { headers })

    if (response.ok) {
      const body = camelcaseKeys(await response.json())
      const normalized = normalize<
        any,
        {
          foods: { [key: number]: Food }
          users: { [key: number]: User }
          units: { [key: number]: Unit }
        }
      >(body, [foodEntity])

      return normalized.entities
    }

    throw new Error('fetch foods error')
  }
)
