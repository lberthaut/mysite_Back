const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Route pour obtenir toutes les générations de Pokémon
router.get('/generation', pokemonController.getGenerationsPokemon);

// Route pour obtenir les Pokémon d'une génération spécifique
router.get('/generation/:generationId', pokemonController.getPokemonByGeneration);

// Route pour obtenir tous les types de Pokémon
router.get('/types', pokemonController.getPokemonTypes);

// Route pour obtenir les informations d'un Pokémon par son ID
// Cette route doit être définie en dernier pour éviter les conflits avec les autres
router.get('/:pokemonId', pokemonController.getPokemonById);

module.exports = router;
