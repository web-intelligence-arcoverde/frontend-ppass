"use server"

import { cookies } from "next/headers" 
import { redirect } from 'next/navigation'

export async function signOut() {
  cookies().set("_jwt_token", "", {
    maxAge: -1,
  })
  
  redirect('/')
}