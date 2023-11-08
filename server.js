const express = require('express');
const cors = require('cors');
const app = express();
const port = 4500;

const sites_MapRoutes = require('./routes/sites_mapRoutes');
const sites_OcRoutes = require('./routes/sites_ocRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');
// Importe les autres routes ici

app.use(express.json());

app.use(cors());

app.use('/api/map_datas', sites_MapRoutes);
app.use('/api/oc_datas', sites_OcRoutes);

app.use('/api/pokemon', pokemonRoutes);

// Ici, on va plus tard ajouter les routes

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});