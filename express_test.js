let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({extended: false}))
let port = 3000

ourApp.get('/', function(req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky today?</p>
      <input name="skycolor" autocomplete="off">
      <button>Submit</button>
    </form>
  `)
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
  res.send("Are you lost? There is nothing to see.")
})

ourApp.listen(port)
