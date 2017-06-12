const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(volleyball);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.get('/', function(req, res){
	res.status(200).render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, () => console.log('Server running on port 3000'));
