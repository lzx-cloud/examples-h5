const {Decrypt,Encrypt} = require('./tools');

const en = Encrypt("20211109134330");

console.dir("加密后：" + en);

const de = Decrypt('TATKPwbeKuoV/SqsYb0cfw==');
console.dir("解密后：" + de);

console.dir("---------");
console.dir(encodeURIComponent ("N8c15TVp+CIAQ5I3IHZQZw=="));
console.dir(decodeURIComponent("N8c15TVp%2BCIAQ5I3IHZQZw%3D%3D"));

console.dir("---------");
console.dir(encodeURIComponent ("TATKPwbeKuoV/SqsYb0cfw=="));
console.dir(decodeURIComponent("TATKPwbeKuoV%2FSqsYb0cfw%3D%3D"));