import * as tokenService from './tokenService.js'
import { addPhoto } from './profileService.js'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/auth`


async function signup(formData, photoData) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
      const user = tokenService.getUserFromToken()
      if (photoData.photo && user) {
        const data = new FormData()
        data.append('photo', photoData.photo)
        await addPhoto(data, user.profile)
      }
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}


function getUser() {
  return tokenService.getUserFromToken()
}


function logout() {
  tokenService.removeToken()
}


async function login(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}




export {
  signup,
  getUser,
  logout,
  login
}