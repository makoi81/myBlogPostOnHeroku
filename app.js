var Sequelize = require('sequelize');
var express = require('express');
var databaseURL = process.env.DATABASE_URL || 'sqlite://db';
console.log(databaseURL);
var sequelize = new Sequelize(databaseURL);
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

// set of views engine to handlebar. ejs for ejs
app.set('view engine', 'ejs');

var Post = sequelize.define('Post', {
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    dateTime:Sequelize.DATE
});

//route to the home page
app.get('/', function(req, res){
	Post.findAll().then(function(posts) {
		res.render('index', { blogPost: posts} );
	});
});

app.get('/Post.json',function(req, res){
	Post.findAll().then(function(posts){
		res.json(posts);
	});
});

// route to post by the form
app.post('/create', function(req, res){
    var d = new Date();
	var NewEntre = {}
	NewEntre.title=req.body.title;
	NewEntre.content=req.body.content;
	NewEntre.dateTime = d;

	Post.create(NewEntre).then(function(post){
		res.redirect('/');
	});
});

sequelize.sync().then(function(){
	console.log("synchronazed");
	app.listen(port, function(){
		console.log('listen app on the port ' + port );
	});
});
