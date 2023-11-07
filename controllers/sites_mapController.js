const fs = require('fs');
const path = require('path');

exports.getsites_mapData = (req, res) => {
    fs.readFile(path.join(__dirname, '../datas/sites_mapDatas.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des données projets de MAP');
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
};