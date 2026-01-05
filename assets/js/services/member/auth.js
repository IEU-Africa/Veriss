import { httpRequest } from "../httpClient.js";

const baseURL = "/u/auth"
const endpoint = {
  login: `${baseURL}/login`,
  register: `${baseURL}/register`,
  sendVerificationCode: `${baseURL}/send-verf-code/email`,
  verifyEmailCode: `${baseURL}/verify-email`,
  sendResetPasswordCode: `${baseURL}/password-reset/send-code`,
  verifyResetPasswordCode: `${baseURL}/password-reset/verify-code`,
  
  resetPassword: `${baseURL}/password-reset/reset`,
  logout: `${baseURL}/logout`,
};

export async function loginApiMember(credentials) {
  return await httpRequest(`${endpoint.login}`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function registerApiMember(userData) {
  return await httpRequest(`${endpoint.register}`, {
    method: "POST",
    body: JSON.stringify(userData),
  });
}
export async function sendVerificationCodeApiMember(email) {
  return await httpRequest(`${endpoint.sendVerificationCode}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function verifyEmailCodeApiMember(data) {
  return await httpRequest(`${endpoint.verifyEmailCode}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
export async function sendResetPasswordCodeApiMember(email) {
  return await httpRequest(`${endpoint.sendResetPasswordCode}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function verifyResetPasswordCodeApiMember(data) {
  return await httpRequest(`${endpoint.verifyResetPasswordCode}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function resetPasswordApiMember(data, token) {
  return await httpRequest(`${endpoint.resetPassword}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export async function logoutApiMember(token) {
  return await httpRequest(`${endpoint.logout}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}