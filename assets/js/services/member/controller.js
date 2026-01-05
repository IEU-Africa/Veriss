import { httpRequest } from "../httpClient.js";


const baseURL = "/u"
const endpoint = {
  // Profile APIs
  getUserProfile: `${baseURL}/profile`,
  updateUserProfile: `${baseURL}/profile/update`,

  // Dashboard APIs
  searchOrganizations: `${baseURL}/organizations/search`,
  viewOrganization: `${baseURL}/organization/i`,
  subscribeToOrganization: `${baseURL}/organizations/subscribe/i`,
  unsubscribeFromOrganization: `${baseURL}/organizations/unsubscribe/i`,
  getUserSubscriptions: `${baseURL}/subscriptions`,
  getOrgServices: `${baseURL}/organizations/i`,
  searchOrgServices: `${baseURL}/organizations/i`,
  viewService: `${baseURL}/organizations/services/s`,
  initializePayment: `${baseURL}/organizations/services/payment/initialize`,
  verifyPayment: `${baseURL}/organizations/services/payment/verify`,
  getUserPayments: `${baseURL}/payments`,
  getUserRecentPayments: `${baseURL}/payments/recent`,
  getPaymentById: `${baseURL}/payments/p`,
  getOverview: `${baseURL}/overview/annual`,
};

export async function getUserProfileApiMember(token) {
  return await httpRequest(`${endpoint.getUserProfile}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function updateUserProfileApiMember(data, token) {
  return await httpRequest(`${endpoint.updateUserProfile}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

// Dashboard API functions
export async function searchOrganizationsApi(query, token) {
  return await httpRequest(`${endpoint.searchOrganizations}?q=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function viewOrganizationApi(orgId, token) {
  return await httpRequest(`${endpoint.viewOrganization}/${orgId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function subscribeToOrganizationApi(orgId, token) {
  return await httpRequest(`${endpoint.subscribeToOrganization}/${orgId}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function unsubscribeFromOrganizationApi(orgId, token) {
  return await httpRequest(`${endpoint.unsubscribeFromOrganization}/${orgId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getUserSubscriptionsApi(token) {
  return await httpRequest(endpoint.getUserSubscriptions, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgServicesApi(orgId, token) {
  return await httpRequest(`${endpoint.getOrgServices}/${orgId}/services`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function searchOrgServicesApi(orgId, query, token) {
  return await httpRequest(`${endpoint.searchOrgServices}/${orgId}/services/search?q=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function viewServiceApi(serviceId, token) {
  return await httpRequest(`${endpoint.viewService}/${serviceId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function initializePaymentApi(data, token) {
  return await httpRequest(endpoint.initializePayment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export async function verifyPaymentApi(data, token) {
  return await httpRequest(endpoint.verifyPayment, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export async function getUserPaymentsApi(token) {
  return await httpRequest(endpoint.getUserPayments, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getUserRecentPaymentsApi(token) {
  return await httpRequest(endpoint.getUserRecentPayments, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getPaymentByIdApi(paymentId, token) {
  return await httpRequest(`${endpoint.getPaymentById}/${paymentId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOverviewApi(token) {
  return await httpRequest(`${endpoint.getOverview}?year=all`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}