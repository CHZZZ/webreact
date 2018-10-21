import request from '../utils/request';
import {Encrypt} from '../utils/aes'
import config from '../config'

export function query() {
  return request('/api/users')
}
export function fetchAuth(params) {
  let formData = new FormData()
  const name = Encrypt(params.name)
  const pwd = Encrypt(params.pwd)
  setLocalStorage('users', [name, pwd])
  formData.append('name', name )
  formData.append('pwd', pwd)
  return request(`${config['api']}/users/create`,{
    method: 'POST',
    body: formData
  })
}
export function getLocalStorage (key) {
  return JSON.parse(localStorage.getItem(key))
}
export function setLocalStorage (key, vaule) {
  return localStorage.setItem(key, JSON.stringify(vaule));
}
export function getAuth (params) {
  return request(`${config['api']}/users`)
}