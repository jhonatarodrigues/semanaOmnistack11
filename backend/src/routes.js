const express = require('express');


const routes = express.router();


routes.post('/ongs', (request, response) => {
    const data = request.params;

    console.log(data);

    return response.send('aaaa');
});


module.exports = routes;