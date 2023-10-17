import axios from "axios";

export const getToken = async (credentials: {
  username: string;
  password: string;
}): Promise<string | null> => {
  try {
    const response = await axios.post("/api/token", credentials);
    return response.data.token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

export const validateToken = async (token: string): Promise<boolean> => {
  try {
    const response = await axios.post("/api/validate", { token });
    return response.data.valid;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
};

export const refreshToken = async (token: string): Promise<string | null> => {
  try {
    const response = await axios.post("/api/refresh", { token });
    return response.data.newToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

export const isTokenValid = (token: string): boolean => {
  try {
    const decodedToken = decodeToken(token);
    if (!decodedToken || !decodedToken.exp) {
      return false;
    }

    const expirationDate = new Date(decodedToken.exp * 1000);
    const currentDate = new Date();

    return expirationDate > currentDate;
  } catch (error) {
    console.error("Error checking token validity:", error);
    return false;
  }
};

// Helper function to decode the token payload
function decodeToken(token: string): { [key: string]: any } | null {
  try {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      return null;
    }

    const payloadBase64 = tokenParts[1];
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
