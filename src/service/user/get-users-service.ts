'use server'

import api from '..'

export const getUserRequestService = async () => {
  const {data} = await api.get('/users')
  return data
}