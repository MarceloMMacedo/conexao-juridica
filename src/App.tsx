import { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import React from 'react';

export function App() {
  const [secretKey, setSecretKey] = useState('');
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');
  const [processedText, setProcessedText] = useState('');
  const [plaintext, setPlaintext] = useState('');


  useEffect(() => {
    async function fetchKey() {
      const response = await axios.get("http://localhost:8080/api/crypto/generateKey");
      console.log('chave:', response.data);

      setSecretKey(response.data);

    }
    fetchKey();
  }, []);

  async function encryptAndSendData() {
    const data = plaintext;
    const encryptedData1 = CryptoJS.AES.encrypt(
      plaintext, secretKey
    ).toString();
    setSecretKey('');
    const parsedBase64Key = CryptoJS.enc.Base64.parse(secretKey);
    console.log({ encryptedData: encryptedData1 });
    const response = await axios.post(`http://localhost:8080/api/crypto/processData/${parsedBase64Key}`,
      encryptedData1);
    console.log(response.data);
    console.log(`http://localhost:8080/api/crypto/processData/${secretKey}`);

    setProcessedText(response.data);

    const decryptedData = CryptoJS.AES.decrypt(response.data, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    console.log('decryptedData:', decryptedData);
  }

  return (
    <>
      <div>
        <h1>Exemplo de criptografia e descriptografia com AES</h1>
        <p>Chave secreta: {secretKey}</p>
        <input
          type="text"
          placeholder="Texto para criptografar"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
        />
        <p>Dados criptografados: {encryptedData}</p>
        <p>Dados Processados: {processedText}</p>
        <p>Dados Descriptografados: {processedText}</p>
        <button onClick={() => encryptAndSendData()}>
          Criptografar e enviar dados
        </button>
        {/*  <button onClick={() => this.receiveAndDecryptData()}>
                Receber e descriptografar dados
              </button> */}
      </div>
    </>
    // <div>
    //   <h1>Exemplo de Criptografia 3DES</h1>
    //   <div>Chave: {key}</div>
    //   <input
    //     type="text"
    //     placeholder="Texto para criptografar"
    //     value={plaintext}
    //     onChange={(e) => setPlaintext(e.target.value)}
    //   />
    //   <button onClick={encryptData}>Criptografar</button>
    //   <div>Texto Criptografado: {encryptedText}</div>
    //   <button onClick={processData}>Processar</button>
    //   <div>Texto Processado: {processedText}</div>
    //   <button onClick={decryptData}>Descriptografar</button>
    // </div>
  );
}



export default App;
