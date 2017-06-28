const weather= require('./weather.js')


const home=(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(req.url === '/'){
      console.log('home')
      weather.get()
    res.write("done")
    res.end()
  }
}

// const user=(req, res)=>{
//
// }


module.exports.home=home
