'use server'

import api from '..'

export const createUserRequest = async () => {
  const { data } = await api.put('/users')
  return data
}