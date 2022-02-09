var express = require("express")
var myApp = express()
var fs = require("fs")
myApp.use(express.urlencoded({extended: false}))
var port = 3000

myApp.get('/', function(req, res) {
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

myApp.get('/:id', function (req, res){
  res.send(`This is page ${req.params.id}`)
})



myApp.post('/answer', function(req, res){
  if (req.body.skycolor.toUpperCase() == "BLUE"){
    res.send(`
    <p>Congrats, that's the correct answer!!</p>
    <a href="/">Back to home</a>
    `)
  } else {    
    res.send(`
  <p>Wrong!</p>
  <a href="/">Back to home</a>
  `)

  }
})


myApp.get('/answer', function(req, res){
  res.send("Are you lost? Get out. There is nothing to see here.")
})

myApp.listen(port)
