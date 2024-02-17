'use server'

import api from '..'

export const deleteUserService = async (id:number) => {
  await api.delete(`/users/${id}`)
}