const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.send('aaaa');
});

app.listen(3333);