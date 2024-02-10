"use server"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

export async function signIn(
  _currentState: unknown,
  formData: FormData){
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  console.log(email, password)
  const access_token = "eyJhbGciOiJIUzM4NCJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwNzU3OTU0NSwiaWF0IjoxNzA3NTc5NTQ1fQ.w7LGnZajSy1_NBAlipSXj2Drmf99988SD5fy7kJdTquhF9EA5Mas9JS2c310cE92"
  cookies().set("_jwt_token", access_token)
  redirect('/dashboard')
}
