import { httpRequest } from "../httpClient.js";

const baseURL = "/o/auth"
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

export async function loginApi(credentials) {
  return await httpRequest(`${endpoint.login}`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function registerApi(userData) {
  return await httpRequest(`${endpoint.register}`, {
    method: "POST",
    body: JSON.stringify(userData),
  });
}
export async function sendVerificationCodeApi(email) {
  return await httpRequest(`${endpoint.sendVerificationCode}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function verifyEmailCodeApi(data) {
  return await httpRequest(`${endpoint.verifyEmailCode}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
export async function sendResetPasswordCodeApi(email) {
  return await httpRequest(`${endpoint.sendResetPasswordCode}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function verifyResetPasswordCodeApi(data) {
  return await httpRequest(`${endpoint.verifyResetPasswordCode}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function resetPasswordApi(data, token) {
  return await httpRequest(`${endpoint.resetPassword}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),

  });
}
export async function logoutApi(token) {
  return await httpRequest(`${endpoint.logout}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}
