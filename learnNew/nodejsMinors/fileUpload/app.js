const express = require('express'),
	app = express(),
	multer = require('multer'),
	PORT = process.env.PORT || 8080;

const upload = multer({
	dest: 'uploads/', // This will save the file in directory named 'uploads'
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

// Note - It is important that file name matches the name attribute in HTML

app.post('/', upload.single('uploadFile'), (req, res) => {
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log(`Server running on Port ${PORT}`);
});
