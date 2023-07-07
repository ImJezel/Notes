const express = require ('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const tasksRoutes = require('./routes/tasks');

const app= express();

const PORT = process.env.PORT || 1000;

app.listen(PORT, ()=>{
    console.log("Se esta Escuchando en el puerto", PORT)
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
    host: 'db4free.net',
    user: 'im_jezelxx',
    password: 'jezel2017',
    port: 3306,
    database: 'my__notes',

},'single'));



app.get('/', (req,res) => {
    res.render('home');
});

app.use(express.static('public'));


app.use('/', tasksRoutes)