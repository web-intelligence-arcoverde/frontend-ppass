"use server"

import { cookies } from "next/headers"

export async function getToken() {
  return cookies().get("_jwt_toke")
}