const express = require('express');
const routes = require('./routes/routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', routes);

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;
