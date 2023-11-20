import axios from "axios"
// import { getCookie } from "./cookie.utils"

export const getApiConnection = () => {
  const API = axios.create({
    baseURL: 'http//:localhost:4000/'
  })
  return API
}