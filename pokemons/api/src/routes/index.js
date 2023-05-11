const { Router } = require('express');
const pokemonsRoute = require('../routes/pokemons');
const typesRoute = require('./Types.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonsRoute); //  /api/pokemons/
router.use('/types', typesRoute);   //   /api/types/
module.exports = router;
