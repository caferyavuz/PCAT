const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs')
const path = require('path');

const Photo = require('./models/Photo')

const app = express();
const port = 3000;

// Mongodb connect
mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGINE
app.set("view engine", "ejs")



//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', async(req, res) => {
  const photos = await Photo.find()
  res.render('index',{
    photos:photos
  })
});

app.get('/photo/:id', async(req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('photo',{
    photo:photo
  })
});

app.get('/add', (req, res) => {
    res.render('add')
  });

  app.get('/about', (req, res) => {
    res.render('about')
  });

  app.get('*', async(req, res) => {
    const photos = await Photo.find()
    res.render('index',{
      photos:photos
    })
  });

  app.post('/photos', async (req, res) => {
    await Photo.create(req.body)
    res.redirect('/index')
  });

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
