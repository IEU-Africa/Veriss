// Set cookies with expiration
export function setCookie(name, value, days) {
  // Initialize the expires variable to an empty string
  let expires = "";

  // If a days value is provided, set the expires date
  if (days) {
    // Get the current date and time
    const date = new Date();
    // Calculate the expiration date by adding the number of days to the current date
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // Format the expiration date as a string in UTC format
    expires = "; expires=" + date.toUTCString();
  }

  // Set the cookie with the name, value, and expiration date
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    expires +
    "; path=/; Secure; SameSite=Strict";
}

// Get cookie by name
export function getCookie(name) {
  // Split the document.cookie string into individual cookies
  const cookies = document.cookie.split("; ");
  // Iterate over each cookie
  for (let c of cookies) {
    // Split the cookie into key and value
    const [key, value] = c.split("=");
    // If the key matches the desired name, return the decoded value
    if (key === name) return decodeURIComponent(value);
  }
  // If the cookie is not found, return null
  return null;
}

// Delete cookie by name
export function deleteCookie(name) {
  // Set the cookie with the name and an expiration date in the past
  document.cookie =
    name +
    "=; max-age=0; path=/; Secure; SameSite=Strict";
}