'use server'

import api from '..'

export const updateUserService = async (user:{id:string}) => {
  const { data } = await api.put(`/users/${user.id}`,user)
  return data
}