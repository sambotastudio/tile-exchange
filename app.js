var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers app'
    });
})

app.listen(3000, function(){
    console.log('server stated on port: 3000');
})