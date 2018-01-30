
const express = require('express')
const api = require('../api/api')

const start = () => {
    return new Promise((resolve, reject) => {
        console.log('Starting server...');
        console.log('Importing Node Express Module...');
        const app = express();
        api(app);
        const server = app.listen(8081, () => resolve(resolve));
    })
    .then(
        result => console.log('Server started successfully. Listening on port: 8081'),
        error => console.log('Failed to start server.')

    )
}

module.exports = Object.assign({}, {start})
