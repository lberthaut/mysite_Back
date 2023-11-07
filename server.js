const express = require('express');
const cors = require('cors');
const app = express();
const port = 4500;

const sites_MapRoutes = require('./routes/sites_mapRoutes');
const sites_OcRoutes = require('./routes/sites_ocRoutes');
// Importe les autres routes ici

app.use(express.json());

app.use(cors());

app.use('/api/map_datas', sites_MapRoutes);
app.use('/api/oc_datas', sites_OcRoutes);

// Ici, on va plus tard ajouter les routes

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});