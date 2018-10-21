import * as CryptoJS from 'crypto-js';

let AuthTokenKey = "asdfafgsfgsgfuhf"; //AES密钥
let AuthTokenIv = 'ccc'; //AES向量

/*AES加密*/
export function Encrypt(data) {
    let dataStr = JSON.stringify(data);
    let encrypted = CryptoJS.AES.encrypt(dataStr, CryptoJS.enc.Latin1.parse(AuthTokenKey), {
        iv: CryptoJS.enc.Latin1.parse(AuthTokenIv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}