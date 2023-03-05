import * as tokenService from './tokenService'
const BASE_URL = '/api/auth'



async function signup(user) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user),
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


function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}






export {
  signup,
  getUser,
  logout
}