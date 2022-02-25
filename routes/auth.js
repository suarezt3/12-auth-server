const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();


//!CREAR UN NUEVO USUARIO
router.post('/new', [
    //?validar campos, los middleware se ejecutan en secuencia
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
], crearUsuario);


//!LOGIN DE USUARIO
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
], loginUsuario)



//!VALIDAR Y REVALIDAR TOKEN
router.get('/renew', revalidarToken)


module.exports = router