import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/plans`

async function createPlan (sodierId, formData) {
  try {
    const res = await fetch(`${BASE_URL}/${sodierId}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}




export {
  createPlan
}