import axios from "axios";
import { getToken, removeToken } from "./storage";
import {
  encryptData,
  decryptData,
  eraseEncryptionKey,
  encryptionKey,
  setEncryptionKey,
} from "./encryptionUtils";

export const getData = async (endpoint: string, id: string): Promise<any> => {
  const token = getToken();
  if (token !== null) {
    removeToken();
    eraseEncryptionKey();
    throw new Error("Token is expired or invalid");
  }

  const headers = { Authorization: `Bearer ${token}` };

  try {
    const idCripto = setEncryptionKey();
    const response = await axios.get(
      `${endpoint}/${idCripto}/${encryptionKey}`,
      {
        headers,
      }
    );
    const decryptedData = decryptData(response.data);
    return decryptedData;
  } catch (error) {
    console.error("Error getting data:", error);
    throw new Error("Failed to get data");
  }
};

export const createData = async (endpoint: string, data: any): Promise<any> => {
  const token = getToken();
  if (token !== null) {
    removeToken();
    eraseEncryptionKey();
    throw new Error("Token is expired or invalid");
  }

  const headers = { Authorization: `Bearer ${token}` };
  const encryptedData = encryptData(data);

  try {
    const response = await axios.post(endpoint, encryptedData, { headers });
    const decryptedData = decryptData(response.data);
    return decryptedData;
  } catch (error) {
    console.error("Error creating data:", error);
    throw new Error("Failed to create data");
  }
};

export const updateData = async (
  endpoint: string,
  id: string,
  data: any
): Promise<any> => {
  const token = getToken();
  if (token !== null) {
    removeToken();
    eraseEncryptionKey();
    throw new Error("Token is expired or invalid");
  }

  const headers = { Authorization: `Bearer ${token}` };
  const encryptedData = encryptData(data);

  try {
    const response = await axios.put(`${endpoint}/${id}`, encryptedData, {
      headers,
    });
    const decryptedData = decryptData(response.data);
    return decryptedData;
  } catch (error) {
    console.error("Error updating data:", error);
    throw new Error("Failed to update data");
  }
};


/**
 * Generates a new encryption key and sets it in the local storage.
 */
const generateEncryptionKey = () => {
  const key = CryptoJS.lib.WordArray.random(16); // 32 bytes (256 bits)
  const keyBase64 = CryptoJS.enc.Base64.stringify(key);
  console.log("Chave secreta:", atob(keyBase64));
  console.log("Chave AES gerada:", keyBase64);
  setEncryptionKeyLocalStorage(atob(keyBase64));
};

/**
 * Sets the provided encryption key in the local storage.
 *
 * @param {string} key - The encryption key to be stored.
 */
const setEncryptionKeyLocalStorage = (key: string) => {
  localStorage.setItem("encryptionKey", key);
};
/*
recuperar chave  key = localStorage.getItem("encryptionKey"); 

*/

