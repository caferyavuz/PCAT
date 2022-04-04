const express = require('express');
const ejs = require('ejs')
const path = require('path');

const app = express();
const port = 3000;

//TEMPLATE ENGINE
app.set("view engine", "ejs")

//MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index')
});

app.get('/add', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('add')
  });

  app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('about')
  });

  app.get('*', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('index')
  });

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
