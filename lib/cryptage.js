const Cryptage = require('crypto-js')
module.exports = {

     encrypt : (str)=>{ 
        let crypted = Cryptage.AES.encrypt(str, 'passw124').toString();
        return crypted;
    },
     decrypt : (crypted)=>{ 
       let b = Cryptage.AES.decrypt(crypted, 'passw124')
       return (b.toString(Cryptage.enc.Utf8))
    }
}

