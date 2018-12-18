const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UsersModels = require('../../models/usersModels');

class registerController extends Controller {
    constructor (req, res, next) {
        super(req, res, next)
    }
    /* Con este index, cargamos la vista register*/
    index() {
        this.res.render('register', {title: "Página de registro"});
    }
    /* Creamos API para el registro*/
    async register(){
        let user = UsersModels.build({
            user: this.req.body.username,
            pass: EncryptService.encryptPass(this.req.body.pass)
        });
        try {
            let result = await user.save();
            console.log(result);
        } catch (error) {

        }

    }

}

module.exports = registerController;