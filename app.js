const express = require('express');
const morgan = require('morgan');
const replaceTemplate = require('./modules/replaceTemplate');

const app = express();

// 1) MIDDLEWARES: stands between req and res
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTING
app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});

app.get('/library/', (req, res) => {
    res.sendFile('./public/index.html');
});

app.get('/library/:id', (req, res) => {
    // const card = { name: 'ジャンケン', content: 'Good Game!', url: 'path' };
    // const replacedCardHtml = replaceTemplate(
    //     './public/template-card.html',
    //     card
    // );

    console.log('./public/template-card.html');

    res.sendFile('./public/template-card.html');
});

module.exports = app;
