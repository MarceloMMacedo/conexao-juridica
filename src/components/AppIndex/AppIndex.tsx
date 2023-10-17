import React, { useState } from 'react';
import CryptoJS from "crypto-js";
import axios from 'axios';
import { dataExport, generateEncryptionKeyAES, generateEncryptionPublicKey, processData } from '../../core/action/serviceapi';
import { PROCESS_DATA } from '../../core/constantes';
import { wait } from '@testing-library/user-event/dist/utils';
const forge = require('node-forge');
const { pki, util } = forge;

export function AppIndex() {
  const generateAESKey = () => {
    generateEncryptionPublicKey().then(data => {
      console.log("publicKey:", data);
      setAesKey(data);
    });

  };
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [parsedBase64Key, setParsedBase64Key] = useState<any>("");
  const [aesKey, setAesKey] = useState<any>(""); // Chave AES gerada

  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');
  const [dataToEncrypt, setDataToEncrypt] = useState('Hello, World!');

  const [publicKeyBase64, setPublicKeyBase64] = useState('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmFF7IarQQNlJfc0pxlQJ8ypIS67STIAdInpRVux/aIE82zbPSpyrEPRbqCJW67KAaIailfo8oLZ0QX5ZYULZhCbsKSHLW3A/Qw9+TSH0mWGUcMkdrey57vUm8TRmBsdrIrKfAthlS9oPZDa2X4NQsuA/ar23JZaBCj77lL47nhPOGLeoIIcSNn/nh0evxUiayKL0eY3zXCDwf2z3y8GUygd5DIGea9vz3L9HVGJynHc0NN7exYCNYObJMS3jnIa/5L9PgQMQB/PwwMvPQQgpKH0ylBenZkun+uaRVm6fu/rXbtvdq57mWZTV6K53qzUdnQYXJvbMVMfjfDevQ1kVlwIDAQAB');


  const jsonString: string = `{"chave1": "valor1",
  "chave2": "valor2",
  "chave3": "valor3",
  "chave4": "valor4",
  "chave5": "valor5",
  "chave6": "valor6",
  "chave7": "valor7",
  "chave8": "valor8",
  "chave9": "valor9",
  "chave10": "valor10",
  "chave11": "valor11",
  "chave12": "valor12",
  "chave13": "valor13",
  "chave14": "valor14",
  "chave15": "valor15",
  "chave16": "valor16",
  "chave17": "valor17",
  "chave18": "valor18",
  "chave19": "valor19",
  "chave20": "valor20",
  "chave21": "valor21",
  "chave22": "valor22",
  "chave23": "valor23",
  "chave24": "valor24",
  "chave25": "valor25",
  "chave26": "valor26",
  "chave27": "valor27",
  "chave28": "valor28",
  "chave29": "valor29",
  "chave30": "valor30",
  "chave31": "valor31",
  "chave32": "valor32",
  "chave33": "valor33",
  "chave34": "valor34"   
}`;


  const encryptMessage = async () => {
    const jsonString1 = JSON.parse(jsonString);
    console.log("jsonObject:", jsonString1);
    const data: dataExport = { uri: PROCESS_DATA, data: (jsonString1) }
    await processData(data).then(data => {
      setEncryptedMessage(JSON.stringify(data));
    })
  };

  const decryptMessage = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedMessage, aesKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedMessage(decrypted);
    } catch (error) {
      console.error("Erro na descriptografia", error);
    }
  };

  return (
    <div>
      <h2>Exemplo de Criptografia e Descriptografia no Frontend</h2>
      <p>Chave AES: {aesKey}</p>
      <p>Chave Base64: {parsedBase64Key}</p>
      <div>
        <button onClick={generateAESKey}>Gerar Chave AES</button>
      </div>
      <div>
        <label>Mensagem: </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <p> {encryptedMessage}  </p>
      <div>
        <button onClick={encryptMessage}>Criptografar</button>
      </div>
      <div>
        <label>Mensagem Criptografada: </label>
        <input type="text" value={encryptedMessage} readOnly />
      </div>
      <div>
        <button onClick={decryptMessage}>Descriptografar</button>
      </div>
      <div>
        <label>Mensagem Descriptografada: </label>
        <input type="text" value={decryptedMessage} readOnly />
      </div>
    </div>
  );
}

