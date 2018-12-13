const Controller = require('../controller');

class registerController extends Controller {
    constructor (req, res, next) {
        super(req, res, next)
    }
    /* Con este index, cargamos la vista register*/
    index() {
        this.res.render('register', {title: "Página de registro"});
    }
    /* Creamos API para el registro*/
    register(){
        console.log(JSON.stringify(this.req.body));
    }
}

module.exports = registerController;