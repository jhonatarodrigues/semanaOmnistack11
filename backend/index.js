const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('aaaa');
});

app.listen(3333);