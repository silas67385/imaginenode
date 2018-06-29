var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const nodemailer = require('nodemailer');
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

app.get('/', function(req, res){
	res.render('index');
});

app.get('/aboutus', function(req, res){
	res.render('aboutus');
});

app.get('/portfolio', function(req, res){
	res.render('portfolio');
});

app.get('/startaproject', function(req, res){
	res.render('startaproject');
});

app.post('/startaproject', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('formsubmitted', {data: req.body});
});

app.get('/contact', function(req, res){
	res.render('contact');
});



app.listen(port);