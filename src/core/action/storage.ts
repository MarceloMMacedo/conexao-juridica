export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    removeToken();
    return null;
  }
  return token;
};

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
};

// Helper function to check if the token is expired
function isTokenExpired(token: string): boolean {
  // Add your token expiration logic here
  // For example, check if the token has expired
  const expiration = getTokenExpiration(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return expiration !== null && expiration < currentTime;
}

// Helper function to get the token expiration time
function getTokenExpiration(token: string): number | null {
  // Add your token expiration extraction logic here
  // For example, extract the expiration from the token payload
  const payload = token.split(".")[1];
  if (payload) {
    const decodedPayload = atob(payload);
    const { exp } = JSON.parse(decodedPayload);
    return exp;
  }
  return null;
}
