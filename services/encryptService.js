const Bcrypt = require('bcrypt');

class encryptService {
    static encryptPass(pass) {
        return Bcrypt.hash.Sync(pass, 10);
    }
}

module.exports = encryptService;