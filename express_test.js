let express = require("express")
let ourApp = express()
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
ourApp.listen(port)
