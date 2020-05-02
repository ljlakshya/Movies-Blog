var express = require('express');
var bodyParser= require('body-parser');
var blog = express();
var control = require('./controllers/control');

blog.set('view engine', 'ejs');

blog.use('/assets',express.static('assets'));

control(blog);



blog.listen(3003);
