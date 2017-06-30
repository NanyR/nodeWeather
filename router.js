const weather= require('./weather.js')


const home=(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(req.url === '/'){
      weather.get()
    res.write("done")
    res.end()
  }
}


module.exports.home=home
