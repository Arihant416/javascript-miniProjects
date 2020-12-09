const express = require('express'),
	nodeMailer = require('nodemailer'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 2020;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/sendmail', (req, res) => {
	let transporter = nodeMailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'arihantjain416@gmail.com',
			pass: '************************',
		},
	});
	let mailOptions = {
		from: 'arihantjain416@gmail.com',
		to: req.body.to, // This is the reciever's email address
		subject: req.body.subject,
		body: req.body.body,
		html: req.body.body,
	};
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			return console.log(err);
		} else {
			console.log(info);
			res.render('index');
		}
	});
});

app.listen(port, () => {
	console.log(`Server is listening on Port ${port}`);
});
