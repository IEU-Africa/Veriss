import { getCookie } from './cookies.js';

function logout() {
  localStorage.removeItem('currentUser');
}

function getCurrentUserToken() {
  const token = sessionStorage.getItem('auth_token');
  console.log('Current User Token:', token);
  return token;
}

function getCurrentUser() {
  const user = getCookie('user_data');
  console.log('Current User:', user);
  return user;
}

export { logout, getCurrentUserToken, getCurrentUser };