const CryptoJS = require('crypto-js');  //引用AES源码js

var key = CryptoJS.enc.Utf8.parse("123456");
var iv = CryptoJS.enc.Utf8.parse("T(123456");

//解密方法
function Decrypt(word) {

  let encryptedHexStr = CryptoJS.enc.Base64.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);

  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();

}

//加密方法
function Encrypt(word){
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  let encryptedHexStr = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  return encryptedHexStr.toString();
  // return encrypted.ciphertext.toString().toUpperCase();
}

exports.Decrypt = Decrypt;
exports.Encrypt = Encrypt;
