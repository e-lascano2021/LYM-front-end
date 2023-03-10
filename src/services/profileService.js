import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`



async function addPhoto(photoData, id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

async function getProfile(id){
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export {
  addPhoto,
  getProfile,
}