import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/armies`

async function getArmy () {
  try {
    const res = await fetch(`${BASE_URL}/`, {
      method: "GET",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

async function createArmy (formData) {
  console.log(formData)
  try {
    const res = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData),
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export {
  createArmy,
  getArmy
}