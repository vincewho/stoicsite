let express = require("express")
let ourApp = express()
let fs = require("fs")
ourApp.use(express.urlencoded({extended: false}))
let port = 3000

ourApp.get('/', function(req, res) {
  fs.readFile('index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

ourApp.post('/answer', function(req, res){
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


ourApp.get('/answer', function(req, res){
  res.send("Are you lost? Get out. There is nothing to see here.")
})

ourApp.listen(port)
