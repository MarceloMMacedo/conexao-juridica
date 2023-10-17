import axios from "axios";
import { GENERATE_KEY } from "../constantes";
const forge = require('node-forge');
const CryptoJS = require('crypto-js');
const { pki } = forge;

export type dataExport = { uri: any, data: any };
//criptografar dados
const encryptWithPublicKey = (data: string, publicKeyBase64: string): any => {

    // Decodifique a chave pública de Base64
    const publicKeyBytes = forge.util.decode64(publicKeyBase64);

    // Use a chave pública em formato DER para criar uma chave pública
    const publicKey = pki.publicKeyFromAsn1(forge.asn1.fromDer(publicKeyBytes));

    // Dados que você deseja criptografar
    const plaintextData = data;

    // Converta os dados em um formato adequado (geralmente, em bytes)
    const dataBytes = forge.util.encodeUtf8(plaintextData);

    // Use a chave pública para criptografar os dados
    const encryptedData = publicKey.encrypt(dataBytes);

    // O resultado é uma matriz de bytes criptografados
    console.log('Dados criptografados:', forge.util.encode64(encryptedData));
    return forge.util.encode64(encryptedData);

};
const gerarPayload = async (data: any) => {
    //criptografar data com a chave publica
    const publicKey: any = await generateEncryptionPublicKey();
    const aesKey = generateEncryptionKeyAES() as string;

    const dados = JSON.stringify({ encryptedData: JSON.stringify(data), encryptedAesKey: aesKey });

    const encrypted = encryptWithPublicKey(dados, publicKey);

    return { encryptedData: encrypted.toString() };
};
//descriptografar payload
const decryptDataAes = (encryptedData: string) => {
    try {
        const encryptedTextBase64 = encryptedData; // A string criptografada em Base64 recebida do Spring Boot
        const keyBase64 = localStorage.getItem("aesKey"); // A chave AES que você gerou no Passo 1 (em Base64)

        const key = CryptoJS.enc.Base64.parse(keyBase64);

        // Decifre a string
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedTextBase64, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

        console.log('String descriptografada:', decryptedText);
        return decryptedText;
    } catch (error) {
        console.error("Erro na descriptografia:", error);
        return null;
    }


}
//gerar chave AES
export const generateEncryptionKeyAES = () => {
    const key = CryptoJS.lib.WordArray.random(16); // 32 bytes (256 bits)

    const keyBase64 = CryptoJS.enc.Base64.stringify(key);
    console.log("Chave AES gerada:", keyBase64);
    setEncryptionKeyLocalStorage(keyBase64);
    return keyBase64;
};
//armazenar chave AES localstorage
const setEncryptionKeyLocalStorage = (aesKey: string) => {
    localStorage.setItem("aesKey", aesKey);
};
//pegar primary key no backend usando axios
export async function generateEncryptionPublicKey() {
    try {
        const response = await axios.get(GENERATE_KEY);
        localStorage.setItem("publicKey", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw new Error("Failed to create data");
    }
};
export async function processData(data: dataExport) {
    const token = " getToken()";
    /* if (token !== null) {
         removeToken();
         throw new Error("Token is expired or invalid");
     }*/
    console.log('data:', data);
    const encryptedData = await gerarPayload(data.data);
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.post(data.uri, encryptedData, { headers });
    return JSON.parse(decryptDataAes(response.data));
}
