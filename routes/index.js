var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res,next) => {
    res.render('index');
});

/* ROUTER PARA LLAMAR A LA VISTA REGISTER...Cuando ponga en el navegador localhost:3000/register, cargara la vista register y pondra de titulo de la pagina Registro*/
router.get('/register', (req, res, next) => {
    res.render('register', {title: "Página de registro"});
});
module.exports = router;
