const fs = require('fs');
const path = require('path');

exports.getsites_ocData = (req, res) => {
    fs.readFile(path.join(__dirname, '../datas/sites_ocDatas.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des données projets de OC');
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
};