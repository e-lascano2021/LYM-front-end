import * as tokenService from './tokenService'
const BASE_URL = '/api/auth'

function getUser() {
  return tokenService.getUserFromToken()
}






export {
  getUser,
}