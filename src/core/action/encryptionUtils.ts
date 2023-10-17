import axios from "axios";
import CryptoJS from "crypto-js";

export let encryptionKey: string | null = null; // Global variable to store the encryption key

export const setEncryptionKey = async (): Promise<void> => {
  try {
    const response = await axios.get("/api/encryption/key");
    encryptionKey = response.data.key;
  } catch (error) {
    console.error("Error setting encryption key:", error);
    throw new Error("Failed to set encryption key");
  }
};

export const encryptData = async (data: string): Promise<string> => {
  await setEncryptionKey();
  if (!encryptionKey) {
    throw new Error("Encryption key not set");
  }

  try {
    const encryptedData = CryptoJS.AES.encrypt(data, encryptionKey).toString();
    return encryptedData;
  } catch (error) {
    console.error("Error encrypting data:", error);
    throw new Error("Failed to encrypt data");
  } finally {
    encryptionKey = null;
  }
};

export const decryptData = (encryptedData: string): string => {
  if (!encryptionKey) {
    throw new Error("Encryption key not set");
  }

  try {
    const parsedBase64Key = CryptoJS.enc.Base64.parse(encryptionKey);

    const decryptedData = CryptoJS.AES.decrypt(encryptedData, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  } catch (error) {
    console.error("Error decrypting data:", error);
    throw new Error("Failed to decrypt data");
  } finally {
    encryptionKey = null;
  }
};

export const eraseEncryptionKey = (): void => {
  encryptionKey = null;
};
