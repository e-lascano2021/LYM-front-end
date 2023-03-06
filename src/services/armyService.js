import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/armies`



async function createArmy (formData) {
  try {
    const res = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: formData
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export {
  createArmy
}