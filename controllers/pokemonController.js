const axios = require('axios'); // Assure-toi d'avoir installé axios avec npm ou yarn

// Fonction pour récupérer les types de Pokémon
const getPokemonTypes = async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Fonction pour récupérer les informations d'un Pokémon par son ID
const getPokemonById = async (req, res) => {
    try {
        const { pokemonId } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getGenerationsPokemon = async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/generation`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPokemonByGeneration = async (req, res) => {
    try {
        const { generationId } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generationId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Exporte les fonctions pour les utiliser dans tes routes
module.exports = {
    getPokemonTypes,
    getPokemonById,
    getGenerationsPokemon,
    getPokemonByGeneration
};
