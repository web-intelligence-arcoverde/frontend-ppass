'use server'

import api from '..'

export const getUserByIdRequest = async (id:string) => {
  try {
    const { data } = await api.get(`/users/${id}`)
    return data
  } catch (error) {
    
  }
}