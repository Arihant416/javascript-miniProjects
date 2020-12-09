const express = require('express'),
	nodeMailer = require('nodemailer'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Server is listening on Port ${port}`);
});
