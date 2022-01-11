let http = require("http")
let port = 3000

let ourApp = http.createServer(function(req, res){
  if (req.url == "/"){
    res.end("Hello, welcome to the homepage")
  } else if (req.url == "/about"){
    res.end("You reached out about page")
  } else {
    res.end("We cannot find the page you're looking for.")
  }
})

ourApp.listen(port)
