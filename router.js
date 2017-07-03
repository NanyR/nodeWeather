const weather= require('./weather.js')
const key= require('./api.json')
const request = require('request')
const requestProm = require('request-promise');

const home=(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(req.url === '/'){
      var weather;
      requestProm('http://ipinfo.io')
      .then((data)=> {
        const info=JSON.parse(data)
        return info
      })
      .then((data)=>{request(`http://api.wunderground.com/api/${key.key}/conditions/q/${data.postal}.json`, (err, response, body)=>{
        if(err){
          console.error(err)
        }
        else if (response.statusCode!== 200) {
          console.error("Error with the request")
        }
        else{
          console.log(typeof body)
          res.write(body)
          res.end()
        }
        })
      })
  }
}


module.exports.home=home
