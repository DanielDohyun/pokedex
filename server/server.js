const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');
const cors = require('cors');

app.use(cors());

const routes = router.get('/', (req, res) => {
    const url = 'http://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            res.status(400).send('unable to get pokemon data');
        } else {
            res.status(200).json(body);
        }
    })

});

app.use('/', routes);

app.listen(5000, () => {
    console.log('server listening on 5000');
});