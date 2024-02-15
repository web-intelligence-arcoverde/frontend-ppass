'use server'

import api from '..'

export const createUserRequest = async (user:any) => {
  const { data } = await api.post('/users', user)
  return data
}