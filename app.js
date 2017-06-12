const express = require('express');
const app = express();
const volleyball = require('volleyball');

app.use(volleyball);

app.get('/', function(req, res){
	res.status(200).send('You reached homepage!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
