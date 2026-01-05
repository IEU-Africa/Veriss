import { ENV } from "../config/env.js";

export async function httpRequest(url, options = {}) {

  const API_BASE_URL = ENV.API_URL;
  const endpoint = `${API_BASE_URL}${url}`;
  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }

    return await response.json();
  } catch (error) {
    throw error; // rethrow so upper layers handle it
  }
}
