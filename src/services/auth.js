import request from '../utils/request';

export function query() {
  return request('/api/users');
}
export function getLocalStorage (key) {
  return JSON.parse(localStorage.getItem(key))
}
export function setLocalStorage (key, vaule) {
  return localStorage.setItem(key, JSON.stringify(vaule));
}