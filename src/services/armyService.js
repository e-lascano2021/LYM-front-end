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

async function createSoldier (formData, photoData) {
  try {
    const res = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    if (json.err){
      throw new Error(json.err)
    }
    if (json) {
      if (photoData.photo) {
        const data = new FormData()
        data.append('photo', photoData.photo)
        return await addPhoto(data, json._id)
      }
    }
  } catch (error) {
    throw error
  }
}

export {
  createSoldier,
  getArmy
}