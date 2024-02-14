'use server'

import { ISignIn } from '@/types/sign-in'
import { cookies } from "next/headers"

import api from '..'

export const signInRequestService = async (data: ISignIn) => {
  const { data: { token } } = await api.post('/sign-in', data)
  cookies().set("_jwt_token", JSON.stringify(token.token))
}