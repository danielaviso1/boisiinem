const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3400;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug');
});

//app.use('/', index);

app.listen(PORT, () => {
    console.log(`Server is running under port ${PORT}`);
});