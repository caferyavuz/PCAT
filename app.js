const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override')
const photoControllers = require('./controllers/photoControllers')
const pageController = require('./controllers/pageController')

const app = express();
const port = process.env.PORT || 5000

// Mongodb connect
mongoose.connect('mongodb+srv://recepy:Cf.Sn1999@cluster0.916vajm.mongodb.net/pcay-db?retryWrites=true&w=majority').then(()=>{
  console.log("DB Connected")
}).catch(()=>{
  console.log(err)
})

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))

// ROUTES
app.get('/', photoControllers.getAllPhotos);
app.get('/photo/:id', photoControllers.getPhoto);
app.post('/photo', photoControllers.createPhoto);
app.put('/photo/:id', photoControllers.updatePhoto)
app.delete('/photo/:id', photoControllers.deletePhoto)

app.get('/add', pageController.getAddPage);
app.get('/about', pageController.getAboutPage);
app.get('/photo/edit/:id', pageController.getEditPage);


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
