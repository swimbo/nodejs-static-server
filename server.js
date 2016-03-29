//Express Scaffold

// Requires
var express = require ('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Create an Express app object
var app = express();

app.use( morgan('dev'))
app.use( bodyParser.urlencoded ( {extended: true  })) // this looks for url encoded data and automatically parses it into an object.
app.use( bodyParser.json() ) // Looks for stringified JSON data and automatically parses it into an object

// Body parser is a module that helps us deal with data
// Mostly concerned with RECEIVING data
// var myJSONData = '{"username" : "XxX_Sephiroth_XxX", "password" : "12345"}'
// JSON.parse() =

app.use( express.static(__dirname + '/public')) // Used to serve CLIENT SIDE files (html, css, js, img)

//Index/Home route => '/'  this is an explicit route.
app.get('/funtext.txt', function (req, res){
  res.send('You shouldn\'t see me')
})

// Index / Home route => '/'
app.get('/', function(req, res){
  console.log('howdy partner', req.query) // get requests use req.query to pull information out of a query string and then will log it as an object. e.g. localhost: 3000? name=bill --> "howdy partner" '{name: bill}'

// Every request MUST send a response
// res.send('Hello there')
res.sendFile('home.html', {root : './public/html'})
// res.render // probably won't use too often
// res.json // probably won't use too often
})

// localhost: 3000/about
app.get('/about', function(req,res){
  res.send('I like long walks on the beach')
})

app.post('/createuser', function (req, res){
  console.log('Data! ', req body) // post request use req body that is highly dependendent on the browser in terms of the number of characters it can hold.
// Listen for connections
  res.redirect('/users/' + req.body.username + '/' + req.body.password)
  // /users/tony/12345
})
// parameterized / Dynamic route
// e.g. linkedin.com/profile/rob anything that looks like /profile/username do the same thing
app.get ('/users/:username/:password', function(req,res){
    console.log(req.params);
    res.send('<marquee>Welcome Back, ' + req.params.username + '!</marquee>')
})


app.listen(3000, function(){
  console.log('We good on port 3000');

})
